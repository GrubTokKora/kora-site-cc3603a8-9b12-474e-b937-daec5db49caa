import { HeroSection } from '@/components/HeroSection';
import { DecorativeDivider } from '@/components/DecorativeDivider';
import { ExternalLink } from 'lucide-react';

export function About() {
  const familyRestaurants = [
    {
      name: 'Jaipore Royal Indian Cuisine',
      location: 'Brewster, NY',
      url: 'https://jaiporenyc.com',
    },
    {
      name: 'Jaipore Express',
      location: 'Ridgefield, CT',
      url: 'https://jaiporect.com',
    },
    {
      name: 'VEGA Mexican Cuisine',
      location: 'Hartsdale, NY',
      url: 'https://vegamexican.com',
    },
    {
      name: 'Tako Mexican Street Food',
      location: 'Yonkers, NY',
      url: 'https://takomexican.com',
    },
  ];

  return (
    <div className="pt-20">
      <HeroSection 
        title="About Us" 
        backgroundImage="/images/interior-1.jpg"
      />

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DecorativeDivider />
          
          <div className="space-y-8 text-center">
            <p className="text-white/80 text-lg leading-relaxed">
              A presentation true to its journey spanning from the north to the southern most tip of India, 
              National Highway 44 is bringing to you delicacies from across the country. It is known to be 
              the longest highway in India at 2,555 miles (4112 km). The flavorful food that we bring to 
              the table represents an eclectic north to south culinary experience.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              The menu developed by <span className="text-gold font-medium">Jeevan Pullan & Roshan Balan</span> showcases 
              modern interpretations of culturally important classics and the popular flavors of Indian roadside 
              food from the surrounding regions of National Highway 44. The menu ranges from succulent kebabs 
              to rich curries and popular street vendor foods to exotic dishes from India. We are using 
              traditional Indian spices that are intrinsic to the flavors of each speciality being served.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              In addition, guests can also expect an assortment of premium beers and wines to complement the cuisine.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              The interiors of NH 44 have been designed by <span className="text-gold font-medium">Thida Kongthai</span> and 
              feature funky, vibrant murals inspired by trucks in India. It includes wall decor with Indian elements. 
              NH44 has a transformative atmosphere that celebrates India with its street culture and is the first of 
              its kind in Westchester County.
            </p>
          </div>

          <DecorativeDivider />
        </div>
      </section>

      {/* Family Restaurants Section */}
      <section className="py-16 md:py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DecorativeDivider />
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Our Family of Restaurants
          </h2>
          <p className="text-white/70 mb-12">
            We also welcome you to visit our expanding family of restaurants which includes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {familyRestaurants.map((restaurant) => (
              <a
                key={restaurant.name}
                href={restaurant.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white/5 rounded-lg border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-medium mb-1 group-hover:text-gold transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-white/60 text-sm mb-3">{restaurant.location}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Website <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>

          <DecorativeDivider />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
              <img 
                src="/images/interior-2.jpg" 
                alt="NH44 Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
              <img 
                src="/images/interior-3.jpg" 
                alt="NH44 Dining Area" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
