"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Shield } from "lucide-react";

export default function StartSellingPage() {
  const benefits = [
    "Founding Creator Badge",
    "Priority Marketplace Visibility",
    "Dedicated Store Setup Support",
    "Early Access to Future Features",
  ];

  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-brand-linen bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-brand-charcoal mb-6">
            Become a Founding Creator
          </h1>
          <p className="text-xl text-brand-charcoal/60 leading-relaxed">
            Join the exclusive first cohort of 100 independent creators and help shape the future of commerce in India.
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Benefits & Pricing */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6 font-serif">What you get</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-brand-charcoal/80">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 border border-brand-sage/20 flex items-center justify-center text-brand-sage flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-white border border-brand-linen rounded-3xl shadow-xl shadow-brand-charcoal/5">
                <h3 className="text-xl font-bold text-brand-charcoal mb-2 font-serif">One-Time Onboarding Fee</h3>
                <p className="text-sm font-medium text-brand-charcoal/50 mb-6">Limited strictly to the first 100 approved creators.</p>
                <div className="flex items-end gap-3">
                  <div className="text-5xl font-bold text-brand-charcoal">₹199</div>
                  <div className="text-xl font-medium text-brand-charcoal/40 line-through mb-1">₹299</div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white border border-brand-linen rounded-3xl p-8 shadow-xl shadow-brand-charcoal/5">
                <h3 className="text-2xl font-bold text-brand-charcoal mb-6 font-serif">Apply for Early Access</h3>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal/70 mb-1.5 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-linen focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-brand-charcoal placeholder:text-brand-charcoal/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="handle" className="block text-sm font-medium text-brand-charcoal/70 mb-1.5 font-medium">Instagram Handle</label>
                    <input 
                      type="text" 
                      id="handle"
                      placeholder="@yourstore" 
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-linen focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-brand-charcoal placeholder:text-brand-charcoal/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-brand-charcoal/70 mb-1.5 font-medium">Primary Category</label>
                    <select 
                      id="category"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-linen focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-brand-charcoal appearance-none"
                    >
                      <option value="" disabled selected>Select a category...</option>
                      <option value="art">Art & Craft</option>
                      <option value="candles">Candles</option>
                      <option value="pottery">Pottery</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="decor">Home Decor</option>
                      <option value="fashion">Fashion & Accessories</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-brand-charcoal/70 mb-1.5 font-medium">Tell us about your products</label>
                    <textarea 
                      id="description"
                      rows={4}
                      placeholder="Briefly describe what you make and sell..." 
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-linen focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-brand-charcoal placeholder:text-brand-charcoal/30 resize-none"
                    />
                  </div>

                  <button type="button" className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-terracotta text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-brand-orange/20 hover:scale-[1.01] active:scale-[0.99] mt-2">
                    Submit Application →
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-brand-charcoal/40">
                  <Shield className="w-4 h-4 text-brand-sage" /> Your information is secure.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
