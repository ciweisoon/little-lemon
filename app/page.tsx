import HeroSection from "@/app/ui/home/hero-section"
import About from "@/app/ui/home/about";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <HeroSection />
      <About />
      <Footer />
    </main>
  );
}
