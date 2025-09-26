import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Hero() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const presetAmounts = [50, 100, 200, 500];

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setShowCustomInput(false);
    setCustomAmount("");
  };

  const handleCustomClick = () => {
    setSelectedAmount(null);
    setShowCustomInput(true);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && amount > 0) {
      // Handle donation logic here
      alert(`Thank you for your donation of ${amount}!`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-ocean-blue via-soft-blue to-nature-green">
      {/* Video Background - Urban Life in Saigon */}
      <div className="absolute inset-0 z-0">
        {/* Video element with fallback */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1717131259954-ba492b3d8da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8MTc1ODc4NDY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        >
          {/* Video sources - you can replace these with actual Saigon urban life videos */}
          <source src="/videos/saigon-urban-life.mp4" type="video/mp4" />
          <source src="/videos/saigon-urban-life.webm" type="video/webm" />
          
          {/* Fallback: Static image when video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1717131259954-ba492b3d8da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8MTc1ODc4NDY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Urban life in Saigon"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-rich-brown/60 via-ocean-blue/40 to-rich-brown/70"></div>
        
        {/* Additional texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rich-brown/80 via-transparent to-rich-brown/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-6xl md:text-8xl tracking-tight leading-none mb-8 text-white font-black">
            CULTURE
            <br />
            <span className="text-soft-blue">REDEFINED</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl text-white opacity-95">
            A quarterly magazine exploring the intersection of art, culture, and contemporary life through bold storytelling and striking visuals.
          </p>
          {/* Donation Options */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  size="lg"
                  onClick={() => handlePresetClick(amount)}
                  className={`px-6 py-4 font-bold ${
                    selectedAmount === amount
                      ? "bg-coral-pink text-white border-2 border-white"
                      : "bg-white/90 text-rich-brown hover:bg-coral-pink hover:text-white"
                  }`}
                >
                  ${amount}
                </Button>
              ))}
              <Button
                size="lg"
                onClick={handleCustomClick}
                className={`px-6 py-4 font-bold ${
                  showCustomInput
                    ? "bg-coral-pink text-white border-2 border-white"
                    : "bg-white/90 text-rich-brown hover:bg-coral-pink hover:text-white"
                }`}
              >
                Custom Amount
              </Button>
            </div>

            {showCustomInput && (
              <div className="max-w-xs">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rich-brown font-bold">$</span>
                  <Input
                    type="number"
                    placeholder="0"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-8 bg-white/90 border-white text-rich-brown placeholder:text-gray-400 py-4"
                  />
                </div>
              </div>
            )}

            <Button
              size="lg"
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
              className="bg-coral-pink text-white hover:bg-coral-pink/90 px-8 py-4 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Support Saigon Salon
            </Button>
            
            <p className="text-sm opacity-80 text-white max-w-md">
              Your contribution supports independent cultural journalism and helps us bring you bold stories from Saigon.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-soft-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-soft-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}