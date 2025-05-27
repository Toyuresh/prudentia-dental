"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useChatbot } from "@/components/chatbotContext";
import { Image } from "@imagekit/next";


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function EnameloplastyPage() {
  const { handleOpenChatbot } = useChatbot();

  return (
    <div className="font-sans overflow-hidden text-gray-800 bg-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h1
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Enameloplasty
              <span className="block text-purple-600 text-2xl md:text-4xl mt-2">
                Tooth Contouring
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl mt-4 text-gray-600">
              Refine. Reshape. Reveal Your Perfect Smile.
            </motion.p>
            <motion.p variants={fadeIn} className="mt-4 md:mt-6 text-sm md:text-base">
              Sometimes, the smallest imperfections can make the biggest
              difference in your smile. That&apos;s where Enameloplasty, also
              known as tooth reshaping or contouring comes in. This quick,
              painless cosmetic procedure gently refines the edges and surfaces
              of your teeth for a more symmetrical, smooth, and attractive
              smile.
            </motion.p>
            <motion.p variants={fadeIn} className="mt-2 text-sm md:text-base">
              At Prudentia Micro Dental Care, Pimple Saudagar we specialize in
              precise, minimally invasive cosmetic enhancements using the latest
              micro-dentistry techniques.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleOpenChatbot}
                className="bg-purple-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center text-sm md:text-base"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Schedule Consultation
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn}
            className="md:w-1/2 flex justify-center w-full"
          >
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-6 md:mb-8">
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src="hero/Services/cosmetic/2. Enamel Reshaping/enamel-recontouring-enameloplasty-smile-enhancement-prudentia-dental-pune.jpg"
                alt="Modern denture solutions"
                fill
                className="object-cover md:object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Enameloplasty */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-12 md:py-16 px-4 bg-white"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div variants={fadeIn} className="md:w-1/2 w-full order-1 md:order-none">
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src="hero/Services/cosmetic/2. Enamel Reshaping/enamels-recontouring-enameloplasty-smile-enhancement-prudentia-dental-pune.jpg"
                alt="Tooth contouring procedure"
                fill
                className="object-cover md:object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeIn} className="md:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">What Is Enameloplasty?</h2>
            <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
              Enameloplasty is a non-invasive cosmetic treatment that uses a
              specialized high-speed dental instrument to gently polish and
              shape the outer layer of your teeth enamel.
            </p>
            <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
              Whether it&apos;s smoothing a slightly pointy tooth, refining
              uneven edges, or blending away a tiny chip, this technique sculpts
              your teeth with absolute precision without drilling or anesthesia.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Often combined with treatments like cosmetic bonding,
              enameloplasty can dramatically enhance the balance and harmony of
              your smile in a single visit.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Can It Correct */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-12 md:py-16 px-4 bg-gray-50"
      >
        <div className="container mx-auto">
          <motion.div variants={fadeIn} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Can Enameloplasty Correct?
            </h2>
            <p className="text-gray-600 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              This subtle but powerful technique is ideal for correcting:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: "Minor Chips & Edges",
                icon: "⟐",
                description:
                  "Smooths rough edges and small chips for a more polished appearance",
              },
              {
                title: "Irregular Teeth",
                icon: "⟐",
                description:
                  "Evens out teeth that have slight irregularities in size or shape",
              },
              {
                title: "Overlapping Teeth",
                icon: "⟐",
                description:
                  "Refines areas where teeth slightly overlap for a more aligned look",
              },
              {
                title: "Pointy Contours",
                icon: "⟐",
                description:
                  "Softens pointed canines or jagged edges for a friendlier smile",
              },
              {
                title: "Surface Flaws",
                icon: "⟐",
                description:
                  "Addresses minor surface imperfections affecting aesthetics",
              },
              {
                title: "Balance & Harmony",
                icon: "⟐",
                description:
                  "Creates better proportion and symmetry across your smile",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-purple-600 text-3xl md:text-4xl mb-2 md:mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="mt-6 md:mt-8 text-center">
            <p className="text-gray-700 text-sm md:text-base">
              Typically performed on the front teeth, enameloplasty can
              instantly make your smile look more aligned, balanced, and
              polished—without altering your natural tooth structure in a major
              way.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Experience */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-12 md:py-16 px-4 bg-white"
      >
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <motion.div variants={fadeIn} className="md:w-1/2 w-full">
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src="hero/Services/cosmetic/2. Enamel Reshaping/enamelss-recontouring-enameloplasty-smile-enhancement-prudentia-dental-pune.jpg"
                alt="Dental treatment process"
                fill
                className="object-cover md:object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeIn} className="md:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              What&apos;s the Treatment Like?
            </h2>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-1 md:p-2 rounded-full mr-3 md:mr-4">
                  <span className="block w-4 h-4 md:w-6 md:h-6 bg-purple-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl">Fast & Comfortable</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Most sessions take under 30 minutes
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-1 md:p-2 rounded-full mr-3 md:mr-4">
                  <span className="block w-4 h-4 md:w-6 md:h-6 bg-purple-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl">No Drills or Injections</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    The process is so gentle that numbing isn&apos;t required
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-1 md:p-2 rounded-full mr-3 md:mr-4">
                  <span className="block w-4 h-4 md:w-6 md:h-6 bg-purple-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl">Immediate Results</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Leave the chair with a smoother, more refined smile
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base">
              Our expert, Dr. Bhushan, uses specialized buffing tools under high
              magnification to ensure the most accurate and conservative enamel
              adjustments—preserving your tooth strength while enhancing its
              shape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Safety and Benefits */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-12 md:py-16 px-4 bg-purple-50"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeIn} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Is It Safe?</h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center"
          >
            <p className="text-lg md:text-xl">
              Yes, absolutely safe and conservative. Enameloplasty only removes
              a microscopic amount of enamel, leaving your teeth healthy,
              strong, and fully functional. There&apos;s no pain, no downtime, and no
              long-term impact on tooth integrity.
            </p>

            <div className="w-16 md:w-24 h-1 bg-purple-600 mx-auto my-6 md:my-8"></div>

            <h3 className="text-xl md:text-2xl font-bold text-purple-600">
              A Subtle Touch for a Stunning Smile
            </h3>
            <p className="mt-3 md:mt-4 text-sm md:text-base">
              If you&apos;re looking for a simple, quick, and affordable way to
              upgrade your smile, enameloplasty might be the perfect solution.
              It&apos;s ideal for patients who want cosmetic improvements
              without extensive dental work.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-12 md:py-16 px-4 bg-purple-600 text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Refine Your Smile?
          </h2>
          <p className="text-base md:text-xl max-w-2xl mx-auto mb-6 md:mb-8">
            Let Prudentia Micro Dental Care help you achieve a beautifully
            balanced smile with precision and care. Schedule your enameloplasty
            consultation today and take the first step toward a more confident,
            natural-looking smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">

            <button
              onClick={handleOpenChatbot}
              className="bg-transparent border border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-purple-700 transition-colors font-bold flex items-center justify-center text-sm md:text-base"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Book Online
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}