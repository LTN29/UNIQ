import { useRef } from 'react';
import { Truck, ShieldCheck, Headphones, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { gsap } from '@/animations/gsap';
import { useGSAP } from '@gsap/react';
import { Container } from '@/components/ui/Container';
import { trustData } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  truck: Truck,
  'shield-check': ShieldCheck,
  headphones: Headphones,
  'credit-card': CreditCard,
};

export function TrustBarSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        });

        tl.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        });

        if (itemsRef.current) {
          tl.from(
            itemsRef.current.children,
            {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              clearProps: 'all',
            },
            '-=0.4',
          );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="relative bg-pure-white border-y border-border py-10 scroll-mt-24"
    >
      <div
        ref={lineRef}
        className="absolute top-0 left-0 w-full h-[1px] bg-brand-red opacity-10"
      />
      <Container>
        <div ref={itemsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustData.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={item.id} className="flex flex-col items-center text-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-graphite relative">
                  {IconComponent && <IconComponent strokeWidth={1.5} size={28} />}
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-brand-red" />
                </div>
                <h3 className="text-sm font-semibold text-graphite">{t(item.title)}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
