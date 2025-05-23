"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesDropdown from './ServicesDropdown';
import MobileServicesDropdown from './MobileServiceDropDown';
import { useChatbot } from './chatbotContext';

const Navbar = () => {
  const { handleOpenChatbot } = useChatbot();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Effect to handle scrolling in mobile menu
  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    const handleMobileScroll = (e: WheelEvent) => {
      e.preventDefault();
      mobileMenu.scrollTop += e.deltaY;
    };

    if (isOpen) {
      mobileMenu.addEventListener('wheel', handleMobileScroll);
    }

    return () => {
      mobileMenu.removeEventListener('wheel', handleMobileScroll);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Prudentia Micro Dental Care Logo"
                width={50} 
                height={50}
                className="h-12 w-auto"
              />
              <div className="ml-2">
                <h1 className="text-2xl font-bold text-purple-800 tracking-tight">
                  PRUDENTIA
                </h1>
                <h2 className="text-sm font-medium text-purple-600 tracking-wider">
                  MICRO DENTAL CARE
                </h2>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-purple-700 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/practice" className="text-gray-800 hover:text-purple-700 font-medium transition-colors duration-200">
              Our Practice
            </Link>
            <Link href="/microDentistry" className="text-gray-800 hover:text-purple-700 font-medium transition-colors duration-200">
              Why Micro Dentistry
            </Link>
            <ServicesDropdown />
               <Link href="/tech" className="text-gray-800 hover:text-purple-700 font-medium transition-colors duration-200">
              Tech
            </Link>
            <Link href="/gallery" className="text-gray-800 hover:text-purple-700 font-medium transition-colors duration-200">
              Gallery
            </Link>
            <Link href="/#contact" className="text-gray-800 hover:text-purple-700 font-medium transition-colors duration-200">
              Contact
            </Link>
            <button 
              onClick={handleOpenChatbot}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-5 py-2.5 rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[80vh] opacity-100 py-4 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#9f7aea #f3f4f6'
          }}
        >
          <div className="px-2 pt-2 pb-4 space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
              <Link 
              href="/practice" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Our Practice
            </Link>
              <Link 
              href="/microDentistry" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Why Micro Dentistry
            </Link>
            <MobileServicesDropdown onClick={() => setIsOpen(false)} />
            <Link 
              href="/tech" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Tech
            </Link>
            <Link 
              href="/gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button 
              onClick={() => {
                handleOpenChatbot();
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2.5 rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300 font-medium"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;