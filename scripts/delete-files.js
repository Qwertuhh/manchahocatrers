import fs from "fs";
import path from "path";

const extension = ".jpg"; 
const folderPath = "D:\\ME\\CODE\\React_JS\\manchaocatrers\\public\\gallery"; 
/**
 * Deletes all .jpg and .jpeg files from the given folder.
 * @param folderPath - Absolute or relative path to the folder
 */
function deleteJPGFiles(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.error(`❌ Folder does not exist: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);
  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".jpg" || ext === extension) {
      const filePath = path.join(folderPath, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`❌ Error deleting ${file}:`, err.message);
        } else {
          console.log(`🗑️ Deleted: ${file}`);
        }
      });
    }
  });
}

deleteJPGFiles(folderPath);