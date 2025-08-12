import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

interface Props {
  params: { id: string };
}

export default async function BeritaDetail({ params }: Props) {
  const { data, error } = await supabase
    .from("berita")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !data) {
    return (
      <p className="text-center text-gray-500 mt-10">Berita tidak ditemukan.</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{data.title || data.judul}</h1>
      <p className="text-gray-500 text-sm mb-6">
        Dipublikasikan pada:{" "}
        {new Date(data.created_at).toLocaleDateString("id-ID")}
      </p>
      <div className="relative w-full h-96 mb-6">
        <Image
          src={data.image_url}
          alt={data.title || data.judul}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose max-w-none">
        <p>{data.content || data.description}</p>
      </div>
    </div>
  );
}
