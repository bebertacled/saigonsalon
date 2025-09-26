export function Footer() {
  return (
    <footer className="border-t border-rich-brown/20 py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h4 className="text-2xl tracking-wider mb-6 text-rich-brown font-bold">SAIGON SALON</h4>
            <p className="text-gray-700 leading-relaxed max-w-md">
              A quarterly publication celebrating the intersection of culture, art, and contemporary life through bold storytelling and striking visuals.
            </p>
          </div>
          
          <div>
            <h5 className="mb-6 text-ocean-blue font-bold">Support</h5>
            <div className="space-y-3">
              <a href="#" className="block hover:text-coral-pink transition-colors">Contact</a>
              <a href="#" className="block hover:text-coral-pink transition-colors">Submissions</a>
              <a href="#" className="block hover:text-coral-pink transition-colors">Press</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-rich-brown/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 SAIGON SALON.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-coral-pink transition-colors">Privacy</a>
              <a href="#" className="hover:text-coral-pink transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}