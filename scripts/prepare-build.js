import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the main package.json
const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));

// Create a simplified version for dist
const distPkg = {
  name: pkg.name,
  version: pkg.version,
  type: pkg.type,
  main: "./wordart.umd.js",
  module: "./wordart.es.js",
  types: "./types/index.d.ts",
  exports: {
    ".": {
      types: "./types/index.d.ts",
      import: "./wordart.es.js",
      require: "./wordart.umd.js",
    },
  },
  author: pkg.author,
  license: pkg.license,
  repository: pkg.repository,
  bugs: pkg.bugs,
  homepage: pkg.homepage,
  keywords: pkg.keywords,
};

// Ensure dist directory exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

// Write the new package.json to dist
fs.writeFileSync(
  path.join("dist", "package.json"),
  JSON.stringify(distPkg, null, 2)
);

// Copy README and LICENSE to dist
fs.copyFileSync("README.md", path.join("dist", "README.md"));
fs.copyFileSync("LICENSE", path.join("dist", "LICENSE"));
