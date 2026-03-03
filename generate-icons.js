/**
 * Script de génération d'icônes professionnelles pour 241stream
 * Génère toutes les tailles nécessaires depuis l'image source
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SOURCE = path.join(__dirname, "src/assets/images/stream241.jpg");
const ICONS_DIR = path.join(__dirname, "src/assets/icons");

// S'assurer que le dossier existe
if (!fs.existsSync(ICONS_DIR)) fs.mkdirSync(ICONS_DIR, { recursive: true });

// Définition de toutes les icônes à générer
const icons = [
  // Favicons
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  // Apple Touch Icon
  { name: "apple-touch-icon.png", size: 180 },
  // PWA Manifest Icons
  { name: "icon-72x72.png", size: 72 },
  { name: "icon-96x96.png", size: 96 },
  { name: "icon-128x128.png", size: 128 },
  { name: "icon-144x144.png", size: 144 },
  { name: "icon-152x152.png", size: 152 },
  { name: "icon-192x192.png", size: 192 },
  { name: "icon-384x384.png", size: 384 },
  { name: "icon-512x512.png", size: 512 },
];

// Icône maskable (avec padding de 10% pour zone de sécurité)
const maskableIcons = [
  { name: "icon-maskable-192x192.png", size: 192 },
  { name: "icon-maskable-512x512.png", size: 512 },
];

async function generateIcons() {
  console.log("🎨 Génération des icônes professionnelles...\n");

  // Charger l'image source et extraire un carré centré
  const metadata = await sharp(SOURCE).metadata();
  const squareSize = Math.min(metadata.width, metadata.height);
  const left = Math.floor((metadata.width - squareSize) / 2);
  const top = Math.floor((metadata.height - squareSize) / 2);

  // Icônes standard (crop carré centré)
  for (const icon of icons) {
    await sharp(SOURCE)
      .extract({ left, top, width: squareSize, height: squareSize })
      .resize(icon.size, icon.size, { fit: "cover", kernel: "lanczos3" })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(ICONS_DIR, icon.name));
    console.log(`  ✅ ${icon.name} (${icon.size}x${icon.size})`);
  }

  // Icônes maskable (avec fond de couleur et padding)
  for (const icon of maskableIcons) {
    const innerSize = Math.round(icon.size * 0.8); // 80% de la taille (10% padding de chaque côté)
    const padding = Math.round((icon.size - innerSize) / 2);

    const innerImage = await sharp(SOURCE)
      .extract({ left, top, width: squareSize, height: squareSize })
      .resize(innerSize, innerSize, { fit: "cover", kernel: "lanczos3" })
      .png()
      .toBuffer();

    await sharp({
      create: {
        width: icon.size,
        height: icon.size,
        channels: 4,
        background: { r: 10, g: 10, b: 12, alpha: 1 }, // #0a0a0c
      },
    })
      .composite([{ input: innerImage, left: padding, top: padding }])
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(ICONS_DIR, icon.name));
    console.log(`  ✅ ${icon.name} (maskable, ${icon.size}x${icon.size})`);
  }

  // Générer le favicon.ico (multi-résolution: 16, 32, 48)
  // On crée un PNG 48x48 qui servira pour le .ico
  // (les navigateurs modernes acceptent les PNG comme favicon)
  await sharp(SOURCE)
    .extract({ left, top, width: squareSize, height: squareSize })
    .resize(48, 48, { fit: "cover", kernel: "lanczos3" })
    .png({ quality: 90 })
    .toFile(path.join(__dirname, "favicon.png"));
  console.log(`  ✅ favicon.png (48x48, racine du site)`);

  // Copier le 32x32 en tant que favicon de fallback à la racine
  fs.copyFileSync(
    path.join(ICONS_DIR, "favicon-32x32.png"),
    path.join(__dirname, "favicon-32x32.png")
  );

  console.log("\n🎉 Toutes les icônes ont été générées avec succès !");
  console.log(`   → ${icons.length + maskableIcons.length + 1} fichiers créés dans src/assets/icons/`);
}

generateIcons().catch(console.error);
