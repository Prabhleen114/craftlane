import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, Store, CreditCard, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Platform — Ekora",
  description: "The commerce infrastructure for independent creators. From discovery to secure checkout.",
};

export default function PlatformPage() {
  const features = [
    {
      icon: Search,
      title: "Discovery Engine",
      description: "A centralized marketplace where buyers can search across hundreds of independent creators to find exactly what they're looking for.",
    },
    {
      icon: Store,
      title: "Creator Storefronts",
      description: "Professional, customizable storefronts that showcase your brand and products beautifully, without the noise of a social media feed.",
    },
    {
      icon: CreditCard,
      title: "Secure Checkout",
      description: "One unified cart and a seamless checkout experience. Customers can buy from multiple creators in a single, secure transaction.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into your sales, best-performing products, and customer demographics to help you grow your business.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-4 block">
            Product Vision
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-zinc-900 mb-6">
            The Platform
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            We are building the complete commerce infrastructure for independent creators. Everything you need to turn your Instagram following into a real business.
          </p>
        </div>
      </section>

      {/* Product Vision */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-lg text-zinc-600 leading-relaxed">
          <p>
            Right now, shopping from Instagram creators is a fragmented, frustrating experience. It relies on manual DMs, separate payment links, and a lot of blind trust. For creators, this means spending hours managing orders instead of creating. For buyers, it means friction that often leads to abandoned purchases.
          </p>
          <p>
            Ekora is designed to fix this from the ground up. We are creating a unified platform where discovery meets seamless commerce. Imagine a single marketplace where a buyer can search for &quot;handmade soy candles,&quot; compare products from five different independent creators, add their favorites to one cart, and check out instantly.
          </p>
          <p>
            For creators, Ekora provides a professional backend. The moment you are approved, you get a clean storefront, inventory management, automated order tracking, and real-time analytics. You retain your unique brand identity while benefiting from the trust and infrastructure of a major e-commerce platform.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              Platform Architecture
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-zinc-200 rounded-2xl p-8 hover:-translate-y-0.5 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-zinc-700" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-16">
            Our Roadmap
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-200 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { time: "Now", title: "Building", active: true },
                { time: "Q3 2025", title: "Beta Launch", active: false },
                { time: "Q4 2025", title: "Public Launch", active: false },
                { time: "2026", title: "Scale", active: false },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center bg-zinc-50 md:bg-transparent">
                  <div className={`w-4 h-4 rounded-full mb-4 ${step.active ? "bg-green-500 ring-4 ring-green-100" : "bg-zinc-200"}`} />
                  <div className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-1">{step.time}</div>
                  <div className={`text-lg font-bold ${step.active ? "text-zinc-900" : "text-zinc-500"}`}>{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-zinc-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">
            Ready to be a founding creator?
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
