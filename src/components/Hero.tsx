"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ShoppingBag, Star, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { ScrollReveal } from "./ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden">
      {/* Premium Animated Gradient Background */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,29,72,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,29,72,0.15),rgba(0,0,0,0))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy */}
        <motion.div 
          className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem} className="mb-6 flex justify-center lg:justify-start">
            <Badge variant="outline" className="border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/20 backdrop-blur-md">
              Commerce Infrastructure for Creators
            </Badge>
          </motion.div>

          <motion.h1 
            variants={staggerItem}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]"
          >
            From Reels to <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Cart.</span>
          </motion.h1>

          <motion.p 
            variants={staggerItem}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Ekora is launching soon. Secure your storefront today and be among the first creators to sell without DMs.
          </motion.p>

          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(225,29,72,0.4)] w-full sm:w-auto"
            >
              Apply for Early Access
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-105 w-full sm:w-auto"
            >
              View Platform Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateY: 10, rotateX: 5 }}
          animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-md mx-auto perspective-1000"
        >
          {/* Floating elements to add depth */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-500">Multi-Cart</div>
              <div className="text-sm font-bold">2 items added</div>
            </div>
          </motion.div>

          {/* Main Mockup Card */}
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl border border-white/40 dark:border-zinc-800/50 rounded-[2rem] shadow-2xl overflow-hidden relative">
            <div className="p-6 border-b border-zinc-100 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3 w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-zinc-400" />
                <span className="text-sm text-zinc-500">Search creators, products...</span>
              </div>
            </div>
            
            <div className="p-6 bg-zinc-50/50 dark:bg-zinc-950/30 space-y-4">
              {/* Creator Card 1 */}
              <div
                onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })} 
                className="block bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Creator" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold flex items-center gap-1 text-zinc-900 dark:text-white">
                      Anika's Art <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.9
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-500 mb-0.5">Handcrafted Vase</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">₹1,299</div>
                  </div>
                  <button className="h-8 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-bold hover:bg-rose-500 hover:text-white transition-colors">
                    Add
                  </button>
                </div>
              </div>

              {/* Creator Card 2 */}
              <div 
                onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                className="block bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="Creator" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold flex items-center gap-1 text-zinc-900 dark:text-white">
                      CraftedByPreya <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.8
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-500 mb-0.5">Rose Gold Candle</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">₹890</div>
                  </div>
                  <button className="h-8 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-bold hover:bg-rose-500 hover:text-white transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-zinc-100 dark:border-zinc-800/50 bg-white dark:bg-zinc-900">
              <button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-sm font-bold shadow-lg hover:scale-[1.02] transition-transform">
                Checkout 2 items — ₹2,189
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
