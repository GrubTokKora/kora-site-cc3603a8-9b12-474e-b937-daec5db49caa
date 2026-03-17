import { HeroSection } from '@/components/HeroSection';
import { DecorativeDivider } from '@/components/DecorativeDivider';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  const hours = [
    { day: 'Monday - Thursday', time: '11:30am - 9:30pm' },
    { day: 'Friday - Saturday', time: '11:30am - 10pm' },
    { day: 'Sunday', time: '11:30am - 9pm' },
  ];

  return (
    <div className="pt-20">
      <HeroSection 
        title="Contact Us" 
        backgroundImage="/images/interior-3.jpg"
      />

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DecorativeDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="text-white font-medium text-lg">Address</h3>
                </div>
                <a 
                  href="https://maps.google.com/?q=219+E+Hartsdale+Ave+Hartsdale+NY+10530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold transition-colors block"
                >
                  219 E. Hartsdale Ave<br />
                  Hartsdale, NY 10530
                </a>
              </div>

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <h3 className="text-white font-medium text-lg">Phone</h3>
                </div>
                <a 
                  href="tel:9145745262"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  (914) 574-5262
                </a>
              </div>

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="text-white font-medium text-lg">Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((schedule) => (
                    <div key={schedule.day} className="text-white/70">
                      <span className="text-white/90">{schedule.day}:</span> {schedule.time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-left pt-4">
                <h3 className="text-white font-medium text-lg mb-4">Follow Us</h3>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a 
                    href="https://www.instagram.com/nh44indian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/nh44indian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.google.com/maps/place/NH+44+Indian/@41.0116348,-73.7956567,15z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-lg overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.583526362741!2d-73.7956567!3d41.0116348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2943c0f9e3a5d%3A0xf7de596ae1e68065!2sNH%2044%20Indian!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NH44 Indian Location"
                />
              </div>
            </div>
          </div>

          <DecorativeDivider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Ready to Experience NH44?
          </h2>
          <p className="text-white/70 mb-8">
            Reserve your table today and embark on a culinary journey along India's longest highway.
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
            <a 
              href="https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
