import os
import re

print("--- AUDITING INTERNAL LINKS ---")

links = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                content = file.read()
                # Find Link to
                router_links = re.findall(r'<Link\s+[^>]*?to=["\'{`]([^"\'`\}]+)["\'`\}]', content)
                for rl in router_links:
                    links.append({'file': p, 'type': 'Link', 'target': rl})
                # Find a href
                a_hrefs = re.findall(r'<a\s+[^>]*?href=["\'{`]([^"\'`\}]+)["\'`\}]', content)
                for ah in a_hrefs:
                    links.append({'file': p, 'type': 'a', 'target': ah})

print(f"Total links found: {len(links)}")

# 15 intended routes
intended_routes = [
    '/',
    '/about',
    '/products',
    '/products/radiology-imaging',
    '/products/opd-consultation',
    '/products/emergency-icu',
    '/products/maternity-pediatrics',
    '/products/specialized-departments',
    '/products/utility-services',
    '/products/hospital-furniture',
    '/products/laboratory',
    '/products/theatre-room',
    '/services',
    '/who-we-serve',
    '/contact',
]

target_counts = {r: 0 for r in intended_routes}
other_targets = set()

for l in links:
    t = l['target']
    if t in target_counts:
        target_counts[t] += 1
    else:
        other_targets.add(t)

print("\n--- LINK REACHABILITY FOR 15 INTENDED ROUTES ---")
for r, count in target_counts.items():
    print(f"  {r}: {count} links pointing to it {'[OK]' if count > 0 else '[ORPHAN?]'}")

print("\n--- OTHER TARGETS (External / tel / mailto / anchors) ---")
for ot in sorted(other_targets):
    print(f"  {ot}")
