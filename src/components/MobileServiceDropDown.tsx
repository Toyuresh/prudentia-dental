"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

interface MobileServicesDropdownProps {
  onClick?: () => void;
}

const MobileServicesDropdown = ({ onClick }: MobileServicesDropdownProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = {
    "Micro Examinations & Cleanings": [
      { name: "Micro Examinations and Cleanings", href: "/services/micro" },
    ],
    "Contemporary Root Treatments": [
      { name: "Micro-Root Treatment", href: "/services/root/microroot" },
      { name: "Revisional Micro-Root Therapy", href: "/services/root/roottherapy" },
      { name: "Micro-Surgical Root Therapy", href: "/services/root/microsurgical" },
      { name: "Regenerative Root Procedures", href: "/services/root/rootprocedures" },
    ],
    "Minimally Invasive Cosmetic Dentistry": [
      { name: "Smile Recreations", href: "/services/cosmetic/smile" },
      { name: "Enamel Reshaping", href: "/services/cosmetic/enamel" },
      { name: "Bonding (Tooth Colored Fillings)", href: "/services/cosmetic/bonding" },
      { name: "Tooth Jewellery", href: "/services/cosmetic/jewellery" },
      { name: "Sealants", href: "/services/cosmetic/sealants" },
      { name: "Veneers", href: "/services/cosmetic/veneers" },
      { name: "Teeth Whitening", href: "/services/cosmetic/whitening" },
    ],
    "Restorative Dentistry": [
      { name: "Tooth Colored Fillings", href: "/services/restorative/coloured" },
      { name: "Inlays and Onlays", href: "/services/restorative/inlays" },
      { name: "Crowns and Bridges", href: "/services/restorative/crowns" },
      { name: "Full Mouth Rehabilitation", href: "/services/restorative/rehabilitation" },
    ],
    "Preventive & Holistic Dentistry": [
      { name: "Oral Hygiene Measures", href: "/services/preventive/oral" },
      { name: "Mouth & Sport Guards", href: "/services/preventive/guards" },
      { name: "Holistic Dental Treatments", href: "/services/preventive/holistic" },
    ],
    "Children's Dentistry": [
      { name: "Children's Dental Services", href: "/services/childrens" },
    ],
    "Surgical": [
      { name: "Wisdom Tooth Extraction", href: "/services/surgical/wisdom" },
      { name: "Implants", href: "/services/surgical/implants" },
      { name: "Gum Care", href: "/services/surgical/gumcare" },
    ],
    "Braces": [
      { name: "Metal & Ceramic Braces", href: "/services/braces/braces" },
      { name: "Aligners", href: "/services/braces/aligners" },
    ],
    "Dentures": [
      { name: "Conventional Dentures & Implant Supported Dentures", href: "/services/dentures" },
    ],
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setOpenSubCategory(null);
  };

  const toggleSubCategory = (category: string) => {
    setOpenSubCategory(openSubCategory === category ? null : category);
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setOpenSubCategory(null);
    if (onClick) onClick(); // Call the parent's onClick handler if it exists
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      {/* Main Services Button */}
      <button
        onClick={toggleServices}
        className="flex items-center border-b justify-between w-full px-1 py-3 text-left text-gray-700 hover:bg-gray-50"
      >
        <span className="font-medium">Services</span>
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
                <span className="font-medium text-purple-600">{category}</span>
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
                      className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      onClick={handleServiceClick} // Use the new handler here
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

export default MobileServicesDropdown;