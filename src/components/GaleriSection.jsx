import React from 'react';

export default function GaleriSection() {
  return (
    <section
      className="relative pt-14 pb-0 sm:pt-16 lg:pt-20 bg-[#def0e7] paper-scrapbook overflow-hidden"
      id="galeri"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 dot-matrix-pattern"></div>

      {/* Subtle Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 right-[8%] text-2xl opacity-30 animate-twinkle text-amber-500">
          ✦
        </div>
        <div className="absolute bottom-14 left-[5%] text-2xl opacity-30 animate-float-slow">
          📷
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="reveal-element flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10">
          <div>
            <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#123B50] border-2 border-[#287C80]/30 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="pushpin-red -top-2 left-4"></span>
              <span className="material-symbols-outlined text-[16px] text-[#287C80]">photo_library</span>
              <span className="text-[#287C80]">Dokumentasi Kegiatan</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B50] mt-3 tracking-tight">
              Suasana Belajar di Rumah Siswa
            </h2>
            <p className="font-sans text-[#123B50]/80 text-sm sm:text-base mt-1.5 max-w-xl">
              Potret kegiatan belajar mengajar bersama pengajar Mumtaz di rumah siswa di Sampit.
            </p>
          </div>
          <div className="font-handwriting text-sm sm:text-base text-[#123B50] hidden sm:block font-medium bg-white/85 px-4 py-1.5 rounded-2xl border border-[#A8C9B5] shadow-sm">
            "Belajar dengan tenang di rumah sendiri."
          </div>
        </div>

        {/* 4 Photo Prints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Polaroid 1 */}
          <div className="reveal-scale delay-75 relative bg-gradient-to-b from-white via-[#fffbf0] to-[#fae8c8] border-2 border-[#d4af37]/35 p-3.5 pb-5 rounded-xl shadow-paper hover:shadow-paper-lift transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="pushpin-red -top-2.5 left-6 z-20"></div>
            <div className="washi-strip-orange absolute -top-3.5 right-6 w-20 h-5 rounded-sm -rotate-1 z-10"></div>
            <div className="overflow-hidden rounded-lg aspect-[4/3] bg-[#DCEFED] mb-2.5 shadow-inner border border-[#E2D9C8]">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Tutor sabar membimbing anak belajar membaca buku"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCYJF-HiBtYq92ssdqIsQ5sWla8UJDN43iaMcQ-Jkba0tEbB-OzrprITWGvPyJWp9RCi8txnfjonyfjZbAq0P8dw3GYXIDRKF2qr-Sif6im3mSO5ZbGmJySsj9HURnUvNU5L9TEKznudwrsJH9Pwk6SME5C3roXJnH7q7qfjaFIVSLzmhyQmP4wEf2aSV9Dq_A37IqzXP6yRJP2vTqnrfG_oixES906o36CqXNCA"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-sm sm:text-base font-bold text-[#123B50]">
              Pendampingan Calistung
            </h3>
            <p className="font-sans text-xs text-[#123B50]/75 mt-1 leading-relaxed">
              Pengajar membimbing siswa usia dini belajar membaca dan menulis secara perlahan.
            </p>
            <div className="mt-2 text-right font-handwriting text-xs text-[#287C80] font-medium">
              Jenjang TK &amp; SD
            </div>
          </div>

          {/* Polaroid 2 */}
          <div className="reveal-scale delay-150 relative bg-gradient-to-b from-white via-[#f2fbf9] to-[#d9f0ec] border-2 border-[#287C80]/30 p-3.5 pb-5 rounded-xl shadow-paper hover:shadow-paper-lift transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="pushpin-teal -top-2.5 right-6 z-20"></div>
            <div className="washi-strip-teal absolute -top-3.5 left-6 w-20 h-5 rounded-sm rotate-2 z-10"></div>
            <div className="overflow-hidden rounded-lg aspect-[4/3] bg-[#DCEFED] mb-2.5 shadow-inner border border-[#E2D9C8]">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Siswa-siswi sekolah membahas soal latihan"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvQtet0GIHLWQOq0VVD8C6po7HXMxwNhrgSw-_VwowCFd99oehpVJ7JlfNjDjiveFxO2tSAtqGcgKEQoknhEEpa4963NP9R1777wSLNEH4OrgkWtm7J_mqg9UOf1u9qEcoS3Y-PM-aZhFnjjG6TbKn9cMeRLcxqtIP0vJWW6bRdKz6kGv5xbhsGjNhCOanxHhSxh6ZvMW34YhcwsJblhsd41IiUd6WRPVgGJvP4w"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-sm sm:text-base font-bold text-[#123B50]">
              Bahas Materi &amp; PR Sekolah
            </h3>
            <p className="font-sans text-xs text-[#123B50]/75 mt-1 leading-relaxed">
              Mengerjakan latihan soal dan membahas materi sekolah yang belum dipahami siswa.
            </p>
            <div className="mt-2 text-right font-handwriting text-xs text-[#287C80] font-medium">
              Jenjang SD &amp; SMP
            </div>
          </div>

          {/* Polaroid 3 */}
          <div className="reveal-scale delay-200 relative bg-gradient-to-b from-white via-[#f3faf5] to-[#dcf0e3] border-2 border-[#4f857d]/30 p-3.5 pb-5 rounded-xl shadow-paper hover:shadow-paper-lift transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="pushpin-yellow -top-2.5 left-6 z-20"></div>
            <div className="washi-strip-green absolute -top-3.5 right-6 w-20 h-5 rounded-sm -rotate-2 z-10"></div>
            <div className="overflow-hidden rounded-lg aspect-[4/3] bg-[#DCEFED] mb-2.5 shadow-inner border border-[#E2D9C8]">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Santri cilik menyimak tuntunan tajwid dari pengajar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3P6moS34fiRQdd3Y9Wec0zWZ72BwevYlVTBbY1ecGglWGaLJcwZbP22Atndl-hgwZ9_uIHxdxsMWdhg4A6Kd3HWXuEZMc0V31PiaCVT3mXDgQbyWaqxllSQ0B2aP9X8DQc-p7VgtIPZpe8K5iTFZp2WfluAndP8dmLen7JjMAajBcgps2KGL3lz1fhEIFbj9CqoeEYx3QCjYr3KmMDzhfOA3z1Mh0Tp4026t2A"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-sm sm:text-base font-bold text-[#123B50]">
              Bimbingan Mengaji di Rumah
            </h3>
            <p className="font-sans text-xs text-[#123B50]/75 mt-1 leading-relaxed">
              Belajar membaca Al-Qur'an, perbaikan makhraj huruf, serta tajwid secara tatap muka.
            </p>
            <div className="mt-2 text-right font-handwriting text-xs text-[#287C80] font-medium">
              Program Mengaji
            </div>
          </div>

          {/* Polaroid 4 */}
          <div className="reveal-scale delay-250 relative bg-gradient-to-b from-white via-[#fff8f0] to-[#fae2c8] border-2 border-[#e08b44]/35 p-3.5 pb-5 rounded-xl shadow-paper hover:shadow-paper-lift transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <div className="pushpin-red -top-2.5 right-6 z-20"></div>
            <div className="washi-strip-yellow absolute -top-3.5 left-6 w-20 h-5 rounded-sm rotate-1 z-10"></div>
            <div className="overflow-hidden rounded-lg aspect-[4/3] bg-[#DCEFED] mb-2.5 shadow-inner border border-[#E2D9C8]">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Siswa remaja fokus berkonsentrasi mencatat intisari materi"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz1hAFv3HEaP4_LciQRprxpEyggxFaaoIsxabOfsj6yt1jCLBjREqO-ypsJ06AKEga8bH689qgNwOZS2zUm1KkavRUk50c8sLrRfVG40kHCXuhbyBHZJF3X7b4ZTkfdzbWsv41fyQ7iqWg83qv2_nHP-jBnYBTNd6ysHKUSN6WpsWw4paS4kPT2_C8a6mn0Fg-ELlYtJQUplEqt4IQsQmI34MNDGV1KOmN3HbmgA"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-sm sm:text-base font-bold text-[#123B50]">
              Persiapan Ujian Sekolah
            </h3>
            <p className="font-sans text-xs text-[#123B50]/75 mt-1 leading-relaxed">
              Pendalaman materi hitungan dan latihan soal ujian bagi siswa tingkat akhir.
            </p>
            <div className="mt-2 text-right font-handwriting text-xs text-[#287C80] font-medium">
              Jenjang SMP &amp; SMA
            </div>
          </div>
        </div>
      </div>

      {/* Pemisah 5 (Gaya A - Varian 3): into FAQ (#FFF9E9) */}
      <div className="relative w-full mt-10 sm:mt-14 leading-none z-10 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-36 sm:h-44 md:h-52 lg:h-56 block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 260"
        >
          <defs>
            <linearGradient id="div5a-sand-hill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ebd5b3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f7ebd4" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="div5a-teal-back" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#20a497" />
              <stop offset="100%" stopColor="#0e6462" />
            </linearGradient>
            <linearGradient id="div5a-cerulean-main" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1b6ca0" />
              <stop offset="60%" stopColor="#2a8cbd" />
              <stop offset="100%" stopColor="#124a73" />
            </linearGradient>
            <linearGradient id="div5a-lake-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64c1e0" />
              <stop offset="55%" stopColor="#9be1f4" />
              <stop offset="100%" stopColor="#dbf4fc" />
            </linearGradient>
            <linearGradient id="div5a-emerald-bush" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3cd070" />
              <stop offset="55%" stopColor="#20a55f" />
              <stop offset="100%" stopColor="#126e42" />
            </linearGradient>
            <linearGradient id="div5a-mint-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          <circle cx="720" cy="128" r="112" fill="#fde68a" fillOpacity="0.48"></circle>
          <circle cx="720" cy="128" r="78" fill="#fef08a" fillOpacity="0.52"></circle>
          <path
            d="M120,170 Q310,85 500,158 Q720,78 940,158 Q1130,85 1320,170 L1320,260 L120,260 Z"
            fill="url(#div5a-sand-hill)"
          ></path>
          <path
            d="M-20,172 Q95,95 215,152 Q315,112 415,172 Z"
            fill="url(#div5a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1025,172 Q1145,108 1265,152 Q1365,92 1460,168 L1460,260 L1025,260 Z"
            fill="url(#div5a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <rect x="0" y="168" width="1440" height="92" fill="url(#div5a-lake-water)"></rect>
          <path
            d="M450,172 C420,192 385,208 415,226 C440,240 405,252 375,260"
            stroke="#ffffff"
            strokeOpacity="0.58"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M990,172 C1020,192 1055,208 1025,226 C1000,240 1035,252 1065,260"
            stroke="#ffffff"
            strokeOpacity="0.58"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M260,188 H380 M660,184 H780 M1060,190 H1180"
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth="1.8"
            strokeLinecap="round"
          ></path>
          <path
            d="M-25,218 Q75,112 195,158 Q295,118 395,215 Z"
            fill="url(#div5a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M15,216 Q105,148 195,182 Q275,155 345,215"
            fill="none"
            stroke="#eab308"
            strokeOpacity="0.65"
            strokeWidth="1.3"
          ></path>
          <path
            d="M465,228 Q565,128 675,168 Q755,102 855,165 Q935,132 1005,228 Z"
            fill="url(#div5a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M535,228 Q625,158 715,192 Q795,138 885,195 Q935,172 975,228"
            fill="none"
            stroke="#eab308"
            strokeOpacity="0.68"
            strokeWidth="1.4"
          ></path>
          <path
            d="M510,165 C640,152 790,175 955,160"
            stroke="#ffffff"
            strokeOpacity="0.65"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M1075,218 Q1195,115 1315,158 Q1395,105 1465,185 L1465,235 L1075,218 Z"
            fill="url(#div5a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M-20,252 Q60,202 155,228 Q255,196 365,245 Z"
            fill="url(#div5a-emerald-bush)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M515,252 Q620,204 725,230 Q830,202 935,250 Z"
            fill="url(#div5a-mint-front)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M1085,252 Q1185,204 1285,228 Q1375,198 1460,242 L1460,260 L1085,260 Z"
            fill="url(#div5a-emerald-bush)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M0,244 C360,226 720,258 1080,236 C1260,225 1370,246 1440,240 L1440,260 L0,260 Z"
            fill="#FFF9E9"
          ></path>
        </svg>
      </div>
    </section>
  );
}
