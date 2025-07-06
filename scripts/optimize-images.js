import fs from "fs";
import path from "path";
import sharp from "sharp";

// 👉 Change these paths as needed
const inputFolder = "D:\\ME\\CODE\\React_JS\\manchaocatrers\\public\\gallery"; // Absolute or relative path
const outputFolder = "D:\\ME\\CODE\\React_JS\\manchaocatrers\\public\\gallery"; // Absolute or relative path

// Ensure output directory exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg") {
    const inputPath = path.join(inputFolder, file);
    const outputFileName = path.basename(file, ext) + ".webp";
    const outputPath = path.join(outputFolder, outputFileName);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Converted: ${file} → ${outputFileName}`))
      .catch((err) =>
        console.error(`❌ Error converting ${file}:`, err.message)
      );
  }
});
