import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347081432919" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" className="text-white" />
      <span className="absolute right-full mr-4 bg-white text-neutral-900 px-4 py-2 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-neutral-100">
        Chat with us
      </span>
    </a>
  );
}
