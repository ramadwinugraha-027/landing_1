import React from 'react';

export default function AboutSection() {
  return (
    <section
      className="relative pt-14 pb-0 sm:pt-16 lg:pt-20 bg-[#FFF9E9] paper-notebook overflow-hidden"
      id="tentang-kami"
    >
      {/* Decorative Background Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-16 left-[5%] opacity-25 hidden lg:block">
          <svg
            className="text-[#287C80]"
            fill="none"
            height="60"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 80 60"
            width="80"
          >
            <path d="M10 35l60-22-26 38-8-16L10 35z" fill="rgba(40,124,128,0.12)"></path>
            <path d="M70 13L36 35"></path>
            <path d="M6 48c10-2 18-8 24-18" strokeDasharray="3 3"></path>
          </svg>
        </div>
        <div className="absolute top-1/3 right-[4%] text-[#F4A340] opacity-30 text-2xl animate-twinkle hidden sm:block">
          ✦
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="reveal-element flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#123B50] border-2 border-[#287C80]/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="pushpin-red -top-2 left-4"></span>
            <span className="material-symbols-outlined text-[16px] text-[#287C80]">menu_book</span>
            <span className="text-[#287C80]">Tentang Bimbel Mumtaz</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B50] mt-3 tracking-tight">
            Bimbingan Belajar Privat Tatap Muka di Sampit
          </h2>
          <p className="font-handwriting text-base sm:text-lg text-[#287C80] font-medium mt-2">
            Pendampingan satu guru untuk satu siswa, langsung di meja belajar rumah Anda.
          </p>
        </div>

        {/* Intro Card: Text (left) + Quote (right) */}
        <div className="reveal-element relative bg-gradient-to-br from-[#fffdf7] via-white to-[#f6efe0] border-2 border-[#E2D9C8] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-paper">
          <svg className="paperclip" fill="none" viewBox="0 0 30 50">
            <path
              d="M8 12V36C8 41 12 45 17 45C22 45 26 41 26 36V10C26 5 21 2 16 2C11 2 6 6 6 12V38"
              filter="drop-shadow(0 2px 3px rgba(0,0,0,0.15))"
              stroke="#287C80"
              strokeLinecap="round"
              strokeWidth="3.5"
            ></path>
          </svg>
          <div className="washi-strip-yellow absolute -top-3.5 right-10 w-28 h-6 rounded-sm -rotate-2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-sans text-[#287C80] font-bold tracking-wider uppercase mb-3">
                <span>Profil Layanan</span>
                <span className="text-[#F4A340]">•</span>
                <span>Kota Sampit</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123B50] mb-4 leading-snug">
                Mengapa Belajar Privat di Rumah Lebih Efektif?
              </h3>
              <p className="text-[#123B50]/85 leading-relaxed font-sans text-base mb-3">
                Setiap anak memiliki kecepatan belajar yang berbeda. Di kelas yang ramai, anak sering ragu bertanya saat belum memahami materi. Melalui les privat di rumah, pengajar kami menyesuaikan cara menjelaskan materi dengan kebutuhan anak Anda.
              </p>
              <p className="text-[#123B50]/85 leading-relaxed font-sans text-base">
                Orang tua juga tidak perlu repot mengantar-jemput. Pengajar hadir tepat waktu sesuai jadwal yang disepakati, sehingga waktu istirahat anak tetap terjaga dan orang tua dapat memantau langsung proses belajarnya.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-[#fde7b0] via-[#fef4d6] to-[#fffbf0] border-2 border-[#F4A340]/50 rounded-2xl p-6 shadow-sticky">
                <div className="washi-strip-orange absolute -top-3 left-8 w-24 h-5 rounded-sm"></div>
                <span className="material-symbols-outlined text-[30px] text-[#F4A340]">format_quote</span>
                <p className="font-handwriting text-lg sm:text-xl text-[#123B50] leading-relaxed font-medium mt-1">
                  "Anak belajar lebih tenang di ruang yang ia kenal, sementara orang tua dapat melihat langsung perkembangan belajarnya dari minggu ke minggu."
                </p>
                <div className="flex items-center gap-2 mt-4 text-xs font-bold text-[#c27a1e] uppercase font-sans tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Komitmen Pengajar Mumtaz</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 sm:mt-10">
          {/* Pillar 1 */}
          <div className="reveal-element delay-100 relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#f8de9d] via-[#fdf0cf] to-[#fffbf0] border border-[#d4af37]/40 p-6 pb-16 shadow-paper flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-paper-lift transition-all duration-300 group">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox="0 0 400 320"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M-10,320 L-10,272 Q35,235 78,268 Q135,242 190,278 Q255,248 315,274 Q360,232 410,265 L410,320 Z"
                fill="#b7cfc0"
                opacity="0.65"
              />
              <path
                d="M-10,320 L-10,284 Q48,252 105,286 Q168,262 232,290 Q298,255 355,282 Q385,260 410,278 L410,320 Z"
                fill="#84afa3"
                opacity="0.82"
              />
              <path
                d="M-10,320 L-10,298 Q65,276 135,298 Q210,272 285,298 Q350,274 410,294 L410,320 Z"
                fill="#4f857d"
              />
            </svg>
            <div className="relative z-10">
              <span className="inline-block text-[11px] uppercase font-bold tracking-wider text-[#9a4a12] font-sans bg-white/70 px-2.5 py-0.5 rounded-full border border-[#d97706]/25">
                Sistem Belajar
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123B50] mt-2.5 mb-2 leading-snug">
                Satu Guru, Satu Siswa
              </h4>
              <p className="text-[#123B50]/85 text-sm leading-relaxed font-sans">
                Pengajar fokus mendampingi satu siswa penuh selama sesi berlangsung, sehingga materi yang sulit dapat dibahas sampai tuntas.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="reveal-element delay-200 relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#bce8e3] via-[#e2f6f3] to-[#f8fdfc] border border-[#287C80]/35 p-6 pb-16 shadow-paper flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-paper-lift transition-all duration-300 group">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox="0 0 400 320"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M-10,320 L-10,275 Q52,238 110,272 Q175,240 240,276 Q310,235 370,268 L410,255 L410,320 Z"
                fill="#9bc7c5"
                opacity="0.65"
              />
              <path
                d="M-10,320 L-10,286 Q60,254 128,285 Q195,258 265,288 Q335,248 410,280 L410,320 Z"
                fill="#5da19e"
                opacity="0.82"
              />
              <path
                d="M-10,320 L-10,298 Q75,274 155,296 Q240,272 325,296 Q370,280 410,292 L410,320 Z"
                fill="#287C80"
              />
            </svg>
            <div className="relative z-10">
              <span className="inline-block text-[11px] uppercase font-bold tracking-wider text-[#165a5e] font-sans bg-white/70 px-2.5 py-0.5 rounded-full border border-[#287C80]/25">
                Waktu Fleksibel
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123B50] mt-2.5 mb-2 leading-snug">
                Jadwal Menyesuaikan Keluarga
              </h4>
              <p className="text-[#123B50]/85 text-sm leading-relaxed font-sans">
                Hari dan jam belajar ditentukan bersama orang tua. Bila ada agenda keluarga mendadak, jadwal les dapat diatur ulang.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="reveal-element delay-300 relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#f8d3ad] via-[#feecd6] to-[#fffbf5] border border-[#e08b44]/40 p-6 pb-16 shadow-paper flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-paper-lift transition-all duration-300 group">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox="0 0 400 320"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M-10,320 L-10,270 Q42,232 95,268 Q155,240 215,275 Q280,242 342,272 Q378,238 410,262 L410,320 Z"
                fill="#d9b38c"
                opacity="0.6"
              />
              <path
                d="M-10,320 L-10,284 Q55,250 118,284 Q185,256 250,288 Q318,252 375,280 L410,268 L410,320 Z"
                fill="#7c9d8e"
                opacity="0.82"
              />
              <path
                d="M-10,320 L-10,298 Q68,274 142,298 Q220,274 298,298 Q355,276 410,294 L410,320 Z"
                fill="#3a6b6c"
              />
            </svg>
            <div className="relative z-10">
              <span className="inline-block text-[11px] uppercase font-bold tracking-wider text-[#9a3412] font-sans bg-white/70 px-2.5 py-0.5 rounded-full border border-[#c2410c]/25">
                Area Layanan
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123B50] mt-2.5 mb-2 leading-snug">
                Menjangkau Wilayah Sampit
              </h4>
              <p className="text-[#123B50]/85 text-sm leading-relaxed font-sans">
                Pengajar siap datang ke rumah di area Mentawa Baru Ketapang, Baamang, MB. Hilir, Sawahan, dan sekitarnya.
              </p>
            </div>
          </div>
        </div>

        {/* Ringkasan Layanan di Sampit (Stats Counter) */}
        <div className="mt-12 sm:mt-14 pt-8 border-t-2 border-dashed border-[#E2D9C8]">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#123B50] border-2 border-[#d4af37]/45 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F4A340]"></span>
              <span className="material-symbols-outlined text-[16px] text-[#287C80]">workspace_premium</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#123B50] font-sans">
                Ringkasan Layanan Kami di Sampit
              </span>
              <span className="w-2 h-2 rounded-full bg-[#287C80]"></span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat 1 */}
            <div className="reveal-element delay-100 bg-gradient-to-b from-[#fdf3d7] via-[#fef9eb] to-white border border-[#d4af37]/35 rounded-2xl p-5 pb-9 shadow-paper text-center relative overflow-hidden group hover:shadow-paper-lift transition-all">
              <div className="relative z-10">
                <div
                  className="stat-counter-val text-3xl sm:text-4xl text-primary font-bold"
                  data-counter-target="500"
                  data-counter-suffix="+"
                >
                  500+
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">Siswa Didampingi</div>
                <div className="text-[11px] text-teal-mumtaz font-medium">TK, SD, SMP, &amp; SMA</div>
              </div>
              <svg
                className="absolute bottom-0 inset-x-0 w-full h-6 pointer-events-none select-none"
                viewBox="0 0 240 40"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0,40 L0,20 Q40,4 85,22 Q140,6 195,20 Q220,10 240,18 L240,40 Z"
                  fill="#b7cfc0"
                  opacity="0.55"
                />
                <path
                  d="M0,40 L0,28 Q60,14 125,28 Q185,14 240,26 L240,40 Z"
                  fill="#5da19e"
                  opacity="0.75"
                />
              </svg>
            </div>

            {/* Stat 2 */}
            <div className="reveal-element delay-200 bg-gradient-to-b from-[#dff4f1] via-[#f0faf8] to-white border border-[#287C80]/30 rounded-2xl p-5 pb-9 shadow-paper text-center relative overflow-hidden group hover:shadow-paper-lift transition-all">
              <div className="relative z-10">
                <div
                  className="stat-counter-val text-3xl sm:text-4xl text-teal-mumtaz font-bold"
                  data-counter-target="50"
                  data-counter-suffix="+"
                >
                  50+
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">Pengajar Aktif</div>
                <div className="text-[11px] text-secondary font-medium">Terseleksi &amp; Berpengalaman</div>
              </div>
              <svg
                className="absolute bottom-0 inset-x-0 w-full h-6 pointer-events-none select-none"
                viewBox="0 0 240 40"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0,40 L0,22 Q55,6 110,22 Q165,4 240,20 L240,40 Z"
                  fill="#9bc7c5"
                  opacity="0.55"
                />
                <path
                  d="M0,40 L0,29 Q75,15 150,29 Q200,16 240,25 L240,40 Z"
                  fill="#287C80"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Stat 3 */}
            <div className="reveal-element delay-300 bg-gradient-to-b from-[#fce8d2] via-[#fef4e8] to-white border border-[#e08b44]/35 rounded-2xl p-5 pb-9 shadow-paper text-center relative overflow-hidden group hover:shadow-paper-lift transition-all">
              <div className="relative z-10">
                <div
                  className="stat-counter-val text-3xl sm:text-4xl text-secondary font-bold"
                  data-counter-target="98"
                  data-counter-suffix="%"
                >
                  98%
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">Orang Tua Puas</div>
                <div className="text-[11px] text-amber-700 font-medium">Melanjutkan Program</div>
              </div>
              <svg
                className="absolute bottom-0 inset-x-0 w-full h-6 pointer-events-none select-none"
                viewBox="0 0 240 40"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0,40 L0,19 Q45,5 95,21 Q155,6 240,22 L240,40 Z"
                  fill="#d9b38c"
                  opacity="0.55"
                />
                <path
                  d="M0,40 L0,28 Q65,14 135,28 Q190,15 240,26 L240,40 Z"
                  fill="#7c9d8e"
                  opacity="0.75"
                />
              </svg>
            </div>

            {/* Stat 4 */}
            <div className="reveal-element delay-400 bg-gradient-to-b from-[#e4f3ea] via-[#f2faf5] to-white border border-[#4f857d]/30 rounded-2xl p-5 pb-9 shadow-paper text-center relative overflow-hidden group hover:shadow-paper-lift transition-all">
              <div className="relative z-10">
                <div
                  className="stat-counter-val text-3xl sm:text-4xl text-primary font-bold"
                  data-counter-target="100"
                  data-counter-suffix="%"
                >
                  100%
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1">Layanan ke Rumah</div>
                <div className="text-[11px] text-teal-mumtaz font-medium">Area Kota Sampit</div>
              </div>
              <svg
                className="absolute bottom-0 inset-x-0 w-full h-6 pointer-events-none select-none"
                viewBox="0 0 240 40"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0,40 L0,21 Q50,6 105,22 Q165,5 240,19 L240,40 Z"
                  fill="#b7cfc0"
                  opacity="0.6"
                />
                <path
                  d="M0,40 L0,29 Q70,15 145,28 Q195,16 240,26 L240,40 Z"
                  fill="#4f857d"
                  opacity="0.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Pemisah 2: Warm Terracotta-Gold, Deep Pine & Sage-Mint Highland Panorama into Section 3 (#DCEFED) */}
      <div className="relative w-full mt-10 sm:mt-14 leading-none z-10 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-36 sm:h-48 md:h-56 lg:h-64 block"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="div2-apricot-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f3c57a" stopOpacity="0.65"></stop>
              <stop offset="100%" stopColor="#FFF9E9" stopOpacity="0.1"></stop>
            </linearGradient>
            <linearGradient id="div2-terracotta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e28749"></stop>
              <stop offset="100%" stopColor="#c65f28"></stop>
            </linearGradient>
            <linearGradient id="div2-bronze-hill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5a94c"></stop>
              <stop offset="100%" stopColor="#b87826"></stop>
            </linearGradient>
            <linearGradient id="div2-pine-ridge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f6b6c"></stop>
              <stop offset="100%" stopColor="#113f4a"></stop>
            </linearGradient>
            <linearGradient id="div2-sage-meadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#58b09c"></stop>
              <stop offset="100%" stopColor="#2c7c73"></stop>
            </linearGradient>
            <linearGradient id="div2-mint-stream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a8dfd2"></stop>
              <stop offset="50%" stopColor="#cceee6"></stop>
              <stop offset="100%" stopColor="#9ad4c8"></stop>
            </linearGradient>
          </defs>

          <circle cx="420" cy="135" r="110" fill="#fde68a" fillOpacity="0.4"></circle>
          <path
            d="M0,155 C190,70 380,145 590,85 C810,25 1020,130 1230,75 C1335,48 1400,82 1440,98 L1440,280 L0,280 Z"
            fill="url(#div2-apricot-sky)"
          ></path>
          <path
            d="M-20,185 C110,95 270,105 430,165 C590,225 760,90 950,155 L950,280 L-20,280 Z"
            fill="url(#div2-terracotta)"
            stroke="#fef08a"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          ></path>
          <path
            d="M40,180 C165,122 290,132 415,178 M640,182 C755,125 855,135 935,168"
            stroke="#FFF9E9"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            fill="none"
          ></path>
          <path
            d="M720,195 C890,105 1060,155 1235,88 C1330,52 1398,78 1460,115 L1460,280 L720,280 Z"
            fill="url(#div2-bronze-hill)"
            stroke="#fef08a"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          ></path>
          <path
            d="M880,185 C1015,135 1140,152 1280,108"
            stroke="#FFF9E9"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            fill="none"
          ></path>
          <path
            d="M-30,215 C150,145 340,210 545,155 C740,102 930,195 1145,148 C1285,118 1380,145 1460,168 L1460,280 L-30,280 Z"
            fill="url(#div2-pine-ridge)"
            stroke="#f59e0b"
            strokeOpacity="0.75"
            strokeWidth="1.6"
          ></path>
          <path
            d="M120,205 C265,168 395,198 535,172 M890,192 C1025,165 1165,162 1310,182"
            stroke="#fcd34d"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            fill="none"
          ></path>
          <path
            d="M0,222 C280,198 540,242 840,212 C1110,185 1300,225 1440,210 L1440,280 L0,280 Z"
            fill="url(#div2-mint-stream)"
          ></path>
          <path
            d="M210,228 Q420,215 630,232 T1060,222"
            stroke="#FFF9E9"
            strokeOpacity="0.7"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M-20,255 C160,205 330,245 520,228 C730,208 940,255 1160,220 C1295,198 1385,222 1460,238 L1460,280 L-20,280 Z"
            fill="url(#div2-sage-meadow)"
            stroke="#fbbf24"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          ></path>
          <path
            d="M0,258 C340,234 690,272 1040,246 C1240,232 1365,252 1440,248 L1440,280 L0,280 Z"
            fill="#DCEFED"
          ></path>
        </svg>
      </div>
    </section>
  );
}
