import fs from "fs";
import path from "path";
import sharp from "sharp";

/**
 * Converts JPG/JPEG images to WebP format with optimized compression.
 * This script processes all JPG/JPEG files in the input folder and converts
 * them to WebP format with 80% quality to reduce file size while maintaining
 * good visual quality.
 *
 * @author Your Name
 * @since 1.0.0
 * @example
 * ```bash
 * npx ts-node scripts/optimize-images.ts
 * ```
 */

// Change these paths as needed
const inputFolder = "D:\\ME\\CODE\\React_JS\\manchaocatrers\\public\\gallery"; // Absolute or relative path
const outputFolder = "D:\\ME\\CODE\\React_JS\\manchaocatrers\\public\\gallery"; // Absolute or relative path

/**
 * Ensures the output directory exists, creates it if necessary.
 */
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

/**
 * Processes all files in the input directory and converts JPG/JPEG images to WebP.
 * Skips any non-image files and handles conversion errors gracefully.
 */
fs.readdirSync(inputFolder).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg") {
    const inputPath = path.join(inputFolder, file);
    const outputFileName = path.basename(file, ext) + ".webp";
    const outputPath = path.join(outputFolder, outputFileName);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Converted: ${file} → ${outputFileName}`))
      .catch((err) => console.error(`Error converting ${file}:`, err.message));
  }
});
