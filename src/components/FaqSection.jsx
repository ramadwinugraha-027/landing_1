import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    delay: 'delay-75',
    question: 'Bagaimana cara mendaftar dan memulai les privat ke rumah?',
    answer:
      'Anda cukup menghubungi kami melalui WhatsApp atau mengisi formulir pendaftaran di bawah. Sampaikan jenjang sekolah anak, mata pelajaran yang dibutuhkan, alamat rumah di Sampit, serta waktu belajar yang diinginkan. Tim kami akan menyiapkan pengajar yang sesuai untuk datang ke rumah Anda.'
  },
  {
    id: 2,
    delay: 'delay-100',
    question: 'Hari dan jam berapa saja jadwal les yang tersedia?',
    answer:
      'Jadwal tersedia dari hari Senin hingga Sabtu, dengan pilihan sesi pagi (08.30 – 10.00), siang (13.30 – 15.00), sore (16.00 – 17.30), atau malam (19.00 – 20.30). Hari dan jam belajar disesuaikan dengan kesepakatan keluarga.'
  },
  {
    id: 3,
    delay: 'delay-150',
    question: 'Apakah bisa mengganti pengajar jika anak merasa kurang cocok?',
    answer:
      'Bisa. Apabila setelah sesi awal anak merasa belum cocok dengan gaya mengajar tutor, silakan beri tahu admin kami. Kami akan mengatur pergantian pengajar tanpa biaya tambahan.'
  },
  {
    id: 4,
    delay: 'delay-200',
    question: 'Apakah materi les mengikuti pelajaran di sekolah anak?',
    answer:
      'Ya. Materi mengikuti buku paket dan kurikulum yang digunakan di sekolah masing-masing siswa di Sampit. Selain menjelaskan ulang materi yang belum dipahami, pengajar juga membantu mendampingi PR harian dan latihan soal menjelang ujian.'
  },
  {
    id: 5,
    delay: 'delay-250',
    question: 'Bagaimana orang tua memantau perkembangan belajar anak?',
    answer:
      'Setiap pertemuan dicatat dalam lembar presensi dan jurnal materi. Setiap akhir bulan, pengajar menyusun ringkasan perkembangan belajar yang dikirimkan melalui WhatsApp atau dapat dilihat pada Portal Orang Tua.'
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="relative pt-14 pb-0 sm:pt-16 lg:pt-20 bg-[#FFF9E9] paper-notebook overflow-hidden"
      id="faq"
    >
      {/* Decorative Stationery Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-[5%] text-2xl animate-float-slow hidden sm:block opacity-30">
          ❓
        </div>
        <div className="absolute bottom-1/4 left-[4%] text-2xl animate-float-alt hidden sm:block opacity-30">
          💡
        </div>
        <div className="absolute top-1/2 left-[10%] text-amber-500 opacity-25 text-xl font-bold animate-twinkle">
          ✦
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="reveal-element flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#123B50] border-2 border-[#287C80]/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="pushpin-yellow -top-2 left-4"></span>
            <span className="material-symbols-outlined text-[16px] text-[#287C80]">help</span>
            <span className="text-[#287C80]">Pertanyaan Umum</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B50] mt-3 tracking-tight">
            Hal yang Sering Ditanyakan Orang Tua
          </h2>
          <p className="font-sans text-[#123B50]/80 max-w-xl mt-2 text-sm sm:text-base">
            Informasi singkat mengenai pendaftaran, pengaturan jadwal, serta sistem belajar privat di rumah.
          </p>
        </div>

        {/* FAQ Accordion Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isActive = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isActive ? 'active' : ''} reveal-element ${item.delay}`}
              >
                <button
                  className="faq-trigger"
                  aria-expanded={isActive}
                  aria-controls={`faq-ans-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <div className="faq-icon-wrapper">
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </div>
                </button>
                <div className="faq-collapse" id={`faq-ans-${item.id}`}>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pemisah 6 (Gaya B - Varian 3): into Kontak (#e2f3f5) */}
      <div className="relative w-full mt-10 sm:mt-14 leading-none z-10 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-36 sm:h-44 md:h-52 lg:h-56 block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 260"
        >
          <defs>
            <linearGradient id="div6b-apricot-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5c678" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#FFF9E9" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="div6b-terracotta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e87538" />
              <stop offset="55%" stopColor="#cf5319" />
              <stop offset="100%" stopColor="#9a350a" />
            </linearGradient>
            <linearGradient id="div6b-honey-gold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5a638" />
              <stop offset="100%" stopColor="#bd6c15" />
            </linearGradient>
            <linearGradient id="div6b-pine-ridge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e696b" />
              <stop offset="100%" stopColor="#123f4a" />
            </linearGradient>
            <linearGradient id="div6b-aqua-stream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9ad8dc" />
              <stop offset="50%" stopColor="#c8eef0" />
              <stop offset="100%" stopColor="#86cbd0" />
            </linearGradient>
            <linearGradient id="div6b-sage-meadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5ab39e" />
              <stop offset="100%" stopColor="#2e7e75" />
            </linearGradient>
          </defs>

          <circle cx="820" cy="126" r="106" fill="#fde68a" fillOpacity="0.48"></circle>
          <path
            d="M0,162 C210,72 430,152 660,82 C890,18 1120,138 1440,78 L1440,260 L0,260 Z"
            fill="url(#div6b-apricot-sky)"
          ></path>
          <path
            d="M-20,192 Q95,72 245,138 Q385,82 545,182 L545,260 L-20,260 Z"
            fill="url(#div6b-terracotta)"
            stroke="#fef08a"
            strokeOpacity="0.8"
            strokeWidth="1.6"
          ></path>
          <path
            d="M25,185 Q145,112 265,158 Q375,118 485,182"
            fill="none"
            stroke="#FFF9E9"
            strokeOpacity="0.5"
            strokeWidth="1.3"
          ></path>
          <path
            d="M460,195 Q625,95 795,152 Q955,78 1135,168 Q1295,92 1460,148 L1460,260 L460,260 Z"
            fill="url(#div6b-honey-gold)"
            stroke="#fef08a"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <path
            d="M580,188 Q725,125 870,168 Q1015,112 1175,175"
            fill="none"
            stroke="#FFF9E9"
            strokeOpacity="0.5"
            strokeWidth="1.3"
          ></path>
          <path
            d="M-25,218 C165,148 365,212 585,155 C795,102 1005,198 1225,148 C1335,122 1405,148 1460,168 L1460,260 L-25,260 Z"
            fill="url(#div6b-pine-ridge)"
            stroke="#fbbf24"
            strokeOpacity="0.75"
            strokeWidth="1.5"
          ></path>
          <path
            d="M0,222 C290,196 570,242 870,210 C1130,184 1310,224 1440,208 L1440,260 L0,260 Z"
            fill="url(#div6b-aqua-stream)"
          ></path>
          <path
            d="M260,226 Q480,212 700,230 T1140,220"
            stroke="#FFF9E9"
            strokeOpacity="0.75"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M-20,248 C175,202 355,242 555,224 C775,204 985,252 1205,216 C1325,196 1395,220 1460,235 L1460,260 L-20,260 Z"
            fill="url(#div6b-sage-meadow)"
            stroke="#fbbf24"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          ></path>
          <path
            d="M0,244 C340,226 690,258 1050,236 C1240,225 1360,246 1440,240 L1440,260 L0,260 Z"
            fill="#e2f3f5"
          ></path>
        </svg>
      </div>
    </section>
  );
}
