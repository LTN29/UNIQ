import fs from 'fs/promises';
import path from 'path';

const basePath = 'C:/Users/ADMIN/Desktop/CODE/UNIQ-HOME';

async function updateFile(relativePath, replacer) {
  const filePath = path.join(basePath, relativePath);
  let content = await fs.readFile(filePath, 'utf-8');
  
  if (!content.includes("import { IMAGES } from '@/constants/images';")) {
    // Insert import after the last import
    const lastImportIndex = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport + 1) + "import { IMAGES } from '@/constants/images';\n" + content.slice(endOfLastImport + 1);
  }

  content = replacer(content);
  await fs.writeFile(filePath, content, 'utf-8');
  console.log(`Updated ${relativePath}`);
}

async function main() {
  await updateFile('src/components/layout/SiteHeader.tsx', content => {
    return content.replace(/src={`\$\{SUPABASE_BASE\}\/uniq-logo---circle-with-color\.webp`}/g, 'src={IMAGES.logo}');
  });

  await updateFile('src/components/sections/AppEcosystemSection.tsx', content => {
    return content.replace(/src={`\$\{SUPABASE_BASE\}\/uniq-logo---circle-with-color\.webp`}/g, 'src={IMAGES.logo}');
  });

  await updateFile('src/components/sections/HeroSection.tsx', content => {
    content = content.replace(/src={`\$\{SUPABASE_BASE\}\/bannerlight\.webp`}/g, 'src={IMAGES.bannerLight}');
    content = content.replace(/src={`\$\{SUPABASE_BASE\}\/bannerdark\.webp`}/g, 'src={IMAGES.bannerDark}');
    return content;
  });

  await updateFile('src/components/sections/LifestyleSection.tsx', content => {
    return content.replace(/src={`\$\{SUPABASE_BASE\}\/walllogoseries12\.webp`}/g, 'src={IMAGES.lifestyleHero}');
  });

  await updateFile('src/components/sections/TechnologySection.tsx', content => {
    return content.replace(/src={`\$\{SUPABASE_BASE\}\/motor\.webp`}/g, 'src={IMAGES.motor}');
  });
}

main().catch(console.error);
