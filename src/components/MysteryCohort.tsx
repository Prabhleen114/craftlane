"use client";

import { motion } from "framer-motion";
import { Lock, EyeOff, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

export default function MysteryCohort() {
  return (
    <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand-terracotta/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Matrix-like fine grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Teaser Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-brand-orange/30 bg-brand-orange/10 rounded-full px-3 py-1 text-xs font-semibold text-brand-orange uppercase tracking-widest shadow-sm shadow-brand-orange/5 animate-pulse">
              <EyeOff className="w-3.5 h-3.5" /> Invite-Only Cohort
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
              The Next Big Thing. <br />
              <span className="text-brand-orange">Building in the Shadows.</span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              We aren&apos;t running public ads. We aren&apos;t blasting social media feeds. Ekora is a quiet revolution for India&apos;s finest independent creators. 
            </p>
            
            <p className="text-base text-white/50 leading-relaxed max-w-xl">
              Only 100 founding creators will secure their lifetime credentials. Once the gates open publicly, these early storefronts will retain permanent priority routing and zero-cost future upgrades. It&apos;s a secret worth sharing—but only with those who build.
            </p>

            <div className="pt-4">
              <Link 
                href="/start-selling"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-terracotta text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg shadow-brand-orange/20"
              >
                <Lock className="w-4 h-4" /> Secure Your Storefront Key
              </Link>
            </div>
          </div>

          {/* Right Column: Encrypted Log Terminal Mockup */}
          <div className="lg:col-span-5">
            <motion.div 
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-mono text-white/40 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> SECURE_HANDSHAKE.LOG
                </div>
              </div>

              {/* Terminal Body */}
              <div className="space-y-3 font-mono text-xs text-white/80 leading-relaxed text-left">
                <div className="flex justify-between text-white/40 text-[10px]">
                  <span>SYSTEM: INIT_PROTOCOL</span>
                  <span>v1.0.0-PROTOTYPE</span>
                </div>
                <div className="text-brand-orange">&gt; establishing connection... [OK]</div>
                <div>&gt; bypass_instagram_dm_friction... IN_PROGRESS</div>
                <div className="text-emerald-400">&gt; multi_cart_routing: ENABLED</div>
                <div>&gt; creator_credentials: ACTIVE</div>
                <div className="p-3 bg-white/5 rounded border border-white/5 my-4">
                  <div className="text-[10px] text-white/40 mb-1">FOUNDING COHORT ALLOCATION</div>
                  <div className="flex justify-between items-end">
                    <div className="text-2xl font-bold tracking-tight text-white font-serif">84/100</div>
                    <div className="text-[10px] text-brand-orange font-semibold">16 SPOTS REMAINING</div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-brand-orange h-full rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>
                <div className="text-white/40 text-[10px] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-brand-orange" /> Lifetime onboarding fee locked at ₹199
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
