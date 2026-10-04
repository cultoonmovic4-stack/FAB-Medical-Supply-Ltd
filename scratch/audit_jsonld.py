import json
import re

print("--- AUDITING JSON-LD STRUCTURED DATA ---")

# 1. From index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    match = re.search(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', content, re.DOTALL)
    if match:
        data = json.loads(match.group(1))
        print("index.html JSON-LD valid: YES")
        types = [item['@type'] for item in data.get('@graph', [])]
        print(f"Graph types: {types}")
        for item in data.get('@graph', []):
            print(f"  Type: {item['@type']}, @id: {item.get('@id')}, name: {item.get('name')}")
            # Check for forbidden types
            for forbidden in ['Product', 'Offer', 'MedicalDevice', 'Review', 'Rating', 'AggregateRating']:
                if forbidden in str(item):
                    print(f"  [ERROR] Forbidden type found: {forbidden}")
    else:
        print("index.html JSON-LD: NOT FOUND")

# 2. Check forbidden schema strings across all src files
print("\nScanning src/ for forbidden schema types...")
forbidden_types = ['"Product"', '"Offer"', '"MedicalDevice"', '"Review"', '"Rating"', '"AggregateRating"']
found_forbidden = []
import os
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                c = f.read()
                for ft in forbidden_types:
                    if ft in c and '@type' in c:
                        found_forbidden.append((p, ft))

print(f"Forbidden schema occurrences in src/: {len(found_forbidden)}")
for item in found_forbidden:
    print(f"  {item[0]}: {item[1]}")
