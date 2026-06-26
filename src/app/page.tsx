import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import ProductDemo from "@/components/ProductDemo";
import WhyEkora from "@/components/WhyEkora";
import Categories from "@/components/Categories";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 selection:bg-rose-500/30">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <ProductDemo />
      <WhyEkora />
      <Categories />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
