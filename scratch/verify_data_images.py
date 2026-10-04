import os
import re

print("--- VERIFYING DATA/PRODUCTS.JS AND DATA/COMPANY.JS ---")

with open('src/data/products.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image paths in products.js
imgs = re.findall(r'image:\s*[\'"]([^\'"]+)[\'"]', content)
print(f"Products image count: {len(imgs)}")
broken_products = []
for img in imgs:
    # check in public/ or src/assets/
    clean_path = img.lstrip('/')
    pub_path = os.path.join('public', clean_path)
    asset_path = os.path.join('src', clean_path)
    if not (os.path.exists(pub_path) or os.path.exists(asset_path) or os.path.exists(img)):
        broken_products.append(img)

print(f"Broken product images: {len(broken_products)}")
for bp in broken_products:
    print(f"  [BROKEN] {bp}")
