import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Camera, FileText, ShieldCheck, Layout, Rocket, Package, TrendingUp } from "lucide-react";

export const metadata = {
  title: "How It Works — Ekora",
  description: "Your journey from Instagram creator to Ekora seller.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Camera,
      title: "Instagram Page",
      desc: "You already have an audience that loves your products. That's your starting point.",
    },
    {
      icon: FileText,
      title: "Apply",
      desc: "Fill out a simple application with your Instagram handle and product category. Takes under 2 minutes.",
    },
    {
      icon: ShieldCheck,
      title: "Verification",
      desc: "Our team reviews your profile to ensure quality and authenticity. Most applications are reviewed within 48 hours.",
    },
    {
      icon: Layout,
      title: "Store Setup",
      desc: "We help you set up your professional storefront. Upload products, set prices, customize your store.",
    },
    {
      icon: Rocket,
      title: "Launch",
      desc: "Your store goes live on Ekora. Share your store link with your followers and start taking orders.",
    },
    {
      icon: Package,
      title: "Orders",
      desc: "Customers browse, add to cart, and checkout securely. You receive order notifications and shipping details.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "Track your sales, understand your customers, and grow your business with built-in analytics.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-zinc-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            Your journey from Instagram creator to professional Ekora seller. Simple, transparent, and built for growth.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col sm:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''} relative z-10`}>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:flex-1" />

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex flex-col items-center justify-center flex-shrink-0 shadow-sm border-4 border-white relative z-20">
                    <step.icon className="w-6 h-6 mb-0.5" />
                    <span className="text-[10px] font-bold">{index + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm relative ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
                    <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">
            Ready to start?
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
