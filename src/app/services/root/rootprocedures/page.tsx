'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';
import { Image } from '@imagekit/next';


const RegenerativeTherapy = () => {
  const { handleOpenChatbot } = useChatbot();
  const [activeInsert, setActiveInsert] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setActiveInsert(prev => (prev % 5) + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const inserts = [
    {
      id: 1,
      title: "Welcome to the Future of Endodontics",
      content: "Regenerative Root Procedures use advanced biological approaches to promote natural root development and tissue healing, especially in immature or previously infected teeth.",
      bullets: [
        "Revives the tooth's natural healing potential",
        "Uses tissue engineering principles",
        "Essential for young patients needing root growth"
      ],
       image: "hero/Services/root/4. Regenerative Root Procedures/clean-tooth-stock-photo-prudentia-micro-dental-care-pune.jpg",
      icon: "🌱"
    },
    {
      id: 2,
      title: "What Is Regenerative Endodontic Therapy?",
      content: "A biologically based treatment leveraging advancements in pulp biology and stem cell science to achieve what was once considered impossible: helping teeth heal themselves.",
      bullets: [
        "Stimulates continued root development",
        "Rebuilds damaged pulp and tissues",
        "Restores function in infected teeth",
        "Alternative to extractions/implants"
      ],
      image: "hero/Services/root/4. Regenerative Root Procedures/regenerative-endodontics-natural-tooth-healing-prudentia-dental-pune..jpg",
      icon: "⚕️"
    },
    {
      id: 3,
      title: "Why Traditional Methods Fall Short",
      content: "Conventional approaches in underdeveloped teeth often compromise long-term dental health:",
      bullets: [
        "Thin, fracture-prone root walls",
        "Short roots limiting longevity",
        "Loss of tooth vitality and strength"
      ],
      image: "hero/Services/root/4. Regenerative Root Procedures/regenerative-endodontics-natural-tooth-healing-prudentia-dental-pune.jpg",
      icon: "⚠️"
    },
    {
      id: 4,
      title: "Our Regenerative Advantage",
      content: "We transform dental care outcomes through biological regeneration:",
      bullets: [
        "Reinforces tooth structure internally",
        "Activates natural tissue regrowth",
        "Preserves young patients' natural teeth",
        "Avoids invasive extractions/implants"
      ],
      image: "hero/Services/root/4. Regenerative Root Procedures/regeneratives-endodontics-natural-tooth-healing-prudentia-dental-pune.jpg",
      icon: "✨"
    },
    {
      id: 5,
      title: "Precision Biological Healing",
      content: "Our micro-dentistry expertise delivers exceptional results:",
      bullets: [
        "Minimally invasive techniques",
        "Advanced diagnostic imaging",
        "Gentle yet effective regeneration",
        "Long-term structural integrity"
      ],
      image: "hero/Services/root/4. Regenerative Root Procedures/dental-microscope-closeup-precision-treatment-prudentia-dental-pune.jpg",
      icon: "🔬"
    }
  ];

  const benefits = [
    {
      title: "Young Patients",
      description: "Children/adolescents with incomplete root formation",
      icon: "👶"
    },
    {
      title: "Trauma Cases",
      description: "Teeth with necrotic pulp or past damage",
      icon: "🦷"
    },
    {
      title: "Natural Advocates",
      description: "Patients preferring biological solutions over artificial",
      icon: "💚"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-purple-50 to-white transition-colors duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
   <Head>
        <title>Regenerative Root Therapy | Prudentia Dental</title>
        <meta name="description" content="Advanced biological root regeneration preserving natural teeth through stem cell technology and micro-dentistry" />
      </Head>

    

      <main className="container overflow-hidden mx-auto  px-6 py-12">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl my-15 font-bold text-purple-900 mb-4"
          >
            Regenerative Root Therapy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-purple-700 mb-6"
          >
            Healing from within. Restoring what was lost.
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"
          />
        </motion.section>

        {/* Content Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {inserts.map(insert => (
                insert.id === activeInsert && (
                  <motion.div
                    key={insert.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-9xl"
                    >
                              <Image
                               urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src={insert.image}
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />  
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map(num => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.2 }}
                    className={`w-3 h-3 rounded-full transition-all ${activeInsert === num ? 'bg-white scale-125' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {inserts.map(insert => (
                insert.id === activeInsert && (
                  <motion.div
                    key={insert.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h2 
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      className="text-2xl md:text-3xl font-bold text-purple-900 mb-4"
                    >
                      {insert.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-700 mb-6"
                    >
                      {insert.content}
                    </motion.p>
                    <motion.ul className="space-y-3 mb-6">
                      {insert.bullets.map((bullet, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-purple-600 mr-2">•</span>
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-purple-900 mb-12"
          >
            Who Can Benefit?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-purple-800">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl mb-20"
        >
          <div className="absolute inset-0 bg-purple-900/90 z-0" />
          <div className="relative z-10 py-16 px-8 text-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Don&apos;t Rush to Extract. <span className="text-purple-300">Regenerate.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
            >
              Before considering extractions or implants, explore your natural healing options.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChatbot}
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all"
              >
                Schedule Your Micro-Visit Today
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Clinic Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-2">Prudentia Micro Dental Care</h3>
          <p className="text-purple-700 mb-6">Pimple Saudagar, Pune</p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-6" />
          <p className="text-gray-700 max-w-2xl mx-auto">
            Specializing in biological dentistry and regenerative techniques to preserve your natural smile.
          </p>
        </motion.div>
      </main>

      
    </div>
  );
};

export default RegenerativeTherapy;