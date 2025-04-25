'use client';
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Easy Scheduling",
      description: "Book appointments online 24/7 at your convenience",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Extended Hours",
      description: "We offer flexible hours to accommodate your busy schedule",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Convenient Location",
      description: "Easily accessible location with ample parking",
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Emergency dental care available when you need it",
    },
  ];
  

export default function ChooseUs() {
  return (
    <div>
      <section id="about" className="mt-10 py-5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
