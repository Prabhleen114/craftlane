"use client";

import { motion } from "framer-motion";
import { Store, Camera, LayoutDashboard, Shield, Zap, Sparkles } from "lucide-react";
import { Badge } from "./ui/Badge";
import { ScrollReveal } from "./ui/ScrollReveal";
import { cn } from "./ui/GlassCard";

const features = [
  {
    title: "Your Storefront, Elevated",
    description: "Launch a beautiful, custom storefront in minutes. Your brand takes center stage.",
    icon: Store,
    className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-zinc-900 to-black text-white dark:border-zinc-800",
    iconColor: "text-rose-400",
  },
  {
    title: "Instagram Sync",
    description: "Import your existing catalog directly from Instagram posts and Reels.",
    icon: Camera,
    className: "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
    iconColor: "text-blue-500",
  },
  {
    title: "Real-time Analytics",
    description: "Track visitors, conversion rates, and revenue with Stripe-level precision.",
    icon: LayoutDashboard,
    className: "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
    iconColor: "text-emerald-500",
  },
  {
    title: "Built for Discovery",
    description: "Get discovered by buyers searching across the entire Ekora network. No algorithm dependency.",
    icon: Sparkles,
    className: "md:col-span-2 bg-gradient-to-tr from-rose-50 to-blue-50 dark:from-rose-950/20 dark:to-blue-950/20 border-zinc-200 dark:border-zinc-800",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    title: "Instant Payouts",
    description: "Secure payments with automated routing directly to your bank account.",
    icon: Zap,
    className: "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
    iconColor: "text-amber-500",
  },
  {
    title: "Verified Trust",
    description: "Every creator is verified, giving buyers the confidence to checkout.",
    icon: Shield,
    className: "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
    iconColor: "text-indigo-500",
  },
];

export default function WhyEkora() {
  return (
    <section className="py-12 relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16 mx-auto max-w-2xl">
          <Badge variant="outline" className="mb-4">Commerce Infrastructure</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything you need to scale.</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            We provide the enterprise-grade tools so you can focus on creating. Zero listing fees, complete control.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className={feature.className}>
              <div className={cn(
                "h-full p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group cursor-pointer",
                feature.className
              )}>
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 dark:from-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 bg-zinc-100 dark:bg-zinc-800/50 ${feature.iconColor}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className={cn(
                    "text-xl font-bold mb-3 tracking-tight",
                    feature.className.includes('text-white') ? 'text-white' : 'text-zinc-900 dark:text-zinc-100'
                  )}>
                    {feature.title}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed",
                    feature.className.includes('text-white') ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'
                  )}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
