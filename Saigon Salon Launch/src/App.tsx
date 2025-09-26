import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedContent } from "./components/FeaturedContent";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedContent />
      <Newsletter />
      <Footer />
    </div>
  );
}