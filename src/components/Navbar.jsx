import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'Beranda', href: '#' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Program', href: '#program' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' }
];

export default function Navbar({ onOpenPortal }) {
  const [activeHref, setActiveHref] = useState('#');
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollYRef = useRef(0);
  const isNavClickScrollingRef = useRef(false);
  const navScrollTimerRef = useRef(null);
  const headerRef = useRef(null);

  const lockNavbarOnNavigate = (href) => {
    setActiveHref(href);
    isNavClickScrollingRef.current = true;
    setIsHidden(false);
    if (navScrollTimerRef.current) clearTimeout(navScrollTimerRef.current);
    navScrollTimerRef.current = setTimeout(() => {
      isNavClickScrollingRef.current = false;
      lastScrollYRef.current = window.scrollY;
    }, 900);
  };

  useEffect(() => {
    const SCROLL_THRESHOLD = 6;
    lastScrollYRef.current = window.scrollY;
    setIsScrolled(window.scrollY > 30);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      if (isNavClickScrollingRef.current) {
        setIsHidden(false);
        lastScrollYRef.current = currentScrollY;
        if (navScrollTimerRef.current) clearTimeout(navScrollTimerRef.current);
        navScrollTimerRef.current = setTimeout(() => {
          isNavClickScrollingRef.current = false;
          lastScrollYRef.current = window.scrollY;
        }, 160);
        return;
      }

      if (currentScrollY <= 30) {
        setIsHidden(false);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollYRef.current;
      if (Math.abs(diff) >= SCROLL_THRESHOLD) {
        if (diff > 0) {
          setIsHidden(true);
          setMobileMenuOpen(false);
        } else {
          setIsHidden(false);
        }
        lastScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = document.querySelectorAll('section[id], footer[id]');
    if (sections.length === 0) return;

    const spyObserver = new IntersectionObserver(
      (entries) => {
        if (isNavClickScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id === 'hero') {
              setActiveHref('#');
            } else if (id && id !== 'footer') {
              setActiveHref(`#${id}`);
            }
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach((section) => spyObserver.observe(section));
    return () => spyObserver.disconnect();
  }, []);

  // Close mobile menu on outside click or Escape
  useEffect(() => {
    const handleDocClick = (e) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleDocClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleDocClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-3.5 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1240px] ${
        isHidden ? 'navbar-hidden' : ''
      }`}
    >
      <div
        className={`bg-[#faf7ee]/95 backdrop-blur-xl border border-teal-mumtaz/20 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 shadow-pill flex items-center justify-between gap-3 transition-all duration-300 ${
          isScrolled ? 'navbar-scrolled' : ''
        }`}
      >
        {/* Brand Logo */}
        <a
          className="flex items-center gap-2.5 group shrink-0 whitespace-nowrap"
          href="#"
          aria-label="Bimbel Mumtaz Sampit Beranda"
          onClick={() => lockNavbarOnNavigate('#')}
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-primary to-teal-mumtaz flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:rotate-3 transition-transform shrink-0">
            <span className="material-symbols-outlined text-[19px] sm:text-[20px]">school</span>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-secondary-bright rounded-full border-2 border-[#faf7ee]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display text-lg sm:text-xl font-bold text-primary tracking-tight">Mumtaz</span>
              <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                Sampit
              </span>
            </div>
            <span className="text-[9.5px] font-semibold uppercase tracking-wider text-teal-mumtaz font-sans mt-0.5 whitespace-nowrap">
              Les Privat ke Rumah
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => lockNavbarOnNavigate(item.href)}
                className={`nav-item-link ${
                  isActive ? 'active font-bold text-primary' : 'font-semibold text-slate-700 hover:text-primary'
                } relative px-3.5 py-1 text-xs xl:text-sm rounded-full transition-colors duration-200 whitespace-nowrap group`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`nav-active-pill absolute inset-0 bg-amber-200/80 rounded-full -rotate-1 shadow-sm ${
                    isActive
                      ? 'transition-transform group-hover:rotate-0'
                      : 'opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-40'
                  }`}
                ></span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#portal-orang-tua"
            onClick={(e) => {
              e.preventDefault();
              onOpenPortal();
            }}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-secondary-bright to-secondary text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg active:translate-y-0 transition-all duration-200 whitespace-nowrap shrink-0 group cursor-pointer"
          >
            <span className="material-symbols-outlined text-[17px] group-hover:rotate-12 transition-transform">
              supervisor_account
            </span>
            <span>Portal Orang Tua</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            aria-label="Buka Menu Navigasi"
            aria-expanded={mobileMenuOpen}
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="lg:hidden w-9 h-9 rounded-full bg-paper-soft hover:bg-amber-100 text-primary flex items-center justify-center transition-colors cursor-pointer"
            id="mobileMenuBtn"
          >
            <span className="material-symbols-outlined text-[22px]" id="menuIcon">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`${
          mobileMenuOpen ? '' : 'hidden'
        } lg:hidden mt-2 bg-[#faf7ee]/95 backdrop-blur-2xl border border-teal-mumtaz/20 rounded-3xl p-5 shadow-2xl transition-all duration-300`}
        id="mobileMenu"
      >
        <div className="flex flex-col gap-2">
          <a
            className="px-4 py-2.5 rounded-xl font-bold bg-amber-100 text-primary flex items-center justify-between"
            href="#"
            onClick={() => {
              lockNavbarOnNavigate('#');
              setMobileMenuOpen(false);
            }}
          >
            <span>Beranda</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          {NAV_ITEMS.slice(1).map((item) => (
            <a
              key={item.href}
              className="px-4 py-2 rounded-xl font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-mumtaz"
              href={item.href}
              onClick={() => {
                lockNavbarOnNavigate(item.href);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200">
            <a
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-secondary-bright to-secondary text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow"
              href="#portal-orang-tua"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
            >
              <span className="material-symbols-outlined text-[18px]">supervisor_account</span>
              <span>Akses Portal Orang Tua</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
