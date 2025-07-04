import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [IsOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="royal_logo.png" alt="Logo" width={35} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
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
          </div>

          {/* CTA Button */}
          <button
      className="relative z-10 bg-white text-black px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-100 transition duration-300"
      onClick={() => setIsOpen(true)}
    >
      Contact us
    </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-700 mt-2 rounded-md shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full gradient-gold text-black font-semibold transition-all duration-300">
                  Contact Now
                </Button>
              </div>
            </div>
          </div>
        )}
        {IsOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg max-w-md w-full shadow-xl relative">
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-black"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Royal Interior</h2>
            <div className="space-y-3 text-sm">
              <p>📞 +91 9711976969</p>
              <p>📧 royalinterior@example.com</p>
              <p>📍galleria market, Gaur Yamuna City, g-32, Greater Noida, Uttar Pradesh 203201 </p>
              <a
                href="https://wa.me/9711976969"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
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
