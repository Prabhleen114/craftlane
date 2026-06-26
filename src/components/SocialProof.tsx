"use client";

export default function SocialProof() {
  return (
    <section className="py-8 border-y border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> Launching Soon
          </span>
          <span>Early Access Program</span>
          <span>First 100 Founding Creators</span>
          <span className="hidden md:inline">Creator Commerce Infrastructure</span>
          <span className="hidden lg:inline">Built for Instagram Businesses</span>
        </div>
      </div>
    </section>
  );
}
