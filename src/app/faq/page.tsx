"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Ekora?",
    answer: "Ekora is India's first creator commerce platform. We provide independent Instagram creators with professional storefronts, secure checkout, and built-in order tracking, all within a unified marketplace.",
  },
  {
    question: "Who can join the Early Access program?",
    answer: "Any independent creator based in India who sells handmade, custom, or unique products primarily through social media. We are especially looking for creators in Art, Decor, Candles, Pottery, Jewelry, and Fashion.",
  },
  {
    question: "What does the ₹199 onboarding fee cover?",
    answer: "This is a one-time fee exclusively for our first 100 founding creators. It covers your lifetime store setup, dedicated onboarding support, and guarantees your priority visibility when the platform officially launches.",
  },
  {
    question: "Is the platform live yet?",
    answer: "Not yet. We are currently in our pre-launch phase, onboarding our first cohort of 100 founding creators. Once this initial cohort is set up, we will launch the marketplace to buyers.",
  },
  {
    question: "What categories are supported?",
    answer: "We support a wide range of creative categories including Art & Craft, Candles, Pottery, Jewelry, Home Decor, DIY Kits, Paintings, Fashion Accessories, and Customized Gifts.",
  },
  {
    question: "How does payment work?",
    answer: "Customers pay securely through our unified checkout system (supporting UPI, cards, and net banking). Payments are then settled directly to your connected bank account according to our standard payout schedule.",
  },
  {
    question: "Can I sell on other platforms too?",
    answer: "Absolutely. Ekora does not require exclusivity. We simply aim to be the most efficient and professional channel for your business.",
  },
  {
    question: "How do I get support?",
    answer: "Founding creators receive direct access to our core team via an exclusive WhatsApp group, in addition to dedicated email support for store setup and technical issues.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-zinc-200">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
          >
            <span className="text-lg font-medium text-zinc-900 pr-8">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-zinc-600 leading-relaxed pr-8">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-zinc-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            Everything you need to know about Ekora, the Early Access program, and how we help creators grow.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">
            Still have questions?
          </h2>
          <Link
            href="/start-selling"
            className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-zinc-800 transition-colors"
          >
            Apply for Early Access
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
