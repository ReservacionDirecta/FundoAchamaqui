const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

const criticalImages = [
  { file: 'Catarata-Gocta.png', maxKB: 200 },
  { file: 'IMG_20230823_145150.jpg', maxKB: 120 },
  { file: 'Vista-aerea-achamaqui-1.jpg', maxKB: 120 },
  { file: 'logo-titulo-negro2x.png', maxKB: 30 },
  { file: 'logo-titulo-blanco2x.png', maxKB: 30 },
];

async function compressImage({ file, maxKB }) {
  const inputPath = path.join(IMAGES_DIR, file);
  if (!fs.existsSync(inputPath)) {
    console.log(`  SKIP: ${file} not found`);
    return;
  }

  const inputSize = fs.statSync(inputPath).size;
  const inputKB = Math.round(inputSize / 1024);
  console.log(`  ${file}: ${inputKB} KB → `, { newline: false });

  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  if (ext === '.png') {
    const outputPath = path.join(IMAGES_DIR, `${baseName}.webp`);
    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    const outputSize = fs.statSync(outputPath).size;
    console.log(`${Math.round(outputSize / 1024)} KB (WebP)`);
  } else if (ext === '.jpg' || ext === '.jpeg') {
    const outputPath = path.join(IMAGES_DIR, `${baseName}.webp`);
    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    const outputSize = fs.statSync(outputPath).size;
    console.log(`${Math.round(outputSize / 1024)} KB (WebP)`);
  }
}

(async () => {
  console.log('Compressing critical images...\n');
  for (const img of criticalImages) {
    try {
      await compressImage(img);
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }
  console.log('\nDone.');
})();
