import os

# Configuration
ROOT_DIR = '.'
OUTPUT_FILE = 'project_source_code.txt'
IGNORE_DIRS = {'node_modules', '.git', 'dist', '.vercel', '.figma', '__pycache__'}
IGNORE_FILES = {'.DS_Store', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'compile_source.py', 'project_source_code.txt'}
INCLUDE_EXTENSIONS = {'.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.html', '.json', '.md', '.yml', '.yaml'}

def is_text_file(filename):
    return any(filename.endswith(ext) for ext in INCLUDE_EXTENSIONS)

def compile_source():
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        # 1. Walk through directories
        for root, dirs, files in os.walk(ROOT_DIR):
            # Filter directories in-place
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            for file in files:
                if file in IGNORE_FILES:
                    continue
                
                if not is_text_file(file):
                    continue
                
                file_path = os.path.join(root, file)
                
                # Write file header
                outfile.write(f'--- {file_path} ---\n')
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        outfile.write(content)
                except Exception as e:
                    outfile.write(f'[Error reading file: {e}]')
                
                outfile.write('\n\n')

    print(f"All source code has been compiled into: {os.path.abspath(OUTPUT_FILE)}")

if __name__ == '__main__':
    compile_source()
