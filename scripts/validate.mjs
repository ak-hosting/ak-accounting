import { readFile, access } from "node:fs/promises";

const rootFiles = ["index.html", "impressum.html", "datenschutz.html", "robots.txt", "sitemap.xml"];
const assetFiles = ["assets/css/style.css", "assets/js/script.js", "assets/images/favicon.svg"];

for (const file of [...rootFiles, ...assetFiles]) await access(file);

const html = await readFile("index.html", "utf8");
const css = await readFile("assets/css/style.css", "utf8");
const js = await readFile("assets/js/script.js", "utf8");

const required = [
  '<html lang="tr">',
  'href="https://ak-hosting.github.io/ak-accounting/"',
  'href="assets/css/style.css"',
  'src="assets/js/script.js"',
  'data-scope-form',
  'impressum.html',
  'datenschutz.html'
];

for (const marker of required) {
  if (!html.includes(marker)) throw new Error(`index.html içinde eksik işaret: ${marker}`);
}

if (/bootstrap|font-awesome|cdnjs|jsdelivr/i.test(html + css + js)) {
  throw new Error("Runtime dosyalarında harici UI bağımlılığı bulundu.");
}

if (/SMTP_|Gönderiliyor|başarıyla gönderildi/i.test(html + js)) {
  throw new Error("Demo, gerçek veri gönderimi izlenimi veriyor.");
}

console.log("Validation passed: static files, local assets, honest demo flow and legal links are present.");
