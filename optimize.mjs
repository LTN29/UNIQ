import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

// Helper to normalize strings (remove accents, spaces to hyphens, lowercase)
function normalizeName(str) {
  return str
    .normalize('NFD') // Decompose into base characters and accents
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/[^a-z0-9\-\.]/g, ''); // Remove any other invalid URL characters
}

async function processDirectory(srcDir, destDir) {
  await fs.mkdir(destDir, { recursive: true });

  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    
    if (entry.isDirectory()) {
      // Normalize folder name
      const normalizedFolderName = normalizeName(entry.name);
      const newDestDir = path.join(destDir, normalizedFolderName);
      await processDirectory(srcPath, newDestDir);
    } else {
      // It's a file
      const ext = path.extname(entry.name).toLowerCase();
      const baseName = path.basename(entry.name, ext);
      const normalizedBaseName = normalizeName(baseName);
      
      // Process images
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const destPath = path.join(destDir, `${normalizedBaseName}.webp`);
        console.log(`Processing: ${entry.name} -> ${normalizedBaseName}.webp`);
        
        try {
          await sharp(srcPath)
            .webp({ quality: 80 })
            .toFile(destPath);
        } catch (err) {
          console.error(`Error processing ${srcPath}:`, err);
        }
      } else {
        // Copy other files as is (if any) but with normalized names
        const destPath = path.join(destDir, `${normalizedBaseName}${ext}`);
        console.log(`Copying: ${entry.name} -> ${normalizedBaseName}${ext}`);
        await fs.copyFile(srcPath, destPath);
      }
    }
  }
}

const inputDir = 'C:\\Users\\ADMIN\\Downloads\\UNIQ';
const outputDir = 'C:\\Users\\ADMIN\\Downloads\\UNIQ_OPTIMIZED';

console.log('Starting image optimization...');
await processDirectory(inputDir, outputDir);
console.log('Done! All images saved to: ' + outputDir);
