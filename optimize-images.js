const fs = require('fs');
const path = require('path');

// Script to help identify and convert large SVG files to optimized formats
// This will help reduce file sizes from 40MB+ to under 500KB

function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

function findLargeSVGs(dir, threshold = 1) { // threshold in MB
  const largeSVGs = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (path.extname(item).toLowerCase() === '.svg') {
        const sizeInMB = parseFloat(getFileSizeInMB(fullPath));
        if (sizeInMB > threshold) {
          largeSVGs.push({
            path: fullPath,
            size: sizeInMB,
            name: item
          });
        }
      }
    }
  }
  
  scanDirectory(dir);
  return largeSVGs.sort((a, b) => b.size - a.size);
}

// Find all large SVGs
const largeSVGs = findLargeSVGs('./src/images', 0.5); // Files larger than 500KB

console.log('🔍 Large SVG Files Found:');
console.log('========================');
largeSVGs.forEach((file, index) => {
  console.log(`${index + 1}. ${file.name}`);
  console.log(`   Path: ${file.path}`);
  console.log(`   Size: ${file.size}MB`);
  console.log('');
});

console.log(`\n📊 Total large files: ${largeSVGs.length}`);
console.log(`📦 Total size: ${largeSVGs.reduce((sum, file) => sum + file.size, 0).toFixed(2)}MB`);

console.log('\n🚀 Recommended Actions:');
console.log('1. Convert these SVGs to optimized JPEG/WebP format');
console.log('2. Target size: 100-500KB per image');
console.log('3. Use online tools like TinyPNG, Squoosh, or ImageOptim');
console.log('4. Replace .svg extensions with .jpg/.webp in your components');

// Generate conversion commands for ImageMagick (if available)
console.log('\n🔧 ImageMagick Commands (if you have it installed):');
largeSVGs.forEach(file => {
  const outputPath = file.path.replace('.svg', '.jpg');
  console.log(`magick "${file.path}" -quality 85 -resize 1200x1200> "${outputPath}"`);
});
