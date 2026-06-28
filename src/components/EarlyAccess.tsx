import { CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";

export default function EarlyAccess() {
  const benefits = [
    "Founding Creator Badge",
    "Priority Marketplace Visibility",
    "Dedicated Store Setup Support",
    "Early Access to Future Features",
  ];

  return (
    <section className="bg-zinc-50 border-t border-zinc-200 py-24" id="early-access">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight mb-4 text-zinc-900 leading-tight">
                Become a Founding Creator.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed max-w-lg">
                Ekora is launching soon. Secure your storefront today and get lifelong perks as one of our first 100 founding creators.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-zinc-800">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-10 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">One-Time Onboarding Fee</h3>
                <p className="text-sm font-medium text-zinc-500">Limited to First 100 Founding Creators</p>
              </div>

              <div className="flex items-end justify-center gap-3 mb-10">
                <div className="text-5xl font-bold text-zinc-900">₹199</div>
                <div className="text-xl font-medium text-zinc-400 line-through mb-1">₹299</div>
              </div>

              <Link
                href="/start-selling"
                className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-lg transition-colors"
              >
                Apply for Early Access →
              </Link>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-zinc-500">
                <Shield className="w-4 h-4" /> Secure processing. No hidden subscriptions.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
