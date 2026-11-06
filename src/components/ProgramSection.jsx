import React from 'react';

export default function ProgramSection() {
  return (
    <section
      className="relative pt-14 pb-0 sm:pt-16 lg:pt-20 bg-[#DCEFED] paper-graph overflow-hidden"
      id="program"
    >
      {/* Subtle Geometric Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-28 right-[5%] opacity-25 hidden lg:block animate-float-slow">
          <svg fill="none" height="80" stroke="#123B50" strokeWidth="2" viewBox="0 0 90 90" width="80">
            <polygon fill="rgba(244,163,64,0.18)" points="10,80 80,80 10,10"></polygon>
            <polygon fill="#DCEFED" points="24,68 54,68 24,38"></polygon>
          </svg>
        </div>
        <div className="absolute bottom-28 left-[5%] text-[#123B50] opacity-20 font-display text-3xl font-bold hidden lg:block -rotate-12">
          A+B
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="reveal-element flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#123B50] border-2 border-[#287C80]/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="pushpin-teal -top-2 right-4"></span>
            <span className="material-symbols-outlined text-[16px] text-[#287C80]">auto_stories</span>
            <span className="text-[#287C80]">Program Belajar</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B50] mt-3 tracking-tight">
            Pilihan Jenjang Bimbingan
          </h2>
          <p className="font-sans text-[#123B50]/80 max-w-2xl mt-2 text-sm sm:text-base leading-relaxed">
            Materi belajar disesuaikan dengan kurikulum sekolah anak di Sampit, mulai dari pengenalan baca-tulis hingga persiapan ujian akhir.
          </p>
        </div>

        {/* Program Cards Layout */}
        <div className="space-y-6 sm:space-y-7">
          {/* 1. Program TK */}
          <article className="reveal-element relative overflow-hidden rounded-tl-[44px] rounded-br-[44px] rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-[#fef4d9] via-[#fffaf0] to-white border-2 border-[#d4af37]/40 p-5 sm:p-7 shadow-paper hover:shadow-paper-lift transition-all duration-300 group">
            <svg
              className="absolute bottom-0 right-0 w-3/4 h-16 pointer-events-none select-none opacity-65"
              viewBox="0 0 600 80"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M120,80 Q240,25 360,55 Q480,15 600,45 L600,80 Z" fill="#f3d69b" opacity="0.55" />
              <path d="M240,80 Q380,38 490,62 Q550,42 600,58 L600,80 Z" fill="#e5b869" opacity="0.6" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center relative z-10">
              <div className="md:col-span-4 overflow-hidden rounded-tl-[32px] rounded-br-[32px] rounded-tr-xl rounded-bl-xl h-44 sm:h-52 bg-[#FEF3D6] relative shadow-md border-2 border-white">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Anak usia TK belajar membaca huruf dan berhitung menggunakan media balok warna-warni"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXBLBZ0VUEQ2NqogF6L3YH0wC5uhmsfFjjYNCtFXCxABoougOtf_XS2gahu7L8_L9mfWfIZTiIylb8zM0vXpLN9Cpcdiv7zxvnrkCoBwnCxLN7XDMzMARPxZvwzW-B69iXfs0zIAlZfXTQvRhy322gub0gOLEIH8zA5VLMjh6sSt6HerwugnBwkKmQiwTCuy3rGkjBeWohR2Xfp5_dTv2u6yDiztT1vl6B0yXpgA"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#9a4a12]">
                      Usia 4 – 6 Tahun • Calistung Dasar
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#123B50]">
                    Les Privat TK &amp; Persiapan Masuk SD
                  </h3>
                  <p className="font-sans text-[#123B50]/85 text-sm mt-1.5 leading-relaxed">
                    Pendampingan belajar membaca, menulis, dan berhitung dasar (calistung) dengan cara yang sabar dan menyenangkan. Membantu anak lebih siap dan percaya diri sebelum memasuki bangku Sekolah Dasar.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3.5 border-t border-[#d4af37]/35">
                  <span className="text-xs font-semibold text-[#123B50]/80">
                    Durasi 60 – 90 menit per pertemuan
                  </span>
                  <a
                    className="btn-tactile-orange inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F4A340] text-[#123B50] text-xs font-bold shadow-xs"
                    href="#kontak"
                  >
                    <span>Daftar Program TK</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 2. Program SD & SMP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* SD Card */}
            <article className="reveal-element delay-100 relative overflow-hidden rounded-tl-[42px] rounded-br-[42px] rounded-tr-2xl rounded-bl-2xl bg-gradient-to-b from-[#e3f5ee] via-[#f4fbf8] to-white border-2 border-[#7eb8a2]/50 p-5 sm:p-6 pb-8 shadow-paper flex flex-col justify-between hover:-translate-y-1 hover:shadow-paper-lift transition-all duration-300 group">
              <svg
                className="absolute bottom-0 inset-x-0 w-full h-8 pointer-events-none select-none"
                viewBox="0 0 400 45"
                preserveAspectRatio="none"
                fill="none"
              >
                <path d="M0,45 L0,24 Q80,6 170,26 Q280,8 400,22 L400,45 Z" fill="#b7cfc0" opacity="0.5" />
                <path d="M0,45 L0,33 Q110,18 220,33 Q320,18 400,30 L400,45 Z" fill="#5da19e" opacity="0.65" />
              </svg>

              <div className="relative z-10">
                <div className="overflow-hidden rounded-tl-[28px] rounded-br-[28px] rounded-tr-xl rounded-bl-xl h-44 sm:h-48 w-full bg-[#DCEFED] mb-4 shadow-md border-2 border-white relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Siswa SD belajar matematika bersama tutor"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIYBiQsOcrD65IHtfRhcqYnvknIg5V8-JNduwbr-ZthmuZxYu5gcouRP6NnpsGTaQn6wsVkD0r4ycSM3gUzIX0wLtRZsEpBdXC4D5OhsZGREQYjV0SjHLi3i88BXFkXK5PUxUH3EsLPm9_CC4aS0Suc9sHlElxipMoDMfmdGifFiSum0GjUsvXkys9ScnZN-PKgy_MadqEkfySy0v9zUIat5gyJMk99tIaeMoKaA"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#287C80]">Kelas 1 – 6 SD</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#123B50] mt-0.5">Les Privat SD</h3>
                <p className="font-sans text-[#123B50]/85 text-sm mt-1.5 leading-relaxed">
                  Membantu anak memahami pelajaran di sekolah (Matematika, IPAS, Bahasa Indonesia, dan Bahasa Inggris), mendampingi pengerjaan PR harian, serta latihan soal menjelang ulangan.
                </p>
              </div>
              <div className="relative z-10 mt-4 pt-3.5 border-t border-[#7eb8a2]/35 flex items-center justify-between">
                <span className="text-xs font-medium text-[#123B50]/75">Pendampingan PR &amp; Ulangan</span>
                <a
                  className="btn-tactile-teal inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#287C80] text-white text-xs font-bold"
                  href="#kontak"
                >
                  <span>Daftar Program SD</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </article>

            {/* SMP Card */}
            <article className="reveal-element delay-200 relative overflow-hidden rounded-tr-[42px] rounded-bl-[42px] rounded-tl-2xl rounded-br-2xl bg-gradient-to-b from-[#dcedf5] via-[#f2f8fb] to-white border-2 border-[#287C80]/35 p-5 sm:p-6 pb-8 shadow-paper flex flex-col justify-between hover:-translate-y-1 hover:shadow-paper-lift transition-all duration-300 group">
              <svg
                className="absolute bottom-0 inset-x-0 w-full h-8 pointer-events-none select-none"
                viewBox="0 0 400 45"
                preserveAspectRatio="none"
                fill="none"
              >
                <path d="M0,45 L0,22 Q95,8 195,25 Q300,6 400,24 L400,45 Z" fill="#9bc7c5" opacity="0.5" />
                <path d="M0,45 L0,32 Q115,18 230,32 Q325,18 400,31 L400,45 Z" fill="#287C80" opacity="0.65" />
              </svg>

              <div className="relative z-10">
                <div className="overflow-hidden rounded-tr-[28px] rounded-bl-[28px] rounded-tl-xl rounded-br-xl h-44 sm:h-48 w-full bg-[#DCEFED] mb-4 shadow-md border-2 border-white relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Siswa SMP menyimak rumus IPA dan diagram sains"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPbPH8E4OlDyCd-lYTW-qdo0Df_oND-1_cachZt7RyW2rRFj6T3z-ymO2oxdxwN2awNGQo6dUVT7haiBJV4K-BXv6FNNikdTCMvx85e8hgr9rIhtiBAj0t9yyKoI46kl9jzV8YwFZxMriQyoOdANoT8ztgc2WdAp6mRpYeBaj06lLQEkc40zn2Jyu45tqS7gCqPBWFEZn5mKUdjVX0e4UxJTG5jECGQ_vhf-v0Eg"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#123B50]">Kelas 7 – 9 SMP</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#123B50] mt-0.5">Les Privat SMP</h3>
                <p className="font-sans text-[#123B50]/85 text-sm mt-1.5 leading-relaxed">
                  Pendalaman materi Matematika, IPA (Fisika dan Biologi), serta Bahasa Inggris. Fokus pada pemahaman konsep dasar dan latihan soal ujian sekolah langsung di rumah.
                </p>
              </div>
              <div className="relative z-10 mt-4 pt-3.5 border-t border-[#287C80]/25 flex items-center justify-between">
                <span className="text-xs font-medium text-[#123B50]/75">Matematika, IPA &amp; Inggris</span>
                <a
                  className="btn-tactile-navy inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#123B50] text-white text-xs font-bold"
                  href="#kontak"
                >
                  <span>Daftar Program SMP</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </article>
          </div>

          {/* 3. Program SMA */}
          <article className="reveal-element relative overflow-hidden rounded-tr-[44px] rounded-bl-[44px] rounded-tl-2xl rounded-br-2xl bg-gradient-to-l from-[#fbe7d0] via-[#fff7ed] to-white border-2 border-[#e08b44]/40 p-5 sm:p-7 shadow-paper hover:shadow-paper-lift transition-all duration-300 group">
            <svg
              className="absolute bottom-0 left-0 w-3/4 h-16 pointer-events-none select-none opacity-60"
              viewBox="0 0 600 80"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M0,45 Q120,15 240,55 Q360,25 480,80 L0,80 Z" fill="#e8be94" opacity="0.5" />
              <path d="M0,58 Q90,40 210,62 Q320,38 380,80 L0,80 Z" fill="#c98a5b" opacity="0.55" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center relative z-10">
              <div className="lg:col-span-7 lg:order-1 order-2 flex flex-col justify-between">
                <div>
                  <div className="mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#9a3412]">
                      Kelas 10 – 12 SMA • Persiapan UTBK
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#123B50]">
                    Les Privat SMA &amp; Seleksi Perguruan Tinggi
                  </h3>
                  <p className="font-sans text-[#123B50]/85 text-sm mt-1.5 leading-relaxed">
                    Bimbingan mata pelajaran peminatan IPA (Matematika, Fisika, Kimia, Biologi) maupun IPS (Ekonomi, Sosiologi, Geografi, Bahasa). Membantu siswa mengejar materi di sekolah, persiapan ujian akhir, serta latihan soal SNBT/UTBK.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3.5 border-t border-[#e08b44]/30">
                  <span className="text-xs font-semibold text-[#123B50]/80">
                    Peminatan Saintek, Soshum &amp; SNBT
                  </span>
                  <a
                    className="btn-tactile-orange inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F4A340] text-[#123B50] text-xs font-bold shadow-xs"
                    href="#kontak"
                  >
                    <span>Daftar Program SMA</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 order-1 overflow-hidden rounded-tr-[32px] rounded-bl-[32px] rounded-tl-xl rounded-br-xl h-44 sm:h-52 w-full bg-[#DCEFED] border-2 border-white shadow-md">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Siswa SMA berdiskusi penalaran analitis bersama pengajar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACCQzk-DYcL9XDY0gzDOjV_yW1_7XWfM_9AW3sNHdmDjUsxJ57sldXrrC5Mc2ailtzcGVXpTAlQ84EjpRnzk0Qk7Qja4dmVsZOFPykqtBbL-72X4dENAPa0nkKMmCW4Q4uTaK1A9doqQ6mHmoUldO7QMK4usD3YpJLFthmwUuA0lDO1m4qHB7Rhh6LMFOrnUk3kTMZpHKgWAcVw7pcRy_kYquPDV1pDU-RQZKMIQ"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          {/* 4. Program Mengaji */}
          <article className="reveal-element relative bg-gradient-to-br from-[#123B50] via-[#174960] to-[#287C80] text-white rounded-tl-[44px] rounded-br-[44px] rounded-tr-2xl rounded-bl-2xl p-5 sm:p-7 shadow-paper overflow-hidden border-2 border-[#d4af37]/50 group">
            <svg
              className="absolute bottom-0 inset-x-0 w-full h-14 pointer-events-none select-none opacity-35"
              viewBox="0 0 800 60"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M0,60 L0,30 Q200,5 400,32 Q600,55 800,18 L800,60 Z" fill="#F4A340" opacity="0.35" />
              <path d="M0,60 L0,42 Q260,20 520,42 Q680,54 800,32 L800,60 Z" fill="#a7f3d0" opacity="0.3" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              <div className="lg:col-span-5 overflow-hidden rounded-tl-[32px] rounded-br-[32px] rounded-tr-xl rounded-bl-xl h-44 sm:h-52 w-full border-2 border-[#F4A340]/60 shadow-xl">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Pembimbing mengaji menyimak lantunan tilawah Al-Quran dari seorang murid"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM1t7iS-vigMllQLfGv58UDQ9u1N_F8HcfpE0KI34UUnyRpnqoiW4IjlEOgc_ZQK_Kl1DxemSX6I_0yfEmCPCScsQbIHUV83VtsQbxTeHkSDK0uP86oQlxt-ry7o3JUZWSV2MWEzlgg4WHwtgtFIjJt9UjsweAg52rtBZJa0ycRbyG9ez2CwwUefTKH1WDAqMgUi6tq1aLYUgeWhNEQoLvOqJLA0tdJNLK69WxMg"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4A340]">
                    Bimbingan Mengaji • Anak &amp; Remaja
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Privat Mengaji Iqro &amp; Al-Qur'an
                </h3>
                <p className="font-sans text-slate-100 text-sm mt-1.5 leading-relaxed">
                  Guru mengaji datang ke rumah untuk membimbing bacaan Iqro, kelancaran tilawah Al-Qur'an, perbaikan tajwid dan makhraj huruf, serta hafalan surat pendek dan doa harian.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3.5 border-t border-white/15">
                  <span className="text-xs text-[#FEF3D6]/90 font-medium">
                    Iqro, Tilawah, Tajwid &amp; Hafalan Surat
                  </span>
                  <a
                    className="btn-tactile-orange inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F4A340] text-[#123B50] font-bold text-xs shadow-md"
                    href="#kontak"
                  >
                    <span>Daftar Privat Mengaji</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Pemisah 3 (Gaya A - Varian 2): into Keunggulan (#FFF9E9) */}
      <div className="relative w-full mt-10 sm:mt-14 leading-none z-10 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-36 sm:h-44 md:h-52 lg:h-56 block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 260"
        >
          <defs>
            <linearGradient id="div3a-sand-hill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e9d2ac" stopOpacity="0.8"></stop>
              <stop offset="100%" stopColor="#f7ebd4" stopOpacity="0.2"></stop>
            </linearGradient>
            <linearGradient id="div3a-teal-back" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1ca396"></stop>
              <stop offset="100%" stopColor="#0d5f5d"></stop>
            </linearGradient>
            <linearGradient id="div3a-cerulean-main" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#196798"></stop>
              <stop offset="60%" stopColor="#2989b8"></stop>
              <stop offset="100%" stopColor="#11466e"></stop>
            </linearGradient>
            <linearGradient id="div3a-lake-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#62bfe0"></stop>
              <stop offset="55%" stopColor="#9ee2f5"></stop>
              <stop offset="100%" stopColor="#dcf5fc"></stop>
            </linearGradient>
            <linearGradient id="div3a-emerald-bush" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38ce73"></stop>
              <stop offset="60%" stopColor="#1fa35d"></stop>
              <stop offset="100%" stopColor="#126e42"></stop>
            </linearGradient>
            <linearGradient id="div3a-mint-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399"></stop>
              <stop offset="50%" stopColor="#6ee7b7"></stop>
              <stop offset="100%" stopColor="#10b981"></stop>
            </linearGradient>
          </defs>

          <circle cx="380" cy="130" r="110" fill="#fde68a" fillOpacity="0.45"></circle>
          <circle cx="380" cy="130" r="76" fill="#fef08a" fillOpacity="0.5"></circle>
          <path
            d="M180,172 Q350,82 530,158 Q720,95 910,162 Q1080,108 1240,168 L1240,260 L180,260 Z"
            fill="url(#div3a-sand-hill)"
          ></path>
          <path
            d="M920,172 Q1040,98 1165,148 Q1285,82 1460,155 L1460,260 L920,260 Z"
            fill="url(#div3a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <path
            d="M440,170 Q575,112 710,170 Z"
            fill="url(#div3a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <rect x="0" y="166" width="1440" height="94" fill="url(#div3a-lake-water)"></rect>
          <path
            d="M560,170 C610,192 650,208 615,226 C585,242 630,252 675,260"
            stroke="#ffffff"
            strokeOpacity="0.6"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M410,188 H530 M780,194 H930 M1020,182 H1160"
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth="1.8"
            strokeLinecap="round"
          ></path>
          <path
            d="M-20,45 Q105,88 225,148 Q365,108 495,212 L-20,225 Z"
            fill="url(#div3a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M-10,105 Q95,135 195,180 Q305,145 425,212"
            fill="none"
            stroke="#eab308"
            strokeOpacity="0.7"
            strokeWidth="1.4"
          ></path>
          <path
            d="M-10,148 L335,165"
            stroke="#ffffff"
            strokeOpacity="0.65"
            strokeWidth="2.2"
            strokeLinecap="round"
          ></path>
          <path
            d="M625,232 Q695,178 765,198 Q845,142 945,185 Q1035,145 1115,232 Z"
            fill="url(#div3a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M715,232 Q805,175 895,205 Q975,168 1055,232"
            fill="none"
            stroke="#eab308"
            strokeOpacity="0.65"
            strokeWidth="1.3"
          ></path>
          <path
            d="M1085,218 Q1210,115 1335,152 Q1405,122 1465,195 L1465,235 L1085,218 Z"
            fill="url(#div3a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M1070,198 C1240,182 1360,165 1455,155"
            stroke="#ffffff"
            strokeOpacity="0.65"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M-20,248 Q65,196 165,226 Q275,188 395,232 Q465,212 535,250 Z"
            fill="url(#div3a-emerald-bush)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M845,252 Q935,205 1035,232 Q1145,195 1265,228 Q1365,198 1460,242 L1460,260 L845,260 Z"
            fill="url(#div3a-mint-front)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M0,244 C360,226 710,258 1070,236 C1255,225 1370,246 1440,240 L1440,260 L0,260 Z"
            fill="#FFF9E9"
          ></path>
        </svg>
      </div>
    </section>
  );
}
