import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Address */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/90 mb-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-medium">219 E. Hartsdale Ave</span>
            </div>
            <p className="text-white/70 ml-6">Hartsdale, NY 10530</p>
          </div>

          {/* Phone & Hours */}
          <div>
            <a 
              href="tel:9145745262" 
              className="flex items-center justify-center md:justify-start gap-2 text-white/90 hover:text-gold transition-colors mb-4"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span className="font-medium">(914) 574-5262</span>
            </a>
            <div className="text-white/70 text-sm space-y-1">
              <p>Monday - Thursday: 11:30am - 9:30pm</p>
              <p>Friday - Saturday: 11:30am - 10pm</p>
              <p>Sunday: 11:30am - 9pm</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a 
              href="https://www.instagram.com/nh44indian/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/nh44indian/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.google.com/maps/place/NH+44+Indian/@41.0116348,-73.7956567,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
