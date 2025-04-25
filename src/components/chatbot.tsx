"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Menu } from 'lucide-react';

const AppointmentChatbot = ({ onOpen, onClose, isOpen }: { onOpen: () => void, onClose: () => void, isOpen: boolean }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        service: '',
        message: ''
    });

    const services = [
        "General Checkup",
        "Teeth Cleaning",
        "Dental Implants",
        "Teeth Whitening",
        "Orthodontics",
        "Emergency Care"
    ];

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const whatsappMessage = `New Appointment Request:%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Date:* ${formData.date}%0A` +
            `*Service:* ${formData.service}%0A` +
            `*Message:* ${formData.message || 'None'}`;

        window.open(`https://wa.me/919768048056?text=${whatsappMessage}`, '_blank');
        setStep(1);
        setFormData({
            name: '',
            phone: '',
            date: '',
            service: '',
            message: ''
        });
        onClose();
    };

    return (
        <>
            {/* Chatbot Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-0 md:bottom-24 right-0 md:right-6 z-50 w-full md:max-w-md h-[80vh] md:h-auto bg-white rounded-t-xl md:rounded-xl shadow-2xl border border-gray-200 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">Book Dental Appointment</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="p-4 flex-1 overflow-y-auto">
                            {step === 1 && (
                                <div className="space-y-4 h-full flex flex-col">
                                    <p className="bg-purple-100 text-purple-800 p-3 rounded-lg max-w-xs">
                                        Hello! Let's book your appointment. What's your name?
                                    </p>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        autoFocus
                                    />
                                    <div className="mt-auto">
                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg disabled:opacity-50"
                                            disabled={!formData.name}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-4 h-full flex flex-col">
                                <p className="bg-purple-100 text-purple-800 p-3 rounded-lg max-w-xs">
                                  Hi {formData.name}, what's your phone number?
                                </p>
                                <div className="relative">
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number (10 digits)"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    autoFocus
                                    pattern="[0-9]{10}"
                                    inputMode="numeric"
                                  />
                                  {formData.phone && !/^\d{10}$/.test(formData.phone) && (
                                    <p className="mt-1 text-sm text-red-600">
                                      Please enter a valid 10-digit phone number
                                    </p>
                                  )}
                                </div>
                                <div className="mt-auto flex space-x-2">
                                  <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg"
                                  >
                                    Back
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (/^\d{10}$/.test(formData.phone)) {
                                        setStep(3);
                                      }
                                    }}
                                    className={`flex-1 px-4 py-3 rounded-lg ${
                                      /^\d{10}$/.test(formData.phone)
                                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                        : 'bg-purple-400 text-white cursor-not-allowed'
                                    }`}
                                    disabled={!/^\d{10}$/.test(formData.phone)}
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-4 h-full flex flex-col">
                                    <p className="bg-purple-100 text-purple-800 p-3 rounded-lg max-w-xs">
                                        Which service do you need?
                                    </p>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        autoFocus
                                    >
                                        <option value="">Select a service</option>
                                        {services.map(service => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                    <div className="mt-auto flex space-x-2">
                                        <button
                                            onClick={() => setStep(2)}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={() => setStep(4)}
                                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg disabled:opacity-50"
                                            disabled={!formData.service}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                               <div className="space-y-4 h-full flex flex-col">
                               <p className="bg-purple-100 text-purple-800 p-3 rounded-lg max-w-xs">
                                 When would you like to visit us?
                               </p>
                               <div className="relative">
                                 <input
                                   type="date"
                                   name="date"
                                   value={formData.date}
                                   onChange={handleChange}
                                   min={new Date().toISOString().split('T')[0]} // Set min date to today
                                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                   autoFocus
                                 />
                                 {formData.date && new Date(formData.date) < new Date(new Date().setHours(0,0,0,0)) && (
                                   <p className="mt-1 text-sm text-red-600">
                                     Please select a future date
                                   </p>
                                 )}
                               </div>
                               <div className="mt-auto flex space-x-2">
                                 <button
                                   onClick={() => setStep(3)}
                                   className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg"
                                 >
                                   Back
                                 </button>
                                 <button
                                   onClick={() => {
                                     const selectedDate = new Date(formData.date);
                                     const today = new Date(new Date().setHours(0,0,0,0));
                                     if (selectedDate >= today) {
                                       setStep(5);
                                     }
                                   }}
                                   className={`flex-1 px-4 py-3 rounded-lg ${
                                     formData.date && new Date(formData.date) >= new Date(new Date().setHours(0,0,0,0))
                                       ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                       : 'bg-purple-400 text-white cursor-not-allowed'
                                   }`}
                                   disabled={!formData.date || new Date(formData.date) < new Date(new Date().setHours(0,0,0,0))}
                                 >
                                   Next
                                 </button>
                               </div>
                             </div>
                            )}

                            {step === 5 && (
                                <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
                                    <p className="bg-purple-100 text-purple-800 p-3 rounded-lg max-w-xs">
                                        Any additional notes for us?
                                    </p>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message (optional)"
                                        rows={3}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <div className="mt-auto flex space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setStep(4)}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center"
                                        >
                                            <span>Send via WhatsApp</span>
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AppointmentChatbot;