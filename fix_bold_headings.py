import os
import glob
import re

blog_dir = "src/content/blog"
md_files = glob.glob(os.path.join(blog_dir, "*.md"))

for file_path in md_files:
    with open(file_path, "r") as f:
        content = f.read()
        
    # Replace ### **Heading** with ### Heading
    # Also handles ## **Heading** just in case
    new_content = re.sub(r'^(#+)\s+\*\*(.*?)\*\*\s*$', r'\1 \2', content, flags=re.MULTILINE)
    
    with open(file_path, "w") as f:
        f.write(new_content)

print("Removed markdown bold formatting from headings.")
