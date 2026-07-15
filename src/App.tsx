import React, { Suspense } from 'react';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBarSection } from '@/components/sections/TrustBarSection';

// Lazy loaded components (below the fold)
const ProductEcosystemSection = React.lazy(() =>
  import('@/components/sections/ProductEcosystemSection').then((m) => ({
    default: m.ProductEcosystemSection,
  })),
);
const FeaturedProductSection = React.lazy(() =>
  import('@/components/sections/FeaturedProductSection').then((m) => ({
    default: m.FeaturedProductSection,
  })),
);
const TechnologySection = React.lazy(() =>
  import('@/components/sections/TechnologySection').then((m) => ({
    default: m.TechnologySection,
  })),
);
const LifestyleSection = React.lazy(() =>
  import('@/components/sections/LifestyleSection').then((m) => ({
    default: m.LifestyleSection,
  })),
);
const AppEcosystemSection = React.lazy(() =>
  import('@/components/sections/AppEcosystemSection').then((m) => ({
    default: m.AppEcosystemSection,
  })),
);
const SupportSection = React.lazy(() =>
  import('@/components/sections/SupportSection').then((m) => ({
    default: m.SupportSection,
  })),
);
const NewsSection = React.lazy(() =>
  import('@/components/sections/NewsSection').then((m) => ({ default: m.NewsSection })),
);

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustBarSection />
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-muted-foreground">
              Loading...
            </div>
          }
        >
          <ProductEcosystemSection />
          <FeaturedProductSection />
          <TechnologySection />
          <LifestyleSection />
          <AppEcosystemSection />
          <SupportSection />
          <NewsSection />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
