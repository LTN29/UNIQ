import fs from 'fs/promises';
import path from 'path';

const SUPABASE_BASE = 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/UNIQ_OPTIMIZED';

const files = [
  'src/components/layout/SiteHeader.tsx',
  'src/components/sections/AppEcosystemSection.tsx',
  'src/components/sections/FeaturedProductSection.tsx',
  'src/components/sections/HeroSection.tsx',
  'src/components/sections/LifestyleSection.tsx',
  'src/components/sections/TechnologySection.tsx'
];

async function update() {
  for (const file of files) {
    const filePath = path.join('C:/Users/ADMIN/Desktop/CODE/UNIQ-HOME', file);
    let content = await fs.readFile(filePath, 'utf-8');
    
    // Replace PUBLIC_IMAGES_OPTIMIZED with UNIQ_OPTIMIZED
    content = content.replace(/PUBLIC_IMAGES_OPTIMIZED/g, 'UNIQ_OPTIMIZED');
    
    // Replace specific filenames
    content = content.replace(/logo\.webp/g, 'uniq-logo---circle-with-color.webp');
    content = content.replace(/hero\.webp/g, 'walllogoseries12.webp'); // Lifestyle section
    
    // Some scoll files might have been nested in products/, we should fix the paths.
    // In FeaturedProductSection, it was: src={`${SUPABASE_BASE}/products/scoll${activeIndex + 1}.webp`}
    // Wait, earlier I replaced `/images/products/scoll...` with `${SUPABASE_BASE}/products/scoll...`
    // Let's remove `/products` from scoll paths since scoll is at root of UNIQ_OPTIMIZED
    content = content.replace(/UNIQ_OPTIMIZED\/products\/scoll/g, 'UNIQ_OPTIMIZED/scoll');
    
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}

update().catch(console.error);
