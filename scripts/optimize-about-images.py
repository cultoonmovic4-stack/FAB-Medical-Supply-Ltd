import os
from PIL import Image

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
NEW_IMAGES_DIR = os.path.join(BASE_DIR, 'src', 'assets', 'new images')
OUT_DIR = os.path.join(BASE_DIR, 'src', 'assets', 'about')

os.makedirs(OUT_DIR, exist_ok=True)

def optimize_image(src_name, out_name, max_dim=1280, quality=85):
    src_path = os.path.join(NEW_IMAGES_DIR, src_name)
    out_path = os.path.join(OUT_DIR, out_name)
    
    if not os.path.exists(src_path):
        print(f"[ERROR] Source not found: {src_path}")
        return None
    
    orig_size = os.path.getsize(src_path)
    
    with Image.open(src_path) as img:
        if img.mode in ('RGBA', 'LA'):
            bg = Image.new('RGB', img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[-1])
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
            
        w, h = img.size
        if max(w, h) > max_dim:
            scale = max_dim / float(max(w, h))
            new_w, new_h = int(w * scale), int(h * scale)
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        img.save(out_path, 'WEBP', quality=quality, method=6)
        
    new_size = os.path.getsize(out_path)
    reduction = (1 - (new_size / orig_size)) * 100
    print(f"Optimized: {out_name:<35} | {orig_size//1024:>6} KB -> {new_size//1024:>4} KB (-{reduction:.1f}%)")
    return (orig_size, new_size)

about_mapping = {
    'many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg': 'about-hero-instruments.webp',
    'scientific-microscope-laboratory-desk-with-researching-instruments.jpg': 'about-hero-microscope.webp',
    'close-up-heart-rate-monitor-empty-hospital-ward-nobody-intensive-care-room-with-medical-equipment-bed-oxygen-tube-wheelchair-recovery-healthcare-instruments.jpg': 'about-hero-monitor.webp',
    'modern clinical environment.jpg': 'about-company-control-suite.webp',
    'interior-view-operating-room.jpg': 'about-company-operating-room.webp',
    'worn-instrument-tape-white-steel.jpg': 'about-company-steel-instruments.webp',
    'hospital-room-interior.jpg': 'about-company-ward-interior.webp',
    'mulago hospital.jpg': 'about-who-mulago-hospital.webp',
    'laboratory.jpg': 'about-who-reference-lab.webp',
    'radiology.jpg': 'about-who-radiology.webp',
    'beds.jpg': 'about-who-inpatient-beds.webp',
    'procurement.jpg': 'about-service-procurement.webp',
    'marketing & sales.jpg': 'about-service-sales.webp',
    'delivery.jpg': 'about-service-delivery.webp',
    'service and repair.jpg': 'about-service-repair.webp',
    'biocabinet 2.jpg': 'about-area-lab-bio.webp',
    '9.jpg': 'about-area-theatre-drager.webp',
    'vital signs machine.jpg': 'about-area-critical-monitor.webp',
    'ECG.jpg': 'about-area-general-diagnostic.webp',
}

# Also optimize other massive unused raw images so they don't bloat the repo
extra_raw_images = {
    'empty-hospital-room-with-nobody-it-having-single-bed.jpg': 'raw-empty-hospital-room.webp',
    'empty-living-room-with-wheelchair-people-with-physical-disability-giving-transportation-support-nobody-space-with-mobility-accessibility-equipment-help-with-chronic-problem.jpg': 'raw-living-room-wheelchair.webp',
    'hospital-room-with-bed-lamp.jpg': 'raw-hospital-bed-lamp.webp',
    'empty-hospital-ward-prepared-patient-healthcare.jpg': 'raw-hospital-ward-prepared.webp',
}

print("--- Optimizing About Page Images ---")
total_orig = 0
total_new = 0

for src, out in about_mapping.items():
    res = optimize_image(src, out)
    if res:
        total_orig += res[0]
        total_new += res[1]

print("--- Optimizing Extra Heavy Raw Images ---")
for src, out in extra_raw_images.items():
    res = optimize_image(src, out)
    if res:
        total_orig += res[0]
        total_new += res[1]

print("-" * 65)
print(f"TOTAL PAYLOAD BEFORE: {total_orig / (1024*1024):.2f} MB")
print(f"TOTAL PAYLOAD AFTER:  {total_new / (1024*1024):.2f} MB")
reduction = (1 - (total_new / total_orig)) * 100
print(f"OVERALL BANDWIDTH SAVINGS: -{reduction:.1f}%")
