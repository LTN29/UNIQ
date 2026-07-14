import { useRef } from 'react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { VisualPlaceholder } from '@/components/ui/VisualPlaceholder';

export function HeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const textLinesRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        // Elegant line-by-line reveal for heading
        if (textLinesRef.current) {
          const lines = textLinesRef.current.querySelectorAll('.overflow-hidden > *');
          tl.fromTo(lines, 
            { y: '120%', rotate: 2 },
            {
              y: '0%',
              rotate: 0,
              duration: 1.4,
              stagger: 0.15,
              delay: 0.2,
            }
          );
        }

        // Image mask reveal
        tl.fromTo(
          visualRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.6,
            ease: 'expo.inOut',
          },
          '-=1.2'
        );

        // Subtle Image Parallax inside the mask
        const img = visualRef.current?.querySelector('.visual-inner');
        if (img) {
          tl.fromTo(img, 
            { scale: 1.1, y: 20 },
            {
              scale: 1,
              y: 0,
              duration: 1.6,
              ease: 'expo.out',
            },
            '-=1.6'
          );
        }

        // Parallax scroll for the whole visual
        gsap.to(visualRef.current, {
          y: 60,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
        
        // Parallax scroll for text
        gsap.to(textLinesRef.current, {
          y: -40,
          opacity: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-pure-white scroll-mt-24 border-b border-border/50"
    >
    <Container className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <div ref={textLinesRef} className="lg:col-span-6 relative z-20 flex flex-col justify-center">
          <div className="overflow-hidden mb-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-graphite/50 font-mono inline-block">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-semibold text-graphite leading-[1.1] tracking-tight mb-10 relative z-30">
            <div className="overflow-hidden pb-4 -mb-4">
              <span className="block">{t('hero.title1')}</span>
            </div>
            <div className="overflow-hidden pb-4 -mb-4">
              <span className="block font-editorial font-light italic text-graphite/90">{t('hero.title2')}</span>
            </div>
            <div className="overflow-hidden pb-4 -mb-4 mt-2">
              <span className="block">{t('hero.title3')}</span>
            </div>
            <div className="overflow-hidden pb-4 -mb-4">
              <span className="block font-editorial font-light italic text-graphite/90">{t('hero.title4')}</span>
            </div>
          </h1>
          
          <div className="overflow-hidden mb-12">
            <p className="text-xl text-muted-foreground font-light max-w-md leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex flex-wrap gap-8 items-center">
              <a href="#products" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-graphite">
                <span className="relative overflow-hidden">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">{t('hero.explore')}</span>
                  <span className="absolute inset-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-brand-red">{t('hero.explore')}</span>
                </span>
                <span className="w-12 h-[1px] bg-graphite group-hover:bg-brand-red transition-colors duration-300 group-hover:w-16" />
              </a>
              
              <a href="#technology" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="transition-colors duration-300 group-hover:text-graphite">{t('hero.tech')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative mt-12 lg:mt-0">
          <div
            ref={visualRef}
            className="relative z-10 w-full aspect-[1744/902] overflow-hidden bg-surface"
          >
            <div className="visual-inner w-full h-full">
              <VisualPlaceholder
                variant="white"
                label="Hero Exhibition"
                className="w-full h-full border-none rounded-none"
                src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/UNIQ_OPTIMIZED/bannerlight.webp"
                imageMode="cover"
                assetSpec={{
                  type: 'studio',
                  aspectRatio: '1744/902',
                  composition: 'premium minimalist studio shot',
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
