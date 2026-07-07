import os
import glob
import urllib.request
import urllib.error

blog_dir = "src/content/blog"
md_files = sorted(glob.glob(os.path.join(blog_dir, "*.md")))

# A large list of known Unsplash photo IDs (mostly nature, architecture, gardens, outdoors)
candidate_ids = [
    "1558904541-efa843a96f09", # default 1
    "1457269449834-928af64c684d", # default 2
    "1584622650111-993a426fbf0a", # default 3
    "1416879598553-3f1bb312f2c0", # nature
    "1441974231531-c6227db76b6e", # nature
    "1472214103451-9374bd1c798e", # outdoors
    "1464822759023-fed622ff2c3b", # mountains/trees
    "1421081177127-3315e7084c2e", # park
    "1465146344425-f00d5f5c8f07", # forest
    "1470058869958-2e18fa2236fa", # green
    "1448375240586-882707db888b", # forest/green
    "1433086966358-54859d0ed716", # nature
    "1411550186985-78e71561f510", # trees
    "1473448912268-2022ce9509d8", # trees
    "1462275646964-a0e47274628b", # nature
    "1460500063983-99464e9a3b6e", # landscape
    "1476362555312-ab9e108a0b7e", # outdoor
    "1437651021464-8ab3a71b8be4", # field
]

valid_urls = []

print("Finding valid Unsplash images...")
for photo_id in candidate_ids:
    if len(valid_urls) >= 10:
        break
        
    url = f"https://images.unsplash.com/photo-{photo_id}?auto=format&fit=crop&w=1600&q=80"
    try:
        # Check if URL is valid (returns 200)
        req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req, timeout=5)
        if response.status == 200:
            valid_urls.append(url)
            print(f"Valid: {url}")
    except Exception as e:
        print(f"Invalid: {url} - {e}")

print(f"Found {len(valid_urls)} valid images. Updating markdown files...")

for idx, file_path in enumerate(md_files):
    if idx < len(valid_urls):
        img_url = valid_urls[idx]
        
        with open(file_path, "r") as f:
            lines = f.readlines()
            
        # Remove old thumbnail if exists
        lines = [l for l in lines if not l.startswith("thumbnail:")]
        
        # Insert new thumbnail line before the second '---'
        dash_count = 0
        insert_idx = -1
        for i, line in enumerate(lines):
            if line.strip() == "---":
                dash_count += 1
                if dash_count == 2:
                    insert_idx = i
                    break
                    
        if insert_idx != -1:
            lines.insert(insert_idx, f'thumbnail: "{img_url}"\n')
            
            with open(file_path, "w") as f:
                f.writelines(lines)

print("Updated blog posts with valid Unsplash images.")
