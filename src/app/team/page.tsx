'use client';

// app/team/page.tsx
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillBalloonFill } from 'react-icons/bs';
import { useChatbot } from '@/components/chatbotContext';

const TeamPage = () => {

     const { handleOpenChatbot } = useChatbot();
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Bhushan Mahajan",
      role: "Endodontist & Founder",
      bio: "Specializing in root canal treatments with over 15 years of experience. Harvard Dental School graduate committed to pain-free dentistry.",
      image: "/images/profile.jpg",
      specialties: ["Root Canal Therapy", "Microscopic Dentistry", "Pain Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "drpriya@prudentia.com"
      }
    },
    {
      id: 2,
      name: "Dr. Disha Mahajan",
      role: "Orthodontist",
      bio: "Expert in invisible aligners and smile design. Believes in creating beautiful smiles through personalized treatment plans.",
      image: "/images/profile1.jpg",
      specialties: ["Invisalign", "Smile Makeovers", "Teeth Straightening"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "drarjun@prudentia.com"
      }
    },
    {
      id: 3,
      name: "Disha Mahajan",
      role: "Assistant",
      bio: "Makes dental visits fun for kids while providing exceptional care.",
      image: "/images/profile2.jpg",
      specialties: ["Management", "Assistant", "Communication"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "drneha@prudentia.com"
      }
    }
  ];

  return (
    <div >
      {/* Hero Section */}
      <div className=" py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">Our Experts Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the skilled professionals dedicated to your perfect smile
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Doctor Image */}
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-200">{member.role}</p>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <BsFillBalloonFill className="text-purple-600 mr-2" />
                    Specializations
                  </h4>
                  <ul className="space-y-1">
                    {member.specialties.map((specialty, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
                    <FaTwitter size={20} />
                  </a>
                  <a href={member.social.instagram} className="text-pink-600 hover:text-pink-800">
                    <FaInstagram size={20} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-purple-600">
                    <MdEmail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-purple-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Meet Our Team?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule a consultation with our dental experts and experience personalized care.
          </p>
          <button onClick={handleOpenChatbot} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;