"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useChatbot } from '@/components/chatbotContext';

// Helper component for scroll-triggered animations
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current; // Store the current value in a variable
    
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(sectionElement);

    // Cleanup uses the stored variable
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${className}`}>
      {children}
    </div>
  );
};

export default function MicroDentistry() {
  const { handleOpenChatbot } = useChatbot();
  
  return (
    <div className="font-inter antialiased text-gray-800 bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Banner Section */}
        <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
          <Image
            src="/images/microBanner.jpg"
            alt="Micro-Dentistry Banner"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="z-0"
          />
          <div className="absolute inset-0 bg-purple-900 opacity-70 z-10"></div>
          <AnimatedSection className="relative z-20 text-center p-4">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Precision. Prevention. Preservation.
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-medium drop-shadow-md">
              Experience the Future of Dental Care
            </p>
          </AnimatedSection>
        </section>

        {/* Why Choose Micro-Dentistry? Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Why Choose Micro-Dentistry?</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Micro-Dentistry is a cutting-edge approach that uses advanced magnification (up to 30x) and intense
                illumination to detect and treat dental issues with unmatched accuracy. By integrating dental operating
                microscopes, we can spot early signs of tooth decay, cracked teeth, and gum disease often before they
                cause pain or visible damage.
              </p>
            </AnimatedSection>

            <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-10">
              <AnimatedSection className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/micro1.png"
                  alt="Micro-Dentistry Precision"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </AnimatedSection>
              <AnimatedSection className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-purple-700 mb-6">This minimally invasive technique empowers us to:</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Detect cavities before they appear on X-rays
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Perform root canal treatments with maximum precision
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Carry out cosmetic dental procedures with minimal tissue damage
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Conserve more of your natural teeth and gums
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How You Benefit from Micro-Dentistry Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">How You Benefit from Micro-Dentistry</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Every dental visit becomes an opportunity for early detection and conservative treatment. Whether it&apos;s a
                minor cavity or a full-mouth restoration, micro-dentistry ensures:
              </p>
            </AnimatedSection>

            <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-12 mt-10">
              <AnimatedSection className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/micro2.jpeg"
                  alt="Micro-Dentistry Benefits"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </AnimatedSection>
              <AnimatedSection className="w-full md:w-1/2">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Less pain, faster healing
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Minimal trauma to teeth and gums
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Greater preservation of healthy tooth structure
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Enhanced outcomes using fluorescence technology for early diagnosis
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Real-time video explanations of your treatment
                  </li>
                </ul>
                <AnimatedSection className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p>
                    By catching problems early, we prevent complex procedures later often avoiding root canals or
                    extractions altogether. You&aposll experience better oral health, improved hygiene, and more predictable
                    results.
                  </p>
                </AnimatedSection>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Treatments Performed with Micro-Dentistry Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Treatments Performed with Micro-Dentistry</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Dr. Bhushan is extensively trained in micro-dentistry and uses this high-precision method for:
              </p>
            </AnimatedSection>

            <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-10">
              <AnimatedSection className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/micro3.jpg"
                  alt="Micro-Dentistry Treatments"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </AnimatedSection>
              <AnimatedSection className="w-full md:w-1/2">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Early cavity detection and tooth decay treatment
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Root canal therapy and re-treatment of failed root canals
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Dental fillings, crowns, and bridges
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Cosmetic enhancements: veneers, tooth reshaping, stain removal
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Correction of chipped, discolored, or misaligned teeth
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    General dentistry procedures with minimally invasive techniques
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Experience the Future of Dental Care Section */}
        <section className="py-16 bg-purple-100">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-purple-800 mb-8">Experience the Future of Dental Care</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
                At our clinic, micro-dentistry is more than a tool, it&apos;s a philosophy of preservation, comfort, and long-term
                health. Ready for precise, patient-focused care?
              </p>
              <button
                onClick={handleOpenChatbot}
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book your Micro-Consultation today!
              </button>
              <p className="mt-6 text-md text-gray-600">
                See the difference at Prudentia Micro Dental Care, Pimple Saudagar!
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
}