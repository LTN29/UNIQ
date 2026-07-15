import { useRef } from 'react';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { VisualPlaceholder } from '@/components/ui/VisualPlaceholder';
import { IMAGES } from '@/constants/images';

export function LifestyleSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // clip-path reveal on desktop
        mm.add('(min-width: 768px)', () => {
          gsap.fromTo(
            visualRef.current,
            { clipPath: 'inset(5% 15% 5% 15% round 0.5rem)' },
            {
              clipPath: 'inset(0% 0% 0% 0% round 0rem)',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
              },
            },
          );
        });

        // Simple fade up for text
        if (textRef.current) {
          gsap.from(textRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-40 bg-pure-white transition-colors duration-1000 scroll-mt-24"
    >
      <Container>
        <div
          ref={textRef}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-brand-red mb-10 opacity-50" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-editorial italic font-normal text-graphite leading-tight mb-8">
            {t('introSection.title')}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t('introSection.text')}
          </p>
        </div>

        <div
          ref={visualRef}
          className="w-full aspect-[4/3] md:aspect-[16/10] relative overflow-hidden rounded-xl md:rounded-none max-w-6xl mx-auto"
        >
          <VisualPlaceholder
            variant="white"
            label="UNIQ Space"
            className="w-full h-full border-none rounded-none"
            src={IMAGES.lifestyleHero}
            imageMode="cover"
            assetSpec={{
              type: 'lifestyle',
              aspectRatio: '16/10',
              composition: 'wide cinematic shot, negative space',
            }}
          />
        </div>
      </Container>
    </section>
  );
}
