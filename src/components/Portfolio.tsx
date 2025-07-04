import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';


const Portfolio = () => {

  const [IsOpen, setIsOpen] = useState(false)
  const services = [
    {
      id: 1,
      title: 'Glass Work',
      category: 'Glass Solutions',
      image: 'public/glasswork.jpg',
      description: 'Professional glass installation and custom glass solutions for modern interiors with precision craftsmanship.'
    },
    {
      id: 2,
      title: 'Curtain Rods',
      category: 'Window Solutions',
      image: 'curtainrods.jpg',
      description: 'Premium curtain rod installation with various styles and finishes to complement your interior design.'
    },
    {
      id: 3,
      title: 'Venetian Blinds',
      category: 'Window Solutions',
      image: 'venetianblinds.jpg',
      description: 'Elegant venetian blinds for sophisticated light control and privacy solutions in luxury spaces.'
    },
    {
      id: 4,
      title: 'Vertical Blinds',
      category: 'Window Solutions',
      image: 'verticalblinds.jpg',
      description: 'Modern vertical blinds perfect for large windows and sliding doors with contemporary styling.'
    },
    {
      id: 5,
      title: 'Wall Paper',
      category: 'Wall Solutions',
      image: 'wallpaper.jpg',
      description: 'Designer wallpapers to transform your walls with style, elegance, and distinctive patterns.'
    },
    {
      id: 6,
      title: 'Carpet Flooring',
      category: 'Flooring',
      image: 'carpetflooring.jpg',
      description: 'Premium carpet installation for ultimate comfort and luxury underfoot in residential spaces.'
    },
    {
      id: 7,
      title: 'Modular Kitchen',
      category: 'Kitchen Solutions',
      image: 'modularkitchen.jpg',
      description: 'Custom modular kitchen designs with modern functionality, style, and premium materials.'
    },
    {
      id: 8,
      title: 'Wooden Works',
      category: 'Carpentry',
      image: 'woodenwork.jpeg',
      description: 'Expert wooden craftsmanship for furniture and interior elements with attention to detail.'
    },
    {
      id: 9,
      title: 'PVC Panel',
      category: 'Wall Solutions',
      image: 'pvcpanel.jpg',
      description: 'Durable PVC panels for modern wall cladding and decoration with contemporary finishes.'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="text-sm tracking-[0.5rem] text-gray-400 uppercase mb-4">
              EXPLORE FURTHER
            </div>
            <h2 className="text-lg tracking-[0.2em] text-gray-300 uppercase">
              Our Services
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-zinc-950 overflow-hidden transition-all duration-500 hover:bg-zinc-800 rounded"

            >
              {/* Image Section */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-light tracking-[0.1em] text-white uppercase mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Hover Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="outline"
                    size="sm" 
                    className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-wider uppercase"
                  >
                    Get Quote
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Subtle Border Effect */}
              <div className="absolute inset-0 border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
          {services.slice(3, 9).map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-zinc-900 overflow-hidden transition-all duration-500 hover:bg-zinc-800"
            >
              {/* Image Section */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-gray-500 tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-lg font-light tracking-[0.05em] text-white uppercase mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Hover Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="outline"
                    size="sm" 
                    className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-wider uppercase"
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Subtle Border Effect */}
              <div className="absolute inset-0 border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-black hover:bg-white hover:text-black px-12 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-300"
          onClick={()=>{setIsOpen(true)}}>
            Contact Us for All Services
          </Button>
        </div>
      </div>
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
    </section>
  );
};

export default Portfolio;