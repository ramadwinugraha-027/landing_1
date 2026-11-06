import React, { useState } from 'react';

const PROGRAM_MAP = {
  tk: 'TK (Calistung & Motorik)',
  sd: 'SD (Tematik & MTK)',
  smp: 'SMP (Saintek & Bhs. Inggris)',
  sma: 'SMA (Saintek / Soshum / SNBT)',
  mengaji: "Privat Mengaji Al-Qur'an"
};

export default function KontakSection() {
  const [parentName, setParentName] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [messageNotes, setMessageNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWaUrl, setSubmittedWaUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!parentName.trim() || !homeAddress.trim() || !educationLevel || !messageNotes.trim()) {
      alert('Mohon lengkapi seluruh kolom formulir sebelum mengirim.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const waNumber = '6281234567890';
      const programLabel = PROGRAM_MAP[educationLevel] || educationLevel;
      const waMessage = encodeURIComponent(
        `Halo Bimbel Mumtaz Sampit, saya *${parentName.trim()}* (${homeAddress.trim()}) ingin konsultasi les privat *${programLabel}* ke rumah.\n\nCatatan: ${messageNotes.trim()}`
      );

      setSubmittedWaUrl(`https://wa.me/${waNumber}?text=${waMessage}`);
      setIsSubmitting(false);
      setParentName('');
      setHomeAddress('');
      setEducationLevel('');
      setMessageNotes('');
    }, 500);
  };

  return (
    <section
      className="relative pt-14 pb-0 sm:pt-16 lg:pt-20 bg-[#e2f3f5] paper-notebook-aqua overflow-hidden"
      id="kontak"
    >
      <div className="absolute inset-0 pointer-events-none opacity-15 diagonal-lines-pattern"></div>

      {/* Postal Doodles in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute bottom-36 left-[5%] opacity-30 hidden lg:block -rotate-6">
          <svg fill="none" height="80" stroke="#287C80" strokeWidth="2.5" viewBox="0 0 80 80" width="80">
            <path d="M10 20 L70 20 L40 50 Z" fill="rgba(40,124,128,0.15)"></path>
            <rect fill="rgba(255,255,255,0.7)" height="40" rx="4" width="60" x="10" y="20"></rect>
            <path d="M10 20 L40 45 L70 20" stroke="#287C80" strokeWidth="2"></path>
          </svg>
        </div>
        <div className="absolute top-12 left-[12%] opacity-25 hidden md:block">
          <svg
            className="text-[#287C80]"
            fill="none"
            height="65"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 80 60"
            width="85"
          >
            <path d="M10 35l60-22-26 38-8-16L10 35z" fill="rgba(40,124,128,0.15)"></path>
            <path d="M70 13L36 35"></path>
            <path d="M6 48c10-2 18-8 24-18" strokeDasharray="3 3"></path>
          </svg>
        </div>
        <div className="absolute bottom-20 right-[15%] text-2xl text-[#287C80] opacity-35 animate-twinkle hidden sm:block">
          ✦
        </div>
        <div className="absolute top-1/2 right-[3%] text-xl text-[#F4A340] opacity-40 animate-float-slow hidden sm:block">
          ★
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="reveal-element flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#123B50] border-2 border-[#287C80]/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="pushpin-teal -top-2 left-4"></span>
            <span className="material-symbols-outlined text-[16px] text-[#287C80]">markunread_mailbox</span>
            <span className="text-[#287C80]">Kontak &amp; Pendaftaran</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B50] mt-3 tracking-tight">
            Hubungi Bimbel Mumtaz Sampit
          </h2>
          <p className="font-sans text-[#123B50]/80 max-w-2xl mt-2 text-sm sm:text-base leading-relaxed">
            Diskusikan kebutuhan belajar anak Anda atau jadwalkan kedatangan pengajar ke rumah Anda di wilayah Sampit.
          </p>
        </div>

        {/* 2 Columns: Info Card & Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Card: Info Card */}
          <div className="reveal-left lg:col-span-6 relative bg-gradient-to-br from-white via-[#fffcf5] to-[#f4ece0] border-2 border-[#E2D9C8] rounded-3xl p-5 sm:p-7 shadow-paper overflow-hidden">
            <div className="airmail-border -mx-7 -mt-7 mb-5"></div>
            <div className="pushpin-red top-5 right-6"></div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-[#287C80] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[24px]">home_pin</span>
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#123B50]">
                  Informasi Layanan Les Privat
                </h3>
                <p className="text-xs text-[#287C80] font-bold font-sans">Sampit, Kotawaringin Timur</p>
              </div>
            </div>

            <div className="space-y-3.5 font-sans text-xs sm:text-sm text-[#123B50]">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#fef6e4] to-white border border-[#E2D9C8]">
                <span className="material-symbols-outlined text-[#F4A340] text-[20px] mt-0.5">location_on</span>
                <div>
                  <strong className="font-bold text-[#123B50]">Area Jangkauan:</strong>
                  <p className="text-[#123B50]/80 text-xs mt-0.5 leading-relaxed">
                    Melayani kunjungan ke rumah di Mentawa Baru Ketapang, Baamang, MB. Hilir, Sawahan, dan sekitarnya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#eaf8f6] to-white border border-[#287C80]/25">
                <span className="material-symbols-outlined text-[#287C80] text-[20px] mt-0.5">schedule</span>
                <div>
                  <strong className="font-bold text-[#123B50]">Waktu Belajar:</strong>
                  <p className="text-[#123B50]/80 text-xs mt-0.5">
                    Senin – Sabtu (Sesi Pagi, Siang, Sore, atau Malam sesuai kesepakatan)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#fef6e4] to-white border border-[#E2D9C8]">
                <span className="material-symbols-outlined text-[#287C80] text-[20px] mt-0.5">chat</span>
                <div>
                  <strong className="font-bold text-[#123B50]">WhatsApp &amp; Email:</strong>
                  <p className="text-[#123B50]/80 text-xs mt-0.5 font-sans font-bold">
                    +62 812-3456-7890 • salam@mumtazsampit.sch.id
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border-2 border-[#E2D9C8] h-40 sm:h-44 w-full shadow-inner relative contact-map-preview">
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#123B50] shadow border border-[#287C80]/30 flex items-center gap-1.5">
                <span>📍</span>
                <span>Layanan Guru Datang ke Rumah di Sampit</span>
              </div>
            </div>
          </div>

          {/* Right Card: Inquiry Form */}
          <div className="reveal-right lg:col-span-6 relative bg-gradient-to-br from-white via-[#f7fcfb] to-[#e4f3f1] border-2 border-[#287C80]/30 rounded-3xl p-5 sm:p-7 shadow-paper">
            <div className="washi-strip-teal absolute -top-3.5 right-10 w-28 h-6 rounded-sm rotate-2 z-10"></div>
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#F4A340] text-[18px]">edit_note</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287C80]">
                  Formulir Pendaftaran
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#123B50]">
                Pesan Jadwal Guru ke Rumah
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#123B50]/75 mt-1">
                Isi data singkat di bawah ini, admin kami akan segera menghubungi Anda melalui WhatsApp.
              </p>
            </div>

            <form className="flex flex-col gap-3.5 font-sans" id="contactForm" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#123B50]" htmlFor="parentName">
                  Nama Orang Tua / Wali
                </label>
                <input
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBFDFA] border-2 border-[#DCEFED] text-xs sm:text-sm text-[#123B50] focus:outline-none focus:ring-2 focus:ring-[#287C80] focus:border-transparent transition-all"
                  id="parentName"
                  placeholder="Contoh: Bapak Hendra / Ibu Ratna"
                  required
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#123B50]" htmlFor="homeAddress">
                  Alamat Rumah di Sampit
                </label>
                <input
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBFDFA] border-2 border-[#DCEFED] text-xs sm:text-sm text-[#123B50] focus:outline-none focus:ring-2 focus:ring-[#287C80] focus:border-transparent transition-all"
                  id="homeAddress"
                  placeholder="Contoh: Jl. Ahmad Yani, MB. Ketapang"
                  required
                  type="text"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#123B50]" htmlFor="educationLevel">
                  Pilihan Program Belajar
                </label>
                <select
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBFDFA] border-2 border-[#DCEFED] text-xs sm:text-sm text-[#123B50] focus:outline-none focus:ring-2 focus:ring-[#287C80] focus:border-transparent transition-all"
                  id="educationLevel"
                  required
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                >
                  <option disabled value="">
                    Pilih Jenjang Program
                  </option>
                  <option value="tk">Les Privat TK (Calistung &amp; Persiapan SD)</option>
                  <option value="sd">Les Privat SD (Tematik, Matematika, PR)</option>
                  <option value="smp">Les Privat SMP (Matematika, IPA, Inggris)</option>
                  <option value="sma">Les Privat SMA (IPA / IPS &amp; Persiapan UTBK)</option>
                  <option value="mengaji">Privat Mengaji Iqro &amp; Al-Qur'an</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#123B50]" htmlFor="messageNotes">
                  Jadwal yang Diinginkan &amp; Catatan
                </label>
                <textarea
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBFDFA] border-2 border-[#DCEFED] text-xs sm:text-sm text-[#123B50] focus:outline-none focus:ring-2 focus:ring-[#287C80] focus:border-transparent transition-all resize-none"
                  id="messageNotes"
                  placeholder="Contoh: Hari Senin & Kamis sore pukul 16.00, fokus pelajaran Matematika kelas 4 SD..."
                  required
                  rows="3"
                  value={messageNotes}
                  onChange={(e) => setMessageNotes(e.target.value)}
                ></textarea>
              </div>

              <button
                className="btn-tactile-orange w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F4A340] text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Mengirim Permohonan...</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Permintaan Jadwal</span>
                    <span className="material-symbols-outlined text-[17px]">send</span>
                  </>
                )}
              </button>
            </form>

            {submittedWaUrl && (
              <div
                className="mt-4 p-3.5 rounded-2xl bg-[#DCEFED] border-2 border-[#A8C9B5] text-[#123B50] flex flex-col gap-2"
                id="formSuccessAlert"
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[22px] text-[#287C80]">check_circle</span>
                  <p className="font-sans text-xs sm:text-sm font-semibold">
                    Terima kasih. Data Anda telah diterima dan admin Bimbel Mumtaz Sampit akan segera menghubungi Anda.
                  </p>
                </div>
                <div id="waDirectHelper">
                  <a
                    href={submittedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Buka Langsung di WhatsApp Tim Mumtaz</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="reveal-scale mt-10 sm:mt-12 relative bg-gradient-to-r from-[#123B50] via-[#1a4a63] to-[#287C80] text-white rounded-3xl p-6 sm:p-8 shadow-paper-lift overflow-hidden border-2 border-white/20">
          <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#e2f3f5] border-r-2 border-[#123B50]"></div>
          <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#e2f3f5] border-l-2 border-[#123B50]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#F4A340] text-xs font-bold mb-2.5 border border-[#F4A340]/40">
                <span className="material-symbols-outlined text-[15px]">event_available</span>
                <span>Konsultasi Jadwal Belajar</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Siap Memulai Les Privat di Rumah?
              </h3>
              <p className="text-[#DCEFED] text-xs sm:text-sm mt-1.5 font-sans">
                Tentukan hari belajar yang paling nyaman bagi anak Anda. Kami bantu siapkan pengajar yang tepat ke alamat rumah Anda di Sampit.
              </p>
            </div>
            <a
              className="btn-tactile-orange shrink-0 inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#F4A340] text-white font-bold text-xs sm:text-sm shadow-lg"
              href="#kontak"
            >
              <span>Jadwalkan Sesi Pertama</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </a>
          </div>
        </div>
      </div>

      {/* Pemisah 7 (Gaya A - Varian 4): into Deep Navy Footer (#123B50) */}
      <div className="relative w-full mt-10 sm:mt-14 leading-none z-10 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-36 sm:h-44 md:h-52 lg:h-56 block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 260"
        >
          <defs>
            <linearGradient id="div7a-sand-hill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5cfa8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e2f3f5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="div7a-teal-back" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22a699" />
              <stop offset="100%" stopColor="#0f6b68" />
            </linearGradient>
            <linearGradient id="div7a-cerulean-main" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c6ea0" />
              <stop offset="60%" stopColor="#288bba" />
              <stop offset="100%" stopColor="#124a73" />
            </linearGradient>
            <linearGradient id="div7a-lake-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#66c2e0" />
              <stop offset="55%" stopColor="#9ce0f2" />
              <stop offset="100%" stopColor="#caeef9" />
            </linearGradient>
            <linearGradient id="div7a-emerald-bush" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3cd070" />
              <stop offset="55%" stopColor="#22a861" />
              <stop offset="100%" stopColor="#137547" />
            </linearGradient>
          </defs>

          <circle cx="520" cy="128" r="110" fill="#fde68a" fillOpacity="0.5"></circle>
          <path
            d="M160,170 Q340,85 520,158 Q710,88 900,162 Q1090,82 1280,165 L1280,260 L160,260 Z"
            fill="url(#div7a-sand-hill)"
          ></path>
          <path
            d="M-20,170 Q85,88 195,145 Q295,105 395,170 Z"
            fill="url(#div7a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <path
            d="M820,172 Q955,105 1090,168 Z"
            fill="url(#div7a-teal-back)"
            stroke="#d4af37"
            strokeOpacity="0.8"
            strokeWidth="1.5"
          ></path>
          <rect x="0" y="168" width="1440" height="92" fill="url(#div7a-lake-water)"></rect>
          <path
            d="M760,172 C720,192 675,206 705,224 C730,238 695,248 660,256"
            stroke="#ffffff"
            strokeOpacity="0.58"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M390,186 H540 M790,192 H940"
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth="1.8"
            strokeLinecap="round"
          ></path>
          <path
            d="M-25,218 Q65,112 185,152 Q285,108 425,212 Z"
            fill="url(#div7a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M385,228 Q475,138 585,178 Q665,142 755,225 Z"
            fill="url(#div7a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M-10,148 C115,152 245,172 415,196"
            stroke="#ffffff"
            strokeOpacity="0.65"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M945,215 Q1085,112 1235,148 Q1355,78 1460,42 L1460,228 L945,215 Z"
            fill="url(#div7a-cerulean-main)"
            stroke="#d4af37"
            strokeWidth="1.6"
          ></path>
          <path
            d="M1095,162 L1450,148"
            stroke="#ffffff"
            strokeOpacity="0.65"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M-20,246 Q55,198 145,224 Q245,192 355,228 Q445,202 535,242 Z"
            fill="url(#div7a-emerald-bush)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M925,246 Q1025,200 1125,226 Q1235,190 1345,224 Q1405,208 1460,236 L1460,255 L925,255 Z"
            fill="url(#div7a-emerald-bush)"
            stroke="#d4af37"
            strokeWidth="1.4"
          ></path>
          <path
            d="M0,240 C350,222 700,256 1060,232 C1250,220 1365,242 1440,236 L1440,260 L0,260 Z"
            fill="#123B50"
            stroke="#d4af37"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          ></path>
          <path
            d="M0,244 C350,226 700,258 1060,236 C1250,224 1365,246 1440,240 L1440,260 L0,260 Z"
            fill="#123B50"
          ></path>
        </svg>
      </div>
    </section>
  );
}
