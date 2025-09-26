import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Donation() {
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
      alert(`Thank you for your donation of $${amount}!`);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-blue to-ocean-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl md:text-6xl tracking-tight mb-6 font-black text-white">
            SUPPORT SAIGON SALON
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-white opacity-95 max-w-2xl mx-auto">
            Help us continue bringing you bold stories and striking cultural perspectives. Your donation makes independent journalism possible.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {presetAmounts.map((amount) => (
              <Button
                key={amount}
                size="lg"
                onClick={() => handlePresetClick(amount)}
                className={`px-8 py-6 text-lg font-bold min-w-[120px] ${
                  selectedAmount === amount
                    ? "bg-coral-pink text-white border-2 border-white"
                    : "bg-white text-rich-brown hover:bg-coral-pink hover:text-white"
                }`}
              >
                ${amount}
              </Button>
            ))}
            <Button
              size="lg"
              onClick={handleCustomClick}
              className={`px-8 py-6 text-lg font-bold ${
                showCustomInput
                  ? "bg-coral-pink text-white border-2 border-white"
                  : "bg-white text-rich-brown hover:bg-coral-pink hover:text-white"
              }`}
            >
              Enter your amount
            </Button>
          </div>

          {showCustomInput && (
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rich-brown text-lg font-bold">$</span>
                  <Input
                    type="number"
                    placeholder="0"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-8 bg-white border-white text-rich-brown placeholder:text-gray-400 text-lg py-6"
                  />
                </div>
              </div>
            </div>
          )}

          <Button
            size="lg"
            onClick={handleDonate}
            disabled={!selectedAmount && !customAmount}
            className="bg-coral-pink text-white hover:bg-coral-pink/90 px-12 py-6 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Donate Now
          </Button>

          <p className="text-sm opacity-80 mt-6 text-white">
            Your contribution supports independent cultural journalism.
          </p>
        </div>
      </div>
    </section>
  );
}