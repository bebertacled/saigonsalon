import { Button } from "./ui/button";

export function Header() {
  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="border-b border-rich-brown/20 bg-white">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-logo tracking-wider text-2xl text-rich-brown font-bold">SAIGON SALON</h1>
          </div>
          <Button 
            onClick={scrollToNewsletter}
            className="bg-coral-pink text-white hover:bg-coral-pink/90"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
}