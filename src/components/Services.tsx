
import { Home, Palette, Lightbulb, Sofa, Building, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home makeovers that blend comfort with luxury, creating spaces that truly feel like home.',
      features: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms']
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Professional office and retail designs that enhance productivity and customer experience.',
      features: ['Office Design', 'Retail Spaces', 'Restaurants', 'Hotels']
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color schemes and palettes that create the perfect ambiance for every room.',
      features: ['Color Psychology', 'Paint Selection', 'Mood Boards', 'Lighting']
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that combine style, comfort, and functionality.',
      features: ['Custom Furniture', 'Space Planning', 'Style Matching', 'Quality Assurance']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that highlight your space\'s best features.',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting', 'Smart Controls']
    },
    {
      icon: Sparkles,
      title: 'Luxury Finishing',
      description: 'Premium materials and finishes that add the perfect touch of elegance.',
      features: ['Premium Materials', 'Custom Details', 'Artisan Crafts', 'Quality Control']
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gradient-gold">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your unique style and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full gradient-gold w-fit">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl font-playfair text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
