'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappNumber = '+2348012345678';
  const whatsappMessage = encodeURIComponent(
    'Hello! I would like to get more information about Moni Africa loans.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
