import sys
import subprocess

try:
    from PIL import Image, ImageChops
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageChops

def trim(im):
    if im.mode != 'RGBA':
        im = im.convert('RGBA')
        
    datas = im.getdata()
    newData = []
    # Identify pure white or near-white pixels and make them transparent
    for item in datas:
        # Check if alpha is 0 (already transparent)
        if len(item) == 4 and item[3] == 0:
            newData.append(item)
            continue
        # Make white/near-white transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    im.putdata(newData)
    
    # Crop to the visible bounding box
    bg = Image.new(im.mode, im.size, (255, 255, 255, 0))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

try:
    img_path = 'public/Smith Landscaping Virginia Logo.png'
    im = Image.open(img_path)
    cropped = trim(im)
    cropped.save(img_path, 'PNG')
    print("Logo successfully cropped and made transparent!")
except Exception as e:
    print(f"Error: {e}")
