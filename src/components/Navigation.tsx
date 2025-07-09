import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  // Prevent background scrolling when menu or modal is open
  useEffect(() => {
    if (isMenuOpen || isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isContactOpen]);

  // Update navbar background on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed md:absolute top-0 left-0 right-0 z-50 text-white transition-all duration-300 h-[8vh] md:h-16 pt-0 md:pt-3 ${
        isScrolled ? 'bg-black/30 backdrop-blur-sm md:bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-1 sm:px-2 lg:px-8 relative">
        {/* Header with logo and mobile menu button */}
        <div className="flex items-center h-full md:justify-between">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 md:w-auto md:justify-start">
            <img
              src="royal_logo.png"
              alt="Royal Interior Logo"
              width={28}
              height={28}
              className="object-contain md:w-10 md:h-10"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-100 hover:text-white text-md font-medium tracking-wide transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Visible on desktop only */}
          <div className="hidden md:block">
            <Button
              className="relative z-10 bg-white text-black px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-100 transition duration-300"
              onClick={() => setIsContactOpen(true)}
            >
              Contact us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="z-10 md:hidden flex items-center justify-end w-full">
            <Button
              variant="ghost"
              size="sm"
              className="text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Slides in from right, full height, 2/3 width */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-2/3 bg-black/70 backdrop-blur-sm border-l border-zinc-700 shadow-lg transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 rounded-md hover:bg-black/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button
                className="w-full bg-white text-black font-semibold transition-all duration-300 rounded-md py-2 text-sm"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactOpen(true);
                }}
              >
                Contact Now
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        {isContactOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
              className="bg-white text-black p-4 sm:p-6 rounded-lg max-w-md w-full shadow-xl relative transform transition-all duration-300 ease-in-out scale-100"
            >
              <button
                className="absolute top-2 z-10 sm:top-3 right-2 sm:right-3 text-xl sm:text-2xl font-bold text-black"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close contact modal"
              >
                ×
              </button>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Royal Interior</h2>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <p>📞 <a href="tel:+919711976969" className="hover:underline">+91 9711976969</a></p>
                <p>📞 <a href="tel:+917088914558" className="hover:underline">+91 7088914558</a></p>
                <p>📧 <a href="mailto:royalinterior@example.com" className="hover:underline">royalinterior@example.com</a></p>
                <p>📍 Galleria Market, Gaur Yamuna City, G-32, Greater Noida, Uttar Pradesh 203201</p>
                <a
                  href="https://wa.me/9711976969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 sm:mt-4 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-green-600 transition"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;