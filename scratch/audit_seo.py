import os
import re

print("--- AUDITING IMAGES ---")
img_tags = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = re.findall(r'<img\s+[^>]*?>', content, re.DOTALL)
                for m in matches:
                    alt_match = re.search(r'alt=["\']([^"\']*)["\']', m)
                    width_match = re.search(r'width=["\']([^"\']*)["\']', m)
                    height_match = re.search(r'height=["\']([^"\']*)["\']', m)
                    loading_match = re.search(r'loading=["\']([^"\']*)["\']', m)
                    img_tags.append({
                        'file': path,
                        'tag': m[:120].replace('\n', ' '),
                        'alt': alt_match.group(1) if alt_match else (None if 'alt={' not in m else 'DYNAMIC'),
                        'has_dim': bool(width_match and height_match),
                        'loading': loading_match.group(1) if loading_match else 'default'
                    })

print(f"Total <img> tags: {len(img_tags)}")
missing_alt = [i for i in img_tags if i['alt'] is None]
print(f"Missing alt attributes: {len(missing_alt)}")
for m in missing_alt:
    print(f"  Missing alt in {m['file']}: {m['tag']}")

print(f"\nImages with dimensions: {len([i for i in img_tags if i['has_dim']])}/{len(img_tags)}")
missing_dim = [i for i in img_tags if not i['has_dim']]
print(f"Images without explicit width/height: {len(missing_dim)}")
for md in missing_dim:
    print(f"  No dims in {md['file']}: {md['tag']}")

print(f"\nImages with loading='lazy': {len([i for i in img_tags if i['loading'] == 'lazy'])}")
print(f"Images with default/eager: {len([i for i in img_tags if i['loading'] != 'lazy'])}")
for el in [i for i in img_tags if i['loading'] != 'lazy']:
    print(f"  Eager/Default in {el['file']}: {el['tag']}")
