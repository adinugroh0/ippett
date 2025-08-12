"use client";

import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Upload: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!title || !description || !file) {
      alert("Semua field harus diisi!");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Upload gambar ke Supabase Storage
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("berita-images") // pastikan bucket ini ada di Supabase
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2️⃣ Ambil public URL gambar
      const { data: publicUrlData } = supabase.storage
        .from("berita-images")
        .getPublicUrl(fileName);

      const imageUrl = publicUrlData?.publicUrl;
      if (!imageUrl) throw new Error("Gagal mendapatkan URL gambar");

      // 3️⃣ Simpan data berita ke tabel
      const { error: insertError } = await supabase.from("berita").insert([
        {
          title,
          description,
          image_url: imageUrl,
        },
      ]);

      if (insertError) throw insertError;

      alert("Berita berhasil diunggah!");
      setTitle("");
      setDescription("");
      setFile(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error.message);
      alert("Gagal upload berita: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Upload Berita</h2>

      <input
        type="text"
        placeholder="Judul Berita"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Keterangan Berita"
        className="border p-2 w-full mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}></textarea>

      <input
        type="file"
        accept="image/*"
        className="mb-2"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        {loading ? "Mengunggah..." : "Upload Berita"}
      </button>
    </div>
  );
};

export default Upload;
