'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';
import { Image } from '@imagekit/next';

export default function ConventionalBraces() {
     const { handleOpenChatbot } = useChatbot();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Image placeholder paths - replace with your actual images
  const images = {
    image1: 'hero/Services/braces/1. Conventional Metal And Ceramic Braces/metal-ceramic-braces-aesthetic-teeth-straightening-prudentia-pune.jpg',
    image2: 'hero/Services/braces/1. Conventional Metal And Ceramic Braces/metal-sceramic-braces-aesthetic-teeth-straightening-prudentia-pune.jpg',
    image3: 'hero/Services/braces/1. Conventional Metal And Ceramic Braces/metals-ceramic-braces-aesthetic-teeth-straightening-prudentia-pune.jpg'
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <Head>
        <title>Conventional Braces Treatment | Prudentia Micro Dental Care</title>
        <meta name="description" content="Professional orthodontic treatment with conventional braces in Pimple Saudagar" />
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
            Orthodontic Treatment with Conventional Braces
          </h1>
          
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={loaded ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
              src={images.image1}
              alt="Modern conventional braces"
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
            While many people think of orthodontic treatment as just traditional braces, the truth is that today&apos;s advancements in design and technology make conventional braces more comfortable and effective than ever before! Traditional braces use metal brackets bonded to the front of your teeth, connected by a flexible archwire, to gradually align your teeth and improve your bite.
          </motion.p>
        </motion.section>

        {/* Treatment Duration */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">
            How Long Does Treatment Take?
          </h2>
          <p className="text-gray-700 text-lg">
            The duration of orthodontic treatment with conventional braces varies based on your unique needs, but on average, treatment typically takes between 12 to 24 months. The exact timeline will depend on your specific orthodontic goals.
          </p>
        </motion.section>

        {/* Types of Braces */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">
            Types of Conventional Braces:
          </h2>
          
          <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-10">
            <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
              src={images.image2}
              alt="Types of conventional braces"
              fill
              className="object-contain"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Self Ligating Metal Braces
              </h3>
              <p className="text-gray-700">
                Traditional metal braces are made with durable stainless steel brackets and archwires. While they may have been bulky in the past, today&apos;s metal braces are smaller, lighter, and more comfortable than ever. These braces have a built-in sliding mechanism that adjusts automatically as your teeth shift. This reduces the need for frequent adjustments, making them a comfortable and efficient option for some patients.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Ceramic Braces
              </h3>
              <p className="text-gray-700">
                For a more discreet look, ceramic braces blend in with the color of your teeth. These braces are an excellent option for those who prefer aesthetics while still receiving effective treatment.
              </p>
            </motion.div>
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
            Transform Your Smile with our Classic Braces
          </h2>
          
          <div className="relative h-80 md:h-96 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg mb-10">
            <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
              src={images.image3}
              alt="Smile transformation with braces"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            While they may be a classic, traditional braces are still an incredibly effective way to straighten teeth and correct bites. Whether you opt for metal, ceramic, or self-ligating braces, we&apos;ll create a bespoke treatment plan tailored to your unique needs.
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
              Schedule Your Consultation
            </div>
          </motion.div>

          <p className="mt-8 text-gray-600">
            Ready to take the next step? Contact us at Prudentia Micro Dental Care, Pimple Saudagar today to schedule your consultation and start your journey toward a beautiful, aligned smile!
          </p>
        </motion.section>
      </main>
    </div>
  );
}