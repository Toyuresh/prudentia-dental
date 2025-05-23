"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Smile, Users, Award, Phone } from "lucide-react";
import { useChatbot } from "@/components/chatbotContext";
import Image from "next/image";

type VisibilityState = {
  [key: string]: boolean;
};

export default function OralHygieneInstructions() {
  const { handleOpenChatbot } = useChatbot();
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (sectionId: string) => ({
    opacity: isVisible[sectionId] ? 1 : 0,
    transform: isVisible[sectionId] ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.6s ease-out",
  });

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            id="section-hero"
            className="text-center transform transition-all duration-1000"
            style={fadeInUp("section-hero")}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Oral Hygiene Instructions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Your First Step Toward a Healthier Smile
            </p>

            {/* Placeholder for INSERT IMAGE 1 */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-30">
                <Image
                  src="/images/services/preventive/oral/Image1.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div
          id="section-intro"
          className="mb-16 transform transition-all duration-700 delay-200"
          style={fadeInUp("section-intro")}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <Smile className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Prevention is the Foundation
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl mb-6">
                At Prudentia Micro Dental Care, we believe prevention is the
                foundation of long-lasting oral health. Maintaining a strong
                oral hygiene routine is the most effective way to prevent dental
                issues, preserve your natural teeth, and keep your smile
                radiant.
              </p>
              <p className="text-lg md:text-xl">
                During your routine visits, we go beyond basic check-ups. Our
                team takes time to educate, demonstrate, and customize your home
                care regimen, empowering you to take control of your dental
                health and avoid future complications.
              </p>
            </div>
          </div>
        </div>

        {/* General Guidelines Header */}
        <div
          id="section-guidelines-header"
          className="mb-12 transform transition-all duration-700 delay-300"
          style={fadeInUp("section-guidelines-header")}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              General Oral Hygiene Guidelines:
            </h2>

            {/* Placeholder for INSERT IMAGE 2 */}
            <div className="max-w-2xl  relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8 mx-auto">
              <Image
                src="/images/services/preventive/oral/Image2.png"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Guidelines List */}
        <div className="space-y-8 mb-16">
          {/* Guideline 1 */}
          <div
            id="section-brush"
            className="transform transition-all duration-700 delay-400"
            style={fadeInUp("section-brush")}
          >
            <div className="bg-gradient-to-r from-purple-50 to-purple-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Brush Twice a Day
                </h3>
              </div>
              <div className="ml-16 space-y-3 text-gray-700">
                <p className="text-lg">
                  Use a soft-bristled toothbrush and herbal or natural
                  toothpaste.
                </p>
                <p className="text-lg">
                  Hold your brush at a 45-degree angle to the gum line to remove
                  plaque effectively.
                </p>
                <p className="text-lg">
                  Brush all surfaces outer, inner, and chewing and don&apos;t
                  forget the back teeth.
                </p>
              </div>
            </div>
          </div>

          {/* Guideline 2 */}
          <div
            id="section-floss"
            className="transform transition-all duration-700 delay-500"
            style={fadeInUp("section-floss")}
          >
            <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Floss Twice Daily
                </h3>
              </div>

              {/* Placeholder for INSERT IMAGE 3 */}
              <div className="ml-16 mb-6 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/services/preventive/oral/Image3.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="ml-16 space-y-3 text-gray-700">
                <p className="text-lg">
                  Brushing alone can&apos;t clean between your teeth. Floss
                  daily to remove debris and plaque from tight spaces.
                </p>
                <p className="text-lg">
                  Use about 12 -18 inches of floss, wrap it around your fingers,
                  and gently glide it between each tooth.
                </p>
                <p className="text-lg">
                  For added ease, consider interdental brushes or water
                  flossers, especially if you have braces or limited dexterity.
                </p>
              </div>
            </div>
          </div>

          {/* Guideline 3 */}
          <div
            id="section-tongue"
            className="transform transition-all duration-700 delay-600"
            style={fadeInUp("section-tongue")}
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Clean Your Tongue
                </h3>
              </div>
              <div className="ml-16 space-y-3 text-gray-700">
                <p className="text-lg">
                  Your tongue harbors bacteria that contribute to bad breath and
                  plaque formation.
                </p>
                <p className="text-lg">
                  Brush your tongue with your toothbrush or use a tongue scraper
                  for a cleaner, fresher mouth.
                </p>
              </div>
            </div>
          </div>

          {/* Guideline 4 */}
          <div
            id="section-visit"
            className="transform transition-all duration-700 delay-700"
            style={fadeInUp("section-visit")}
          >
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Visit the Dentist Regularly
                </h3>
              </div>
              <div className="ml-16 space-y-3 text-gray-700">
                <p className="text-lg">
                  Regular dental check-ups and professional cleanings are
                  essential.
                </p>
                <p className="text-lg">
                  Most people benefit from biannual visits, but if you have gum
                  disease, frequent cavities, or other concerns, we may
                  recommend more frequent check-ins.
                </p>
              </div>
            </div>
          </div>

          {/* Guideline 5 */}
          <div
            id="section-tobacco"
            className="transform transition-all duration-700 delay-800"
            style={fadeInUp("section-tobacco")}
          >
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Avoid Tobacco Products
                </h3>
              </div>
              <div className="ml-16 space-y-3 text-gray-700">
                <p className="text-lg">
                  Smoking is a major risk factor for gum disease, tooth loss,
                  and oral cancer.
                </p>
                <p className="text-lg">
                  If you currently use tobacco and want to quit, we&apos;re here
                  to guide you toward effective cessation strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters Section */}
        <div
          id="section-matters"
          className="mb-16 transform transition-all duration-700 delay-900"
          style={fadeInUp("section-matters")}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why This Matters:
              </h2>
            </div>

            {/* Placeholder for INSERT IMAGE 4 */}
            <div className="max-w-2xl mx-auto mb-8 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/images/services/preventive/oral/Image4.jpeg"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="text-center">
              <p className="text-lg md:text-xl leading-relaxed">
                A healthy mouth isn&apos;t just about a pretty smile, it&apos;s
                also vital to your overall health. Good oral hygiene reduces
                your risk of heart disease, diabetes complications, and systemic
                infections. The key is consistency and the right techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Personalized Care Section */}
        <div
          id="section-personalized"
          className="mb-16 transform transition-all duration-700 delay-1000"
          style={fadeInUp("section-personalized")}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Let&apos;s Personalize Your Care
              </h2>
            </div>

            {/* Placeholder for INSERT IMAGE 5 */}
            <div className="max-w-2xl mx-auto mb-8 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/images/services/preventive/oral/Image5.png"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Every smile is unique. That&apos;s why we take time during your
                visit to design a custom oral hygiene routine suited to your
                specific needs, lifestyle, and dental history.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          id="section-cta"
          className="transform transition-all duration-700 delay-1100"
          style={fadeInUp("section-cta")}
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <Phone className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Schedule a consultation at Prudentia Micro Dental Care, Pimple
              Saudagar to receive a personalized hygiene guide and get started
              on your journey to optimal oral health.
            </p>
            <button
              onClick={handleOpenChatbot}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
