"use client";

import { experimental_useEffectEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesDropdown from './ServicesDropdown';
import MobileServicesDropdown from './MobileServiceDropDown';
import { useChatbot } from './chatbotContext';


const Navbar = () =>
{
   const { handleOpenChatbot } = useChatbot();
   const onChatbotOpen = handleOpenChatbot;
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="bg-white shadow-lg border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.svg" 
                  alt="SmileCare Dental Logo"
                  width={40} 
                  height={40}
                  className="h-20 w-auto"
                />
        <div className="text-center">
  <h1 className="text-3xl  underline decoration-wavy font-extrabold text-purple-800 tracking-wide leading-tight">
    Prudentia
  </h1>
  <h2 className="text-lg  font-light text-purple-500 tracking-normal ">
    <span className="italic">Micro Dental Care</span> 
  </h2>
</div>

              </Link>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <ServicesDropdown />
              <Link href="/team" className="text-gray-700 px-2 hover:text-blue-600 font-medium">
                Our Team
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <button onClick={onChatbotOpen}
                
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Book Appointment
              </button>
            </div>
                

  
            {/* Mobile Menu Button */}
            <div className="md:hidden ">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

        {/* Mobile Navigation (in hamburger menu) */}
        <div className="md:hidden">
        {/* Mobile menu button */}
        {/* ... */}
          {/* Mobile Menu */}
          {isOpen && (
            <div className="flex  justify-between flex-col space-y-2">
            <div className="px-4 space-y-1 py-3">
              <Link href="/" className="block py-2 border-b">Home</Link>
              <MobileServicesDropdown />
              <Link href="/team" className="block py-2 border-b">Our Team</Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 border-b">
                About Us
              </Link>
              <Link href="/#contact" className="block py-2 text-gray-700 hover:text-blue-600 border-b">
                Contact
              </Link>
              <button onClick={onChatbotOpen}
                className="block mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
              >
                Book Appointment
              </button>
            </div>
            </div>
          )}
        </div>
        </div>
      </nav>
        
    )
}
export default Navbar; 