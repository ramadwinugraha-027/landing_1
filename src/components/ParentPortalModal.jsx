import React, { useState, useEffect } from 'react';

export default function ParentPortalModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('portal-pane-login');
  const [studentId, setStudentId] = useState('');
  const [portalPin, setPortalPin] = useState('');
  const [showDemoResult, setShowDemoResult] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setShowDemoResult(true);
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'is-open' : ''}`}
      id="parentPortalModal"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="modalPortalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog relative">
        <div className="washi-strip-orange absolute -top-3 left-10 w-24 h-5 rounded-sm -rotate-1 z-10"></div>

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-mumtaz text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">supervisor_account</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-primary" id="modalPortalTitle">
                Portal Orang Tua
              </h3>
              <p className="text-xs text-slate-500">Bimbel Mumtaz Sampit</p>
            </div>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            id="closePortalModal"
            aria-label="Tutup Dialog"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 pt-4 flex gap-2 border-b border-slate-100">
          <button
            onClick={() => setActiveTab('portal-pane-login')}
            className={`px-3.5 py-1.5 rounded-t-xl font-bold text-xs transition-colors cursor-pointer ${
              activeTab === 'portal-pane-login'
                ? 'bg-teal-mumtaz text-white'
                : 'bg-paper-soft text-slate-700 hover:bg-amber-100'
            }`}
          >
            Masuk Portal
          </button>
          <button
            onClick={() => setActiveTab('portal-pane-info')}
            className={`px-3.5 py-1.5 rounded-t-xl font-bold text-xs transition-colors cursor-pointer ${
              activeTab === 'portal-pane-info'
                ? 'bg-teal-mumtaz text-white'
                : 'bg-paper-soft text-slate-700 hover:bg-amber-100'
            }`}
          >
            Panduan Fitur
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {activeTab === 'portal-pane-login' ? (
            <div id="portal-pane-login">
              {!showDemoResult ? (
                <form className="space-y-4" id="portalLoginForm" onSubmit={handleLoginSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-primary mb-1" htmlFor="studentId">
                      ID Siswa / No. Handphone Orang Tua
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-mumtaz"
                      id="studentId"
                      placeholder="Contoh: MMZ-2026 atau 081234567890"
                      required
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary mb-1" htmlFor="portalPin">
                      PIN Masuk (4 Digit)
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-mumtaz"
                      id="portalPin"
                      placeholder="****"
                      maxLength="4"
                      required
                      type="password"
                      value={portalPin}
                      onChange={(e) => setPortalPin(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn-tactile-primary w-full py-3 rounded-full bg-primary text-white font-bold text-sm shadow cursor-pointer"
                    type="submit"
                  >
                    Buka Laporan Belajar Siswa
                  </button>
                  <p className="text-[11px] text-center text-slate-500">
                    Belum memiliki PIN? Hubungi admin Mumtaz via WhatsApp untuk aktivasi akun orang tua.
                  </p>
                </form>
              ) : (
                <div className="space-y-3 pt-2" id="portalDemoResult">
                  <div className="p-4 rounded-xl bg-teal-50 border border-teal-200">
                    <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span>Selamat Datang, Bapak/Ibu Hendra!</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Siswa: <strong>Muhammad Farhan (Kelas 5 SD)</strong>
                    </p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                      <span className="text-slate-600">Presensi Bulan Ini:</span>
                      <span className="font-bold text-teal-mumtaz">8 / 8 Sesi Hadir (100%)</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                      <span className="text-slate-600">Tutor Pembimbing:</span>
                      <span className="font-bold text-primary">Kak Sarah, S.Pd. (Matematika)</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                      <span className="text-slate-600">Jadwal Selanjutnya:</span>
                      <span className="font-bold text-secondary">Rabu, 16.00 WIB (Rumah)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3 text-xs text-slate-600" id="portal-pane-info">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-amber-600 text-[20px]">verified</span>
                <div>
                  <strong className="text-slate-800">Cek Presensi Real-Time:</strong>
                  <p className="mt-0.5">
                    Memastikan setiap sesi bimbingan belajar terlaksana tepat waktu sesuai jam yang disepakati.
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">assessment</span>
                <div>
                  <strong className="text-slate-800">Rapor &amp; Catatan Tutor:</strong>
                  <p className="mt-0.5">
                    Melihat catatan kemajuan materi, nilai kuis latihan, dan respon pemahaman anak tiap sesi.
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-slate-600 text-[20px]">edit_calendar</span>
                <div>
                  <strong className="text-slate-800">Pengajuan Reschedule:</strong>
                  <p className="mt-0.5">
                    Kemudahan mengatur ulang jadwal les bila ada agenda keluarga mendesak tanpa cemas sesi hangus.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
