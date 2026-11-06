import { useEffect } from 'react';

export function useLandingAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      document.documentElement.classList.add('js-ready');
    }

    const cleanups = [];

    // 1. Hero Animations Replay on Re-entry
    const heroSection = document.getElementById('hero');
    if (heroSection && !prefersReducedMotion && 'IntersectionObserver' in window) {
      const heroAnimElements = heroSection.querySelectorAll(
        '.hero-anim-1, .hero-anim-2, .hero-anim-3, .hero-scribble-anim'
      );

      const restartHeroAnimation = () => {
        heroAnimElements.forEach((el) => {
          el.style.animation = 'none';
          void el.offsetHeight;
          el.style.animation = '';
        });
      };

      let wasOutOfView = false;
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              if (wasOutOfView) {
                restartHeroAnimation();
                wasOutOfView = false;
              }
            } else if (!entry.isIntersecting && entry.intersectionRatio === 0) {
              wasOutOfView = true;
            }
          });
        },
        { threshold: [0, 0.15] }
      );

      heroObserver.observe(heroSection);
      cleanups.push(() => heroObserver.disconnect());
    }

    // 2. Two-stage Hysteresis Scroll Reveal
    const revealElements = document.querySelectorAll(
      '.reveal-element, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (revealElements.length > 0) {
      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealElements.forEach((el) => el.classList.add('is-revealed'));
      } else {
        const revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
              }
            });
          },
          { root: null, rootMargin: '0px 0px -30px 0px', threshold: 0.08 }
        );

        const resetObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                entry.target.classList.remove('is-revealed');
              }
            });
          },
          { root: null, rootMargin: '120px 0px 120px 0px', threshold: 0 }
        );

        revealElements.forEach((el) => {
          revealObserver.observe(el);
          resetObserver.observe(el);
        });

        cleanups.push(() => {
          revealObserver.disconnect();
          resetObserver.disconnect();
        });
      }
    }

    // 3. Stats Counter with Hysteresis
    const counters = document.querySelectorAll('[data-counter-target]');
    const resetCounter = (element) => {
      if (element._counterRafId) {
        cancelAnimationFrame(element._counterRafId);
        element._counterRafId = null;
      }
      const prefix = element.getAttribute('data-counter-prefix') || '';
      const suffix = element.getAttribute('data-counter-suffix') || '';
      element.textContent = `${prefix}0${suffix}`;
    };

    const animateCounter = (element) => {
      if (element._counterRafId) {
        cancelAnimationFrame(element._counterRafId);
        element._counterRafId = null;
      }

      const target = parseInt(element.getAttribute('data-counter-target'), 10) || 0;
      const suffix = element.getAttribute('data-counter-suffix') || '';
      const prefix = element.getAttribute('data-counter-prefix') || '';
      const duration = 1500;
      const startTime = performance.now();

      const easeOutQuad = (t) => t * (2 - t);

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentVal = Math.floor(easedProgress * target);

        element.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          element._counterRafId = requestAnimationFrame(step);
        } else {
          element.textContent = `${prefix}${target}${suffix}`;
          element._counterRafId = null;
        }
      };

      element._counterRafId = requestAnimationFrame(step);
    };

    if (counters.length > 0) {
      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        counters.forEach((counter) => {
          const target = counter.getAttribute('data-counter-target');
          const suffix = counter.getAttribute('data-counter-suffix') || '';
          const prefix = counter.getAttribute('data-counter-prefix') || '';
          counter.textContent = `${prefix}${target}${suffix}`;
        });
      } else {
        const counterStartObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !entry.target._hasCounted) {
                entry.target._hasCounted = true;
                animateCounter(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );

        const counterResetObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                entry.target._hasCounted = false;
                resetCounter(entry.target);
              }
            });
          },
          { rootMargin: '120px 0px 120px 0px', threshold: 0 }
        );

        counters.forEach((counter) => {
          counterStartObserver.observe(counter);
          counterResetObserver.observe(counter);
        });

        cleanups.push(() => {
          counterStartObserver.disconnect();
          counterResetObserver.disconnect();
        });
      }
    }

    // 4. Parallax Doodles on Hero
    if (!prefersReducedMotion && window.innerWidth >= 1024 && heroSection) {
      const doodles = document.querySelectorAll('.hero-doodle');
      if (doodles.length > 0) {
        let ticking = false;
        const handleMouseMove = (e) => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              const rect = heroSection.getBoundingClientRect();
              const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
              const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

              doodles.forEach((doodle, index) => {
                const depth = (index + 1) * 10;
                const moveX = mouseX * depth;
                const moveY = mouseY * depth;
                doodle.style.transform = `translate(${moveX}px, ${moveY}px)`;
              });

              ticking = false;
            });
            ticking = true;
          }
        };

        const handleMouseLeave = () => {
          doodles.forEach((doodle) => {
            doodle.style.transform = 'translate(0px, 0px)';
            doodle.style.transition = 'transform 0.4s ease-out';
          });
        };

        heroSection.addEventListener('mousemove', handleMouseMove);
        heroSection.addEventListener('mouseleave', handleMouseLeave);

        cleanups.push(() => {
          heroSection.removeEventListener('mousemove', handleMouseMove);
          heroSection.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}
