import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-quick-action"
      href="https://wa.me/6281234567890?text=Halo%20Bimbel%20Mumtaz%20Sampit,%20saya%20ingin%20konsultasi%20les%20privat%20ke%20rumah."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi WhatsApp Mumtaz Sampit"
    >
      <span className="material-symbols-outlined text-[20px]">chat</span>
      <span className="hidden sm:inline">Tanya Les Privat</span>
    </a>
  );
}
