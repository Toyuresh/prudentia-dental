"use client"
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Heart, CheckCircle, Activity, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useChatbot } from '@/components/chatbotContext';
import { Image } from '@imagekit/next';


const GumDiseaseTherapyPage = () => {
    const { handleOpenChatbot } = useChatbot();
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const slideInLeft = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const slideInRight = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(50px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const symptoms = [
    {
      title: "Bleeding Gums",
      description: "Gums that bleed while brushing or flossing are a key sign of gingivitis.",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Inflamed, Puffy Gums",
      description: "Swollen or puffy gums may indicate irritation from bacteria buildup.",
      icon: <AlertTriangle className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Dark Red or Purple Gums",
      description: "Healthy gums should appear light pink; dark red or purple gums may signal infection.",
      icon: <AlertTriangle className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Receding Gum Line",
      description: "A receding gum line or teeth that look longer could be a sign of gum damage.",
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const treatments = [
    {
      title: "Deep Cleanings",
      description: "We use professional-grade tools to thoroughly clean your teeth, removing harmful substances and giving your smile a polished, glassy finish.",
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Medication",
      description: "In certain cases, we may provide antibiotics or other medications to help control bacteria and support healing.",
      icon: <Stethoscope className="w-10 h-10 text-purple-600" />,
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Advanced Gum Disease Treatment",
      description: "For more advanced stages of gum disease, we offer periodontal surgery, which may involve additional cleaning of the gums, teeth, and bone to address the underlying infection.",
      icon: <Activity className="w-10 h-10 text-purple-600" />,
      color: "from-purple-50 to-purple-100"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="hero-content"
              data-animate
              style={slideInLeft('hero-content')}
            >
              <div className="flex items-center mb-8">
                <div className="bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm mr-4">
                  <Shield className="w-12 h-12 text-black" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Gum Disease Treatment:
                  </h1>
                  <p className="text-2xl lg:text-3xl text-purple-300 font-semibold">
                    Protect Your Smile with Proper Care
                  </p>
                </div>
              </div>
            </div>
            <div 
              className="flex justify-center"
              id="hero-image"
              data-animate
              style={slideInRight('hero-image')}
            >
              <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src="/images/services/surgical/gumcare/Image1.jpg" 
                  alt="Gum Disease Treatment" 
                  className="rounded-xl shadow-2xl"
                /> */}
         <Image
         urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/3. Gum Care/professional-gum-care-cleaning-pune-prudentia-dental.jpg"
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />                 
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            id="intro"
            data-animate
            style={fadeInUp('intro')}
          >
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Gum disease, also known as gingivitis, is a common oral health issue that can lead to severe damage if 
              left untreated. In its early stages, gingivitis can be managed and reversed, but if it progresses, it can 
              result in tooth loss and other serious complications.
            </p>
          </div>
        </div>
      </section>

      {/* Signs and Symptoms Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              id="symptoms-title"
              data-animate
              style={fadeInUp('symptoms-title')}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
                Signs and Symptoms of Gum Disease to Watch For:
              </h2>
              <div className="max-w-3xl mx-auto mb-12 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src="/images/services/surgical/gumcare/Image2.jpg"
                  alt="Signs and Symptoms of Gum Disease" 
                  className="w-full rounded-2xl shadow-xl"
                /> */}
         <Image
         urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/3. Gum Care/gum-disease-treatment-periodontal-therapy-prudentia-dental-pune.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />                  
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {symptoms.map((symptom, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border-2 ${symptom.color} p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  id={`symptom-${index}`}
                  data-animate
                  style={index % 2 === 0 ? slideInLeft(`symptom-${index}`) : slideInRight(`symptom-${index}`)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-xl shadow-md flex-shrink-0">
                      {symptom.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {symptom.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {symptom.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="bg-gradient-to-r from-yellow-50 to-red-50 border-2 border-yellow-300 rounded-2xl p-8"
              id="symptoms-warning"
              data-animate
              style={fadeInUp('symptoms-warning')}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Important Warning</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The early stage of gum disease, gingivitis, is completely reversible and doesn&apos;t cause permanent 
                    damage. However, if left untreated, it can progress to periodontitis and advanced periodontitis, which 
                    may lead to irreversible damage, including loss of gum and bone support, and tooth mobility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              id="treatment-title"
              data-animate
              style={fadeInUp('treatment-title')}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
                Our Treatment Approach:
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 ">
                {/* <img 
                  src="/images/services/surgical/gumcare/Image3.jpg"
                  alt="Treatment Approach 1" 
                  className="w-full rounded-xl shadow-lg"
                /> */}
                <div className='relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8'>
          <Image
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/3. Gum Care/professional-gum-care-cleaning-pune-prudentia-dental.jpeg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        /> 
                        </div>                 
                {/* <img 
                  src="/images/services/surgical/gumcare/Image4.jpg" 
                  alt="Treatment Approach 2" 
                  className="w-full rounded-xl shadow-lg"
                /> */}
                <div className='relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8'>
         <Image
         urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/3. Gum Care/gums-disease-treatment-periodontal-therapy-prudentia-dental-pune.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />
                        </div>                  
              </div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At Prudentia Micro Dental Care, Pimple Saudagar we offer deep cleanings to help prevent the 
                progression of gum disease. During this process, we remove plaque, tartar, and harmful bacteria from 
                beneath the gums, stopping the infection and giving your teeth and gums a fresh start.
              </p>
            </div>

            <div className="space-y-8">
              {treatments.map((treatment, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${treatment.color} rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  id={`treatment-${index}`}
                  data-animate
                  style={index % 2 === 0 ? slideInLeft(`treatment-${index}`) : slideInRight(`treatment-${index}`)}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/4 p-8 flex flex-col items-center justify-center text-center bg-white bg-opacity-50">
                      <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                        {treatment.icon}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                        {treatment.title}
                      </h3>
                    </div>
                    <div className="lg:w-3/4 p-8 flex items-center">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {treatment.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Regular Visits Matter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div 
                className="flex justify-center order-2 lg:order-1"
                id="visits-image"
                data-animate
                style={slideInLeft('visits-image')}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  {/* <img 
                    src="/images/services/surgical/gumcare/Image5.jpg"
                    alt="Why Regular Dental Visits Matter" 
                    className="w-full h-64 lg:h-80 object-cover"
                  /> */}
         <Image
         urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/3. Gum Care/professionals-gum-care-cleaning-pune-prudentia-dental.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />                    
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Prevention</p>
                      </div>
                      <div className="text-center">
                        <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Protection</p>
                      </div>
                      <div className="text-center">
                        <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Care</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="order-1 lg:order-2"
                id="visits-content"
                data-animate
                style={slideInRight('visits-content')}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                  Why Regular Dental Visits Matter:
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  Routine dental visits are essential to keep your gums healthy and prevent future complications. Early 
                  detection and treatment of gum disease can save your smile and protect your overall oral health.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  We&apos;re committed to making every visit comfortable and informative, ensuring that you leave feeling 
                  confident about the health of your teeth and gums.
                </p>
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-md border-2 border-purple-100">
                    <CheckCircle className="w-8 h-8 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-gray-800">Early Detection</h4>
                    <p className="text-sm text-gray-600">Catch problems before they worsen</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md border-2 border-blue-100">
                    <Heart className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-800">Comfortable Care</h4>
                    <p className="text-sm text-gray-600">Relaxing and informative visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
       <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Take the First Step Toward a <span className="text-purple-600">Pain-Free, Healthy Smile</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                 Contact Prudentia Micro Dental Care today to schedule your consultation and take the next step 
                toward a healthier, pain-free smile!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 onClick={handleOpenChatbot}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center mx-auto text-lg"
              >
                Book Your Micro-Root Consultation Today <FiArrowRight className="ml-2" />
              </motion.button>
              <p className="text-gray-500 mt-6">
                Your natural smile deserves the best care available
              </p>
            </motion.div>
          </div>
        </section>

    </div>
  );
};

export default GumDiseaseTherapyPage;