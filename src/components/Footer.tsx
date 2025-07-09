import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Residential Design',
    'Commercial Spaces',
    'Color Consultation',
    'Furniture Selection',
    'Lighting Design',
    'Luxury Finishing',
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg lg:text-2xl font-playfair font-bold text-white mb-2 lg:mb-4">
              Royal Interior
            </h3>
            <p className="text-white text-[0.65rem] lg:text-sm mb-3 lg:mb-6 leading-relaxed">
              Transforming spaces into luxury experiences with 15+ years of expertise in premium interior design.
            </p>
            <div className="flex space-x-2 lg:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-1.5 lg:p-2 rounded-full bg-secondary hover:bg-primary/20 text-white hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-3.5 w-3.5 lg:h-5 lg:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm lg:text-lg font-playfair font-semibold mb-2 lg:mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-1.5 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-[0.65rem] lg:text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm lg:text-lg font-playfair font-semibold mb-2 lg:mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-1.5 lg:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="text-white text-[0.65rem] lg:text-sm">
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm lg:text-lg font-playfair font-semibold mb-2 lg:mb-4 text-foreground">
              Contact Info
            </h4>
            <div className="space-y-2 lg:space-y-4">
              <div className="flex items-center">
                <Phone className="h-3.5 w-3.5 lg:h-5 lg:w-5 text-primary mr-1.5 lg:mr-3" />
                <div className="text-white text-[0.65rem] lg:text-sm">
                  +91 9711976969
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-3.5 w-3.5 lg:h-5 lg:w-5 text-white mr-1.5 lg:mr-3" />
                <div className="text-white text-[0.65rem] lg:text-sm">
                  info@royalinterior.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-4 lg:mt-8 pt-4 lg:pt-8 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="text-white text-[0.65rem] lg:text-sm mb-3 lg:mb-0 text-center">
            © 2025 Royal Interior. All rights reserved.
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:space-x-6 text-[0.65rem] lg:text-sm">
            <a href="#" className="text-white hover:text-primary transition-colors mb-2 lg:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors mb-2 lg:mb-0">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;