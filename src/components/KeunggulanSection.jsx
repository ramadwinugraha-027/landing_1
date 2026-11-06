import React from 'react';

export default function KeunggulanSection() {
  return (
    <section
      className="relative pt-14 pb-0 sm:pt-16 lg:pt-20 bg-[#FFF9E9] paper-notebook overflow-hidden"
      id="keunggulan"
    >
      {/* Subtle Background Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-16 left-[5%] text-3xl opacity-25 hidden sm:block animate-float-slow">
          ⭐
        </div>
        <div className="absolute bottom-20 right-[5%] text-3xl opacity-25 hidden sm:block animate-float-alt">
          📌
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="reveal-element flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEFED] text-[#123B50] border-2 border-[#287C80]/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="pushpin-yellow -top-2 left-4"></span>
            <span className="material-symbols-outlined text-[16px] text-[#287C80]">verified</span>
            <span className="text-[#287C80]">Keunggulan Layanan</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B50] mt-3 tracking-tight">
            Mengapa Orang Tua Memilih Mumtaz?
          </h2>
          <p className="font-sans text-[#123B50]/80 max-w-2xl mt-2 text-sm sm:text-base leading-relaxed">
            Kami mengutamakan kenyamanan belajar anak di rumah serta komunikasi yang jelas dengan orang tua.
          </p>
        </div>

        {/* Keunggulan Arched Medallion Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative z-10 mt-2">
          {/* Arch 01 */}
          <div className="reveal-element delay-100 relative rounded-t-[110px] rounded-b-[28px] overflow-hidden bg-gradient-to-b from-[#fce3b4] via-[#fdf3dc] to-white border-2 border-[#d4af37]/45 px-5 pt-9 pb-14 shadow-paper hover:-translate-y-2 hover:shadow-paper-lift transition-all duration-300 flex flex-col items-center text-center group">
            <div className="mb-3">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#e08b44] shadow-sm flex items-center justify-center font-display text-2xl font-bold text-[#c25e1a] group-hover:scale-105 transition-transform">
                01
              </div>
            </div>

            <div className="relative z-10 mt-1">
              <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#9a4a12] bg-white/75 px-2.5 py-0.5 rounded-full border border-[#d97706]/25">
                Praktis bagi Keluarga
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#123B50] mt-2.5 mb-2 leading-snug">
                Tanpa Repot Antar-Jemput
              </h3>
              <p className="text-[#123B50]/80 text-xs sm:text-sm leading-relaxed font-sans">
                Orang tua hemat waktu dan anak tidak kelelahan di jalan sepulang sekolah. Jam belajar langsung dimulai tepat waktu di rumah sendiri.
              </p>
            </div>

            <svg
              className="absolute bottom-0 inset-x-0 w-full h-10 pointer-events-none select-none"
              viewBox="0 0 260 50"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M0,50 L0,24 Q65,4 130,26 Q195,44 260,18 L260,50 Z" fill="#f3c68f" opacity="0.45" />
              <path d="M0,50 L0,34 Q80,16 160,34 Q215,44 260,28 L260,50 Z" fill="#d98a3c" opacity="0.65" />
            </svg>
          </div>

          {/* Arch 02 */}
          <div className="reveal-element delay-200 relative rounded-t-[110px] rounded-b-[28px] overflow-hidden bg-gradient-to-b from-[#bfe8e3] via-[#e5f7f4] to-white border-2 border-[#287C80]/40 px-5 pt-9 pb-14 shadow-paper hover:-translate-y-2 hover:shadow-paper-lift transition-all duration-300 flex flex-col items-center text-center group lg:translate-y-5">
            <div className="mb-3">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#287C80] shadow-sm flex items-center justify-center font-display text-2xl font-bold text-[#287C80] group-hover:scale-105 transition-transform">
                02
              </div>
            </div>

            <div className="relative z-10 mt-1">
              <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#165a5e] bg-white/75 px-2.5 py-0.5 rounded-full border border-[#287C80]/25">
                Interaksi Terbuka
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#123B50] mt-2.5 mb-2 leading-snug">
                Anak Tidak Malu Bertanya
              </h3>
              <p className="text-[#123B50]/80 text-xs sm:text-sm leading-relaxed font-sans">
                Karena hanya berdua dengan pengajar, anak lebih leluasa menanyakan bagian pelajaran yang belum ia mengerti saat di sekolah.
              </p>
            </div>

            <svg
              className="absolute bottom-0 inset-x-0 w-full h-10 pointer-events-none select-none"
              viewBox="0 0 260 50"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M0,50 L0,22 Q70,40 140,20 Q205,4 260,24 L260,50 Z" fill="#8cc7c2" opacity="0.45" />
              <path d="M0,50 L0,32 Q85,46 165,28 Q215,16 260,32 L260,50 Z" fill="#287C80" opacity="0.65" />
            </svg>
          </div>

          {/* Arch 03 */}
          <div className="reveal-element delay-300 relative rounded-t-[110px] rounded-b-[28px] overflow-hidden bg-gradient-to-b from-[#cde6d6] via-[#eaf6ee] to-white border-2 border-[#4f857d]/40 px-5 pt-9 pb-14 shadow-paper hover:-translate-y-2 hover:shadow-paper-lift transition-all duration-300 flex flex-col items-center text-center group">
            <div className="mb-3">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#4f857d] shadow-sm flex items-center justify-center font-display text-2xl font-bold text-[#3a6b63] group-hover:scale-105 transition-transform">
                03
              </div>
            </div>

            <div className="relative z-10 mt-1">
              <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#2c5952] bg-white/75 px-2.5 py-0.5 rounded-full border border-[#4f857d]/25">
                Pengajar Terpilih
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#123B50] mt-2.5 mb-2 leading-snug">
                Sabar dan Menguasai Materi
              </h3>
              <p className="text-[#123B50]/80 text-xs sm:text-sm leading-relaxed font-sans">
                Pengajar melalui seleksi akademik dan wawancara. Apabila anak merasa kurang cocok dengan cara mengajarnya, pengajar dapat diganti.
              </p>
            </div>

            <svg
              className="absolute bottom-0 inset-x-0 w-full h-10 pointer-events-none select-none"
              viewBox="0 0 260 50"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M0,50 L0,25 Q65,6 135,25 Q200,42 260,20 L260,50 Z" fill="#9fc4b0" opacity="0.5" />
              <path d="M0,50 L0,34 Q80,18 160,34 Q215,44 260,29 L260,50 Z" fill="#4f857d" opacity="0.7" />
            </svg>
          </div>

          {/* Arch 04 */}
          <div className="reveal-element delay-400 relative rounded-t-[110px] rounded-b-[28px] overflow-hidden bg-gradient-to-b from-[#f7d4b2] via-[#fceedd] to-white border-2 border-[#c25e1a]/35 px-5 pt-9 pb-14 shadow-paper hover:-translate-y-2 hover:shadow-paper-lift transition-all duration-300 flex flex-col items-center text-center group lg:translate-y-5">
            <div className="mb-3">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#123B50] shadow-sm flex items-center justify-center font-display text-2xl font-bold text-[#123B50] group-hover:scale-105 transition-transform">
                04
              </div>
            </div>

            <div className="relative z-10 mt-1">
              <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#9a3412] bg-white/75 px-2.5 py-0.5 rounded-full border border-[#c25e1a]/25">
                Laporan Berkala
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#123B50] mt-2.5 mb-2 leading-snug">
                Perkembangan Anak Terpantau
              </h3>
              <p className="text-[#123B50]/80 text-xs sm:text-sm leading-relaxed font-sans">
                Orang tua dapat melihat langsung cara guru mengajar di rumah serta menerima catatan perkembangan belajar anak setiap bulan.
              </p>
            </div>

            <svg
              className="absolute bottom-0 inset-x-0 w-full h-10 pointer-events-none select-none"
              viewBox="0 0 260 50"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M0,50 L0,22 Q70,38 140,20 Q205,6 260,24 L260,50 Z" fill="#e0b589" opacity="0.5" />
              <path d="M0,50 L0,33 Q85,46 165,28 Q215,16 260,32 L260,50 Z" fill="#123B50" opacity="0.65" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pemisah 4 (Gaya B - Varian 2): into Galeri (#def0e7) */}
      <div className="relative w-full mt-12 sm:mt-16 leading-none z-10 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-36 sm:h-44 md:h-52 lg:h-56 block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 260"
        >
          <defs>
            <linearGradient id="div4b-apricot-hill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f6c87a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFF9E9" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="div4b-terracotta-main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea6a2a" />
              <stop offset="55%" stopColor="#d45218" />
              <stop offset="100%" stopColor="#9e360c" />
            </linearGradient>
            <linearGradient id="div4b-amber-gold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="div4b-gold-stream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fcd34d" />
            </linearGradient>
            <linearGradient id="div4b-pine-ridge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d6869" />
              <stop offset="100%" stopColor="#113e47" />
            </linearGradient>
            <linearGradient id="div4b-sage-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#52ad95" />
              <stop offset="50%" stopColor="#76c8af" />
              <stop offset="100%" stopColor="#3c8d79" />
            </linearGradient>
          </defs>

          <circle cx="1020" cy="128" r="108" fill="#fde68a" fillOpacity="0.5"></circle>
          <circle cx="1020" cy="128" r="74" fill="#fbbf24" fillOpacity="0.35"></circle>
          <path
            d="M80,168 Q280,75 490,152 Q710,65 930,148 Q1150,72 1380,158 L1380,260 L80,260 Z"
            fill="url(#div4b-apricot-hill)"
          ></path>
          <path
            d="M-20,185 Q120,88 265,148 Q390,95 520,175 L520,260 L-20,260 Z"
            fill="url(#div4b-amber-gold)"
            stroke="#fef08a"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <path
            d="M860,182 Q1010,92 1165,145 Q1310,68 1460,135 L1460,260 L860,260 Z"
            fill="url(#div4b-terracotta-main)"
            stroke="#fef08a"
            strokeOpacity="0.8"
            strokeWidth="1.6"
          ></path>
          <path
            d="M950,178 Q1090,118 1230,162 Q1340,105 1450,148"
            fill="none"
            stroke="#FFF9E9"
            strokeOpacity="0.55"
            strokeWidth="1.3"
          ></path>
          <path
            d="M0,176 C340,162 690,192 1040,172 C1240,162 1365,180 1440,175 L1440,260 L0,260 Z"
            fill="url(#div4b-gold-stream)"
          ></path>
          <path
            d="M540,182 C610,196 670,210 630,228 C595,242 645,252 700,260"
            stroke="#FFF9E9"
            strokeOpacity="0.75"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M180,222 Q310,118 450,168 Q575,112 710,208 L180,222 Z"
            fill="url(#div4b-terracotta-main)"
            stroke="#fde68a"
            strokeWidth="1.6"
          ></path>
          <path
            d="M250,218 Q365,148 480,185 Q575,145 665,212"
            fill="none"
            stroke="#FFF9E9"
            strokeOpacity="0.55"
            strokeWidth="1.3"
          ></path>
          <path
            d="M-25,228 Q115,165 265,205 Q435,155 615,215 Q815,148 1015,202 Q1225,142 1460,198 L1460,260 L-25,260 Z"
            fill="url(#div4b-pine-ridge)"
            stroke="#fbbf24"
            strokeOpacity="0.75"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-20,248 Q140,202 310,232 Q510,192 720,235 Q940,195 1160,228 Q1320,202 1460,235 L1460,260 L-20,260 Z"
            fill="url(#div4b-sage-front)"
            stroke="#fde68a"
            strokeOpacity="0.7"
            strokeWidth="1.4"
          ></path>
          <path
            d="M0,244 C330,226 680,258 1040,236 C1240,225 1360,246 1440,240 L1440,260 L0,260 Z"
            fill="#def0e7"
          ></path>
        </svg>
      </div>
    </section>
  );
}
