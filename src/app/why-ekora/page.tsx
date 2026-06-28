import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Why Ekora — Ekora",
  description: "Our mission to build the commerce infrastructure that independent creators deserve.",
};

export default function WhyEkoraPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-brand-charcoal mb-6">
            Why Ekora
          </h1>
          <p className="text-xl text-brand-charcoal/60 leading-relaxed">
            Our mission is to build the commerce infrastructure that independent creators deserve.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 border-t border-brand-linen bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal/55 mb-4 block text-center md:text-left">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-8 text-center md:text-left font-serif">
            Commerce on Instagram is broken.
          </h2>
          <div className="space-y-6 text-lg text-brand-charcoal/70 leading-relaxed">
            <p>
              Millions of talented creators in India are running real businesses entirely through Instagram DMs. When a customer finds a product they love, the friction begins. They have to send a message, wait for a reply, negotiate prices, manually transfer money via UPI, share screenshots of the payment, type out their delivery address, and then hope the product actually arrives.
            </p>
            <p>
              This manual process is exhausting. For buyers, the lack of a secure checkout and order tracking creates a massive trust deficit. For creators, managing orders across hundreds of disjointed chat threads means they spend more time doing admin work than actually creating their products.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 border-t border-brand-linen bg-brand-bg">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal/55 mb-4 block text-center md:text-left">
            Why Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-8 text-center md:text-left font-serif">
            The creator economy is booming. The infrastructure hasn&apos;t kept up.
          </h2>
          <div className="space-y-6 text-lg text-brand-charcoal/70 leading-relaxed">
            <p>
              India is experiencing a massive wave of independent entrepreneurship. Artists, crafters, potters, and makers are leveraging social media to build incredibly loyal audiences. The demand for authentic, handmade, and unique products has never been higher.
            </p>
            <p>
              Yet, the tools these creators use to sell are fundamentally the same as they were a decade ago. It&apos;s time for a platform that respects the scale and professionalism of these independent businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 border-t border-brand-linen bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal/55 mb-4 block text-center md:text-left">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-8 text-center md:text-left font-serif">
            Professional tools. Seamless experience.
          </h2>
          <div className="space-y-6 text-lg text-brand-charcoal/70 leading-relaxed">
            <p>
              Ekora bridges the gap between social media discovery and e-commerce reliability. We provide creators with professional storefronts that look and feel premium. We aggregate these stores into a single, searchable marketplace.
            </p>
            <p>
              Most importantly, we provide a unified cart. A buyer can purchase a handmade candle from a creator in Mumbai and custom resin art from a creator in Delhi, all in a single, secure checkout experience. We handle the payment processing, the order tracking, and the analytics, so creators can focus entirely on their craft.
            </p>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-24 border-t border-brand-linen bg-brand-bg">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal/55 mb-4 block text-center md:text-left">
            The Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-8 text-center md:text-left font-serif">
            Empowering the next million independent businesses.
          </h2>
          <div className="space-y-6 text-lg text-brand-charcoal/70 leading-relaxed">
            <p>
              Our ultimate vision is to make creator commerce as easy, trustworthy, and seamless as any major e-commerce platform in the world. We believe that when you remove the friction from buying and selling, independent creators thrive.
            </p>
            <p>
              Ekora isn&apos;t just a marketplace; it&apos;s the foundation for a new kind of economy built on authenticity, creativity, and direct connections.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 border-t border-brand-linen bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-brand-charcoal mb-8 leading-snug">
            &quot;We&apos;re building the commerce infrastructure that bridges the gap between social media and real business.&quot;
          </blockquote>
          <div className="font-semibold text-brand-charcoal">Prabhleen Kaur & Kumar Aryan</div>
          <div className="text-sm text-brand-charcoal/50">Co-Founders, Ekora</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-bg border-t border-brand-linen text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-8 font-serif">
            Join the movement.
          </h2>
          <Link
            href="/start-selling"
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-terracotta text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg shadow-brand-orange/20 hover:scale-[1.02]"
          >
            Apply for Early Access
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
