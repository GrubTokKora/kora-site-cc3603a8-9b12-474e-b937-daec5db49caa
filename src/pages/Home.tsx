import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DecorativeDivider } from '@/components/DecorativeDivider';
import { ChevronRight } from 'lucide-react';

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div 
          ref={heroRef}
          className="absolute inset-0 w-full h-[120%]"
          style={{
            backgroundImage: 'url(/images/hero-home.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <DecorativeDivider />
          
          {/* Logo */}
          <div className="w-32 h-32 md:w-40 md:h-40 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
              <circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#B8860B" strokeWidth="0.5"/>
              <text x="50" y="20" textAnchor="middle" fontSize="8" fill="#8B4513" fontWeight="bold" letterSpacing="2">FEAST</text>
              <text x="50" y="55" textAnchor="middle" fontSize="24" fill="#8B4513" fontWeight="bold" fontFamily="serif">NH44</text>
              <text x="50" y="68" textAnchor="middle" fontSize="6" fill="#8B4513" letterSpacing="1">EST. 2021</text>
              <text x="20" y="50" textAnchor="middle" fontSize="7" fill="#8B4513" fontWeight="bold" transform="rotate(-90 20 50)">INDIA</text>
              <text x="80" y="50" textAnchor="middle" fontSize="7" fill="#8B4513" fontWeight="bold" transform="rotate(90 80 50)">COMPANY</text>
            </svg>
          </div>
          
          <DecorativeDivider />
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Online
            </a>
            <Link to="/menu" className="btn-outline">
              View Menu
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DecorativeDivider />
          <h2 className="section-title mb-8">About Us</h2>
          <DecorativeDivider />
          
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            A presentation true to its journey spanning from the north to the southern most tip of India, 
            National Highway 44 is bringing to you delicacies from across the country. It is known to be 
            the longest highway in India at 2,555 miles (4112 km).
          </p>
          
          <p className="text-white/70 leading-relaxed mb-8">
            The flavorful food that we bring to the table represents an eclectic north to south culinary experience. 
            The menu developed by Jeevan Pullan & Roshan Balan showcases modern interpretations of culturally 
            important classics and the popular flavors of Indian roadside food.
          </p>
          
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-gold hover:text-yellow-400 transition-colors"
          >
            Learn More <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src="/images/food-1.jpg" 
                alt="Indian Cuisine" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src="/images/interior-1.jpg" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src="/images/food-2.jpg" 
                alt="Tandoori Dishes" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-32 relative"
        style={{
          backgroundImage: 'url(/images/food-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <DecorativeDivider />
          <h2 className="section-title mb-6">Experience the Flavors of India</h2>
          <p className="text-white/80 text-lg mb-8">
            From succulent kebabs to rich curries, explore our menu inspired by the diverse regions along National Highway 44.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://tables.toasttab.com/restaurants/f5ced673-e0ba-485f-9d40-00e45aa7f9d9/findTime"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reserve a Table
            </a>
            <Link to="/gallery" className="btn-outline">
              View Gallery
            </Link>
          </div>
          <DecorativeDivider />
        </div>
      </section>
    </div>
  );
}
