"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "./ui/Badge";
import { ScrollReveal } from "./ui/ScrollReveal";

const faqs = [
  {
    question: "What is Ekora?",
    answer: "Ekora is India's first commerce infrastructure built specifically for Instagram creators. It replaces fragmented DMs with a professional storefront, multi-creator cart, and unified checkout."
  },
  {
    question: "Is it free for creators?",
    answer: "Yes, Ekora has zero listing fees. You can import your Instagram catalog and start selling immediately."
  },
  {
    question: "How does the multi-creator cart work?",
    answer: "Buyers can add products from multiple different creators into a single cart and checkout once. We handle the split payments automatically behind the scenes."
  },
  {
    question: "How do I join Early Access?",
    answer: "Enter your email at the bottom of this page. Early Access members get priority onboarding, verified badges, and founding member benefits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 relative bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Questions? We have answers.</h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div 
                  className={`bg-white dark:bg-zinc-900 border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-zinc-300 dark:border-zinc-700 shadow-sm' : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-semibold text-lg pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
