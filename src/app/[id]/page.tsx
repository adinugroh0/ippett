// src/app/[id]/page.tsx
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

// Definisi tipe untuk data berita
interface Berita {
  id: string;
  title: string;
  description: string;
  image_url: string;
  content: string;
}

// Definisi tipe untuk props halaman ini
interface PageProps {
  params: {
    id: string;
  };
}

// Inisialisasi Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Page({ params }: PageProps) {
  const { id } = params;

  // Ambil data berita berdasarkan ID
  const { data, error } = await supabase
    .from("berita")
    .select("*")
    .eq("id", id)
    .single();

  // Jika error atau data null
  if (error || !data) {
    return (
      <div className="p-8 text-center text-red-600">
        <h1>Berita tidak ditemukan</h1>
        {error && <p>{error.message}</p>}
      </div>
    );
  }

  // Paksa casting ke Berita (TypeScript narrowing)
  const berita = data as Berita;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{berita.title}</h1>

      {berita.image_url && (
        <div className="mb-4 relative w-full h-64">
          <Image
            src={berita.image_url}
            alt={berita.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <p className="text-gray-600 mb-6">{berita.description}</p>

      <article className="prose max-w-none">{berita.content}</article>
    </main>
  );
}
