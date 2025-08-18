"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import BeritaList from "@/components/BeritaList";

export default function NFTLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0e1530] to-[#071123] text-white">
      {/* Navbar */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-md p-1 bg-gradient-to-r from-purple-600 to-blue-400">
            <div className="bg-[#071022] p-2 rounded">IPPET</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <input
              className="bg-[#0b1220] border border-[#1f2a44] px-3 py-2 rounded-lg text-sm placeholder:text-gray-400"
              placeholder="Search"
            />
          </div>
          <button
            onClick={() => window.open("/Login")}
            className="bg-gradient-to-r from-purple-500 to-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            Login
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight">
              Welcome to IPPET
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 max-w-xl">
              Selamat datang di website resmi IPPET (Ikatan Pemuda Pemudi
              Tempel) Kami hadir dengan semangat kebersamaan dan kepedulian
              sosial, untuk menjadi wadah pemuda dalam berkarya, berinovasi,
              serta berkontribusi bagi masyarakat dan lingkungan sekitar.Website
              ini dibuat sebagai media informasi, komunikasi, dan dokumentasi
              kegiatan Karang Taruna. Semoga dapat bermanfaat bagi anggota,
              masyarakat, dan siapa pun yang ingin mengenal lebih dekat kegiatan
              serta program kami.
            </motion.p>

            <div className="flex gap-4 items-center">
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/karangtaruna.tempel?igsh=b2hpMWtkYWlsbTh1",
                    "_blank"
                  )
                }
                className="px-5 py-3 rounded-full bg-gradient-to-r from-[#6a5cff] to-[#3dd1ff] font-semibold">
                Intagram
              </button>
              <button className="px-5 py-3 rounded-full border border-[#2b3650] text-white">
                Create
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md bg-gradient-to-br from-[#1a1630] via-[#2a1f44] to-[#241a3a] rounded-2xl p-4 shadow-2xl border border-[#2d2a40]">
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src="/ippetlogo.jpg"
                  alt="feature"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* anggita */}
        <section className="py-10">
          <h3 className="text-xl font-bold mb-4">Anggota Kelompok</h3>
          <div className="flex overflow-x-auto gap-3 py-2">
            {[
              { nama: "Budi Santoso", peran: "Ketua" },
              { nama: "Siti Aminah", peran: "Wakil Ketua" },
              { nama: "Andi Wijaya", peran: "Sekretaris" },
              { nama: "Dewi Lestari", peran: "Bendahara" },
              { nama: "Rizky Pratama", peran: "Anggota" },
              { nama: "Nurul Aisyah", peran: "Anggota" },
              { nama: "Fajar Nugroho", peran: "Anggota" },
              { nama: "Maya Putri", peran: "Anggota" },
            ].map((anggota, i) => (
              <div
                key={i}
                className="min-w-[200px] bg-[#081229] border border-[#20304d] rounded-xl p-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7b61ff] to-[#3dd1ff]" />
                <div>
                  <div className="font-semibold">{anggota.nama}</div>
                  <div className="text-xs text-gray-400">{anggota.peran}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Artworks grid */}
        <section className="py-10">
          <BeritaList />
        </section>

        {/* CTA */}
        <section className="py-12 flex justify-center">
          <div className="w-full max-w-4xl bg-gradient-to-r from-[#4a2d9c] to-[#2bb7ff] rounded-full p-6 shadow-2xl">
            <div className="text-center text-lg font-semibold">
              Join Us to Create Sell and Collect NFTs Digital Art
            </div>
            <div className="mt-4 text-center">
              <button className="px-6 py-3 rounded-full bg-white text-black font-semibold">
                Join Community
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="font-bold text-xl mb-2">IPPET</div>
              <p className="text-gray-400">
                The World&apos;s Largest Digital Marketplace for crypto
                collections and non fungible tokens (NFTs) buy, sell and
                discover exclusive digital assets
              </p>
            </div>
            <div>
              <div className="font-semibold mb-2">Explore</div>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>Art</li>
                <li>Photography</li>
                <li>Music</li>
                <li>Games</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">My Account</div>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>My Profile</li>
                <li>My Collections</li>
                <li>My Favorites</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
