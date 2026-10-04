import os
from PIL import Image

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
NEW_IMAGES_DIR = os.path.join(BASE_DIR, 'src', 'assets', 'new images')
ASSETS_DIR = os.path.join(BASE_DIR, 'src', 'assets')

def crop_and_save(src_filename, out_filename, target_w, target_h, quality=90, center_bias=(0.5, 0.5)):
    src_path = os.path.join(NEW_IMAGES_DIR, src_filename)
    out_path = os.path.join(ASSETS_DIR, out_filename)
    
    if not os.path.exists(src_path):
        print(f"Error: {src_filename} does not exist!")
        return
        
    with Image.open(src_path) as im:
        if im.mode != 'RGB':
            im = im.convert('RGB')
        
        orig_w, orig_h = im.size
        target_ratio = target_w / float(target_h)
        current_ratio = orig_w / float(orig_h)
        
        if current_ratio > target_ratio:
            # Source is wider than target: crop width
            crop_w = int(orig_h * target_ratio)
            crop_h = orig_h
            cx, cy = center_bias
            left = max(0, min(int((orig_w - crop_w) * cx), orig_w - crop_w))
            top = 0
            im = im.crop((left, top, left + crop_w, top + crop_h))
        else:
            # Source is taller than target: crop height
            crop_w = orig_w
            crop_h = int(orig_w / target_ratio)
            cx, cy = center_bias
            left = 0
            top = max(0, min(int((orig_h - crop_h) * cy), orig_h - crop_h))
            im = im.crop((left, top, left + crop_w, top + crop_h))
            
        im = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Save as WEBP or JPEG depending on extension
        ext = os.path.splitext(out_filename)[1].lower()
        if ext in ('.jpg', '.jpeg'):
            im.save(out_path, 'JPEG', quality=quality, optimize=True)
        else:
            im.save(out_path, 'WEBP', quality=quality, method=6)
            
        print(f"Generated {out_filename}: {im.size[0]}x{im.size[1]} ({os.path.getsize(out_path)//1024} KB)")

print("=== Generating Website-Wide Section & Environmental Assets ===")

# 1. Home Ecosystem Section (Sectors Served)
crop_and_save(
    'interior-view-operating-room.jpg',
    'ecosystem-hospitals.jpg',
    target_w=536, target_h=376, # 2x of 268x188
    center_bias=(0.5, 0.4)
)
crop_and_save(
    'scientific-microscope-laboratory-desk-with-researching-instruments.jpg',
    'ecosystem-laboratories.jpg',
    target_w=426, target_h=342, # 2x of 213x171
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'hospital-room-interior.jpg',
    'ecosystem-health-centres.jpg',
    target_w=350, target_h=242, # 2x of 175x121
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'close-up-heart-rate-monitor-empty-hospital-ward-nobody-intensive-care-room-with-medical-equipment-bed-oxygen-tube-wheelchair-recovery-healthcare-instruments.jpg',
    'ecosystem-ngos.jpg',
    target_w=256, target_h=326, # 2x of 128x163
    center_bias=(0.4, 0.5)
)
crop_and_save(
    'empty-living-room-with-wheelchair-people-with-physical-disability-giving-transportation-support-nobody-space-with-mo...jpg',
    'ecosystem-patients.jpg',
    target_w=328, target_h=284, # 2x of 164x142
    center_bias=(0.5, 0.5)
)

# 2. Who We Are (Home Page Central Feature)
crop_and_save(
    'many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg',
    'who-we-are-equipment.webp',
    target_w=880, target_h=560,
    center_bias=(0.5, 0.5)
)

# 3. Services Page Assets
crop_and_save(
    'interior-view-operating-room.jpg',
    'service-hero-photo.webp',
    target_w=1200, target_h=594, # ratio ~2.02
    center_bias=(0.5, 0.4)
)
crop_and_save(
    'many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg',
    'service-procurement.webp',
    target_w=740, target_h=328, # ratio ~2.256
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'close-up-heart-rate-monitor-empty-hospital-ward-nobody-intensive-care-room-with-medical-equipment-bed-oxygen-tube-wheelchair-recovery-healthcare-instruments.jpg',
    'service-marketing.webp',
    target_w=816, target_h=332, # ratio ~2.458
    center_bias=(0.5, 0.4)
)
crop_and_save(
    'empty-hospital-ward-prepared-patient-healthcare.jpg',
    'service-delivery.webp',
    target_w=740, target_h=328, # ratio ~2.256
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'worn-instrument-tape-white-steel.jpg',
    'service-repair.webp',
    target_w=816, target_h=328, # ratio ~2.488
    center_bias=(0.5, 0.5)
)

# 4. Who We Serve Page Assets
crop_and_save(
    'interior-view-operating-room.jpg',
    'wws-hero-photo.webp',
    target_w=816, target_h=1020, # ratio 0.8
    center_bias=(0.5, 0.45)
)
crop_and_save(
    'hospital-room-with-bed-lamp.jpg',
    'env_outpatient.webp',
    target_w=960, target_h=512, # ratio 1.875
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'close-up-heart-rate-monitor-empty-hospital-ward-nobody-intensive-care-room-with-medical-equipment-bed-oxygen-tube-wheelchair-recovery-healthcare-instruments.jpg',
    'env_emergency.webp',
    target_w=1200, target_h=652,
    center_bias=(0.4, 0.5)
)
crop_and_save(
    'empty-hospital-ward-prepared-patient-healthcare.jpg',
    'env_maternity.webp',
    target_w=1040, target_h=520, # ratio 2.0
    center_bias=(0.5, 0.5)
)
crop_and_save(
    '8.jpg',
    'env_utility.webp',
    target_w=1040, target_h=544, # ratio 1.912
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'interior-view-operating-room.jpg',
    'wws-mobile-theatre.webp',
    target_w=900, target_h=438,
    center_bias=(0.5, 0.4)
)
crop_and_save(
    'close-up-heart-rate-monitor-empty-hospital-ward-nobody-intensive-care-room-with-medical-equipment-bed-oxygen-tube-wheelchair-recovery-healthcare-instruments.jpg',
    'wws-mobile-emergency.webp',
    target_w=900, target_h=505,
    center_bias=(0.4, 0.5)
)
crop_and_save(
    'scientific-microscope-laboratory-desk-with-researching-instruments.jpg',
    'wws-mobile-lab.webp',
    target_w=900, target_h=442,
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'hospital-room-interior.jpg',
    'wws-mobile-ward.webp',
    target_w=900, target_h=469,
    center_bias=(0.5, 0.5)
)

# 5. About Page Assets
crop_and_save(
    'many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg',
    'about-company-equipment.webp',
    target_w=608, target_h=860, # ratio 0.707
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'microscope.jpg',
    'about-microscope-clean.webp',
    target_w=800, target_h=836, # ratio 0.956
    center_bias=(0.5, 0.5)
)

# 6. Products Page Custom Procurement Hero Banner
crop_and_save(
    'many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg',
    'custom-procurement-equipment.webp',
    target_w=1376, target_h=768, # ratio 1.792
    center_bias=(0.5, 0.5)
)
crop_and_save(
    'many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg',
    'custom-procurement-equipment.jpg',
    target_w=1376, target_h=768, # ratio 1.792
    center_bias=(0.5, 0.5)
)

print("=== Finished Generating All Website-Wide Assets ===")
