import type { ElementType } from 'react';

import { cn } from '@/lib/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  headingLevel?: Extract<ElementType, 'h1' | 'h2' | 'h3'>;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  headingLevel = 'h2',
  className,
}: SectionHeadingProps) {
  const Heading = headingLevel;

  return (
    <div
      className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="mt-3 font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
