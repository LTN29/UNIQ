import { useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { VisualPlaceholder } from '@/components/ui/VisualPlaceholder';
import { featuredFeatures } from '@/data';

export function FeaturedProductSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const visualPlaceholderRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop Marker Sync
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const panels = gsap.utils.toArray('.feature-panel') as HTMLElement[];
        
        // Split-text like reveal for heading
        if (headingRef.current) {
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
              },
            }
          );
        }

        panels.forEach((panel, i) => {
          // Add fade up animation for each panel on desktop
          gsap.fromTo(panel,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
              }
            }
          );

          ScrollTrigger.create({
            trigger: panel,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => updateVisual(i),
            onEnterBack: () => updateVisual(i),
          });
        });

        function updateVisual(index: number) {
          setActiveIndex(index);
          
          // Subtle Red indicator
          gsap.to('.red-indicator', {
            y: index * 40,
            duration: 0.8,
            ease: 'expo.out',
          });
        }
      });

      // Mobile/Tablet Fallback
      mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
        const panels = gsap.utils.toArray('.feature-panel') as HTMLElement[];
        panels.forEach((panel) => {
          gsap.fromTo(panel, 
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section id="solutions" ref={sectionRef} className="relative bg-surface border-t border-border/50 scroll-mt-24 pt-24 pb-32 md:pt-32 md:pb-40">
      <Container className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Visual Column (CSS Sticky on Desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-start z-10 h-auto lg:h-[calc(100vh-12rem)] pb-12 lg:pb-0">
          
          <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-editorial italic font-light text-graphite leading-[1.1] tracking-tight mb-12 w-full lg:w-[180%] shrink-0 relative z-30">
            {t('featured.title1')}<br />
            <span className="font-display not-italic font-bold tracking-tighter">{t('featured.title2')}</span>{t('featured.title3')}
          </h2>

          <div className="w-full aspect-[4/5] lg:aspect-auto lg:flex-1 relative min-h-[400px]">
            <div className="w-full h-full bg-pure-white shadow-soft border border-border/50 p-2 lg:p-4 flex flex-col relative overflow-hidden">
              <div className="absolute left-6 top-6 w-[1px] h-[90px] bg-silver/30 overflow-hidden hidden lg:block z-20">
                <div className="w-full h-[12px] bg-brand-red red-indicator" />
              </div>
              <div className="w-full h-full overflow-hidden relative bg-surface">
                <div ref={visualPlaceholderRef} className="w-full h-full origin-bottom">
                  <VisualPlaceholder
                    variant="white"
                    label="Macro Detail"
                    className="w-full h-full border-none rounded-none"
                    src={`/images/products/scoll${activeIndex + 1}.png`}
                    imageMode="contain"
                    assetSpec={{
                      type: 'product',
                      aspectRatio: 'auto',
                      composition: 'close up macro detail',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column (Scrolls naturally) */}
        <div className="lg:col-span-7 flex flex-col lg:py-[30vh] relative z-20 lg:pl-16">
          {featuredFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-panel lg:min-h-[70vh] flex flex-col justify-center mb-24 lg:mb-0 relative"
            >
              <div className="max-w-lg lg:ml-auto bg-surface/90 backdrop-blur-md p-8 lg:p-0 lg:bg-transparent lg:backdrop-blur-none border border-border/50 lg:border-none">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-brand-red"></div>
                  <span className="text-brand-red font-mono font-medium text-xs tracking-widest uppercase">
                    0{index + 1} // 03
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-display font-semibold tracking-tight text-graphite mb-6 leading-tight">
                  {t(feature.title)}
                </h3>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
                  {t(feature.description)}
                </p>

                <div className="mt-12 lg:hidden aspect-square w-full">
                  <VisualPlaceholder
                    variant="white"
                    label={`Detail ${index + 1}`}
                    className="w-full h-full border-none shadow-soft"
                    src={feature.imageSrc}
                    imageMode="contain"
                    assetSpec={{
                      type: 'product',
                      aspectRatio: '1/1',
                      composition: 'macro feature shot',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
