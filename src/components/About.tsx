
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters in creating the perfect space for our clients.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we complete.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning designs that exceed expectations every time.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient-gold">
              About Royal Interior
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in luxury interior design, we have established ourselves 
              as the premier choice for discerning clients who demand excellence. Our team of skilled 
              designers and craftsmen work tirelessly to transform spaces into works of art.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From contemporary minimalism to classic elegance, we specialize in creating bespoke 
              interiors that reflect your personality while maintaining the highest standards of 
              quality and sophistication.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 p-2 rounded-full gradient-gold w-fit">
                    <value.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-playfair font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Interior Design Studio"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md p-6 rounded-lg border border-border/50 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-gradient-gold mb-1">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Dream Spaces Created
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
