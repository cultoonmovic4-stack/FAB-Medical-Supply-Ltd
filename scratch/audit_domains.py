import os
import re

print("--- AUDITING DOMAIN REFERENCES ---")

pattern = re.compile(r'(fabmedicalsupplies\.com|localhost|VITE_SITE_URL)', re.IGNORECASE)

matches = []
for root, dirs, files in os.walk('.'):
    # skip node_modules, .git, dist, .gemini
    if any(x in root for x in ['node_modules', '.git', 'dist', '.gemini']):
        continue
    for f in files:
        if f.endswith(('.js', '.jsx', '.html', '.json', '.txt', '.xml', '.env')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8', errors='ignore') as file:
                for line_num, line in enumerate(file, 1):
                    if pattern.search(line):
                        matches.append((p, line_num, line.strip()))

for m in matches:
    print(f"{m[0]}:{m[1]} -> {m[2]}")
