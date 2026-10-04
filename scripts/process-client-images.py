import os
from PIL import Image

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
NEW_IMAGES_DIR = os.path.join(BASE_DIR, 'src', 'assets', 'new images')
PRODUCTS_OUT_DIR = os.path.join(BASE_DIR, 'src', 'assets', 'products')
ASSETS_DIR = os.path.join(BASE_DIR, 'src', 'assets')

os.makedirs(PRODUCTS_OUT_DIR, exist_ok=True)

def optimize_and_save(img, out_path, max_dim=1200, quality=88):
    # Convert RGBA / P to RGB if needed for saving
    if img.mode in ('RGBA', 'LA'):
        # keep alpha if needed or convert with white background
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
    print(f"Saved: {os.path.relpath(out_path, BASE_DIR)} ({img.size[0]}x{img.size[1]}, {os.path.getsize(out_path)//1024} KB)")

def crop_and_save(img, out_path, target_ratio, max_dim=1200, quality=88):
    if img.mode != 'RGB':
        img = img.convert('RGB')
    w, h = img.size
    current_ratio = w / float(h)
    
    if current_ratio > target_ratio:
        # Image is wider than target ratio: crop sides
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    else:
        # Image is taller than target ratio: crop top/bottom
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        img = img.crop((0, top, w, top + new_h))
        
    w, h = img.size
    if max(w, h) > max_dim:
        scale = max_dim / float(max(w, h))
        new_w, new_h = int(w * scale), int(h * scale)
        img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
    img.save(out_path, 'WEBP', quality=quality, method=6)
    print(f"Saved: {os.path.relpath(out_path, BASE_DIR)} ({img.size[0]}x{img.size[1]}, {os.path.getsize(out_path)//1024} KB)")

# 1. Product mapping
product_files = {
    'anesthesia_machine.webp': '1.jpg',
    'blood_pressure_monitor.webp': '2.jpg',
    'pharmacy_refrigerator.webp': '3.jpg',
    'centrifuge_benchtop.webp': '4.jpg',
    'centrifuge_rotor.webp': '5.jpg',
    'autoclave_benchtop.webp': '6.jpg',
    'autoclave_tongshuo.webp': '8.jpg',
    'surgical_instruments_theatre.webp': '9.jpg',
    'diagnostic_ecg_analyzer.webp': '11.jpg',
    'bedside_locker.webp': 'bed side lockers.jpg',
    'biosafety_cabinet_clean.webp': 'biosafety cabinet.jpg',
    'biosafety_cabinet_lab.webp': 'biocabinet 2.jpg',
    'electrosurgical_unit.webp': 'electro surgical unit.jpg',
    'operating_table.webp': 'operating bed.jpg',
    'oxygen_concentrator.webp': 'oxygen.jpg',
    'microscope_optical.webp': 'microscope.jpg',
    'microscope_binocular.webp': 'microscope (2).jpg',
    'vital_signs_monitor_philips.webp': 'vital machine.jpg',
    'patient_monitor_icu_ge.webp': 'vital signs machine.jpg',
    'wheelchair_manual.webp': 'wheel chair.jpg',
    'wheelchair_electric.webp': 'wheel chair 2.jpg',
    'surgical_instruments_tray.webp': 'worn-instrument-tape-white-steel.jpg',
    'surgical_instruments_kit.webp': 'many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg',
}

print("--- Processing Product Images ---")
for out_name, src_name in product_files.items():
    src_file = os.path.join(NEW_IMAGES_DIR, src_name)
    if os.path.exists(src_file):
        with Image.open(src_file) as im:
            optimize_and_save(im, os.path.join(PRODUCTS_OUT_DIR, out_name), max_dim=1000)
    else:
        print(f"Warning: {src_name} not found")

print("\n--- Processing Category and Environment Images ---")
# 2. Category images
# category-critical-care.webp: ratio ~ 216/354 = 0.61
with Image.open(os.path.join(NEW_IMAGES_DIR, 'close-up-heart-rate-monitor-empty-hospital-ward-nobody-intensive-care-room-with-medical-equipment-bed-oxygen-tube-wheelchair-recovery-healthcare-instruments.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'category-critical-care.webp'), target_ratio=216/354, max_dim=800)

# category-theatre-room.webp: ratio ~ 312/196 = 1.59
with Image.open(os.path.join(NEW_IMAGES_DIR, 'interior-view-operating-room.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'category-theatre-room.webp'), target_ratio=312/196, max_dim=1000)

# category-laboratory.webp: ratio ~ 231/168 = 1.375
with Image.open(os.path.join(NEW_IMAGES_DIR, 'scientific-microscope-laboratory-desk-with-researching-instruments.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'category-laboratory.webp'), target_ratio=231/168, max_dim=800)

# category-opd-consultation.webp: ratio ~ 151/245 = 0.616
with Image.open(os.path.join(NEW_IMAGES_DIR, 'hospital-room-with-bed-lamp.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'category-opd-consultation.webp'), target_ratio=151/245, max_dim=800)

# 3. Environment images
# env_theatre.webp (ratio 2.07), env_theatre_wide.webp (ratio 2.0), env_theatre_clean.webp (ratio 2.72), env_theatre_sq.webp (1.0)
with Image.open(os.path.join(NEW_IMAGES_DIR, 'interior-view-operating-room.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_theatre.webp'), target_ratio=2.07, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_theatre_wide.webp'), target_ratio=2.0, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_theatre_clean.webp'), target_ratio=2.72, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_theatre_sq.webp'), target_ratio=1.0, max_dim=800)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'service-hero-theatre.webp'), target_ratio=1.6, max_dim=1200)

# env_lab.webp, env_lab_wide.webp, env_lab_clean.webp, env_lab_sq.webp
with Image.open(os.path.join(NEW_IMAGES_DIR, 'scientific-microscope-laboratory-desk-with-researching-instruments.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_lab.webp'), target_ratio=2.15, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_lab_wide.webp'), target_ratio=2.0, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_lab_clean.webp'), target_ratio=2.52, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_lab_sq.webp'), target_ratio=1.0, max_dim=800)

# env_ward.webp, env_ward_wide.webp, env_ward_clean.webp, env_ward_sq.webp, env_ward_pure.webp
with Image.open(os.path.join(NEW_IMAGES_DIR, 'hospital-room-interior.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_ward.webp'), target_ratio=1.86, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_ward_wide.webp'), target_ratio=2.0, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_ward_clean.webp'), target_ratio=2.31, max_dim=1200)
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_ward_sq.webp'), target_ratio=1.0, max_dim=800)

with Image.open(os.path.join(NEW_IMAGES_DIR, 'hospital-room-with-bed-lamp.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_ward_pure.webp'), target_ratio=1.05, max_dim=800)

# env_emergency.webp
with Image.open(os.path.join(NEW_IMAGES_DIR, 'empty-hospital-room-with-nobody-it-having-single-bed.jpg')) as im:
    crop_and_save(im, os.path.join(ASSETS_DIR, 'env_emergency.webp'), target_ratio=1.84, max_dim=1200)

print("\nDone processing all images!")
