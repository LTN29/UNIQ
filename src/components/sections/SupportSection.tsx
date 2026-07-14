import { useRef } from 'react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { supportData } from '@/data';

export function SupportSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (listRef.current) {
          const items = listRef.current.children;
          gsap.fromTo(items,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
              },
            }
          );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section id="support" ref={sectionRef} className="py-24 md:py-32 bg-pure-white scroll-mt-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-brand-red uppercase mb-6">
              {t('supportSection.subtitle')}
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-graphite leading-tight max-w-2xl">
              {t('supportSection.title1')}<span className="font-editorial italic">{t('supportSection.title2')}</span>
            </p>
          </div>
        </div>
        
        <div ref={listRef} className="flex flex-col">
          {supportData.map((item, index) => {
            const isFirst = index === 0;
            return (
              <a
                key={item.id}
                href={item.link}
                className={`group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-t border-border/50 transition-colors duration-500 hover:bg-surface/50 ${index === supportData.length - 1 ? 'border-b' : ''}`}
              >
                <div className="flex items-center gap-8 md:gap-16 mb-6 md:mb-0 md:w-1/2">
                  <span className="font-mono text-sm text-muted-foreground w-8">
                    0{index + 1}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-display font-medium transition-colors ${isFirst ? 'text-brand-red' : 'text-graphite group-hover:text-brand-red'}`}>
                    {t(item.title)}
                  </h3>
                </div>

                <div className="md:w-1/3 pr-8">
                  <p className="text-muted-foreground font-light text-lg">
                    {t(item.description)}
                  </p>
                </div>

                <div className="mt-8 md:mt-0 flex justify-end md:w-1/6">
                  <span className="relative overflow-hidden inline-block text-sm font-mono tracking-widest uppercase">
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full text-graphite/50">{t('supportSection.explore')}</span>
                    <span className="absolute inset-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-brand-red">{t('supportSection.explore')}</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
