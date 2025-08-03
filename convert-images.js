// const fs = require('fs');
// const path = require('path');

// // This script will help you convert large SVG files to smaller formats
// // You'll need to install sharp: npm install sharp

// async function convertSVGsToJPEG() {
//   try {
//     const sharp = require('sharp');
    
//     const largeSVGs = [
//       // Top 10 largest files to start with
//       'src/images/PortfolioSVGs/IMG_8786.svg', // 60.65MB
//       'src/images/PortfolioSVGs/IMG_9434.svg', // 56.87MB
//       'src/images/PortfolioSVGs/IMG_8889.svg', // 53.42MB
//       'src/images/PortfolioSVGs/IMG_8785.svg', // 51.73MB
//       'src/images/PortfolioSVGs/IMG_9258.svg', // 47.59MB
//       'src/images/PortfolioSVGs/IMG_9271.svg', // 46.88MB
//       'src/images/PortfolioSVGs/IMG_8888.svg', // 46.29MB
//       'src/images/PortfolioSVGs/IMG_9254.svg', // 45.65MB
//       'src/images/PortfolioSVGs/IMG_9269.svg', // 44.6MB
//       'src/images/PortfolioSVGs/IMG_9274.svg', // 44.33MB
//     ];

//     console.log('🔄 Converting large SVGs to optimized JPEGs...');
    
//     for (const svgPath of largeSVGs) {
//       if (fs.existsSync(svgPath)) {
//         const jpegPath = svgPath.replace('.svg', '.jpg');
        
//         try {
//           await sharp(svgPath)
//             .jpeg({ 
//               quality: 85,
//               progressive: true,
//               mozjpeg: true 
//             })
//             .resize(1200, 1200, { 
//               fit: 'inside',
//               withoutEnlargement: true 
//             })
//             .toFile(jpegPath);
            
//           const originalSize = (fs.statSync(svgPath).size / (1024 * 1024)).toFixed(2);
//           const newSize = (fs.statSync(jpegPath).size / (1024 * 1024)).toFixed(2);
          
//           console.log(`✅ ${path.basename(svgPath)}: ${originalSize}MB → ${newSize}MB`);
//         } catch (error) {
//           console.log(`❌ Failed to convert ${path.basename(svgPath)}: ${error.message}`);
//         }
//       }
//     }
    
//     console.log('\n🎉 Conversion complete!');
//     console.log('📝 Next steps:');
//     console.log('1. Update your components to use .jpg instead of .svg');
//     console.log('2. Delete the original .svg files');
//     console.log('3. Test your website');
    
//   } catch (error) {
//     console.log('❌ Sharp not installed. Please run: npm install sharp');
//     console.log('Or use online tools like Squoosh.app or TinyPNG.com');
//   }
// }

// // Alternative: Manual conversion guide
// function showManualSteps() {
//   console.log('\n🔧 MANUAL CONVERSION STEPS:');
//   console.log('==========================');
//   console.log('1. Go to https://squoosh.app');
//   console.log('2. Upload these files one by one:');
  
//   const topFiles = [
//     'IMG_8786.svg (60.65MB)',
//     'IMG_9434.svg (56.87MB)', 
//     'IMG_8889.svg (53.42MB)',
//     'IMG_8785.svg (51.73MB)',
//     'IMG_9258.svg (47.59MB)',
//   ];
  
//   topFiles.forEach((file, i) => {
//     console.log(`   ${i + 1}. ${file}`);
//   });
  
//   console.log('\n3. Settings to use:');
//   console.log('   - Format: JPEG');
//   console.log('   - Quality: 80-85%');
//   console.log('   - Resize: Max 1200px width/height');
//   console.log('   - Target: Under 500KB per image');
  
//   console.log('\n4. Download and replace in your project');
//   console.log('5. Update file extensions in your components');
// }

// // Run the conversion
// convertSVGsToJPEG().catch(() => {
//   showManualSteps();
// });
