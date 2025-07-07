import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Glass Work',
      category: 'Glass Solutions',
      images: ['glasswork.jpg', 'glasswork2.jpg', 'glasswork3.jpg'],
      description: 'Custom glass installations for partitions, doors, and décor to enhance modern interior aesthetics.',
      detailedDescription: 'We specialize in bespoke glass solutions, including frosted glass partitions, tempered glass doors, and decorative glass panels. Our installations are tailored to elevate aesthetics while ensuring durability and safety, perfect for modern homes and offices.'
    },
    {
      id: 2,
      title: 'Curtain Rods',
      category: 'Home Essentials',
      images: ['curtainrods.jpg', 'curtainrods2.webp'],
      description: 'Stylish and durable curtain rod fittings for all types of window treatments and drapery setups.',
      detailedDescription: 'Our curtain rods come in a variety of finishes including stainless steel, brass, and matte black. We offer single, double, and motorized rod systems to suit traditional and contemporary drapery needs, ensuring seamless installation and operation.'
    },
    {
      id: 3,
      title: 'Venetian Blinds',
      category: 'Window Treatments',
      images: ['venetianblinds.jpg', 'venetianblinds2.png'],
      description: 'Sleek aluminum or wooden blinds offering precise light control with a modern look.',
      detailedDescription: 'Choose from aluminum, faux wood, or natural wood Venetian blinds available in multiple slat sizes. Our blinds offer excellent light control, UV protection, and are easy to clean, making them ideal for both residential and commercial spaces.'
    },
    {
      id: 4,
      title: 'Vertical Blinds',
      category: 'Window Treatments',
      images: ['verticalblinds.jpg', 'verticalblinds2.avif'],
      description: 'Elegant vertical blinds ideal for large windows and sliding doors with smooth operation.',
      detailedDescription: 'Our vertical blinds are available in fabric, PVC, and aluminum materials, with customizable colors and textures. Perfect for large windows and sliding doors, they provide excellent light filtering and privacy with smooth, durable operation.'
    },
    {
      id: 5,
      title: 'Wall Paper',
      category: 'Wall Finishes',
      images: ['wallpaper.jpg', 'wallpaper2.jpg', 'wallpaper3.webp'],
      description: 'Premium decorative wallpapers in various textures and patterns for every room style.',
      detailedDescription: 'We offer an extensive range of wallpapers, including vinyl, non-woven, and textured options. From bold patterns to subtle hues, our wallpapers are designed for durability, easy maintenance, and to transform any room into a stylish space.'
    },
    {
      id: 6,
      title: 'Carpet Flooring',
      category: 'Flooring Solutions',
      images: ['carpetflooring.jpg', 'carpetflooring2.jpg'],
      description: 'Soft and luxurious carpet installations for warmth, sound insulation, and elegance.',
      detailedDescription: 'Our carpets are available in plush, berber, and patterned styles, crafted from high-quality materials like wool, nylon, and polyester. Ideal for bedrooms and living areas, they provide comfort, sound insulation, and a luxurious feel.'
    },
    {
      id: 7,
      title: 'Modular Kitchen',
      category: 'Kitchen Design',
      images: ['modularkitchen.jpg', 'modularkitchen2.webp'],
      description: 'Space-optimized modular kitchen setups with stylish cabinets and functional layouts.',
      detailedDescription: 'Our modular kitchens feature customizable cabinetry, countertops, and storage solutions in materials like laminate, acrylic, and wood. Designed for functionality and style, we offer L-shaped, U-shaped, and island layouts to suit any space.'
    },
    {
      id: 8,
      title: 'Wooden Works',
      category: 'Carpentry Solutions',
      images: ['woodenwork.jpeg', 'woodenwork2.webp'],
      description: 'Expert woodworking services for furniture, cabinetry, and custom wood installations.',
      detailedDescription: 'Our woodworking services include custom furniture, cabinetry, and decorative wood panels crafted from oak, teak, and plywood. Each piece is designed with precision, offering both aesthetic appeal and long-lasting durability.'
    },
    {
      id: 9,
      title: 'PVC Panel',
      category: 'Wall Cladding',
      images: ['pvcpanel.jpg', 'pvcpanel2.jpg'],
      description: 'Waterproof PVC panels for interior wall décor and false ceiling solutions.',
      detailedDescription: 'Our PVC panels are lightweight, waterproof, and available in various designs, including 3D and textured finishes. Perfect for bathrooms, kitchens, and false ceilings, they are easy to install and maintain.'
    },
    {
      id: 10,
      title: 'Wooden Flooring',
      category: 'Flooring Solutions',
      images: ['woodenflooring.jpg', 'woodenflooring2.webp'],
      description: 'Durable and elegant wooden flooring for a natural and timeless interior finish.',
      detailedDescription: 'We offer hardwood, engineered wood, and laminate flooring options in species like oak, maple, and walnut. Our flooring solutions are durable, easy to maintain, and provide a timeless aesthetic for any interior.'
    },
    {
      id: 11,
      title: 'Ceiling Gypsum Tile',
      category: 'Ceiling Design',
      images: ['ceilingzipsumtile.jpg', 'ceilingzipsumtile2.webp'],
      description: 'Decorative gypsum ceiling tiles for a refined and modern false ceiling look.',
      detailedDescription: 'Our gypsum ceiling tiles come in intricate designs and patterns, perfect for creating elegant false ceilings. Lightweight and fire-resistant, they are ideal for both residential and commercial spaces.'
    },
    {
      id: 12,
      title: 'Front Elevation',
      category: 'Exterior Design',
      images: ['frontElevation.jpg', 'frontElevation2.jpg'],
      description: 'Striking front elevation designs to enhance your building’s curb appeal.',
      detailedDescription: 'Our front elevation designs combine modern and classic elements, using materials like stone, glass, and plaster. We create visually appealing and structurally sound facades to enhance your property’s exterior.'
    },
    {
      id: 13,
      title: 'Glass Films',
      category: 'Glass Enhancements',
      images: ['glassfilm.jpg', 'glassfilm2.jpeg'],
      description: 'Privacy and decorative films for windows and glass partitions with UV protection.',
      detailedDescription: 'Our glass films include frosted, tinted, and decorative options, offering privacy, UV protection, and aesthetic enhancement. Easy to apply, they are perfect for windows, glass doors, and partitions.'
    },
    {
      id: 14,
      title: 'Doors',
      category: 'Interior Solutions',
      images: ['doorimg.jpeg', 'doorimg2.webp','pvcdoor.webp'],
      description: 'Designer doors in wood, glass, or laminate finish to match your home’s aesthetics.',
      detailedDescription: 'We provide a wide range of doors, including steel profile doors, solid wooden doors, PVC doors, and glass doors. Each is crafted for durability, security, and style, with customizable finishes to match your interior.'
    },
    {
      id: 15,
      title: 'Railing',
      category: 'Safety & Decor',
      images: ['glassrailing.jpg', 'glassrailing2.jpg'],
      description: 'Modern railings in glass or steel for balconies, stairs, and terraces.',
      detailedDescription: 'Our railings are available in tempered glass, stainless steel, and aluminum, designed for safety and style. Perfect for balconies, staircases, and terraces, they offer durability and modern aesthetics.'
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

  const openModal = (service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  const prevImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length);
    }
  };

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
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-zinc-950 overflow-hidden transition-all duration-500 hover:bg-zinc-800 rounded cursor-pointer"
              onClick={() => openModal(service)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-light tracking-[0.1em] text-white uppercase mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-black hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-wider uppercase"
                  >
                    More info
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="absolute inset-0 border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="text-black hover:bg-gray-200 hover:text-black transition-all duration-300 px-10 py-3 uppercase text-xs tracking-wider"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'View Less' : 'View More'}
          </Button>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-black hover:bg-white hover:text-black px-12 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            Contact Us for All Services
          </Button>
        </div>
      </div>

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg max-w-md w-full shadow-xl relative">
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-black"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Royal Interior</h2>
            <div className="space-y-3 text-sm">
              <p>📞 +91 9711976969</p>
              <p>📞 +91 7088914558</p>
              <p>📧 royalinterior@example.com</p>
              <p>📍 Galleria Market, Gaur Yamuna City, G-32, Greater Noida, Uttar Pradesh 203201</p>
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

      {/* Service Detail Modal with Image Slider */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg max-w-4xl w-full shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-black"
              onClick={closeModal}
            >
              <X />
            </button>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-[0.1em]">{selectedService.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image Slider */}
              <div className="relative">
                <img
                  src={selectedService.images[currentImageIndex]}
                  alt={`${selectedService.title} ${currentImageIndex + 1}`}
                  className="w-full h-[300px] object-cover rounded"
                />
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="flex justify-center mt-2 gap-2">
                  {selectedService.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-black' : 'bg-gray-300'}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
              {/* Detailed Description */}
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{selectedService.detailedDescription}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-black/20 text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider uppercase"
                >
                  Get Quote
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;