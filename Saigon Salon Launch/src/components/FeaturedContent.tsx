import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedContent() {
  const features = [
    {
      id: 1,
      title: "The New Avant-Garde",
      subtitle: "FASHION",
      description: "Exploring boundary-pushing designers who are reshaping contemporary fashion through radical creativity.",
      image: "https://images.unsplash.com/photo-1702757782097-69f077f37ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBtb2RlbHxlbnwxfHx8fDE3NTg1MzMyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "coral-pink"
    },
    {
      id: 2,
      title: "Words as Revolution",
      subtitle: "LITERATURE",
      description: "An intimate conversation with emerging voices who are transforming the literary landscape.",
      image: "https://images.unsplash.com/photo-1622132403461-5b32cf1115b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHlwZXdyaXRlciUyMHdyaXRpbmd8ZW58MXx8fHwxNzU4NTkwODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "ocean-blue"
    },
    {
      id: 3,
      title: "Digital Renaissance",
      subtitle: "ART & DESIGN",
      description: "How technology is creating new possibilities for artistic expression in the modern age.",
      image: "https://images.unsplash.com/photo-1675773518219-e804a7a06000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFnYXppbmUlMjBlZGl0b3JpYWwlMjBkZXNpZ258ZW58MXx8fHwxNzU4NTkwODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "nature-green"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h3 className="text-5xl md:text-6xl tracking-tight mb-4 text-rich-brown font-black">
            FEATURED
          </h3>
          <div className="w-20 h-2 bg-rich-brown mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article key={feature.id} className="group cursor-pointer">
              <div className="aspect-[4/5] mb-6 overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <div className={`text-sm tracking-widest font-bold text-${feature.color}`}>
                  {feature.subtitle}
                </div>
                <h4 className="text-2xl tracking-tight group-hover:text-ocean-blue transition-colors font-bold">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}