import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformPreview from "@/components/PlatformPreview";
import CategoriesPreview from "@/components/CategoriesPreview";
import WhyJoinEarly from "@/components/WhyJoinEarly";
import FounderStory from "@/components/FounderStory";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PlatformPreview />
      <CategoriesPreview />
      <WhyJoinEarly />
      <FounderStory />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
