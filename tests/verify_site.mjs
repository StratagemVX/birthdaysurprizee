import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const htmlFiles = ["index.html", "memoryTree.html"];
const optionalAssets = new Set(["assets/music/memory.mp3"]);

for (const htmlFile of htmlFiles) {
  const htmlPath = path.join(rootDir, htmlFile);
  assert.ok(fs.existsSync(htmlPath), `${htmlFile} must exist`);
  const html = fs.readFileSync(htmlPath, "utf8");
  assert.match(html, /<!doctype html>/i, `${htmlFile} must declare HTML5 doctype`);

  const refs = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/gi)]
    .map((m) => m[1])
    .filter(
      (ref) =>
        ref &&
        !ref.startsWith("http://") &&
        !ref.startsWith("https://") &&
        !ref.startsWith("#") &&
        !optionalAssets.has(ref)
    );

  for (const ref of refs) {
    const rel = decodeURIComponent(ref.split(/[?#]/)[0]);
    const target = path.resolve(rootDir, rel);
    assert.ok(fs.existsSync(target), `Missing local asset referenced in ${htmlFile}: ${ref}`);
  }
}

const jsFiles = ["js/typewriter.js", "js/memories.js", "js/app.js", "memoryTree.js"];
for (const jsFile of jsFiles) {
  const fullPath = path.join(rootDir, jsFile);
  assert.ok(fs.existsSync(fullPath), `${jsFile} must exist`);
  execFileSync(process.execPath, ["--check", fullPath], { stdio: "inherit" });
}

const memoriesJs = fs.readFileSync(path.join(rootDir, "js/memories.js"), "utf8");
const todayArrayMatch = memoriesJs.match(/const todayPhotoFiles\s*=\s*\[([\s\S]*?)\];/);
assert.ok(todayArrayMatch, "todayPhotoFiles array must exist in js/memories.js");
const todayPhotos = [...todayArrayMatch[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]);
assert.ok(todayPhotos.length > 0, "Expected todayPhotoFiles entries");
for (const fileName of todayPhotos) {
  assert.ok(fs.existsSync(path.join(rootDir, "assets", "today", fileName)), `Missing photo assets/today/${fileName}`);
}

console.log(`Verified ${htmlFiles.length} HTML files, ${jsFiles.length} JS modules, and ${todayPhotos.length} tracked photos.`);
