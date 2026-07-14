import { useRef } from 'react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { IMAGES } from '@/constants/images';

export function AppEcosystemSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        });

        tl.from(mockupRef.current, {
          y: 100,
          opacity: 0,
          rotationZ: -2,
          duration: 1.2,
          ease: 'power3.out',
        });

        if (chipsRef.current) {
          tl.from(
            chipsRef.current.children,
            {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power2.out',
            },
            '-=0.6',
          );
        }

        // Parallax rotation on scroll
        gsap.to(mockupRef.current, {
          rotationZ: 2,
          y: -20,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
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
    <section id="app" ref={sectionRef} className="py-24 md:py-32 bg-surface overflow-hidden scroll-mt-24">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-mono tracking-widest text-brand-red uppercase mb-6">
            {t('appSection.subtitle1')} <span className="lowercase normal-case italic text-muted-foreground font-sans tracking-normal ml-2">{t('appSection.subtitle2')}</span>
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-graphite mb-8 leading-[1.1] max-w-xl">
            {t('appSection.title1')}<span className="font-editorial italic text-graphite/90">{t('appSection.title2')}</span>{t('appSection.title3')}
          </p>
          <p className="text-lg text-muted-foreground font-light mb-12 max-w-md leading-relaxed">
            {t('appSection.desc')}
          </p>

          <div ref={chipsRef} className="flex flex-col mt-8">
            {[
              {
                title: t('appSection.f1.title'),
                desc: t('appSection.f1.desc'),
              },
              {
                title: t('appSection.f2.title'),
                desc: t('appSection.f2.desc'),
              },
              {
                title: t('appSection.f3.title'),
                desc: t('appSection.f3.desc'),
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative border-t border-border/70 py-6 md:py-8 cursor-pointer overflow-hidden max-w-xl"
              >
                {/* Background sweep on hover */}
                <div className="absolute inset-0 bg-pure-white/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <span className="text-xs font-mono text-muted-foreground w-8 shrink-0 group-hover:text-brand-red transition-colors duration-500 pt-1">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-medium text-graphite mb-2 group-hover:text-brand-red transition-colors duration-500">
                      {item.title}
                    </h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <p className="overflow-hidden text-muted-foreground font-light text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-border/70 max-w-xl" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            ref={mockupRef}
            className="w-full max-w-[300px] aspect-[9/19] bg-graphite rounded-[3rem] p-2 md:p-3 shadow-soft relative"
          >
            {/* Screen */}
            <div className="w-full h-full bg-pure-white rounded-[2.5rem] overflow-hidden relative flex flex-col items-center justify-center">
              <img src={IMAGES.logo} alt="UNIQ App Logo" className="w-28 h-28 object-contain" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
