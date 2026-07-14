import type { ElementType, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type ContainerProps<TElement extends ElementType = 'div'> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function Container<TElement extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={cn('mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
