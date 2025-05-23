"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useChatbot } from "@/components/chatbotContext";
import Image from "next/image";

export default function DentalSealants() {
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

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className=" overflow-hidden bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 opacity-30"></div>
          <motion.div
            className="absolute -top-1/4 -right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-purple-200 opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center lg:text-left">
              <motion.h1
                variants={fadeIn}
                className="text-5xl font-bold text-purple-900 leading-tight mb-6"
              >
                Dental Sealants
              </motion.h1>
              <motion.h2
                variants={fadeIn}
                className="text-2xl font-medium text-purple-700 mb-12"
              >
                The Ultimate Protection for Your Teeth
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-purple-800 font-light mb-10"
              >
                Guard Your Smile with a Simple, Effective Solution
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChatbot}
                className="bg-purple-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
              >
                Book Protection Today
              </motion.button>
            </div>
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 ml-auto mr-auto mt-12 lg:mt-0"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src="/images/services/cosmetic/sealants/Image1.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-purple-100 rounded-full p-4 shadow-lg"
                >
                  <div className="text-purple-600 text-3xl">🛡️</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto text-center"
          >
            Preventing cavities before they start is the smartest way to protect
            your teeth. At Prudentia Micro Dental Care, we offer dental
            sealants, a fast, easy, and non-invasive solution to safeguard your
            teeth from decay.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center"
          >
            Dental sealants are thin resin coatings applied to the chewing
            surfaces of your back teeth (molars and premolars), effectively
            shielding them from cavities and decay.
          </motion.p>
        </div>
      </motion.section>

      {/* Who Should Get Sealants */}
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
            Who Should Get Dental Sealants?
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12"
          >
            Sealants are ideal for:
          </motion.p>

          <div className="flex flex-wrap justify-center">
            <motion.div
              variants={slideIn}
              whileHover={{ y: -5 }}
              className="w-full md:w-1/2 px-4 mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full border-l-4 border-purple-500">
                <div className="text-purple-600 text-4xl mb-4">👶</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  Children and teenagers
                </h3>
                <p className="text-gray-700">
                  Particularly when their permanent molars and premolars emerge.
                  Sealants can protect these teeth during the cavity-prone years
                  of ages 6-14.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideIn}
              whileHover={{ y: -5 }}
              className="w-full md:w-1/2 px-4 mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full border-l-4 border-purple-500">
                <div className="text-purple-600 text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  Adults
                </h3>
                <p className="text-gray-700">
                  If you have healthy molars without fillings or decay, sealants
                  can still provide added protection.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeIn}
            className="text-lg text-center text-purple-800 max-w-3xl mx-auto mt-8 font-medium"
          >
            By getting sealants early, you can keep your teeth safe as they grow
            and develop.
          </motion.p>
        </div>
      </motion.section>

      {/* Why Are Sealants Important */}
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
            Why Are Dental Sealants Important?
          </motion.h2>

          <div className="flex flex-wrap items-center">
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src="/images/services/cosmetic/sealants/Image2.png"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-4"
                >
                  <p className="text-white">
                    {" "}
                    Vulnerable tooth grooves and fissures
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="w-full lg:w-1/2 px-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The grooves and fissures on the chewing surfaces of molars and
                premolars are especially vulnerable to decay. These areas can
                be:
              </p>

              <ol className="space-y-4 mb-8">
                <motion.li variants={slideIn} className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-lg text-gray-700">
                    Deep, narrow, and difficult to clean.
                  </span>
                </motion.li>
                <motion.li variants={slideIn} className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-lg text-gray-700">
                    A perfect breeding ground for plaque and bacteria.
                  </span>
                </motion.li>
              </ol>

              <p className="text-lg text-gray-700 leading-relaxed">
                Dental sealants act as a protective barrier, covering the
                vulnerable grooves and preventing food particles and bacteria
                from getting stuck. The fluoride in the sealants also helps
                strengthen your tooth enamel, offering added protection against
                cavities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-20 bg-gradient-to-br from-purple-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center text-purple-900 mb-16"
          >
            Key Benefits of Dental Sealants
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-purple-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Quick Application
              </h3>
              <p className="text-gray-700">
                The process takes only 2-5 minutes per tooth.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-purple-600 text-4xl mb-4">😊</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Painless & Comfortable
              </h3>
              <p className="text-gray-700">
                No anesthesia or discomfort involved.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Long-Lasting Protection
              </h3>
              <p className="text-gray-700">
                Sealants do not dissolve in saliva and offer years of
                protection.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-purple-600 text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Safe & Reliable
              </h3>
              <p className="text-gray-700">
                Trusted for decades to prevent decay in hard-to-reach areas of
                the teeth.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How Long Do They Last */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center text-purple-900 mb-10"
          >
            How Long Do Dental Sealants Last?
          </motion.h2>

          <motion.div
            variants={fadeIn}
            className="bg-purple-50 rounded-2xl shadow-xl p-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Dental sealants are a proven solution to prevent cavities and have
              been effective since the 1970s. With proper care, sealants can
              last for many years, protecting your teeth through your most
              vulnerable years. If needed, sealants can be reapplied to continue
              providing a strong defense against decay.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Procedure Section */}
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
            className="text-3xl font-bold text-center text-purple-900 mb-6"
          >
            Is the Sealant Procedure Painful?
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-2xl font-medium text-center text-purple-700 mb-12"
          >
            No, it&apos;s quick and painless!
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12"
          >
            Here&apos;s how we apply a dental sealant:
          </motion.p>

          <div className="flex flex-wrap items-center">
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-2 lg:order-1"
            >
              <ol className="space-y-8">
                <motion.li
                  variants={slideIn}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    The tooth is cleaned to remove plaque, stains, and early
                    decay.
                  </p>
                </motion.li>

                <motion.li
                  variants={slideIn}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    A special gel is applied briefly to the tooth.
                  </p>
                </motion.li>

                <motion.li
                  variants={slideIn}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    The tooth is rinsed, dried, and then the sealant is
                    carefully painted onto the surface.
                  </p>
                </motion.li>

                <motion.li
                  variants={slideIn}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    UV light is used to harden the sealant and form a protective
                    shield.
                  </p>
                </motion.li>
              </ol>

              <motion.p
                variants={fadeIn}
                className="mt-8 text-lg text-purple-700 font-medium"
              >
                It&apos;s a fast, safe, and gentle procedure that won&apos;t
                cause you any discomfort.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 order-1 lg:order-2"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src="/images/services/cosmetic/sealants/Image3.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-4">
                  <p className="text-white"> Sealant application process</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Prevention Tips */}
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
            Additional Tips to Help Prevent Tooth Decay
          </motion.h2>

          <div className="flex flex-wrap items-center">
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src="/images/services/cosmetic/sealants/Image4.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-4">
                  <p className="text-white"> Comprehensive oral care</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="w-full lg:w-1/2 px-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Along with dental sealants, here&apos;s how you can keep your
                teeth healthy:
              </p>

              <ul className="space-y-6">
                <motion.li variants={slideIn} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 text-sm">🪥</span>
                  </div>
                  <span className="text-gray-700">
                    Brush twice a day, especially along the gum line and all
                    surfaces of your teeth.
                  </span>
                </motion.li>

                <motion.li variants={slideIn} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 text-sm">🥗</span>
                  </div>
                  <span className="text-gray-700">
                    Eat a balanced diet with nutritious foods to support your
                    dental health.
                  </span>
                </motion.li>

                <motion.li variants={slideIn} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 text-sm">🚫</span>
                  </div>
                  <span className="text-gray-700">
                    Avoid sugary foods and drinks, particularly between meals.
                  </span>
                </motion.li>

                <motion.li variants={slideIn} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 text-sm">🏥</span>
                  </div>
                  <div>
                    <strong className="text-gray-800">
                      Regular dental check-ups:
                    </strong>
                    <span className="text-gray-700">
                      {" "}
                      Let us help you keep track of your oral health and ensure
                      your sealants are working effectively.
                    </span>
                  </div>
                </motion.li>
              </ul>
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
        className="py-20 bg-gradient-to-br from-purple-900 to-purple-800 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
            Ready to Protect Your Smile?
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg max-w-3xl mx-auto mb-10"
          >
            Dental sealants offer a simple, effective way to prevent cavities
            and keep your teeth decay-free. Whether for yourself or your child,
            sealants are a smart choice for long-term dental health.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenChatbot}
              transition={{ duration: 0.2 }}
              className="bg-white text-purple-900 font-bold px-10 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              Book your appointment with Prudentia Micro Dental Care, Pimple
              Saudagar today
            </motion.button>
            <motion.p variants={fadeIn} className="mt-6 text-purple-200">
              Protect your smile for years to come!
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
