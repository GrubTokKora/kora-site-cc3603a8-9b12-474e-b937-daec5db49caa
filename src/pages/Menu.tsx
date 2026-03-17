===
import { HeroSection } from '@/components/HeroSection';
import { DecorativeDivider } from '@/components/DecorativeDivider';
import { backbone } from '@/data';

export function Menu() {
  const { menu } = backbone;

  return (
    <div className="pt-20">
      <HeroSection 
        title="Our Menu" 
        backgroundImage="/images/food-hero.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {menu.map((category, index) => (
            <div key={index} className="mb-16">
              <DecorativeDivider />
              <h2 className="section-title mb-8">{category.category}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-left">
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <span className="flex-shrink-0 text-lg font-semibold text-gold">{item.price}</span>
                    </div>
                    <p className="text-white/70 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}