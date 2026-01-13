/**
 * Copyright (c) 2026 Arihant Jain, Qwertuhh
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
