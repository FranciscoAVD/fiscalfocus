import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header/header";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
