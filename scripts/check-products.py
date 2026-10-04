import re

with open('src/data/products.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

current_id = None
current_name = None
current_cat = None
current_img = None

products = []

for line in lines:
    m_id = re.search(r"id:\s*'([^']+)'", line)
    if m_id and not line.strip().startswith('//') and 'categoryId' not in line:
        current_id = m_id.group(1)
    m_name = re.search(r"name:\s*'([^']+)'", line)
    if m_name and 'categoryName' not in line:
        current_name = m_name.group(1)
    m_cat = re.search(r"categoryId:\s*'([^']+)'", line)
    if m_cat:
        current_cat = m_cat.group(1)
    m_img = re.search(r"image:\s*([^,\n]+)", line)
    if m_img:
        current_img = m_img.group(1).strip()
        if current_id and current_name and current_cat:
            products.append({
                'id': current_id,
                'name': current_name,
                'categoryId': current_cat,
                'image': current_img
            })
            current_id = None
            current_name = None
            current_cat = None
            current_img = None

print(f"Total products: {len(products)}")
with_img = [p for p in products if p['image'] != 'null']
without_img = [p for p in products if p['image'] == 'null']

print(f"\n--- With image ({len(with_img)}) ---")
for p in with_img:
    print(f"  [x] {p['id']:32} ({p['categoryId']}) -> {p['image']}")

print(f"\n--- Without image ({len(without_img)}) ---")
for p in without_img:
    print(f"  [ ] {p['id']:32} ({p['categoryId']}) - {p['name']}")
