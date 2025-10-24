import React from 'react';

export default function WhatsAppButton({ number }) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
    </a>
  );
}
