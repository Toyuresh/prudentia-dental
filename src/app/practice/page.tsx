"use client"

import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function PrudentiaMicroDentalCare() {
  const { handleOpenChatbot } = useChatbot();

  return (
    <div className="bg-white">
      {/* Hero Banner with Tagline */}
      <motion.div 
        className="relative h-[70vh] min-h-[500px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/Bannerpractice.jpg"
          alt="Prudentia Micro Dental Care Clinic"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        <motion.div 
          className="absolute bottom-8 right-8 text-right max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Magnifying Precision<br />
            Recreating Compassionate Smiles
          </p>
          <p className="text-purple-100 font-medium">Prudentia Micro Dental Care</p>
        </motion.div>
      </motion.div>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="lg:w-1/2" variants={slideInFromLeft}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Precision Microscopic Dentistry in Pimple Saudagar
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Prudentia Micro Dental Care is a cutting-edge dental clinic that boasts one of the very few Dental Operating Microscopes in the Country. This state-of-the-art technology allows us to detect dental issues early, perform treatments with unmatched precision, and ensure the most comfortable experience for our patients.
            </p>
            <motion.div 
              className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-purple-800 font-medium">
                &quot;With magnification levels of 2x-30x, the Dental Operating Microscope enables detailed examinations, uncovering hidden problems that might otherwise go unnoticed.&quot;
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl"
            variants={slideInFromRight}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/practice1.jpg"
              alt="Dental Operating Microscope"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Advanced Technology</h2>
            <motion.div 
              className="w-20 h-1 bg-purple-600 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Along with the microscope, we offer a suite of advanced technology that enhances your care
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col lg:flex-row gap-12 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
              variants={slideInFromLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/practice2.png"
                alt="Dental Technology"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div className="lg:w-1/2" variants={slideInFromRight}>
              <motion.ul className="space-y-4" variants={container}>
                <motion.li className="flex items-start" variants={item}>
                  <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700"><span className="font-semibold">Caries Probe:</span> Detects hidden cavities early.</p>
                </motion.li>
                <motion.li className="flex items-start" variants={item}>
                  <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700"><span className="font-semibold">Electronic Anesthesia:</span> Painless, automated injections.</p>
                </motion.li>
                <motion.li className="flex items-start" variants={item}>
                  <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700"><span className="font-semibold">Root Canal Excellence:</span> Advanced tools for precision root canal treatments.</p>
                </motion.li>
                <motion.li className="flex items-start" variants={item}>
                  <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700"><span className="font-semibold">Micro-Endodontics:</span> For treating failed root canals and microsurgeries.</p>
                </motion.li>
                <motion.li className="flex items-start" variants={item}>
                  <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700"><span className="font-semibold">Portable DC X-Ray:</span> High-quality, low-radiation dental scans.</p>
                </motion.li>
                <motion.li className="flex items-start" variants={item}>
                  <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700"><span className="font-semibold">Top-Notch Sterilization:</span> Adhering to strict IDA standards with UV and RO filtered water.</p>
                </motion.li>
              </motion.ul>

              <motion.div 
                className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg text-gray-700 mb-4">
                  We&apos;re committed to your oral health with the most advanced technology and a pain-free, stress-free experience.
                </p>
                <motion.button 
                  onClick={handleOpenChatbot} 
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call us today to schedule your appointment
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <motion.div 
            className="w-20 h-1 bg-purple-600 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Dr. Bhushan Mahajan */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-center mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="lg:w-1/3" variants={scaleUp}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/practice3.jpg"
                alt="Dr. Bhushan Mahajan"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-center text-gray-900">Dr. Bhushan Mahajan</h3>
            <p className="text-center text-purple-600">BDS, M Res.</p>
          </motion.div>
          <motion.div className="lg:w-2/3" variants={fadeIn}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transforming Smiles with the Precision of Micro Dentistry
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Dr. Bhushan Mahajan brings cutting-edge dental care to Prudentia Micro Dental Care. After earning his BDS from Mumbai and completing a mini-residency in Microsurgical Endodontics at University of Buffalo, NY, Dr. Bhushan has dedicated his career to offering world-class, pain-free dental treatments.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              His mission is clear: deliver evidence-based, minimally invasive dentistry using the latest technology to preserve your natural smile. He&apos;s trained with international experts like Dr. Clifford Ruddle and Dr. Adham Azim to bring the best techniques to your care.
            </p>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-gray-700 italic">
                &quot;In the U.S., dental procedures performed with a Dental Operating Microscope are the standard of care, and Dr. Bhushan brings this level of excellence to Prudentia.&quot;
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Dr. Disha Avhad Mahajan */}
        <motion.div 
          className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="lg:w-1/3" variants={scaleUp}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/practice4.jpg"
                alt="Dr. Disha Avhad Mahajan"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-center text-gray-900">Dr. Disha Avhad Mahajan</h3>
            <p className="text-center text-purple-600">BDS</p>
          </motion.div>
          <motion.div className="lg:w-2/3" variants={fadeIn}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Specialist in Advanced Root Canal Treatment & General Dentistry
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              With over 10 years of clinical experience, Dr. Disha Avhad Mahajan is a trusted name in general dentistry and a leading provider of advanced root canal treatments in Pune. A graduate of the prestigious Government Dental College, Mumbai, Dr. Disha is known for her gentle chairside manner and unwavering dedication to precision-driven care.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              At Prudentia Micro Dental Care, Pimple Saudagar she combines state-of-the-art dental technology with a compassionate, patient-centered approach. Whether you&apos;re coming in for a routine dental check-up, a complex root canal therapy, or a complete smile transformation, Dr. Disha ensures every treatment is delivered with meticulous care and long-lasting results.
            </p>
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Expertise:</span> Microscopic endodontics and pain-free root canal procedures
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ayesha S */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="lg:w-1/3" variants={scaleUp}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/practice5.png"
                alt="Ayesha S"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-center text-gray-900">Ayesha S</h3>
            <p className="text-center text-purple-600">Dental Assistant & Appointment Coordinator</p>
          </motion.div>
          <motion.div className="lg:w-2/3" variants={fadeIn}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Smile Behind the Smiles
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              A calm and caring presence, Ayesha keeps both patients and the clinic running smoothly at Prudentia Micro Dental Care, Pimple Saudagar.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              As our dental assistant and appointment coordinator, she&apos;s the friendly face who welcomes you in, supports treatments chairside, and ensures your visits are well-organized and stress-free.
            </p>
            <p className="text-lg text-gray-600">
              With her gentle touch, positive spirit, and ever-present smile, Ayesha makes every patient feel at ease, from the first hello to the next appointment.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-purple-600 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready for a Precision Dental Experience?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to schedule your consultation and experience microscopic dentistry at its finest.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              onClick={handleOpenChatbot} 
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}