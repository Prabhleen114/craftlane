"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Sparkles } from "lucide-react";
import { Badge } from "./ui/Badge";
import { ScrollReveal } from "./ui/ScrollReveal";
import { GlassCard } from "./ui/GlassCard";

export default function EarlyAccess() {
  return (
    <section className="py-12 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950" id="early-access">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-rose-500/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">Early Access Program</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
              Become a Founding Creator.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-lg">
              Ekora is launching soon. Secure your storefront today and get lifelong perks as one of our first 100 founding creators.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Founding Creator Badge",
                "Priority Marketplace Visibility",
                "Dedicated Store Setup Support",
                "Early Access to Future Features",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-zinc-800 dark:text-zinc-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard className="p-8 border-rose-200 dark:border-rose-900/50 bg-white/60 dark:bg-zinc-900/60 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Sparkles className="w-24 h-24 text-rose-500" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">One-Time Onboarding Fee</h3>
                    <p className="text-sm font-semibold text-rose-500">Limited to the First 100 Founding Creators</p>
                  </div>
                </div>

                <div className="mb-8 flex items-end gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <div>
                    <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-1">Current Early Access Price</div>
                    <div className="text-4xl font-black text-rose-600 dark:text-rose-400">₹199</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-1">Future Launch Price</div>
                    <div className="text-xl font-bold text-zinc-400">₹299</div>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-semibold block mb-1.5 text-zinc-700 dark:text-zinc-300">Instagram Handle</label>
                    <input 
                      type="text" 
                      placeholder="@yourstore" 
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <button className="w-full py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-rose-500/25">
                    Apply for Early Access →
                  </button>
                </form>

                <p className="text-xs text-center text-zinc-400 mt-6 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> Secure processing. No hidden subscriptions.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
