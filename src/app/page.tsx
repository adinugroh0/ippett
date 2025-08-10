"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function NFTLanding() {
  const heroImg = "https://assets.aceternity.com/logo-dark.png"; // replace with featured artwork
  const cardImgs = [
    "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    "https://assets.aceternity.com/market/1.png",
    "https://assets.aceternity.com/market/2.png",
    "https://assets.aceternity.com/market/3.png",
    "https://assets.aceternity.com/market/4.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0e1530] to-[#071123] text-white">
      {/* Navbar */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-md p-1 bg-gradient-to-r from-purple-600 to-blue-400">
            <div className="bg-[#071022] p-2 rounded">IPPET</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm items-center">
            <a className="hover:opacity-80">Home</a>
            <a className="hover:opacity-80">Explore</a>
            <a className="hover:opacity-80">Marketplace</a>
            <a className="hover:opacity-80">Artists</a>
            <a className="hover:opacity-80">News</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <input
              className="bg-[#0b1220] border border-[#1f2a44] px-3 py-2 rounded-lg text-sm placeholder:text-gray-400"
              placeholder="Search"
            />
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            Register
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
              Discover, Collect and Sell Dope Art and NFTs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 max-w-xl">
              The worl&apos;s largest digital marketplace for crypto collections
              and non fungible tokens (NFTs)
            </motion.p>

            <div className="flex gap-4 items-center">
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#6a5cff] to-[#3dd1ff] font-semibold">
                Discover
              </button>
              <button className="px-5 py-3 rounded-full border border-[#2b3650] text-white">
                Create
              </button>
            </div>

            <div className="mt-6 flex gap-4 items-center">
              <div className="bg-gradient-to-r from-[#7b61ff] to-[#3dd1ff] rounded-xl px-4 py-3">
                <div className="text-sm">27k+</div>
                <div className="text-xs text-gray-200">Art works</div>
              </div>
              <div className="bg-[#081228] rounded-xl px-4 py-3 border border-[#1f2a44]">
                <div className="text-sm">20k+</div>
                <div className="text-xs text-gray-200">Auctions</div>
              </div>
              <div className="bg-[#081228] rounded-xl px-4 py-3 border border-[#1f2a44]">
                <div className="text-sm">7k+</div>
                <div className="text-xs text-gray-200">Artists</div>
              </div>
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
                  src={heroImg}
                  alt="feature"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="mt-3 flex justify-between items-center text-sm">
                <div>Ending in: 1h 20m 30s</div>
                <div className="text-right">
                  <div className="text-xs text-gray-300">Highest Bid</div>
                  <div className="font-bold">32.4 ETH</div>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="flex-1 px-4 py-2 rounded-full bg-[#111428] border border-[#2b3350]">
                  Place a Bid
                </button>
                <button className="flex-1 px-4 py-2 rounded-full bg-gradient-to-r from-[#7b61ff] to-[#3dd1ff]">
                  Purchase
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners bar */}
        <div className="my-8 py-4 bg-gradient-to-r from-[#0b0f1a]/40 to-transparent rounded-lg">
          <div className="flex items-center justify-around gap-6">
            <Image
              src="https://assets.aceternity.com/logo-dark.png"
              alt="partner"
              width={120}
              height={28}
            />
            <Image
              src="https://assets.aceternity.com/logo-dark.png"
              alt="partner"
              width={120}
              height={28}
            />
            <Image
              src="https://assets.aceternity.com/logo-dark.png"
              alt="partner"
              width={120}
              height={28}
            />
            <Image
              src="https://assets.aceternity.com/logo-dark.png"
              alt="partner"
              width={120}
              height={28}
            />
          </div>
        </div>

        {/* Popular this week */}
        <section className="py-10">
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular this week
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {cardImgs.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="rounded-xl overflow-hidden bg-gradient-to-br from-[#141025] to-[#1b1630] p-1 border border-[#2b2550]">
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`card-${i}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-3">
                  <div className="font-semibold">Digital Decade</div>
                  <div className="text-xs text-gray-400">
                    by Anthony gargasz
                  </div>
                  <div className="mt-2 flex justify-between items-center text-sm">
                    <div className="text-[#7b61ff] font-bold">2.45 ETH</div>
                    <div className="text-gray-400">50k</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Sellers */}
        <section className="py-10">
          <h3 className="text-xl font-bold mb-4">Top Sellers</h3>
          <div className="flex overflow-x-auto gap-3 py-2">
            {new Array(10).fill(0).map((_, i) => (
              <div
                key={i}
                className="min-w-[180px] bg-[#081229] border border-[#20304d] rounded-xl p-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7b61ff] to-[#3dd1ff]" />
                <div>
                  <div className="font-semibold">Artist {i + 1}</div>
                  <div className="text-xs text-gray-400">
                    {(200 + i * 5).toFixed(1)} Eth
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Artworks grid */}
        <section className="py-10">
          <h3 className="text-2xl font-bold text-center mb-6">
            Explore Artworks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Abstract",
              "3D Art",
              "Modern Art",
              "Game",
              "Graffiti",
              "Watercolor",
            ].map((title, idx) => (
              <div
                key={idx}
                className="rounded-xl p-4 bg-gradient-to-br from-[#0b0f1a] to-[#0f1530] border border-[#24223a]">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 h-32 rounded-lg overflow-hidden relative">
                    <Image
                      src={cardImgs[idx % cardImgs.length]}
                      alt={title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="h-32 rounded-lg overflow-hidden relative">
                    <Image
                      src={cardImgs[(idx + 1) % cardImgs.length]}
                      alt={title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-gray-400">
                    {20 + idx * 5} items
                  </div>
                </div>
              </div>
            ))}
          </div>
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
