"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { ScrollReveal } from "./ui/ScrollReveal";

const categories = [
  { name: "Art & Craft", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" },
  { name: "Home Decor", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
  { name: "Candles", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800" },
  { name: "Pottery", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800" },
  { name: "Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" },
  { name: "Custom Gifts", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800" },
];

export default function Categories() {
  return (
    <section className="py-12 relative" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4">Explore</Badge>
            <h2 className="text-4xl font-bold tracking-tight">Discover what creators make.</h2>
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-6 md:mt-0 text-sm font-semibold text-rose-500 hover:text-rose-600 transition-colors"
          >
            View all categories →
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div 
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="block group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-zinc-900"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-y-0 transition-transform">{category.name}</h3>
                  <div className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    Explore collection →
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
