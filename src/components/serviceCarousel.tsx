'use client';

import { useEffect, useRef } from 'react';
import ServiceCard from './serviceCard';

const ThemeCarousel = () => {
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const serviceCards = [
    {
      mainTitle: "Microscope",
      title: "Precision. Comfort. Care.",
      subtitle: "Experience the Power of 30x Magnification Dentistry",
      description: "At Prudentia Micro Dental Care, we use one of the few Dental Operating Microscopes in the country to deliver:",
      features: [
        "Ultra-accurate diagnosis",
        "Early cavity detection",
        "Minimally invasive treatments",
        "Faster healing process"
      ],
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Learn More",
      tagline: "Preventive. Holistic. Exceptional Care.",
      image: "/images/MicroService.png"
    },
      {
      mainTitle: "Caries",
      title: "Catch Cavities Before They Strike",
      subtitle: "No Guesswork. No Extra X-Rays. Just Precision.",
      description: "With our advanced Caries Detection Probe and Dental Microscope, we spot hidden decay long before it causes damage or pain.",
      features: [
        "Ultra-early cavity detection",
        "No unnecessary X-rays",
        "Quick, accurate, pain-free scanning",
      ],
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Learn More",
      tagline: "Scan your smile today — protect your pearly whites with confidence.",
      image: "/images/Caries.png"
    },
    {
      mainTitle: "Electronic Anesthesia",
      title: "Fear Needles? Not Anymore.",
      subtitle: "Painless Dental Anesthesia Is Here.",
      description: "At Prudentia Micro Dental Care, we use Electronic Anesthesia and soothing topical gels to deliver a virtually pain-free, stress-free experience—no sharp pricks, no anxiety.",
      features: [
        "Gentle, automated numbing",
        "No more fear of needles",
        "Maximum comfort, zero stress",
      ],
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Learn More",
      tagline: "Relax. We've made dentistry pain-free.",
      image: "/images/ADAE.jpeg"
    },
    {
      mainTitle: "Digital Xrays",
      title: "Safe. Smart. Seamless Dental Scans.",
      subtitle: "Worried About X-ray Radiation? We've Got You Covered.",
      description: "Our DC Digital X-Ray system uses 80% less radiation than traditional machines—without compromising on image clarity or comfort.",
      features: [
        "Ultra-low radiation exposure",
        "High-definition digital images",
        "Compact sensors for a better fit",
        "Instant results & easy digital records",
      ],
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Learn More",
      tagline: "Instant results & easy digital records",
      image: "/images/Xray.jpg"
    },
    {
      mainTitle: "Advanced Root Treatments",
      title: "Root Canal, Reinvented.",
      subtitle: "High Success. Zero Stress. Precision-Driven Care.",
      description: "At Prudentia Micro Dental Care, we perform routine and complex root canal treatments using the latest in microscopic and ultrasonic technology—ensuring long-term success with minimal discomfort.",
      features: [
        "Microscope-guided precision",
        "Advanced rotary & irrigation systems",
        "Maximum comfort, faster healing",
        "Trusted success, even in re-treatments",
      ],
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Learn More",
      tagline: "Experience high-grade, evidence-based root care—done right the first time.",
      image: "/images/RootTreatment.png"
    },
    {
      mainTitle: "High end Sterilization",
      title: "Your Safety Is Our Standard.",
      subtitle: "World-Class Sterilization. Zero Compromise.",
      description: "At Prudentia Micro Dental Care, we follow international hygiene protocols using advanced tools like a Class B Autoclave, Ultrasonic Cleanser, and UV Cabinet—ensuring a sterile, infection-free environment.",
      features: [
        "Sealed & sterilized instruments",
        "Hospital-grade disinfection",
        "Strict cross-infection control",
      ],
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Learn More",
      tagline: "Feel safe. Stay protected. Dental care you can trust.",
      image: "/images/Sterilization.png"
    },
    // Add more service card objects as needed
  ];

  useEffect(() => {
    // Duplicate cards for infinite scroll loop
    if (cardsTrackRef.current) {
      const originalContent = cardsTrackRef.current.innerHTML;
      cardsTrackRef.current.innerHTML = originalContent + originalContent;
    }
  }, []);

  return (
    <>

      <div className="w-full mx-auto py-12 bg-white">
        <div className="carousel overflow-hidden w-full relative px-4">
          <div
            ref={cardsTrackRef}
            className="cards-track flex gap-6 animate-scroll-horizontal w-max"
            style={{ animationDuration: '40s' }}
          >
            {serviceCards.map((card, index) => (
              <div key={index} className="w-[350px] flex-shrink-0">
                <ServiceCard {...card} />
              </div>
            ))}
          </div>
          
          {/* Gradient fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </>
  );
};

export default ThemeCarousel;