"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    {
      category:  "Micro Examinations & Cleanings",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        { name: "Micro Examinations and Cleanings", href: "/services/micro" },
      ]
    },
    {
      category:  "Contemporary Root Treatments",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items: [
        { name: "Micro-Root Treatment", href: "/services/root/microroot" },
        { name: "Revisional Micro-Root Therapy", href: "/services/root/roottherapy" },
        { name: "Micro-Surgical Root Therapy", href: "/services/root/microsurgical" },
        { name: "Regenerative Root Procedures", href: "/services/root/rootprocedures" },
      ]
    },
    {
      category: "Minimally Invasive Cosmetic Dentistry",
      icon: (
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
      ),
      items: [
        { name: "Smile Recreations", href: "/services/cosmetic/smile" },
        { name: "Enamel Reshaping", href: "/services/cosmetic/enamel" },
        { name: "Bonding (Tooth Colored Fillings)", href: "/services/cosmetic/bonding" },
        { name: "Tooth Jewellery", href: "/services/cosmetic/jewellery" },
        { name: "Sealants", href: "/services/cosmetic/sealants" },
        { name: "Veneers", href: "/services/cosmetic/veneers" },
        { name: "Teeth Whitening", href: "/services/cosmetic/whitening" },
      ]
    },
    {
      category: "Restorative Dentistry",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        { name: "Tooth Colored Fillings", href: "/services/restorative/coloured" },
        { name: "Inlays and Onlays", href: "/services/restorative/inlays" },
        { name: "Crowns and Bridges", href: "/services/restorative/crowns" },
        { name: "Full Mouth Rehabilitation", href: "/services/restorative/rehabilitation" },
      ]
    },
      {
      category: "Preventive & Holistic Dentistry",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
      ),
      items: [
        { name: "Oral Hygiene Measures", href: "/services/preventive/oral" },
        { name: "Mouth & Sport Guards", href: "/services/preventive/guards" },
        { name: "Holistic Dental Treatments", href: "/services/preventive/holistic" },
      ]
    },
      {
      category: "Children's Dentistry",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        { name: "Children's Dental Services", href: "/services/childrens" },      ]
    },
      {
      category: "Surgical",
      icon: (
 <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 1.5L5 6l-1.5-1.5L5 3zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM12 8l1.5 1.5L12 11l-1.5-1.5L12 8zM5 17l1.5 1.5L5 20l-1.5-1.5L5 17zM19 17l1.5 1.5L19 20l-1.5-1.5L19 17z" />
</svg>
      ),
      items: [
        { name: "Wisdom Tooth Extraction", href: "/services/surgical/wisdom" },
        { name: "Implants", href: "/services/surgical/implants" },
        { name: "Gum Care", href: "/services/surgical/gumcare" },
    ]
    },
      {
      category: " Braces",
      icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
      ),
      items: [
        { name: "Metal & Ceramic Braces", href: "/services/braces/braces" },
        { name: "Aligners", href: "/services/braces/aligners" },
    ]
    },
      {
      category: "Conventional Dentures & Implant Supported Dentures",
      icon: (
     <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 004 21h16a8.014 8.014 0 00-.244-1.757 2 2 0 00-.328-.815zM8 7.5A2.5 2.5 0 0110.5 5h3A2.5 2.5 0 0116 7.5v0A2.5 2.5 0 0113.5 10h-3A2.5 2.5 0 018 7.5v0z" />
</svg>
      ),
      items: [
        { name: "Conventional Dentures & Implant Supported Dentures", href: "/services/dentures" },
    ]
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-800 hover:text-blue-600 font-medium px-4 py-3 transition-colors duration-200"
      >
        <span className="mr-2">Services</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-[300px] rounded-xl shadow-xl bg-white border border-gray-100 z-50">
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col divide-y divide-gray-100">
              {services.map((section) => (
                <div key={section.category} className="p-4">
                  <div className="flex items-center mb-3 sticky top-0 bg-white py-2 z-10">
                    {section.icon}
                    <h3 className="ml-2 text-lg font-semibold text-gray-900">{section.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-150"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 sticky bottom-0">
            <Link 
              href="/services" 
              className="text-blue-600 font-medium text-sm hover:underline flex items-center"
              onClick={() => setIsOpen(false)}
            >
              View all dental services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
