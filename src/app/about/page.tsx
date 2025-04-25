// app/about/page.tsx
'use client';


import { useChatbot } from '@/components/chatbotContext';
import AboutHero from '@/components/aboutHero';



export default function AboutPage() {
   const { handleOpenChatbot } = useChatbot();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <AboutHero />
  

      {/* Our Story */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2015, Prudentia Micro Dental Care has been serving the Pimple Saudagar community with 
                exceptional dental services. Our journey began with a simple vision: to provide affordable, 
                high-quality dental care using the latest technology.
              </p>
              <p>
                Today, we&aposre proud to be one of Pune&aposs most trusted dental clinics, having transformed thousands 
                of smiles with our personalized approach and commitment to excellence.
              </p>
              <p>
                Our team of experienced dentists and hygienists work together to ensure every patient receives 
                comprehensive care in a comfortable, welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient-Centered Care",
                description: "We listen to your concerns and tailor treatments to your unique needs.",
                icon: "❤️"
              },
              {
                title: "Advanced Technology",
                description: "Using the latest dental equipment for precise, comfortable treatments.",
                icon: "🦷"
              },
              {
                title: "Sterilization Standards",
                description: "Rigorous infection control protocols for your safety.",
                icon: "🧼"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* Contact CTA */}
      <div className="py-16 bg-gradient-to-r from-purple-400 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your consultation with our expert dental team today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="mt-10 text-center">
              <button
                onClick={handleOpenChatbot}
                className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-md"
              >
                Book an Appointment
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}