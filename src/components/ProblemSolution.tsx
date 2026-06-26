"use client";

import { MessageCircle, ShoppingCart, ArrowRight, X, BadgeCheck } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

export default function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#F8F9FA]" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-widest text-[#E53E3E] uppercase mb-4">
            THE EVOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#1A202C]">
            From fragmented DMs to a<br/>unified checkout.
          </h2>
          <p className="text-lg text-[#4A5568]">
            Buying from Instagram used to mean sending dozens of messages, waiting for<br className="hidden md:block"/> replies, and scanning QR codes. We built a better way.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* The Old Way */}
          <ScrollReveal delay={0.1}>
            <div className="relative group">
              <div className="absolute top-0 right-8 -mt-4 opacity-30 pointer-events-none">
                <div className="w-24 h-24 rounded-full border border-[#E53E3E] flex items-center justify-center">
                  <X className="w-12 h-12 text-[#E53E3E]" strokeWidth={1} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#E53E3E]">
                <MessageCircle className="w-6 h-6" strokeWidth={2} /> The Old Way
              </h3>
              
              <ul className="space-y-8 relative z-10">
                {[
                  "Discover a product on an Instagram Reel",
                  "DM the creator to ask for price and availability",
                  "Wait 4 hours for a reply",
                  "Send money via an unverified UPI screenshot",
                  "No tracking link, no order updates"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-[#2D3748]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FED7D7] text-[#E53E3E] flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* The Ekora Way */}
          <ScrollReveal delay={0.2}>
            <div className="relative group">
              <div className="absolute top-0 right-8 -mt-4 opacity-30 pointer-events-none">
                <BadgeCheck className="w-28 h-28 text-[#38A169]" strokeWidth={1} />
              </div>

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#38A169]">
                <ShoppingCart className="w-6 h-6" strokeWidth={2} /> The Ekora Way
              </h3>

              <ul className="space-y-8 relative z-10">
                {[
                  "Discover products curated from top creators",
                  "Compare prices, reviews, and variations instantly",
                  "Add items from multiple creators to one cart",
                  "Checkout securely in one click",
                  "Track all your orders from a single dashboard"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-[#2D3748]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C6F6D5] text-[#38A169] flex items-center justify-center text-xs mt-0.5">
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
