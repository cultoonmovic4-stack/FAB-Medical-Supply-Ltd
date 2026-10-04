import os
import re

print("--- VERIFYING ALL IMAGE ASSET PATHS EXIST ---")

broken = []
checked = 0

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.js', '.jsx')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                content = file.read()
                # Find relative image imports: import ... from '../assets/...'
                imports = re.findall(r'from\s+[\'"](\.\.?/[^\'"]+\.(?:png|jpg|jpeg|webp|svg))[\'"]', content)
                for imp in imports:
                    checked += 1
                    target = os.path.normpath(os.path.join(root, imp))
                    if not os.path.exists(target):
                        broken.append((p, imp, target))

print(f"Checked {checked} imported image assets.")
print(f"Broken image imports: {len(broken)}")
for b in broken:
    print(f"  [BROKEN] in {b[0]}: {b[1]} -> {b[2]}")
