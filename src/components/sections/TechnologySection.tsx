import { useRef } from 'react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { technologyData } from '@/data';

export function TechnologySection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const motorRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // SVG Stroke drawing animation - runs once
        if (svgRef.current) {
          const rings = svgRef.current.querySelectorAll('.tech-ring');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          });

          tl.from(rings, {
            strokeDashoffset: 1000,
            duration: 2,
            stagger: 0.15,
            ease: 'power2.out',
          });

          tl.from(
            '.tech-pulse',
            {
              scale: 0,
              opacity: 0,
              duration: 0.6,
              ease: 'back.out(2)',
            },
            '-=1.2',
          );
        }

        // Text stagger on enter
        if (textRef.current) {
          gsap.from(textRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-24 md:py-40 bg-black text-pure-white overflow-hidden relative scroll-mt-24 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0 flex justify-end items-center">
        <div ref={motorRef} className="relative w-full h-[70%] flex justify-end items-center">
          <img 
            src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED/motor.webp" 
            alt="Core Technology" 
            className="w-full h-full object-contain object-right opacity-90"
          />
        </div>
        
        {/* Optional gradient overlay to ensure text readability on mobile if image is too bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:hidden pointer-events-none" />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div ref={textRef} className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 leading-tight pr-4">
            {t('techSection.title')}
          </h2>
          <div className="grid gap-8">
            {technologyData.map((item, index) => (
              <div
                key={item.id}
                className="flex items-start gap-6 border-t border-white/20 pt-6"
              >
                <span className="font-mono text-brand-red text-lg opacity-90 mt-1">
                  0{index + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-pure-white shadow-sm">
                  {t(item.title)}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right column empty to let the background motor show through */}
        <div className="hidden lg:block"></div>
      </Container>
    </section>
  );
}
