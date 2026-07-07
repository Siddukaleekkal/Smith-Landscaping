import os
import glob

blog_dir = "src/content/blog"
md_files = sorted(glob.glob(os.path.join(blog_dir, "*.md")))

images = [
    "/Portfolio/610944241_122198032826367969_1922132849324037338_n.jpg",
    "/Portfolio/626769244_122202276056367969_2478155745097544311_n.jpg",
    "/Portfolio/627785750_122202276206367969_5083767370058046083_n.jpg",
    "/Portfolio/648991666_122205741866367969_2403075742777446495_n.jpg",
    "/Portfolio/649012796_122205741884367969_324615989481970233_n.jpg",
    "/Portfolio/698003987_122213681828367969_4262316014950838903_n.jpg",
    "/Portfolio/698042569_122213681834367969_7967064652639892227_n.jpg",
    "/Portfolio/698639843_122213681852367969_3500430634508845276_n.jpg",
    "/Portfolio/698958893_122213682008367969_7582536323854976976_n.jpg",
    "/Portfolio/699256817_122213681978367969_2876272538116699366_n.jpg"
]

for idx, file_path in enumerate(md_files):
    if idx < len(images):
        with open(file_path, "r") as f:
            lines = f.readlines()
        
        # Insert thumbnail line before the second '---'
        dash_count = 0
        insert_idx = -1
        for i, line in enumerate(lines):
            if line.strip() == "---":
                dash_count += 1
                if dash_count == 2:
                    insert_idx = i
                    break
        
        if insert_idx != -1:
            # check if thumbnail already exists to avoid dupes
            has_thumbnail = any(l.startswith("thumbnail:") for l in lines)
            if not has_thumbnail:
                lines.insert(insert_idx, f'thumbnail: "{images[idx]}"\n')
                
                with open(file_path, "w") as f:
                    f.writelines(lines)

print("Updated 10 blog posts with unique local portfolio images successfully.")
