
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Omar Sowe",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    stars: 5,
    testimonial: "The Ultimate Auto Spa transformed my car! It looks better than when I first bought it. The team is professional, thorough, and genuinely cares about their work."
  },
  {
    name: "Ebou Badjie",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    stars: 5,
    testimonial: "I've been to many car washes over the years, but none compare to The Ultimate Auto Spa. Their attention to detail is unmatched and the customer service is exceptional."
  },
  {
    name: "Seedy Suso",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    stars: 5,
    testimonial: "I was amazed at how they restored my 10-year-old car's interior. It looks and smells brand new! Highly recommend their Ultimate Detail package."
  },
  {
    name: "Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    stars: 4,
    testimonial: "Fast, friendly service and great results. My car hasn't looked this good in years. Will definitely be returning for regular maintenance washes."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-autospa-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Customer <span className="text-autospa-yellow">Testimonials</span></h2>
          <p className="text-xl text-autospa-gray max-w-2xl mx-auto">
            Don't just take our word for it - here's what our satisfied customers have to say
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border-t-4 border-autospa-yellow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.stars ? "fill-autospa-yellow text-autospa-yellow" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-autospa-gray">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
