"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useChatbot } from "@/components/chatbotContext";
import { Image } from "@imagekit/next";

export default function CompositeBonding() {
  const { handleOpenChatbot } = useChatbot();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b overflow-hidden from-white to-purple-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 my-15 px-4 ml-auto mr-auto text-center lg:text-left">
              <motion.h1
                variants={fadeIn}
                className="text-5xl font-bold text-purple-900 leading-tight mb-6"
              >
                Composite Bonding
              </motion.h1>
              <motion.h2
                variants={fadeIn}
                className="text-2xl font-medium text-purple-800 mb-12"
              >
                Are discolored, uneven, or chipped front teeth making you feel
                self-conscious? Composite bonding is a quick, affordable, and
                effective solution to transform your smile and restore your
                confidence. This cosmetic dental treatment can address a wide
                range of imperfections, leaving you with a natural, radiant
                smile without the need for invasive procedures.
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChatbot}
                className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 ml-auto mr-auto mt-12 lg:mt-0"
            >
              <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src="hero/Services/cosmetic/3. Bonding (Permanant tooth Coloured fillings)/composite-syringes-light-curing-dental-fillings-prudentia-pune.JPG"
                  alt="Modern denture solutions"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-purple-100 rounded-lg p-3 shadow-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* What is Composite Bonding */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className=" bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center text-purple-900 mb-16"
          >
            What Is Composite Bonding?
          </motion.h2>

          <div className="flex flex-wrap items-center">
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Composite bonding is a non-invasive cosmetic treatment that uses
                a tooth-colored resin to reshape, rebuild, and restore your
                teeth. Whether it&apos;s covering discoloration, fixing chips,
                closing gaps, or correcting crooked teeth, this treatment
                enhances your smile with minimal tooth alteration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It&apos;s one of the most conservative and effective methods to
                improve the color, shape, and overall appearance of your teeth
                particularly for the front teeth, which have the most impact on
                your smile.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="w-full lg:w-1/2 px-4">
              <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src="hero/Services/cosmetic/3. Bonding (Permanant tooth Coloured fillings)/composite-syringes-light-curing-dental-fillings-prudentia-pune.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-4"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Discolored Teeth Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-20 bg-purple-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center text-purple-900 mb-10"
          >
            How Does Composite Bonding Fix Discolored Teeth?
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12"
          >
            Teeth discoloration is a common issue caused by:
          </motion.p>

          <div className="flex flex-wrap justify-center mb-12">
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="w-full md:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="text-purple-600 text-4xl mb-4">☕</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  Food & Lifestyle
                </h3>
                <p className="text-gray-700">Coffee, wine, and smoking</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="w-full md:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="text-purple-600 text-4xl mb-4">💊</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  Medical
                </h3>
                <p className="text-gray-700">Medication side effects</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="w-full md:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="text-purple-600 text-4xl mb-4">🪥</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  Hygiene
                </h3>
                <p className="text-gray-700">Poor oral hygiene</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
          >
            If you find yourself with yellowed or stained front teeth but
            aren&apos;t ready for costly whitening treatments, composite bonding
            is the perfect alternative. The resin used in bonding can
            effectively conceal discoloration, restoring the whiteness and
            brightness of your smile without damaging your natural enamel.
          </motion.p>
        </div>
      </motion.section>

      {/* How Bonding Improves Your Smile */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center text-purple-900 mb-16"
          >
            How Does Bonding Improve Your Smile?
          </motion.h2>

          <div className="flex flex-wrap items-center">
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 order-2 lg:order-1"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Crooked, misaligned, or gapped teeth can affect more than just
                your appearance, they can lower your self-esteem. Composite
                bonding offers a non-invasive, rapid solution to correct
                imperfections like:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">
                    Crooked or rotated teeth
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">Teeth with gaps</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">
                    Chipped or fractured teeth
                  </span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                This simple procedure allows you to reshape your teeth for a
                more harmonious, confident smile, all without the need for
                extensive dental work. Once complete, you&apos;ll have a
                beautiful, natural-looking smile that you&apos;ll want to show
                off at every opportunity!
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-1 lg:order-2"
            >
              <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src="hero/Services/cosmetic/3. Bonding (Permanant tooth Coloured fillings)/cosmetic-front-teeth-issues-collage-prudentia-dental-care-pimple-saudagar.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-4"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-20 bg-purple-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center text-purple-900 mb-16"
          >
            Transform Your Smile
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
            >
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src="hero/Services/cosmetic/3. Bonding (Permanant tooth Coloured fillings)/cosmetic-composite-fillings-front-teeth-gap-closure-prudentia-micro-dental-care-pimple-saudagar.jpg"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">
                  {" "}
                  Patient smile transformation
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
            >
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src="hero/Services/cosmetic/3. Bonding (Permanant tooth Coloured fillings)/non-invasive-chipped-tooth-repair-composite-contouring-prudentia-dental-care-pune.jpg"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">
                  {" "}
                  Gap closure with bonding
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
            >
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src="hero/Services/cosmetic/3. Bonding (Permanant tooth Coloured fillings)/cosmetic-bonding-chipped-tooth-before-after-aesthetic-repair-prudentia-pimple-saudagar.jpg"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm"> Chip repair example</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
            >
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src="hero/Services/cosmetic/3. Bonding (Permanant tooth Coloured fillings)/front-tooth-missing-fiber-reinforced-bridge-no-drill-smile-restoration-prudentia-pimple-saudagar.jpg"
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">
                  {" "}
                  Complete smile makeover
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-20 bg-purple-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
            Ready to Enhance Your Smile?
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg max-w-3xl mx-auto mb-10"
          >
            Your front teeth are crucial to your appearance, and composite
            bonding is one of the fastest and most affordable ways to correct
            any imperfections and achieve a flawless smile. At Prudentia Micro
            Dental Care, Pimple Saudagar we specialize in providing quick,
            precise, and effective bonding treatments to enhance your smile and
            your confidence.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: "#1e3a8a",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenChatbot}
              transition={{ duration: 0.2 }}
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-purple-900 transition duration-300"
            >
              Schedule your consultation today
            </motion.button>
            <p className="mt-4 text-purple-200">
              Take the first step toward the smile you deserve.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
