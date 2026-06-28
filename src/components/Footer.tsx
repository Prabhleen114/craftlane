import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 text-2xl font-bold tracking-tight text-zinc-900">
              Ekora
            </Link>
            <p className="text-sm text-zinc-500 mb-6 max-w-xs leading-relaxed">
              India&apos;s First Creator Commerce Platform. We build the infrastructure for independent creators to thrive.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
              <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-zinc-900 font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><Link href="/platform" className="hover:text-zinc-900 transition-colors">Product Preview</Link></li>
              <li><Link href="/categories" className="hover:text-zinc-900 transition-colors">Categories</Link></li>
              <li><Link href="/how-it-works" className="hover:text-zinc-900 transition-colors">How it Works</Link></li>
              <li><Link href="/start-selling" className="hover:text-zinc-900 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-zinc-900 font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><Link href="/why-ekora" className="hover:text-zinc-900 transition-colors">Our Story</Link></li>
              <li><Link href="/faq" className="hover:text-zinc-900 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-zinc-900 font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><Link href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 transition-colors">Creator Guidelines</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-zinc-500">
          <p>© 2025 Ekora. All rights reserved.</p>
          <p>Made in India</p>
        </div>
      </div>
    </footer>
  );
}
