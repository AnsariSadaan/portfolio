// import sharp from "sharp";
// import fs from "fs";
// import path from "path";

// const createSVG = (
//   size: number,
//   text: string,
//   fontSize: number,
//   rounded: number
// ) => {
//   return `
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
//       <defs>
//         <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" style="stop-color:#6C63FF;stop-opacity:1" />
//           <stop offset="100%" style="stop-color:#4A3FCF;stop-opacity:1" />
//         </linearGradient>
//         <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" style="stop-color:#7C73FF;stop-opacity:1" />
//           <stop offset="100%" style="stop-color:#5A4FDF;stop-opacity:1" />
//         </linearGradient>
//       </defs>
      
//       <!-- Background -->
//       <rect width="${size}" height="${size}" rx="${rounded}" fill="url(#grad)" />
      
//       <!-- Inner Glow -->
//       <rect x="${size * 0.05}" y="${size * 0.05}" width="${
//     size * 0.9
//   }" height="${size * 0.9}" rx="${rounded * 0.8}" fill="url(#grad2)" />
      
//       <!-- Decorative Dot -->
//       <circle cx="${size * 0.85}" cy="${size * 0.2}" r="${
//     size * 0.04
//   }" fill="white" opacity="0.3" />
//       <circle cx="${size * 0.15}" cy="${size * 0.85}" r="${
//     size * 0.03
//   }" fill="white" opacity="0.2" />
      
//       <!-- SA Text -->
//       <text x="${size / 2}" y="${size / 2}" 
//         font-family="'Inter', 'Segoe UI', Arial, sans-serif" 
//         font-size="${fontSize}" 
//         font-weight="800"
//         fill="white" 
//         text-anchor="middle" 
//         dominant-baseline="central"
//         letter-spacing="${size * 0.015}"
//         style="text-shadow: 0 2px 4px rgba(0,0,0,0.1)"
//       >${text}</text>
//     </svg>
//   `;
// };

// // Define sizes
// const sizes = [
//   { size: 16, fontSize: 10, rounded: 3 },
//   { size: 32, fontSize: 20, rounded: 6 },
//   { size: 48, fontSize: 30, rounded: 9 },
//   { size: 64, fontSize: 40, rounded: 12 },
//   { size: 128, fontSize: 80, rounded: 24 },
//   { size: 180, fontSize: 100, rounded: 36 },
//   { size: 192, fontSize: 110, rounded: 38 },
//   { size: 512, fontSize: 300, rounded: 100 },
// ];

// // Create public directory if it doesn't exist
// const publicDir = path.join(process.cwd(), "public");
// if (!fs.existsSync(publicDir)) {
//   fs.mkdirSync(publicDir);
// }

// // Generate PNG files
// async function generateFavicons() {
//   console.log("🔄 Generating favicons...");

//   for (const { size, fontSize, rounded } of sizes) {
//     const svg = createSVG(size, "SA", fontSize, rounded);
//     const outputPath = path.join(publicDir, `favicon-${size}x${size}.png`);

//     try {
//       await sharp(Buffer.from(svg)).png().toFile(outputPath);
//       console.log(`✅ Generated: favicon-${size}x${size}.png`);
//     } catch (err) {
//       console.error(`❌ Error generating ${size}:`, err);
//     }
//   }

//   // Generate favicon.ico (using 16x16, 32x32, 48x48)
//   console.log("🔄 Generating favicon.ico...");

//   try {
//     const sizesForIco = [16, 32, 48];
//     const icoBuffers = await Promise.all(
//       sizesForIco.map(async (size) => {
//         const svg = createSVG(size, "SA", size * 0.65, size * 0.2);
//         return await sharp(Buffer.from(svg)).png().toBuffer();
//       })
//     );

//     // Combine multiple PNGs into ICO format using a different approach
//     // Since Sharp doesn't support .ico() directly, we'll use the best size
//     const svg = createSVG(32, "SA", 20, 6);
//     await sharp(Buffer.from(svg))
//       .png()
//       .toFile(path.join(publicDir, "favicon.ico"));

//     console.log("✅ Generated: favicon.ico (using 32x32)");
//   } catch (err) {
//     console.error("❌ Error generating favicon.ico:", err);
//   }

//   // Generate apple-touch-icon
//   console.log("🔄 Generating apple-touch-icon.png...");

//   try {
//     const svg = createSVG(180, "SA", 100, 36);
//     await sharp(Buffer.from(svg))
//       .png()
//       .toFile(path.join(publicDir, "apple-touch-icon.png"));
//     console.log("✅ Generated: apple-touch-icon.png");
//   } catch (err) {
//     console.error("❌ Error generating apple-touch-icon:", err);
//   }

//   // Generate SVG version
//   console.log("🔄 Generating favicon.svg...");

//   try {
//     const svg = createSVG(100, "SA", 46, 20);
//     fs.writeFileSync(path.join(publicDir, "favicon.svg"), svg);
//     console.log("✅ Generated: favicon.svg");
//   } catch (err) {
//     console.error("❌ Error generating favicon.svg:", err);
//   }

//   console.log("🎉 All favicons generated successfully!");
// }

// // Run the script
// generateFavicons().catch(console.error);



import sharp from "sharp";
import fs from "fs";
import path from "path";

const createSVG = (
  size: number,
  text: string,
  fontSize: number,
  rounded: number
) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
      <defs>
        <!-- Dark Theme Gradient (Matches your portfolio) -->
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1A1A1A;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0D0D0D;stop-opacity:1" />
        </linearGradient>
        
        <!-- Light Theme Gradient (For light mode) -->
        <linearGradient id="gradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F5F5F5;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#E8E8E8;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Dark Background -->
      <rect width="${size}" height="${size}" rx="${rounded}" fill="url(#grad)" />
      
      <!-- Inner Border Accent -->
      <rect x="${size * 0.08}" y="${size * 0.08}" width="${
    size * 0.84
  }" height="${size * 0.84}" rx="${
    rounded * 0.7
  }" fill="none" stroke="#333333" stroke-width="${size * 0.02}" />
      
      <!-- Minimal Decorative Dot -->
      <circle cx="${size * 0.85}" cy="${size * 0.2}" r="${
    size * 0.04
  }" fill="#404040" />
      <circle cx="${size * 0.15}" cy="${size * 0.85}" r="${
    size * 0.03
  }" fill="#333333" />
      
      <!-- SA Text - White for dark mode -->
      <text x="${size / 2}" y="${size / 2}" 
        font-family="'Inter', 'Segoe UI', Arial, sans-serif" 
        font-size="${fontSize}" 
        font-weight="800"
        fill="#FFFFFF" 
        text-anchor="middle" 
        dominant-baseline="central"
        letter-spacing="${size * 0.015}"
      >${text}</text>
    </svg>
  `;
};

// Define sizes
const sizes = [
  { size: 16, fontSize: 10, rounded: 3 },
  { size: 32, fontSize: 20, rounded: 6 },
  { size: 48, fontSize: 30, rounded: 9 },
  { size: 64, fontSize: 40, rounded: 12 },
  { size: 128, fontSize: 80, rounded: 24 },
  { size: 180, fontSize: 100, rounded: 36 },
  { size: 192, fontSize: 110, rounded: 38 },
  { size: 512, fontSize: 300, rounded: 100 },
];

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Generate PNG files
async function generateFavicons() {
  console.log("🔄 Generating favicons in Black & White theme...");

  for (const { size, fontSize, rounded } of sizes) {
    const svg = createSVG(size, "SA", fontSize, rounded);
    const outputPath = path.join(publicDir, `favicon-${size}x${size}.png`);

    try {
      await sharp(Buffer.from(svg)).png().toFile(outputPath);
      console.log(`✅ Generated: favicon-${size}x${size}.png`);
    } catch (err) {
      console.error(`❌ Error generating ${size}:`, err);
    }
  }

  // Generate favicon.ico
  console.log("🔄 Generating favicon.ico...");

  try {
    const svg = createSVG(32, "SA", 20, 6);
    await sharp(Buffer.from(svg))
      .png()
      .toFile(path.join(publicDir, "favicon.ico"));
    console.log("✅ Generated: favicon.ico");
  } catch (err) {
    console.error("❌ Error generating favicon.ico:", err);
  }

  // Generate apple-touch-icon
  console.log("🔄 Generating apple-touch-icon.png...");

  try {
    const svg = createSVG(180, "SA", 100, 36);
    await sharp(Buffer.from(svg))
      .png()
      .toFile(path.join(publicDir, "apple-touch-icon.png"));
    console.log("✅ Generated: apple-touch-icon.png");
  } catch (err) {
    console.error("❌ Error generating apple-touch-icon:", err);
  }

  // Generate SVG version
  console.log("🔄 Generating favicon.svg...");

  try {
    const svg = createSVG(100, "SA", 46, 20);
    fs.writeFileSync(path.join(publicDir, "favicon.svg"), svg);
    console.log("✅ Generated: favicon.svg");
  } catch (err) {
    console.error("❌ Error generating favicon.svg:", err);
  }

  console.log("🎉 All favicons generated successfully!");
}

// Run the script
generateFavicons().catch(console.error);