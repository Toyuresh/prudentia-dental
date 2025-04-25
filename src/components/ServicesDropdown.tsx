"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = {
    General: [
      { name: "Cleaning & Exams", href: "/services/general/#CleaningExams" },
      { name: "White Fillings", href: "/services/general/#WhiteFillings" },
      { name: "Sleep Apnea", href: "/services/general/#SleepApnea" },
      { name: "Emergency Care", href: "/services/general/#EmergencyCare" },
      { name: "Root Canals", href: "/services/general/#RootCanals" },
      { name: "Deep Cleaning", href: "/services/general/#DeepCleaning" },
    ],
    Cosmetic: [
      { name: "Smile Makeover", href: "/services/cosmetic/#SmileMakeover" },
      { name: "Teeth Whitening", href: "/services/cosmetic/#TeethWhitening" },
      { name: "Clear Aligners", href: "/services/cosmetic/#ClearAligners" },
      { name: "Veneers", href: "/services/cosmetic/#Veneers" },
    ],
    Surgical: [
      { name: "Implants", href: "/services/surgical/#Implants" },
      { name: "Sedation Dentistry", href: "/services/surgical/#SedationDentistry" },
      { name: "Extractions", href: "/services/surgical/#Extractions" },
      { name: "Dentures", href: "/services/surgical/#Dentures" },
      { name: "All on 4 Implants", href: "/services/surgical/#Allonimplants" },
      { name: "Bone Graft", href: "/services/surgical/#BoneGraft" },
    ],
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-blue-600 font-medium px-1 py-2"
      >
        Services
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-96 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className=" grid grid-cols-3 gap-0 p-2">
            {Object.entries(services).map(([category, items]) => (
              <div key={category} className="p-2">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 px-3 py-1 border-b border-gray-100">
                  {category}
                </h3>
                <div className="space-y-1">
                  {items.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}