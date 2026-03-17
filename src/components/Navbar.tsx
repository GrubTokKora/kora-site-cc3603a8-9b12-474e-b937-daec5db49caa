import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const externalLinks = [
    { href: 'https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave/giftcards', label: 'Gift Card' },
    { href: 'https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave/marketing-signup', label: 'Subscribe' },
    { href: 'https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave', label: 'Order' },
    { href: 'https://tables.toasttab.com/restaurants/f5ced673-e0ba-485f-9d40-00e45aa7f9d9/findTime', label: 'Reserve' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs text-white/70">
            <div className="flex items-center gap-4">
              <a 
                href="https://maps.google.com/?q=219+E+Hartsdale+Ave+Hartsdale+NY+10530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MapPin className="w-3 h-3" />
                <span className="hidden sm:inline">219 E. Hartsdale Ave, Hartsdale, NY 10530</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:9145745262" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
                <span>(914) 574-5262</span>
              </a>
              <a href="mailto:info@nh44indian.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3 h-3" />
                <span>info@nh44indian.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-black/95 backdrop-blur-md shadow-lg' 
            : 'top-10 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#B8860B" strokeWidth="0.5"/>
                  <text x="50" y="20" textAnchor="middle" fontSize="8" fill="#8B4513" fontWeight="bold" letterSpacing="2">FEAST</text>
                  <text x="50" y="55" textAnchor="middle" fontSize="24" fill="#8B4513" fontWeight="bold" fontFamily="serif">NH44</text>
                  <text x="50" y="68" textAnchor="middle" fontSize="6" fill="#8B4513" letterSpacing="1">EST. 2021</text>
                  <text x="20" y="50" textAnchor="middle" fontSize="7" fill="#8B4513" fontWeight="bold" transform="rotate(-90 20 50)">INDIA</text>
                  <text x="80" y="50" textAnchor="middle" fontSize="7" fill="#8B4513" fontWeight="bold" transform="rotate(90 80 50)">COMPANY</text>
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'text-white' : ''}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Menu Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link flex items-center gap-1 outline-none">
                  Menu <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/95 border-white/20">
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer">
                    <a 
                      href="/nh44-indian-dining-menu.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      Dining Menu
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer">
                    <a 
                      href="/nh44-indian-catering-menu.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      Catering
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link ${link.label === 'Order' ? 'text-gold font-medium' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg ${isActive(link.path) ? 'text-gold' : 'text-white/90'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4">
              <p className="text-white/50 text-sm mb-2">Menu</p>
              <a 
                href="/nh44-indian-dining-menu.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/90 py-2"
              >
                Dining Menu
              </a>
              <a 
                href="/nh44-indian-catering-menu.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/90 py-2"
              >
                Catering
              </a>
            </div>
            <div className="border-t border-white/10 pt-4 space-y-3">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${link.label === 'Order' ? 'text-gold' : 'text-white/90'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
