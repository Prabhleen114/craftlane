"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, LayoutDashboard, ChevronRight, Star, TrendingUp, Users, Package } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { ScrollReveal } from "./ui/ScrollReveal";
import { GlassCard } from "./ui/GlassCard";

const products = [
  {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    creator: "Studio Kaya",
    handle: "@studiokaya",
    price: "₹1,299",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600&h=600",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Minimalist Concrete Planter",
    creator: "The Essentials",
    handle: "@theessentials",
    price: "₹850",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600&h=600",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    name: "Soy Wax Sculptural Candle",
    creator: "Lumière",
    handle: "@lumiere.candles",
    price: "₹650",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600&h=600",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState<"marketplace" | "dashboard">("marketplace");

  return (
    <section className="py-12 sm:py-16 relative bg-zinc-950 text-white overflow-hidden" id="platform">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full gradient-animated opacity-20 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-white/20 text-white bg-white/5">The Platform</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">One infrastructure.<br/>Two seamless experiences.</h2>
          
          <div className="flex justify-center gap-2 mt-8 p-1 bg-white/10 backdrop-blur-md rounded-2xl w-fit mx-auto border border-white/10">
            <button 
              onClick={() => setActiveTab("marketplace")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === "marketplace" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white"}`}
            >
              Marketplace (Buyers)
            </button>
            <button 
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === "dashboard" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white"}`}
            >
              Dashboard (Creators)
            </button>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto mt-12 perspective-1000">
          <AnimatePresence mode="wait">
            {activeTab === "marketplace" && (
              <motion.div
                key="marketplace"
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Browser Mockup Header */}
                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-zinc-950/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="mx-auto bg-zinc-800/50 rounded-md h-6 w-64 flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                    ekora.in/search?q=home+decor
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative w-full max-w-md">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <div className="w-full h-10 bg-zinc-800/50 rounded-xl border border-white/5 pl-10 flex items-center text-sm text-zinc-300">
                        Home decor aesthetics...
                        <motion.div 
                          animate={{ opacity: [1, 0] }} 
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="w-px h-4 bg-rose-500 ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <div 
                        key={product.id} 
                        onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                        className="block bg-zinc-800/30 rounded-2xl p-4 border border-white/5 hover:border-white/20 transition-all cursor-pointer group"
                      >
                        <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {product.rating}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.avatar} alt={product.creator} className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-xs text-zinc-400">{product.creator}</span>
                        </div>
                        <h3 className="text-sm font-semibold mb-1 line-clamp-1">{product.name}</h3>
                        <div className="flex items-center justify-between mt-4">
                          <span className="font-bold">{product.price}</span>
                          <button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-black backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex h-[600px]"
              >
                {/* Sidebar */}
                <div className="w-64 border-r border-zinc-800 p-6 hidden md:block">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center font-bold text-sm">S</div>
                    <div>
                      <div className="text-sm font-semibold">Studio Kaya</div>
                      <div className="text-xs text-zinc-500">Pro Creator</div>
                    </div>
                  </div>
                  <nav className="space-y-2">
                    {[
                      { icon: LayoutDashboard, label: "Overview", active: true },
                      { icon: Package, label: "Products", active: false },
                      { icon: ShoppingBag, label: "Orders", active: false },
                      { icon: Users, label: "Customers", active: false },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${item.active ? 'bg-zinc-800/50 text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30'}`}>
                        <item.icon className="w-4 h-4" /> {item.label}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-y-auto">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold">Overview</h2>
                    <select className="bg-zinc-900 border border-zinc-800 text-sm rounded-lg px-3 py-1.5 focus:outline-none">
                      <option>Last 30 Days</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Total Revenue", value: "₹1,24,500", trend: "+23%" },
                      { label: "Active Orders", value: "42", trend: "+12%" },
                      { label: "Store Visitors", value: "8,409", trend: "+45%" },
                      { label: "Conversion Rate", value: "3.2%", trend: "+1.1%" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
                        <div className="text-zinc-500 text-xs mb-2">{stat.label}</div>
                        <div className="text-lg md:text-xl font-bold mb-1 truncate" title={stat.value}>{stat.value}</div>
                        <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                          <TrendingUp className="w-3 h-3" /> {stat.trend}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 h-64 relative flex flex-col justify-end overflow-hidden group cursor-pointer">
                    <div className="absolute top-6 left-6 font-semibold">Revenue Trend</div>
                    {/* Simulated chart area */}
                    <div className="w-full h-32 bg-gradient-to-t from-rose-500/20 to-transparent relative mt-auto border-t border-rose-500/50 group-hover:from-rose-500/30 transition-colors" />
                    <svg className="absolute bottom-0 w-full h-32 drop-shadow-md" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,100 L0,50 Q25,80 50,40 T100,20 L100,100 Z" fill="none" stroke="currentColor" className="text-rose-500" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
