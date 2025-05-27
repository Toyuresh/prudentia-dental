"use client";
import React, { useState, useEffect } from "react";
import { Shield, Moon, Activity, Zap, ChevronDown } from "lucide-react";
import Head from "next/head";
import { useChatbot } from "@/components/chatbotContext";
import { Image } from "@imagekit/next";

type VisibilityState = {
  [key: string]: boolean;
};

export default function MouthguardsPage() {
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
    <>
      <Head>
        <title>
          Mouthguards for Teeth Grinding & Sports | Prudentia Dental
        </title>
        <meta
          name="description"
          content="Custom night guards and sport mouthguards to protect your teeth from grinding and injuries. Prevent dental damage with our precision-fit solutions."
        />
      </Head>

      <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-400 to-purple-800 text-white">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div
              id="section-hero"
              className="text-center transform transition-all duration-1000"
              style={fadeInUp("section-hero")}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Mouthguards for Teeth Grinding & Sports Injuries
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Protect Your Smile. Prevent Future Damage.
              </p>

              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-white bg-opacity-20 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-30">
                  <Image
                    urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                    src="hero/Services/preventive/2. Mouth guards and sport guards/teeth-grinding-treatment-night-guard-pune-prudentia.jpg"
                    alt="Modern denture solutions"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

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
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl mb-6">
                  Many people unknowingly grind their teeth during stressful
                  moments or while sleeping, a condition known as bruxism. While
                  this habit is involuntary, the pressure it places on your
                  teeth and jaw can lead to long- term dental issues, including
                  microfractures, enamel wear, and TMJ problems.
                </p>
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          <div
            id="section-symptoms"
            className="mb-16 transform transition-all duration-700 delay-300"
            style={fadeInUp("section-symptoms")}
          >
            <div className="bg-gradient-to-r from-purple-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
              <div className="text-center mb-8">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Common Symptoms of Teeth Grinding:
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 ">
                <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                    src="hero/Services/preventive/2. Mouth guards and sport guards/teeths-grinding-treatment-night-guard-pune-prudentia.jpg"
                    alt="Modern denture solutions"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Worn-down or flattened tooth enamel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Increased tooth sensitivity
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">Jaw pain or stiffness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Tired or tight jaw muscles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Headaches, especially upon waking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Interrupted sleep or discomfort at night
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Night Guards Section */}
          <div
            id="section-night-guards"
            className="mb-16 transform transition-all duration-700 delay-400"
            style={fadeInUp("section-night-guards")}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <Moon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Night Guards: Protection While You Sleep
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                    src="hero/Services/preventive/2. Mouth guards and sport guards/customs-sports-mouthguard-dental-protection-pune.jpg"
                    alt="Modern denture solutions"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <p className="text-lg mb-6">
                    At Prudentia Micro Dental Care, we provide customized night
                    guards tailored to your unique bite. These are designed to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Prevent premature enamel wear
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Alleviate jaw tension and morning headaches
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Reduce the risk of developing Temporomandibular Joint
                        (TMJ) issues
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Improve overall sleep quality and comfort
                      </span>
                    </li>
                  </ul>
                  <p className="text-lg mt-6">
                    Each night guard is precision-fit to your mouth for maximum
                    comfort and effectiveness, ensuring restful sleep and
                    long-term protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sport Guards Section */}
          <div
            id="section-sport-guards"
            className="mb-16 transform transition-all duration-700 delay-500"
            style={fadeInUp("section-sport-guards")}
          >
            <div className="bg-gradient-to-r from-purple-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
              <div className="text-center mb-8">
                <Activity className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Custom Sport Guards: Protection During Physical Activity
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                    src="hero/Services/preventive/2. Mouth guards and sport guards/custom-sportss-mouthguard-dental-protection-pune.jpg"
                    alt="Modern denture solutions"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="order-2 md:order-1">
                  <p className="text-lg mb-6">
                    Whether you&apos;re on the field or at the gym, dental
                    injuries are common during contact sports and high- impact
                    activities. A custom sport mouthguard acts as a shield over
                    your upper teeth, lowering the risk of:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">Broken or chipped teeth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">Gum injuries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">Jaw trauma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">Tooth loss</span>
                    </li>
                  </ul>
                  <p className="text-lg mt-6">
                    Our sport guards are designed for athletes of all ages and
                    are crafted for optimal fit, durability, and comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div
            id="section-benefits"
            className="mb-16 transform transition-all duration-700 delay-600"
            style={fadeInUp("section-benefits")}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Choose a Custom-Fitted Mouthguard?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                    src="hero/Services/preventive/2. Mouth guards and sport guards/custom-sportsss-mouthguard-dental-protection-pune.jpg"
                    alt="Modern denture solutions"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Superior comfort compared to over-the-counter guards
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Designed specifically for your bite and jaw alignment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Better compliance and ease of use
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                        •
                      </span>
                      <span className="text-lg">
                        Provides muscle relaxation and helps relieve
                        clenching-induced stress
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            id="section-cta"
            className="transform transition-all duration-700 delay-700"
            style={fadeInUp("section-cta")}
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Protect Your Teeth?
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Whether you&apos;re managing nighttime grinding or need
                protection during sports, a custom mouthguard is a smart,
                preventive solution. At Prudentia Micro Dental Care, Pimple
                Saudagar we&apos;re here to help you safeguard your smile with
                comfort and precision.
              </p>
              <button
                onClick={handleOpenChatbot}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book a Micro-Consultation today to find the right mouthguard for
                you.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
