
import os

files_to_read = [
    'package.json',
    'tsconfig.json',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
    'vercel.json',
    'index.html',
    'eslint.config.js',
    'src/App.tsx',
    'src/main.tsx',
    'src/index.css',
    'src/vite-env.d.ts',
    'src/components/Empty.tsx',
    'src/hooks/useTheme.ts',
    'src/lib/utils.ts',
    'src/pages/Login.tsx',
    'src/pages/Landing.tsx'
]

output_file = 'project_source_code.txt'

with open(output_file, 'w', encoding='utf-8') as outfile:
    for file_path in files_to_read:
        if os.path.exists(file_path):
            outfile.write(f'--- {file_path} ---\n')
            try:
                with open(file_path, 'r', encoding='utf-8') as infile:
                    outfile.write(infile.read())
            except Exception as e:
                outfile.write(f'Error reading file: {e}')
            outfile.write('\n\n')
        else:
            outfile.write(f'--- {file_path} ---\n')
            outfile.write('File not found\n\n')

print(f"Source code compiled to {output_file}")
