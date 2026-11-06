import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#0b1d36] via-[#10385c] to-[#156d7d] text-white overflow-hidden flex flex-col justify-center items-center min-h-screen pt-24 pb-44 sm:pt-28 sm:pb-52 lg:pb-60"
      id="hero"
    >
      {/* Multi-layer Flowing Waves & Educational Curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Starry Sparkles / Twinkles */}
        <div className="absolute top-24 left-12 w-4 h-4 text-amber-300 animate-twinkle">✦</div>
        <div className="absolute top-44 right-1/4 w-3 h-3 text-cyan-200 animate-twinkle anim-delay-1000">✦</div>
        <div className="absolute bottom-40 left-1/3 w-5 h-5 text-amber-400 animate-twinkle anim-delay-2000">★</div>
        <div className="absolute top-1/3 right-12 w-4 h-4 text-teal-200 animate-twinkle anim-delay-1500">✦</div>

        {/* Flowing Organic SVG Gradients */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <path
            d="M-100 280C260 120 540 450 960 220C1280 40 1420 280 1600 240L1600 800L-100 800Z"
            fill="url(#hero-teal-grad)"
          ></path>
          <path
            d="M-120 420C220 300 580 560 1020 360C1320 200 1460 390 1600 350L1600 800L-120 800Z"
            fill="#0d7e8a"
            fillOpacity="0.3"
          ></path>
          <defs>
            <linearGradient id="hero-teal-grad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#14919b"></stop>
              <stop offset="100%" stopColor="#0f2442"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Dotted Flow Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" fill="none" viewBox="0 0 1440 800">
          <path
            className="dashed-path"
            d="M-40 180C340 40 760 380 1200 140C1380 40 1520 160 1600 130"
            stroke="#38bdf8"
            strokeWidth="2.5"
          ></path>
          <path
            d="M-80 320C280 190 680 490 1140 270C1360 170 1510 280 1600 260"
            stroke="#fbbf24"
            strokeDasharray="6 8"
            strokeWidth="2"
          ></path>
        </svg>

        {/* FLOATING DOODLES (Stationery & EdTech Micro-Accents) */}
        {/* Floating Paper Plane */}
        <div className="hero-doodle absolute top-28 right-[15%] w-16 h-16 opacity-85 animate-float-slow hidden md:block">
          <svg className="w-full h-full text-amber-300 drop-shadow-md" fill="none" viewBox="0 0 100 100">
            <path
              d="M10 50L85 15L55 85L45 55L10 50Z"
              fill="rgba(251, 191, 36, 0.15)"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
            <path d="M85 15L45 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
            <path d="M30 65C20 75 10 75 5 70" stroke="currentColor" strokeDasharray="3 3" strokeWidth="2"></path>
          </svg>
        </div>

        {/* Floating Pencil */}
        <div className="hero-doodle absolute bottom-36 left-[8%] w-14 h-14 opacity-75 animate-float-alt hidden lg:block">
          <svg className="w-full h-full text-cyan-200 drop-shadow" fill="none" viewBox="0 0 64 64">
            <rect
              fill="rgba(56, 189, 248, 0.2)"
              height="38"
              rx="2"
              stroke="currentColor"
              strokeWidth="3"
              transform="rotate(35 18 8)"
              width="14"
              x="18"
              y="8"
            ></rect>
            <path d="M38 43L31 52L24 45L38 43Z" fill="#fbbf24" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>

        {/* Floating Doodle Book */}
        <div className="hero-doodle absolute top-1/2 right-[6%] w-16 h-16 opacity-70 animate-float-slow hidden lg:block">
          <svg className="w-full h-full text-teal-200" fill="none" viewBox="0 0 80 80">
            <path
              d="M10 25C25 20 40 25 40 25C40 25 55 20 70 25V65C55 60 40 65 40 65C40 65 25 60 10 65V25Z"
              fill="rgba(20, 145, 155, 0.2)"
              stroke="currentColor"
              strokeWidth="3"
            ></path>
            <path d="M40 25V65" stroke="currentColor" strokeWidth="3"></path>
          </svg>
        </div>

        {/* Floating Lightbulb Idea Doodle */}
        <div className="hero-doodle absolute top-20 left-[18%] w-12 h-12 opacity-40 animate-float-slow hidden md:block">
          <svg
            className="w-full h-full text-amber-300 drop-shadow"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 48 48"
          >
            <path
              d="M24 6a14 14 0 0 0-14 14c0 7 5 11 6 14h16c1-3 6-7 6-14A14 14 0 0 0 24 6z"
              fill="rgba(251,191,36,0.15)"
            ></path>
            <path d="M18 38h12"></path>
            <path d="M20 42h8"></path>
            <path d="M24 2v4"></path>
            <path d="M10 10l3 3"></path>
            <path d="M38 10l-3 3"></path>
          </svg>
        </div>

        {/* Graduation Mortarboard Doodle */}
        <div className="hero-doodle absolute bottom-28 right-[24%] w-14 h-14 opacity-40 animate-float-alt hidden lg:block">
          <svg
            className="w-full h-full text-cyan-200 drop-shadow"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 48 48"
          >
            <path d="M4 18L24 8l20 10-20 10L4 18z" fill="rgba(56,189,248,0.2)"></path>
            <path d="M10 22.5V34c0 5 6.5 8 14 8s14-3 14-8V22.5"></path>
            <path d="M42 20v14"></path>
          </svg>
        </div>

        {/* Mathematical Cluster Sparkles */}
        <div className="absolute top-1/2 left-[5%] text-amber-300/60 font-mono text-sm hidden sm:block animate-twinkle">
          ∑ × √π ≈ ∞
        </div>
        <div className="absolute bottom-48 right-[8%] text-cyan-200/50 font-mono text-base hidden sm:block animate-twinkle anim-delay-1500">
          A+ 100★
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="hero-anim-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-tight leading-[1.18] max-w-4xl">
          Pendampingan Belajar Privat <br className="hidden sm:inline" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400">
            Langsung di Rumah
            {/* Subtle Highlight Underline */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-secondary-bright overflow-visible"
              fill="none"
              viewBox="0 0 300 20"
            >
              <path
                className="hero-scribble-anim"
                d="M5 14C80 2 210 18 295 8C230 16 120 18 45 16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4.5"
              ></path>
            </svg>
          </span>{' '}
          bersama Mumtaz
        </h1>

        {/* Subheadline */}
        <p className="hero-anim-2 text-slate-100/90 text-base sm:text-lg font-sans max-w-2xl mt-5 sm:mt-6 leading-relaxed">
          Guru privat Mumtaz hadir ke rumah Anda di wilayah Sampit untuk mendampingi anak belajar materi sekolah, PR harian, hingga mengaji secara tatap muka.
        </p>

        {/* Dual CTA Buttons */}
        <div className="hero-anim-3 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mt-8 sm:mt-9">
          <a
            className="btn-tactile-orange w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-secondary-bright via-secondary to-orange-600 text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(234,88,12,0.4)] group hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            href="#kontak"
          >
            <span>Jadwalkan Guru ke Rumah</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
              home_pin
            </span>
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            href="#program"
          >
            <span className="material-symbols-outlined text-[20px] text-teal-300">menu_book</span>
            <span>Lihat Program Belajar</span>
          </a>
        </div>
      </div>

      {/* Pemisah 1 (Gaya A - Varian 1): Blue-Cerulean, Teal-Jade & Emerald-Mint Lake Panorama into Section 2 (#FFF9E9) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-36 sm:h-44 md:h-52 lg:h-56 overflow-hidden leading-none z-20 pointer-events-none select-none">
        <svg className="w-full h-full block" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 260">
          <defs>
            <linearGradient id="div1a-sand-hill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ebd5b3" stopOpacity="0.75"></stop>
              <stop offset="100%" stopColor="#f7ebd4" stopOpacity="0.2"></stop>
            </linearGradient>
            <linearGradient id="div1a-teal-back" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22a699"></stop>
              <stop offset="100%" stopColor="#0f6b68"></stop>
            </linearGradient>
            <linearGradient id="div1a-cerulean-main" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1d70a2"></stop>
              <stop offset="60%" stopColor="#288bba"></stop>
              <stop offset="100%" stopColor="#134e78"></stop>
            </linearGradient>
            <linearGradient id="div1a-cerulean-mid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#175a87"></stop>
              <stop offset="100%" stopColor="#2d95b8"></stop>
            </linearGradient>
            <linearGradient id="div1a-lake-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#68c3df"></stop>
              <stop offset="55%" stopColor="#9be0f2"></stop>
              <stop offset="100%" stopColor="#d8f3fa"></stop>
            </linearGradient>
            <linearGradient id="div1a-emerald-bush" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3cd070"></stop>
              <stop offset="55%" stopColor="#22a861"></stop>
              <stop offset="100%" stopColor="#137547"></stop>
            </linearGradient>
            <linearGradient id="div1a-mint-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6ee7b7"></stop>
              <stop offset="50%" stopColor="#34d399"></stop>
              <stop offset="100%" stopColor="#10b981"></stop>
            </linearGradient>
          </defs>

          <circle cx="1050" cy="135" r="115" fill="#fef3c7" fillOpacity="0.32"></circle>
          <circle cx="1050" cy="135" r="82" fill="#fde68a" fillOpacity="0.38"></circle>

          <path
            d="M220,175 Q360,105 510,165 Q680,102 850,168 Q1030,85 1210,158 L1210,260 L220,260 Z"
            fill="url(#div1a-sand-hill)"
          ></path>

          <path
            d="M-20,170 Q55,82 145,142 Q220,102 310,152 Q405,115 485,172 L485,260 L-20,260 Z"
            fill="url(#div1a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <path
            d="M720,172 Q845,112 975,172 Z"
            fill="url(#div1a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>

          <rect x="0" y="168" width="1440" height="92" fill="url(#div1a-lake-water)"></rect>
          <path
            d="M880,172 C840,192 790,205 820,225 C845,240 810,252 770,260"
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M360,185 H520 M640,196 H790 M920,188 H1040"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1.8"
            strokeLinecap="round"
          ></path>

          <path
            d="M-25,215 Q45,115 155,148 Q245,110 385,198 L-25,215 Z"
            fill="url(#div1a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M40,218 Q135,145 235,178 Q305,155 375,215 Z"
            fill="url(#div1a-cerulean-mid)"
            stroke="#d4af37"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-10,138 C85,140 95,155 45,162 C5,168 180,185 385,204"
            stroke="#ffffff"
            strokeOpacity="0.7"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          ></path>

          <path
            d="M365,232 Q445,142 545,182 Q620,148 705,202 Q755,185 805,232 Z"
            fill="url(#div1a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M415,232 Q505,168 595,205 Q665,185 735,232 Z"
            fill="none"
            stroke="#eab308"
            strokeOpacity="0.65"
            strokeWidth="1.3"
          ></path>

          <path
            d="M955,212 Q1085,115 1235,152 Q1355,75 1460,35 L1460,225 L955,212 Z"
            fill="url(#div1a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M1035,212 Q1155,148 1275,182 Q1365,125 1455,95"
            fill="none"
            stroke="#eab308"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          ></path>
          <path
            d="M1115,165 L1450,152"
            stroke="#ffffff"
            strokeOpacity="0.65"
            strokeWidth="2.2"
            strokeLinecap="round"
          ></path>

          <path
            d="M-20,252 Q45,205 125,228 Q210,195 305,232 Q395,202 485,238 Q545,222 605,252 Z"
            fill="url(#div1a-mint-front)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M965,252 Q1055,208 1145,232 Q1245,192 1355,228 Q1405,212 1460,242 L1460,260 L965,260 Z"
            fill="url(#div1a-emerald-bush)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>

          <path
            d="M0,244 C340,228 690,258 1040,238 C1240,226 1365,246 1440,240 L1440,260 L0,260 Z"
            fill="#FFF9E9"
          ></path>
        </svg>
      </div>
    </section>
  );
}
