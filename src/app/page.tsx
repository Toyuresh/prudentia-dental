"use client";


import Reviews from "@/components/reviews";
import ContactUs from "@/components/contatcus";
import HeroSection from "@/components/heroSection";
import ServiceSection from "@/components/serviceSection";
import SmileSection from "@/components/SmileSection";
import ChooseUs from "@/components/chooseUs";

export default function Home() {

  return (
    <main className="min-h-screen">
  
      {/* Hero Section */}
      <HeroSection  />
      
      {/* Services Section */}
      <ServiceSection/>

      {/* Our Smile Transformations */}
      <SmileSection/>

      {/* Why Choose Us */}
      <ChooseUs/>

      <ContactUs />
    
      <Reviews />

   
    </main>
  );
}



