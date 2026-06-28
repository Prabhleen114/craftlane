"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Store, 
  Search, 
  ShoppingCart, 
  Truck, 
  DollarSign, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Database,
  ArrowRightLeft
} from "lucide-react";

export default function PlatformPage() {
  const [activeStep, setActiveStep] = useState(0);

  const architectureSteps = [
    {
      title: "1. Creator Storefronts",
      icon: Store,
      role: "The Entry Point",
      description: "Creators get a professional, customizable storefront synced with their brand identity. Products are listed with inventory tracking, photos, and price controls directly in their dashboards.",
      tech: "React Storefront API • Image CDN Optimization • Cloud Inventory"
    },
    {
      title: "2. Discovery Index",
      icon: Search,
      role: "The Catalog Hub",
      description: "All products from every approved creator are automatically crawled, categorized, and indexed in the Ekora Central Search. Buyers search by tag, material, or creator.",
      tech: "Algolia Search Engine • Real-time Sync • AI Categorization"
    },
    {
      title: "3. Unified Checkout",
      icon: ShoppingCart,
      role: "The Payment Processor",
      description: "Customers compile items from multiple creators in a single cart. Our checkout system automatically routes and splits payments securely to individual creators.",
      tech: "Razorpay/UPI Gateway Integration • Cart Splitting Engine • Secure Escrow"
    },
    {
      title: "4. Smart Logistics",
      icon: Truck,
      role: "The Fulfillment Engine",
      description: "Fulfillment is automated. Once an order is paid, shipping labels are generated. Our shipping partner schedules pickup directly from the creator's address.",
      tech: "Shiprocket API Integration • Automated Manifests • Real-time Tracking"
    },
    {
      title: "5. Split Escrow Payouts",
      icon: DollarSign,
      role: "The Financial Ledger",
      description: "Creators get 30% payout immediately upon package scan at courier dispatch. The remaining 70% is settled as soon as delivery is confirmed.",
      tech: "Smart Escrow Split API • Ledger Sync • Instant Bank Transfer"
    }
  ];

  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal/50 mb-4 block">
            Technical Architecture
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-brand-charcoal mb-6 leading-tight">
            The Platform
          </h1>
          <p className="text-xl text-brand-charcoal/60 leading-relaxed max-w-xl mx-auto">
            We are building the complete commerce infrastructure for independent creators. Everything you need to turn your Instagram audience into a professional brand.
          </p>
        </div>
      </section>

      {/* Product Vision */}
      <section className="py-24 bg-white border-t border-brand-linen relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#EADED2_1px,transparent_1px),linear-gradient(to_bottom,#EADED2_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8 text-lg text-brand-charcoal/80 leading-relaxed">
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

      {/* Dynamic Architecture Section */}
      <section className="py-24 bg-brand-bg border-t border-brand-linen relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal/50 mb-2 block">
              Ecosystem Blueprint
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal font-serif">
              Platform Architecture Flow
            </h2>
            <p className="text-sm text-brand-charcoal/60 mt-2">
              Click on each step below to trace how data and orders flow through our infrastructure.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Stepper Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {architectureSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                      isActive 
                        ? "bg-white border-brand-orange shadow-lg shadow-brand-orange/5 text-brand-charcoal" 
                        : "bg-white/50 border-brand-linen text-brand-charcoal/60 hover:bg-white hover:text-brand-charcoal"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "bg-brand-orange text-white" : "bg-brand-linen text-brand-charcoal/70"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm leading-tight">{step.title}</h3>
                      <p className="text-xs text-brand-charcoal/40 mt-0.5">{step.role}</p>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-brand-orange" : "text-brand-charcoal/30"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Visualization Panel */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-brand-linen rounded-3xl p-8 shadow-xl shadow-brand-charcoal/5 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
                {/* Visual Flow Animation Background */}
                <div className="absolute right-0 top-0 w-44 h-44 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-left"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 border border-brand-sage/20 bg-emerald-50 rounded-full px-3 py-1 text-xs font-semibold text-brand-sage mb-4 uppercase tracking-widest">
                        Active Node: {architectureSteps[activeStep].role}
                      </div>
                      <h3 className="text-2xl font-bold text-brand-charcoal font-serif">
                        {architectureSteps[activeStep].title.split(". ")[1]}
                      </h3>
                    </div>

                    <p className="text-brand-charcoal/70 leading-relaxed text-base">
                      {architectureSteps[activeStep].description}
                    </p>

                    {/* Infrastructure Block Schema */}
                    <div className="bg-brand-bg rounded-2xl p-5 border border-brand-linen">
                      <h4 className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/40 mb-3 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5" /> Integration Details
                      </h4>
                      <p className="text-xs font-mono text-brand-charcoal/80">
                        {architectureSteps[activeStep].tech}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Animated Connectors/Schema flow footer */}
                <div className="mt-8 pt-6 border-t border-brand-linen flex items-center justify-between text-xs text-brand-charcoal/40 font-mono">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-sage" /> Secure Protocol
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightLeft className="w-3.5 h-3.5 text-brand-orange" /> Real-time Node Sync
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-brand-linen text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-8 font-serif">
            Ready to be a founding creator?
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
