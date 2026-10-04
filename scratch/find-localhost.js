import fs from 'node:fs';

const content = fs.readFileSync('dist/assets/index-DcKfnrzP.js', 'utf8');
const idx = content.indexOf('localhost');
if (idx !== -1) {
  const start = Math.max(0, idx - 150);
  const end = Math.min(content.length, idx + 150);
  console.log('CONTEXT AROUND LOCALHOST:');
  console.log(content.substring(start, end));
} else {
  console.log('Not found');
}
