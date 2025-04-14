
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";

const servicePackages = [
  {
    name: "Basic Pack",
    price: "D300",
    description: "Quick exterior wash for the busy professional",
    features: [
      "Exterior hand wash",
      "Wheel cleaning",
      "Tire dressing",
      "Hand drying"
    ],
    popular: false,
    icon: "🚿",
    id: "basic-wash"
  },
  {
    name: "Premium",
    price: "D1000",
    description: "Our most popular complete wash package",
    features: [
      "Everything in Basic Pack",
      "Interior vacuuming",
      "Dashboard cleaning",
      "Window cleaning",
      "Air freshener"
    ],
    popular: true,
    icon: "✨",
    id: "premium-wash"
  },
  {
    name: "Full Spa",
    price: "D2500",
    description: "Comprehensive detailing inside and out",
    features: [
      "Everything in Premium",
      "Clay bar treatment",
      "Wax application",
      "Leather conditioning",
      "Carpet shampooing",
      "Engine bay cleaning"
    ],
    popular: false,
    icon: "💎",
    id: "full-spa"
  },
  {
    name: "The Ultimate",
    price: "D5000",
    description: "The complete package for showroom quality finish",
    features: [
      "Everything in Full Spa",
      "Paint correction",
      "Ceramic coating",
      "Headlight restoration",
      "Interior deep conditioning",
      "Undercarriage cleaning",
      "Premium detailing kit"
    ],
    popular: false,
    icon: "👑",
    id: "ultimate"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleBooking = (serviceId: string) => {
    window.location.href = `https://tally.so/r/3jEG1J?service=${serviceId}`;
  };

  return (
    <section id="services" className="py-20 bg-autospa-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-autospa-yellow">Services</span></h2>
          <p className="text-xl text-autospa-gray max-w-2xl mx-auto">
            Choose from our range of professional car wash and detailing packages tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicePackages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${pkg.popular ? 'border-autospa-yellow ring-2 ring-autospa-yellow/20 relative' : 'border-gray-200'} animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-autospa-yellow text-autospa-black px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-0">
                <div className="text-4xl mb-4 animate-scale-in" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>{pkg.icon}</div>
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <div className="mt-2 mb-2">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                </div>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1 + i * 0.1}s` }}>
                      <Check className="h-5 w-5 text-autospa-yellow mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {index === 0 ? (
                  <Button 
                    className="w-full bg-autospa-yellow text-autospa-black hover:bg-autospa-black hover:text-white transition-colors duration-300"
                    asChild
                  >
                    <a href="tel:2207898519" className="flex items-center justify-center">
                      <PhoneCall className="mr-2 h-4 w-4" /> Call Now
                    </a>
                  </Button>
                ) : (
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-autospa-yellow text-autospa-black hover:bg-autospa-black hover:text-white' : 'bg-autospa-black text-white hover:bg-autospa-yellow hover:text-autospa-black'} transition-colors duration-300`}
                    onClick={() => handleBooking(pkg.id)}
                  >
                    Book Now
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
