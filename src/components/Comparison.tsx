"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";
import { Badge } from "./ui/Badge";
import { ScrollReveal } from "./ui/ScrollReveal";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  { name: "Creator Discovery", ig: { text: "Limited", status: "bad" }, trad: { text: "Buried", status: "bad" }, ekora: { text: "Prominent", status: "good" } },
  { name: "Professional Store", ig: { text: "None", status: "bad" }, trad: { text: "Template", status: "ok" }, ekora: { text: "Branded", status: "good" } },
  { name: "Multi-Creator Cart", ig: { text: "None", status: "bad" }, trad: { text: "Not Supported", status: "bad" }, ekora: { text: "Yes", status: "good" } },
  { name: "Order Tracking", ig: { text: "Manual", status: "bad" }, trad: { text: "Generic", status: "ok" }, ekora: { text: "Built-in", status: "good" } },
  { name: "Analytics Dashboard", ig: { text: "None", status: "bad" }, trad: { text: "Basic", status: "ok" }, ekora: { text: "Advanced", status: "good" } },
  { name: "Creator Branding", ig: { text: "Bio Only", status: "bad" }, trad: { text: "Restricted", status: "bad" }, ekora: { text: "Full Control", status: "good" } },
  { name: "Customer Trust", ig: { text: "Varies", status: "ok" }, trad: { text: "Platform", status: "ok" }, ekora: { text: "Verified", status: "good" } },
  { name: "Payment Security", ig: { text: "Manual UPI", status: "bad" }, trad: { text: "Platform", status: "good" }, ekora: { text: "Integrated", status: "good" } },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "good") return <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />;
  if (status === "bad") return <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />;
  return <MinusCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />;
}

export default function Comparison() {
  return (
    <section className="py-12 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-10 mx-auto max-w-3xl">
          <Badge variant="outline" className="mb-4">Why Ekora</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Built for Independent Creators</h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            See how Ekora compares to the alternatives. We give you the tools of a tech giant while keeping your brand front and center.
          </p>
        </ScrollReveal>

        {/* Desktop Table */}
        <ScrollReveal className="hidden md:block">
          <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl overflow-hidden shadow-xl">
            {/* Header */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] border-b border-zinc-200/50 dark:border-zinc-800/50 sticky top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-10">
              <div className="p-4"></div>
              <div className="p-4 text-center border-l border-zinc-200/50 dark:border-zinc-800/50 font-semibold text-zinc-500 dark:text-zinc-400 text-sm">
                Instagram DMs
              </div>
              <div className="p-4 text-center border-l border-zinc-200/50 dark:border-zinc-800/50 font-semibold text-zinc-500 dark:text-zinc-400 text-sm">
                Traditional Marketplaces
              </div>
              <div className="p-4 text-center border-l border-zinc-200/50 dark:border-zinc-800/50 bg-rose-50/80 dark:bg-rose-950/40 font-bold text-rose-600 dark:text-rose-400 relative overflow-hidden text-sm">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-blue-600" />
                Ekora
              </div>
            </div>

            {/* Body */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  variants={staggerItem}
                  className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] border-b border-zinc-100/50 dark:border-zinc-800/30 hover:bg-white/50 dark:hover:bg-zinc-800/30 transition-colors duration-300 last:border-0"
                >
                  <div className="p-4 pl-6 font-medium text-zinc-900 dark:text-zinc-100 flex items-center text-sm">
                    {feature.name}
                  </div>
                  <div className="p-4 border-l border-zinc-100/50 dark:border-zinc-800/30 flex items-center justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <StatusIcon status={feature.ig.status} /> {feature.ig.text}
                  </div>
                  <div className="p-4 border-l border-zinc-100/50 dark:border-zinc-800/30 flex items-center justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <StatusIcon status={feature.trad.status} /> {feature.trad.text}
                  </div>
                  <div className="p-4 border-l border-zinc-100/50 dark:border-zinc-800/30 bg-rose-50/30 dark:bg-rose-950/10 flex items-center justify-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                    <StatusIcon status={feature.ekora.status} /> {feature.ekora.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Mobile Cards (Stack) */}
        <div className="md:hidden space-y-6">
          <div className="bg-rose-50/50 dark:bg-rose-950/20 backdrop-blur-lg border border-rose-200/50 dark:border-rose-900/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-blue-600" />
            <h3 className="text-xl font-bold text-rose-600 dark:text-rose-400 mb-6 text-center">Ekora</h3>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex justify-between items-center border-b border-rose-100/50 dark:border-rose-900/20 pb-3 last:border-0 last:pb-0">
                  <span className="font-medium text-sm text-zinc-800 dark:text-zinc-200">{feature.name}</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {feature.ekora.text} <StatusIcon status={feature.ekora.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
