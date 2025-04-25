'use client';
import { Clock, Mail, MapPin, MessageCircleCode, Phone } from "lucide-react";
import { useChatbot } from '@/components/chatbotContext';


const ContactUs = () => {
  const { handleOpenChatbot } = useChatbot();
    return (
      <section id="contact" className="mt-10 py-5 px-10 bg-purple-100">
      <div className="container bg-white justify-center mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-purple-50  py-12 rounded-xl shadow-sm  ">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-xl font-semibold text-gray-800">
                    +91 76200 03733
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MessageCircleCode className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    WhatsApp
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    +91 97680 48056
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-3 sm:mr-4 shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="min-w-0">
                  {" "}
                  {/* Added min-w-0 to prevent overflow */}
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a
                    href="mailto:prudentiamicrodental@gmail.com"
                    className="text-base sm:text-xl font-semibold text-gray-800 
    hover:text-blue-600 transition-colors break-all"
                  >
                    prudentiamicrodental@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="text-lg font-medium text-gray-800 leading-relaxed">
                    Prudentia Micro Dental Care, Vision 9, Kunal Icon Road,
                    <br />
                    1st Floor, Shop no. 172 & 173, Pimple Saudagar, Pune 27.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Working Hours
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
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
          <div className="relative w-full overflow-hidden rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.3845796341922!2d73.7932683!3d18.594841799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99cbd925e75%3A0xb603995efc275aea!2sPrudentia%20Micro%20Dental%20Care%2C%20Pimple%20Saudagar!5e0!3m2!1sen!2sin!4v1745422865195!5m2!1sen!2sin"
                className="w-full h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Location of Prudentia Micro Dental Care on Google Maps"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Our Location
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Prudentia Micro Dental Care, Pimple Saudagar
              </p>
              <a
                href="https://maps.google.com/?q=Prudentia+Micro+Dental+Care,+Pimple+Saudagar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Get Directions
                <svg
                  className="w-4 h-4 ml-1"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default ContactUs;