const fs = require('fs');
const path = require('path');

const root = process.cwd();
const buildDir = path.join(root, 'build');
const docsDir = path.join(root, 'docs');

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function touchNoJekyll(dir) {
  const nojekyll = path.join(dir, '.nojekyll');
  try { fs.writeFileSync(nojekyll, ''); } catch {}
}

function main() {
  if (!fs.existsSync(buildDir)) {
    console.error('build directory not found. Please run npm run build first.');
    process.exit(1);
  }

  // ensure .nojekyll in build output for GitHub Pages
  touchNoJekyll(buildDir);

  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

  // copy build -> docs
  copyRecursive(buildDir, docsDir);

  // copy 404.html and CNAME if exist
  const extraFiles = ['404.html', 'CNAME'];
  for (const file of extraFiles) {
    const src = path.join(root, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(docsDir, file));
    }
  }

  // ensure .nojekyll in docs as well
  touchNoJekyll(docsDir);

  console.log('Copied build to docs with 404.html, CNAME and .nojekyll.');
}

main(); 