
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const services = [
    {
      id: 1,
      title: 'Glass Work',
      category: 'Glass Solutions',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional glass installation and custom glass solutions for modern interiors.'
    },
    {
      id: 2,
      title: 'Curtain Rods',
      category: 'Window Solutions',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium curtain rod installation with various styles and finishes.'
    },
    {
      id: 3,
      title: 'Venetian Blinds',
      category: 'Window Solutions',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant venetian blinds for light control and privacy solutions.'
    },
    {
      id: 4,
      title: 'Vertical Blinds',
      category: 'Window Solutions',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern vertical blinds perfect for large windows and sliding doors.'
    },
    {
      id: 5,
      title: 'Wall Paper',
      category: 'Wall Solutions',
      image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Designer wallpapers to transform your walls with style and elegance.'
    },
    {
      id: 6,
      title: 'Carpet Flooring',
      category: 'Flooring',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium carpet installation for comfort and luxury underfoot.'
    },
    {
      id: 7,
      title: 'Modular Kitchen',
      category: 'Kitchen Solutions',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Custom modular kitchen designs with modern functionality and style.'
    },
    {
      id: 8,
      title: 'Wooden Works',
      category: 'Carpentry',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Expert wooden craftsmanship for furniture and interior elements.'
    },
    {
      id: 9,
      title: 'PVC Panel',
      category: 'Wall Solutions',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Durable PVC panels for modern wall cladding and decoration.'
    },
    {
      id: 10,
      title: 'Wooden Flooring',
      category: 'Flooring',
      image: 'https://images.unsplash.com/photo-1558618663-fcd4c3cd1d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium wooden flooring installation for timeless elegance.'
    },
    {
      id: 11,
      title: 'Ceiling Gypsum Tile',
      category: 'Ceiling Solutions',
      image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional gypsum ceiling tile installation for modern interiors.'
    },
    {
      id: 12,
      title: 'Advertising Works',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Creative advertising solutions and signage for businesses.'
    },
    {
      id: 13,
      title: 'Glass Film',
      category: 'Glass Solutions',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Decorative and privacy glass films for windows and partitions.'
    },
    {
      id: 14,
      title: 'Profile Door',
      category: 'Doors & Windows',
      image: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-quality profile doors with modern designs and security features.'
    },
    {
      id: 15,
      title: 'Aluminium Door & Window',
      category: 'Doors & Windows',
      image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Durable aluminium doors and windows with contemporary styling.'
    },
    {
      id: 16,
      title: 'PVC Door',
      category: 'Doors & Windows',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Weather-resistant PVC doors for long-lasting performance.'
    },
    {
      id: 17,
      title: 'SS Railing & Gate',
      category: 'Safety & Security',
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium stainless steel railings and gates for safety and style.'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gradient-gold">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior solutions with premium quality and expert craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      className="gradient-gold text-black font-semibold w-full"
                    >
                      Get Quote
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/10 px-8"
          >
            Contact Us for All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
