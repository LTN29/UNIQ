import fs from 'fs/promises';
import path from 'path';

const SUPABASE_BASE = 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/PUBLIC_IMAGES_OPTIMIZED';

const files = [
  'src/components/layout/SiteHeader.tsx',
  'src/components/sections/AppEcosystemSection.tsx',
  'src/components/sections/FeaturedProductSection.tsx',
  'src/components/sections/HeroSection.tsx',
  'src/components/sections/LifestyleSection.tsx',
  'src/components/sections/TechnologySection.tsx',
  'src/data/index.ts'
];

async function update() {
  for (const file of files) {
    const filePath = path.join('C:/Users/ADMIN/Desktop/CODE/UNIQ-HOME', file);
    let content = await fs.readFile(filePath, 'utf-8');
    
    // Replace /images/ paths
    content = content.replace(/\/images\/([^"'\s`]+)\.(png|jpg|jpeg)/g, (match, p1) => {
      return `${SUPABASE_BASE}/${p1}.webp`;
    });

    // Replace main.png in data/index.ts
    if (file === 'src/data/index.ts') {
      content = content.replace(/'main\.png'/g, "'main.webp'");
    }
    
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}

update().catch(console.error);
