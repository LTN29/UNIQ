import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

import { Container } from '@/components/ui/Container';
import { NavigationItem } from '@/types';
import { IMAGES } from '@/constants/images';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { cn } from '@/lib/cn';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function SiteHeader() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  useGSAP(
    () => {
      if (!headerRef.current) return;
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(headerRef.current, {
          y: -100,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'all',
        });

        if (navRef.current) {
          gsap.from(navRef.current.children, {
            y: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2,
            clearProps: 'all',
          });
        }
      });

      return () => mm.revert();
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-border py-3 shadow-sm'
          : 'bg-transparent py-5',
      )}
    >
      <Container
        as="nav"
        aria-label="Điều hướng chính"
        className="flex items-center justify-between gap-6"
      >
        <a
          href="#top"
          className="flex items-center gap-2 relative z-50 transition-transform hover:scale-105"
          aria-label="Trang chủ UNIQ"
        >
          <img src={IMAGES.logo} alt="UNIQ Logo" className="h-8 md:h-10 w-auto" />
        </a>

        <div ref={navRef} className="hidden items-center gap-7 lg:flex">
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-graphite transition-colors hover:text-brand-red relative group py-2"
            >
              {t(item.label)}
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-brand-red transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
            </a>
          ))}
          
          <div className="flex items-center gap-3 ml-2">
            <LanguageSwitcher />
            <a
              href={siteConfig.warrantyLookupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-graphite transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              {t('nav.warranty')}
            </a>
            <a
              href="#products"
              className="inline-flex h-9 items-center justify-center rounded-md bg-brand-red px-4 text-sm font-medium text-pure-white transition-colors hover:bg-brand-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              {t('nav.explore')}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden relative z-50">
          <LanguageSwitcher />
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex size-10 items-center justify-center rounded-md text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 top-[60px] z-40 bg-pure-white px-6 py-8 lg:hidden flex flex-col gap-6 overflow-y-auto"
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                menuToggleRef.current?.focus();
              }}
              className="text-2xl font-semibold text-graphite border-b border-border pb-4 hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:text-brand-red"
            >
              {t(item.label)}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8 pb-10">
            <a
              href={siteConfig.warrantyLookupUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-4 text-base font-medium text-graphite transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              {t('nav.warranty')}
            </a>
            <a
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-md bg-brand-red px-4 text-base font-medium text-pure-white transition-colors hover:bg-brand-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              {t('nav.explore')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
