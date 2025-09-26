import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section id="newsletter" className="py-20 bg-gradient-to-r from-nature-green to-rich-brown text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-5xl md:text-6xl tracking-tight mb-6 font-black">
            STAY INFORMED
          </h3>
          <p className="text-xl md:text-2xl mb-12 opacity-95">
            Be the first to know about new issues, exclusive content, and cultural insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:bg-white/30 backdrop-blur-sm"
            />
            <Button className="bg-coral-pink text-white hover:bg-coral-pink/90 whitespace-nowrap px-8 font-bold">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-80 mt-6">
            Quarterly issues. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}