import { useState, useRef } from 'react';
import { cn } from '@/lib/cn';
import { AssetSpecification } from '@/types/asset';

interface VisualPlaceholderProps {
  className?: string;
  label?: string;
  variant?: 'silver' | 'graphite' | 'white';
  assetSpec?: AssetSpecification;
  src?: string;
  srcs?: string[];
  alt?: string;
  imageMode?: 'contain' | 'cover';
}

export function VisualPlaceholder({
  variant = 'silver',
  label = 'Visual Area',
  className,
  assetSpec: _assetSpec,
  src,
  srcs,
  alt,
  imageMode = 'contain',
  ...props
}: VisualPlaceholderProps) {
  const [activeFrame, setActiveFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  // Removed auto-play interval because it caused jumping on discrete angles.
  // We keep the mouse-move scrubbing for interactive 3D effect.

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!srcs || srcs.length <= 1 || !containerRef.current) return;

    // Calculate the percentage of mouse position relative to the container width
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const percentage = Math.max(0, Math.min(1, x / rect.width));

    // Map percentage to array index
    const frameIndex = Math.min(Math.floor(percentage * srcs.length), srcs.length - 1);

    setActiveFrame(frameIndex);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  const variants = {
    silver: 'bg-transparent border-border text-muted-foreground',
    graphite: 'bg-graphite text-surface border-graphite',
    white: 'bg-transparent border-border text-muted-foreground',
  };

  // Adjust padding: use very small padding so images are large!
  const imageClasses = imageMode === 'contain' ? 'object-contain p-2' : 'object-cover';

  if (srcs && srcs.length > 0) {
    return (
      <div
        ref={containerRef}
        className={cn(
          'relative overflow-hidden w-full h-full cursor-ew-resize',
          variants[variant],
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {srcs.map((imageSrc, index) => (
          <img
            key={imageSrc}
            src={imageSrc}
            alt={alt || label}
            loading="lazy"
            className={cn(
              'absolute inset-0 w-full h-full transition-opacity duration-150 ease-out',
              imageClasses,
              index === activeFrame ? 'opacity-100 z-10 scale-105' : 'opacity-0 z-0',
            )}
          />
        ))}
      </div>
    );
  }

  if (src) {
    return (
      <div
        className={cn(
          'relative overflow-hidden w-full h-full',
          variants[variant],
          className,
        )}
        {...props}
      >
        <img
          src={src}
          alt={alt || label}
          loading="lazy"
          className={cn('w-full h-full', imageClasses)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg border',
        variants[variant],
        className,
      )}
      {...props}
    >
      <span className="text-sm font-medium tracking-wide uppercase text-center px-4">
        {label}
      </span>
    </div>
  );
}
