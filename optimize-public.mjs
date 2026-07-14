import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

async function processDirectory(srcDir, destDir) {
  await fs.mkdir(destDir, { recursive: true });

  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const newDestDir = path.join(destDir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(srcPath, newDestDir);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      const baseName = path.basename(entry.name, ext);
      
      // Process images
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const destPath = path.join(destDir, `${baseName}.webp`);
        console.log(`Processing: ${srcPath} -> ${destPath}`);
        
        try {
          await sharp(srcPath)
            .webp({ quality: 80 })
            .toFile(destPath);
        } catch (err) {
          console.error(`Error processing ${srcPath}:`, err);
        }
      } else {
        const destPath = path.join(destDir, entry.name);
        await fs.copyFile(srcPath, destPath);
      }
    }
  }
}

const inputDir = 'C:\\Users\\ADMIN\\Desktop\\CODE\\UNIQ-HOME\\public\\images';
const outputDir = 'C:\\Users\\ADMIN\\Downloads\\PUBLIC_IMAGES_OPTIMIZED';

console.log('Starting optimization of public/images...');
await processDirectory(inputDir, outputDir);
console.log('Done! Optimized images saved to: ' + outputDir);
