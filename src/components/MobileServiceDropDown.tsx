"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function MobileServicesDropdown() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    ]
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setOpenSubCategory(null); // Close any open sub-categories when the main dropdown is toggled
  };

  const toggleSubCategory = (category: string) => {
    setOpenSubCategory(openSubCategory === category ? null : category);
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      {/* Main Services Button */}
      <button
        onClick={toggleServices}
        className="flex items-center border-b justify-between w-full px-1 py-3 text-left text-gray-700 hover:bg-gray-50"
      >
        <span className="font-medium ">Services</span>
        <svg
          className={`h-5 w-5 transform transition-transform ${
            isServicesOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Services Submenu */}
      {isServicesOpen && (
        <div className="pl-4 bg-gray-50">
          {Object.entries(services).map(([category, items]) => (
            <div key={category} className="border-b border-gray-200 last:border-b-0">
              {/* Category Button */}
              <button
                onClick={() => toggleSubCategory(category)}
                className="flex items-center justify-between w-full px-3 py-3 text-left text-gray-700"
              >
                <span className="font-medium text-blue-600">{category}</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openSubCategory === category ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Services List */}
              {openSubCategory === category && (
                <div className="pl-4 pb-2 space-y-2">
                  {items.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      onClick={() => setOpenSubCategory(null)} // Optionally close the sub-category on link click
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}