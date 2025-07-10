const fs = require("fs");
const path = require("path");

const OUT_DIR = "./out";

function getHtmlFiles(dirPath) {
  let files = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files = files.concat(getHtmlFiles(fullPath));
    } else if (entry.isFile() && fullPath.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function replaceAbsolutePaths(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  content = content
    .replace(/(href|src)=["']\/_next/g, '$1="./_next')
    .replace(/(href|src)=["']\/assets/g, '$1="./assets')
    .replace(/(href|src)=["']\/static/g, '$1="./static');

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Fixed: ${filePath}`);
}

const htmlFiles = getHtmlFiles(OUT_DIR);
htmlFiles.forEach(replaceAbsolutePaths);

console.log("✅ All static paths fixed for file:// usage.");
