import fs from 'node:fs';
import path from 'node:path';

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  let findings = [];
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      findings = findings.concat(searchDir(full));
    } else if (/\.(js|jsx|html|css)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      const targets = ['localhost', '127.0.0.1', 'example.com'];
      for (const t of targets) {
        if (content.toLowerCase().includes(t)) {
          findings.push({ file: full, match: t });
        }
      }
    }
  }
  return findings;
}

const results = searchDir('src');
console.log('SRC_SEARCH_RESULTS_COUNT:', results.length);
if (results.length > 0) {
  console.log(JSON.stringify(results, null, 2));
}
