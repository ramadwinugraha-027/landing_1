import React from 'react';

export default function Footer() {
  return (
    <footer
      className="w-full pt-14 pb-10 sm:pt-16 sm:pb-12 bg-gradient-to-b from-[#123B50] via-[#0e2e40] to-[#091f2c] text-[#DCEFED] relative overflow-hidden"
      id="footer"
    >
      {/* Chalkboard Sketches in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="w-full h-full" fill="none" stroke="#DCEFED" strokeWidth="1.5">
          <circle cx="120" cy="80" fill="#DCEFED" r="3"></circle>
          <circle cx="240" cy="140" fill="#DCEFED" r="2"></circle>
          <circle cx="180" cy="110" fill="#DCEFED" r="2.5"></circle>
          <line strokeDasharray="4 4" x1="120" x2="180" y1="80" y2="110"></line>
          <line strokeDasharray="4 4" x1="180" x2="240" y1="110" y2="140"></line>
          <path d="M1100 60 L1150 45 L1200 60 V120 L1150 105 L1100 120 Z" stroke="#DCEFED"></path>
          <line x1="1150" x2="1150" y1="45" y2="105"></line>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#287C80] to-[#F4A340] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Bimbel Mumtaz Sampit
              </span>
            </div>
            <p className="font-sans text-sm text-[#DCEFED]/80 max-w-md leading-relaxed">
              Layanan bimbingan belajar privat guru datang ke rumah untuk jenjang TK, SD, SMP, SMA, dan mengaji di wilayah Sampit, Kotawaringin Timur.
            </p>
            <div className="flex items-center gap-2 font-handwriting text-[#F4A340] text-base font-medium">
              Pendampingan belajar tatap muka di rumah Anda.
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5 flex flex-col gap-3 font-sans">
            <span className="font-display text-sm font-bold uppercase tracking-wider text-[#A8C9B5]">
              Informasi Kontak
            </span>
            <p className="text-sm text-[#DCEFED]/85 leading-relaxed">
              Jl. Ahmad Yani No. 12, Mentawa Baru Ketapang, Sampit, Kotawaringin Timur, Kalimantan Tengah
            </p>
            <div className="text-sm text-[#DCEFED]/85 space-y-1">
              <p>WhatsApp: +62 812-3456-7890</p>
              <p>Surel: salam@mumtazsampit.sch.id</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
