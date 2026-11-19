import os
import base64
from PIL import Image

def generate_favicons():
    src_path = os.path.join('public', 'fab-logo.png')
    public_dir = 'public'
    
    img = Image.open(src_path).convert('RGBA')
    bbox = img.getbbox()
    cropped = img.crop(bbox)
    
    # We want to create square icons at various standard dimensions
    # with appropriate margin so Google / mobile search doesn't cut off corners in circle masks
    sizes = [
        (48, 'favicon-48x48.png'),
        (96, 'favicon-96x96.png'),
        (144, 'favicon-144x144.png'),
        (192, 'favicon-192x192.png'),
        (512, 'favicon-512x512.png'),
        (180, 'apple-touch-icon.png'),
        (32, 'favicon-32x32.png'),
        (16, 'favicon-16x16.png'),
    ]
    
    ico_images = []
    
    for size, filename in sizes:
        canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        
        margin = int(size * 0.08)
        inner_size = size - (margin * 2)
        
        w_ratio = inner_size / cropped.width
        h_ratio = inner_size / cropped.height
        scale = min(w_ratio, h_ratio)
        
        new_w = max(1, int(cropped.width * scale))
        new_h = max(1, int(cropped.height * scale))
        
        resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        pos_x = (size - new_w) // 2
        pos_y = (size - new_h) // 2
        
        canvas.paste(resized, (pos_x, pos_y), resized)
        
        out_path = os.path.join(public_dir, filename)
        canvas.save(out_path, format='PNG')
        print(f"Generated {out_path} ({size}x{size})")
        
        if size in [16, 32, 48]:
            ico_images.append(canvas)
            
    # Also generate root favicon.ico containing 16x16, 32x32, 48x48
    ico_path = os.path.join(public_dir, 'favicon.ico')
    ico_images[0].save(
        ico_path,
        format='ICO',
        sizes=[(img.width, img.height) for img in ico_images]
    )
    print(f"Generated {ico_path} (multi-resolution ICO)")
    
    # Generate high-resolution favicon.svg
    png_192_path = os.path.join(public_dir, 'favicon-192x192.png')
    with open(png_192_path, 'rb') as f:
        b64 = base64.b64encode(f.read()).decode('utf-8')
    
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <image href="data:image/png;base64,{b64}" width="192" height="192" />
</svg>
'''
    svg_path = os.path.join(public_dir, 'favicon.svg')
    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"Generated {svg_path} (high-res 192x192 SVG)")

if __name__ == '__main__':
    generate_favicons()
