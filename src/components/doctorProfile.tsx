import { Image } from '@imagekit/next';
import { useChatbot } from './chatbotContext';

interface DoctorProfileProps {
  name: string;
  specialization: string;
  qualifications: string[];
  experience: string;
  bio: string;
  image: string;
  reverse?: boolean;
}

const DoctorProfile = ({
  name,
  specialization,
  qualifications,
  experience,
  bio,
  image,
  reverse = false
}: DoctorProfileProps) => {
      const { handleOpenChatbot } = useChatbot();
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-8 md:gap-12 items-center mb-16 md:mb-24`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative aspect-square rounded-2xl overflow-hidden shadow-xl">
        <Image
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
          src={image}
          alt={`Dr. ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white text-lg font-medium">Dr. {name.split(' ')[0]}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Dr. {name}</h3>
            <p className="text-lg text-blue-600 font-medium">{specialization}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {qualifications.map((qual, index) => (
              <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {qual}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{experience} of experience</span>
          </div>

          <p className="text-gray-600 leading-relaxed">{bio}</p>
     
          <button onClick={ handleOpenChatbot} className="mt-4 px-6 py-2.5 bg-purple-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
            Book Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Example Usage
export default function DoctorsSection() {
    
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our team of experienced professionals is dedicated to providing exceptional care.
        </p>
      </div>

      <div className="space-y-24">
        <DoctorProfile
          name="Bhushan Mahajan"
          specialization="The Micro-Dentist"
          qualifications={['BDS(Mumbai)', 'M Res.(USA)']}
          experience="10+ years"
          bio="At the heart of Dr. Bhushan Mahajan’s practice is a prevention-first approach, ensuring your smile
stays healthy for life. With over a decade of experience and training from the University at Buffalo (USA),

he specializes in advanced root treatments, smile makeovers, and using the latest technology for pain-
free & minimally invasive care.

From prevention to treatment, Dr. Mahajan combines cutting-edge techniques with
compassionate care, delivering precise results that help you smile with confidence, now and in the future."
          image="hero/Doctors/dr-bhushan-mahajan-micro-dentist-prudentia-dental-pimple-saudagar.jpg"
        />

        <DoctorProfile
          name="Disha Avhad Mahajan"
          specialization="Compassion-Driven Expert"
          qualifications={['BDS(Mumbai)']}
          experience="10+ years"
          bio="Expert in Advanced Root Canal Treatments & General Dentistry
With 10+ years of experience, Dr. Disha Avhad Mahajan offers expert care in pain-free root
canals, microscopic endodontics and comprehensive dental treatments. Based at Prudentia Micro Dental
Care, Pimple Saudagar, she combines cutting-edge technology with a gentle, patient-first approach to
help you achieve a healthier and brighter smile."
          image="hero/Doctors/dr-disha-mahajan-friendly-gentle-dentist-prudentia-dental-p.jpg"
          reverse
        />
      </div>
    </section>
  );
}