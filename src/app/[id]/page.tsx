"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";

interface Berita {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

export default function DetailBerita({ params }: { params: { id: string } }) {
  const [berita, setBerita] = useState<Berita | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      fetchBerita(params.id);
    }
  }, [params?.id]);

  const fetchBerita = async (id: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("berita")
      .select("id, title, description, image_url")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Gagal memuat detail berita:", error.message);
    } else {
      setBerita(data);
    }
    setLoading(false);
  };

  if (loading) {
    return <p className="text-center text-gray-500 py-10">Memuat berita...</p>;
  }

  if (!berita) {
    return (
      <p className="text-center text-gray-500 py-10">Berita tidak ditemukan.</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm mb-4 inline-block">
        ← Kembali ke daftar berita
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {berita.title}
      </h1>

      <div className="relative w-full h-80 mb-6">
        <Image
          src={berita.image_url}
          alt={berita.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {berita.description}
      </p>
    </div>
  );
}
