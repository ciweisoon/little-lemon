import Footer from "./ui/footer";
import HeroSection from "@/app/ui/home/hero-section"

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <HeroSection />
      <h1>Hello World</h1>
      <Footer />
    </main>
  );
}
