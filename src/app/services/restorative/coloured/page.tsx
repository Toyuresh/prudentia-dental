"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Calendar,
  Smile,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { useChatbot } from "@/components/chatbotContext";
import Image from "next/image";

export default function CompositeFillings() {
  const { handleOpenChatbot } = useChatbot();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, transform: "translateY(30px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: "all 0.6s ease-out",
  };

  const staggerDelay = (index: number) => ({
    ...fadeInUp,
    transition: `all 0.6s ease-out ${index * 0.1}s`,
  });

  return (
    <div className="min-h-screen overflow-hidden py-5 bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0  bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div
            className="text-center space-y-6"
            style={isVisible ? fadeInUp : {}}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Restore Your Smile with
              <br />
              <span className="text-yellow-300">Natural-Looking</span>
              <br />
              Composite Fillings
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-black md:text-xl font-medium">
              <span className="bg-white  bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                Durable
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                Aesthetic
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                Tooth-Preserving
              </span>
            </div>
            <div className="mt-8 bg-white bg-opacity-90 rounded-2xl p-6 max-w-2xl mx-auto relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/images/services/restorative/coloured/Image1.jpg"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <div
            className="text-center mb-12"
            style={isVisible ? staggerDelay(1) : {}}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At{" "}
              <span className="font-semibold text-purple-600">
                Prudentia Micro Dental Care, Pimple Saudagar
              </span>{" "}
              we use composite (tooth-colored) fillings to repair teeth affected
              by decay, cracks, or fractures seamlessly blending with your
              natural tooth for a strong and beautiful result.
            </p>
          </div>
        </section>

        {/* What Are Composite Fillings */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" style={isVisible ? staggerDelay(2) : {}}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What Are Composite Fillings?
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/services/restorative/coloured/Image2.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Composite fillings are made from a tooth-colored resin
                  material that bonds directly to your natural tooth. Unlike
                  traditional metal fillings, they offer a more aesthetic and
                  conservative solution. Composite fillings are strong,
                  long-lasting, and ideal for restoring both function and
                  appearance.
                </p>
              </div>
            </div>
            <div
              className="grid grid-cols-2 gap-4"
              style={isVisible ? staggerDelay(3) : {}}
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Strong</h3>
                <p className="text-sm opacity-90">Durable protection</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <Smile className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Natural</h3>
                <p className="text-sm opacity-90">Seamless blend</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Quick</h3>
                <p className="text-sm opacity-90">Single visit</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Aesthetic</h3>
                <p className="text-sm opacity-90">Beautiful results</p>
              </div>
            </div>
          </div>
        </section>

        {/* When Are Composite Fillings Recommended */}
        <section className="mb-20">
          <div
            className="text-center mb-12"
            style={isVisible ? staggerDelay(4) : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              When Are Composite Fillings Recommended?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Composite fillings are an excellent choice for treating and
              repairing:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "Chipped or cracked teeth",
              "Cavities and tooth decay",
              "Gaps between teeth",
              "Worn or eroded teeth",
              "Minor reshaping or cosmetic corrections",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={isVisible ? staggerDelay(5 + index) : {}}
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center"
            style={isVisible ? staggerDelay(10) : {}}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/images/services/restorative/coloured/Image3.png"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Procedure Section */}
        <section className="mb-20">
          <div
            className="text-center mb-12"
            style={isVisible ? staggerDelay(11) : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How Is the Procedure Done?
            </h2>
            <p className="text-xl text-gray-700">
              Most composite fillings can be completed in just one comfortable
              appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="space-y-6"
              style={isVisible ? staggerDelay(12) : {}}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/services/restorative/coloured/Image4.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Numbing",
                  description:
                    "The area is gently numbed to ensure a painless experience.",
                },
                {
                  step: "2",
                  title: "Cleaning",
                  description:
                    "The decayed or damaged portion of the tooth is carefully removed.",
                },
                {
                  step: "3",
                  title: "Preparation",
                  description:
                    "The tooth is cleaned and prepped. If the decay is close to the nerve, a protective liner may be applied.",
                },
                {
                  step: "4",
                  title: "Filling Placement",
                  description:
                    "The composite material is applied in layers, shaped, hardened with a special light, and polished to perfection — restoring your tooth's natural shape and function.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
                  style={isVisible ? staggerDelay(13 + index) : {}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aftercare Section */}
        <section className="mb-20">
          <div
            className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white"
            style={isVisible ? staggerDelay(17) : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Aftercare & Longevity
            </h2>
            <p className="text-xl text-center mb-8 opacity-90">
              With proper care, composite fillings can last for many years.
            </p>

            <div className="grid md:grid-cols-3 text-black gap-6 mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Maintain good oral hygiene
                </h3>
                <p className="opacity-90">
                  brush twice daily and floss regularly
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Follow healthy eating habits
                </h3>
                <p className="opacity-90">limit sugary and acidic foods</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Schedule regular dental visits
                </h3>
                <p className="opacity-90">
                  early detection extends the life of your restorations
                </p>
              </div>
            </div>

            <p className="text-center text-lg opacity-90">
              We will provide you with personalized care instructions after your
              appointment.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            style={isVisible ? staggerDelay(18) : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Book Your Appointment Today
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether it&apos;s a minor chip or a new cavity, composite fillings
              can restore your smile beautifully and discreetly.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Call us today to schedule your consultation at{" "}
              <span className="font-semibold text-purple-600">
                Prudentia Micro Dental Care
              </span>{" "}
              where function meets aesthetics, and your smile gets the care it
              deserves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleOpenChatbot}
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Online
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}