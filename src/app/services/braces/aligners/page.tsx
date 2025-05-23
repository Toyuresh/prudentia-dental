'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';

export default function AlignerTreatment() {
    const { handleOpenChatbot } = useChatbot();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Image placeholder paths - replace with your actual images
  const images = {
    image1: '/images/services/braces/aligners/Image1.jpg',
    image2: '/images/services/braces/aligners/Image2.jpg',
    image3: '/images/services/braces/aligners/Image3.jpg',
    image4: '/images/services/braces/aligners/Image4.jpg'
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <Head>
        <title>Clear Aligners Treatment | Prudentia Micro Dental Care</title>
        <meta name="description" content="Discreet and comfortable teeth straightening with clear aligners in Pimple Saudagar" />
      </Head>

      <main className="container mx-auto px-4 py-25">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Achieve a Beautiful, Confident Smile with Aligners
          </h1>
          
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={loaded ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <Image
              src={images.image1}
              alt="Person smiling with aligners"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto"
          >
            A radiant smile is not only a reflection of your personality but also opens doors to new opportunities. Unfortunately, many people shy away from smiling due to crooked teeth or the discomfort and visibility of traditional braces. Thanks to advancements in cosmetic dentistry, aligners offer a comfortable, discreet, and effective solution to straighten your teeth often in half the time of metal braces!
          </motion.p>
        </motion.section>

        {/* What Are Aligners */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">
            What Are Aligners?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-64 md:h-80 w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={images.image2}
                alt="Clear aligners demonstration"
                fill
                className="object-contain"
              />
            </motion.div>
            
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 text-lg">
                Aligners are clear, durable plastic retainers that gently and gradually guide your teeth into their ideal alignment, all while remaining virtually invisible to those around you. Unlike traditional braces, aligners are easy to remove, giving you more flexibility in your daily routine.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">
            Benefits of Aligners:
          </h2>
          
          <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-10">
            <Image
              src={images.image3}
              alt="Benefits of aligners"
              fill
              className="object-contain"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Removable",
                content: "You can take them out whenever you need to, whether it's for eating, drinking, or special occasions."
              },
              {
                title: "Freedom to Eat & Drink",
                content: "No need to avoid your favorite foods—simply remove the aligners to enjoy any meal or beverage."
              },
              {
                title: "Normal Oral Hygiene",
                content: "With aligners, brushing and flossing is as easy as ever, helping you maintain excellent periodontal health throughout your treatment."
              },
              {
                title: "Fewer Office Visits",
                content: "Aligners require fewer visits to the orthodontist, saving you time compared to traditional braces."
              },
              {
                title: "Virtually Invisible",
                content: "The clear material of aligners makes them barely noticeable, allowing you to straighten your teeth without drawing attention."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-purple-700 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Say Goodbye to Metal Braces
          </h2>
          
          <div className="relative h-80 md:h-96 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg mb-10">
            <Image
              src={images.image4}
              alt="Smile transformation with aligners"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            If you&apos;ve been hesitant about traditional metal braces, aligners offer an appealing alternative. Don&apos;t let crooked teeth hold you back—visit us today at Prudentia Micro Dental Care, Pimple Saudagar to discuss your aligner treatment options and take the first step towards the smile you&apos;ve always wanted!
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenChatbot}
            className="inline-block"
          >
            <div 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
            >
              Book Your Consultation
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}