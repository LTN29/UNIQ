import { useRef } from 'react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { VisualPlaceholder } from '@/components/ui/VisualPlaceholder';
import { productEcosystemData } from '@/data';
import { cn } from '@/lib/cn';

export function ProductEcosystemSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Heading reveal
        if (headingRef.current) {
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
              },
            },
          );
        }

        if (itemsRef.current) {
          const items = Array.from(itemsRef.current.children);

          items.forEach((item) => {
            const visual = item.querySelector('.editorial-visual');
            const content = item.querySelector('.editorial-content');

            // Mask reveal for visuals (ultra-premium feel)
            if (visual) {
              gsap.fromTo(
                visual,
                { clipPath: 'inset(100% 0% 0% 0%)' },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 1.5,
                  ease: 'expo.inOut',
                  scrollTrigger: {
                    trigger: item,
                    start: 'top 75%',
                  },
                },
              );

              // Subtle Image Parallax inside the mask
              const img = visual.querySelector('.visual-inner');
              if (img) {
                gsap.fromTo(
                  img,
                  { scale: 1.1, y: 20 },
                  {
                    scale: 1,
                    y: -20,
                    ease: 'none',
                    scrollTrigger: {
                      trigger: item,
                      start: 'top bottom',
                      end: 'bottom top',
                      scrub: true,
                    },
                  },
                );
              }
            }

            // Elegant content fade up
            if (content) {
              gsap.fromTo(
                content,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  delay: 0.3,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                  },
                },
              );
            }
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-32 md:py-48 bg-pure-white scroll-mt-24 overflow-hidden"
    >
      <Container>
        <div className="mb-24 lg:mb-40 flex justify-between items-end border-b border-border/50 pb-8">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-editorial italic font-light text-graphite max-w-3xl leading-[1.1] tracking-tight"
          >
            {t('ecosystemSection.title1')}{' '}
            <span className="font-display not-italic font-bold tracking-tighter">
              {t('ecosystemSection.title2')}
            </span>
          </h2>
          <div className="hidden lg:block text-brand-red font-mono text-sm tracking-widest uppercase mb-3">
            Ecosystem // 0{productEcosystemData.length}
          </div>
        </div>

        <div ref={itemsRef} className="flex flex-col gap-32 lg:gap-48">
          {productEcosystemData.map((item, index) => {
            // Asymmetric layout logic based on index (Left/Right alternation)
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={cn(
                  'group flex flex-col lg:flex-row items-center gap-12 lg:gap-24',
                  !isLeft && 'lg:flex-row-reverse',
                )}
              >
                {/* Visual Column */}
                <div className="w-full lg:w-1/2">
                  <div className="editorial-visual relative w-full overflow-hidden bg-transparent aspect-square">
                    <div className="visual-inner w-full h-full">
                      <VisualPlaceholder
                        variant="silver"
                        label="Editorial Photography"
                        className="w-full h-full border-none rounded-none"
                        srcs={item.imageSrcs}
                        assetSpec={{
                          type: 'lifestyle',
                          aspectRatio: '1/1',
                          composition: 'editorial lifestyle shot',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="editorial-content w-full flex flex-col lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-brand-red font-mono font-medium text-xs tracking-widest uppercase">
                      0{index + 1}
                    </span>
                    <div className="w-12 h-[1px] bg-border"></div>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-display font-semibold tracking-tight text-graphite mb-6 transition-colors duration-500 group-hover:text-brand-red">
                    {t(item.title)}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-md mb-12">
                    {t(item.description)}
                  </p>

                  <a
                    href="#products"
                    className="inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-graphite group-hover:text-brand-red transition-colors duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        {t('ecosystemSection.explore')}
                      </span>
                      <span className="absolute inset-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                        {t('ecosystemSection.explore')}
                      </span>
                    </span>
                    <span className="w-8 h-[1px] bg-graphite group-hover:bg-brand-red transition-colors duration-300 group-hover:w-12" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
