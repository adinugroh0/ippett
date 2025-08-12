"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";

const BeritaList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [beritaList, setBeritaList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("berita")
      .select("*") // ambil semua kolom dulu
      .order("id", { ascending: false });

    if (error) {
      console.error("Gagal memuat berita:", error.message);
    } else {
      setBeritaList(data || []);
    }
    setLoading(false);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Memuat berita...</p>;
  }

  if (beritaList.length === 0) {
    return <p className="text-center text-gray-500">Belum ada berita.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Berita Terbaru</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritaList.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Link href={`/${item.id}`}>
                <Image
                  src={item.image_url}
                  alt={item.title || item.judul || "Tanpa Judul"}
                  width={500}
                  height={300}
                />
              </Link>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {item.title || item.judul || "Tanpa Judul"}
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                {item.description || "Tidak ada deskripsi."}
              </p>
              <Link
                href={`/${item.id}`}
                className="text-blue-600 hover:underline text-sm font-medium">
                Baca selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaList;
