import { useRef } from 'react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { VisualPlaceholder } from '@/components/ui/VisualPlaceholder';
import { newsData } from '@/data';
import { cn } from '@/lib/cn';

export function NewsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (gridRef.current) {
          // Stagger articles
          const articles = gridRef.current.children;

          gsap.fromTo(articles,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
              },
            }
          );

          // Mask reveal for thumbnails
          const thumbs = gridRef.current.querySelectorAll('.news-thumb-mask');
          gsap.fromTo(
            thumbs,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1,
              stagger: 0.15,
              ease: 'power3.inOut',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
              },
            },
          );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section id="news" ref={sectionRef} className="py-24 md:py-32 bg-pure-white scroll-mt-24">
      <Container>
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-graphite">
            {t('newsSection.sectionTitle')}
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => {
            const isLarge = news.size === 'large';
            return (
              <div
                key={news.id}
                className={cn(
                  'group flex flex-col cursor-pointer',
                  isLarge ? 'md:col-span-2 lg:col-span-2' : '',
                )}
              >
                <div className="news-thumb-mask relative overflow-hidden mb-6 bg-surface">
                  <div
                    className={cn(
                      'w-full transition-transform duration-700 ease-out group-hover:scale-105',
                      isLarge ? 'aspect-[16/9] md:aspect-[2/1]' : 'aspect-[4/3]',
                    )}
                  >
                    {news.imageSrc ? (
                      <img src={news.imageSrc} alt={t(news.title)} className="w-full h-full object-cover" />
                    ) : (
                      <VisualPlaceholder
                        variant="silver"
                        label="Editorial Photography"
                        className="w-full h-full border-none"
                        assetSpec={{
                          type: 'lifestyle',
                          aspectRatio: isLarge ? '2/1' : '4/3',
                          composition: 'editorial lifestyle shot',
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    {t(news.category)}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-silver" />
                  <span className="text-sm text-muted-foreground font-medium">{t('newsSection.date')}</span>
                </div>

                <h3
                  className={cn(
                    'font-editorial font-normal italic text-graphite group-hover:text-brand-red transition-colors',
                    isLarge
                      ? 'text-3xl md:text-4xl line-clamp-2'
                      : 'text-2xl line-clamp-3',
                  )}
                >
                  {t(news.title)}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
