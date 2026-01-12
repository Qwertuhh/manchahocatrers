import fs from "fs";
import path from "path";

/**
 * Deletes all JPG/JPEG files from a specified directory.
 * This script is useful for cleaning up original image files after
 * they have been converted to optimized formats like WebP.
 *
 * @author Your Name
 * @since 1.0.0
 * @example
 * ```bash
 * npx ts-node scripts/delete-files.ts
 * ```
 */

const extension = ".jpg";
const folderPath = "D:\\ME\\CODE\\React_JS\\manchaocatrers\\public\\gallery";
/**
 * Deletes all JPG and JPEG files from the specified folder.
 *
 * @param folderPath - Absolute or relative path to the folder containing image files
 * @returns {void} Logs success or error messages for each deletion attempt
 *
 * @example
 * ```typescript
 * deleteJPGFiles("./public/gallery");
 * ```
 *
 * @throws {Error} When the specified folder does not exist
 */
function deleteJPGFiles(folderPath: string) {
  if (!fs.existsSync(folderPath)) {
    console.error(`Folder does not exist: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);
  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".jpg" || ext === extension) {
      const filePath = path.join(folderPath, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting ${file}:`, err.message);
        } else {
          console.log(`Deleted: ${file}`);
        }
      });
    }
  });
}

/**
 * Execute the JPG file deletion function with the specified folder path.
 */
deleteJPGFiles(folderPath);
