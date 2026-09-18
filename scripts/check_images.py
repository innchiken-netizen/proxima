import os
import re

img_regex = re.compile(r'["\'''](/images/[^"\'\'>\s]+)["\''']')

all_referenced = set()
for root, dirs, files in os.walk('.'):
    if any(ignore in root for ignore in ['node_modules', '.git', 'dist']):
        continue
    for f in files:
        if f.endswith(('.tsx', '.ts', '.html', '.cjs', '.js', '.json', '.css')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8', errors='ignore') as fh:
                content = fh.read()
                matches = img_regex.findall(content)
                for m in matches:
                    all_referenced.add((m, p))

print(f'Total unique referenced /images/: {len(set(m for m, p in all_referenced))}')
missing = []
for m, src_file in sorted(all_referenced):
    clean_m = m.split('?')[0].split('#')[0]
    disk_path = os.path.join('public', clean_m.replace('/images/', 'images/'))
    if not os.path.exists(disk_path):
        missing.append((m, src_file))

if missing:
    print('MISSING IMAGES:')
    for m, src_file in missing:
        print(f'  {m} (referenced in {src_file})')
else:
    print('ALL REFERENCED IMAGES EXIST ON DISK!')
