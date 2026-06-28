import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Transformation from "@/components/Transformation";
import PlatformPreview from "@/components/PlatformPreview";
import CategoriesPreview from "@/components/CategoriesPreview";
import WhyJoinEarly from "@/components/WhyJoinEarly";
import FounderStory from "@/components/FounderStory";
import MysteryCohort from "@/components/MysteryCohort";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <Hero />
      <Transformation />
      <PlatformPreview />
      <CategoriesPreview />
      <WhyJoinEarly />
      <FounderStory />
      <MysteryCohort />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
