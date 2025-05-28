const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Recursively get all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);
    const isDir = fs.statSync(fullPath).isDirectory();

    if (
      isDir &&
      !fullPath.includes(".git") &&
      !fullPath.includes("node_modules")
    ) {
      getAllFiles(fullPath, arrayOfFiles);
    } else if (!isDir && !fullPath.includes("package-lock.json")) {
      arrayOfFiles.push(path.relative(process.cwd(), fullPath));
    }
  });

  return arrayOfFiles;
}

// Commit and push each file
function commitAndPushEachFile() {
  const allFiles = getAllFiles(".");

  allFiles.forEach((file) => {
    try {
      console.log(`📦 Processing: ${file}`);
      execSync(`git add "${file}"`);
      execSync(`git commit -m "Committing file: ${file}"`);
      execSync(`git push`);
      console.log(`✅ Pushed: ${file}`);
    } catch (err) {
      console.error(`❌ Failed for ${file}:`, err.message);
    }
  });
}

commitAndPushEachFile();
