#!/bin/zsh
# Convert all .HEIC images in rose-images/ to .jpg using sips (no resizing)
# Move original .HEIC files to rose-images/originals after conversion
# 
# Steps to run (VS Code on Mac):
# 1. Open the terminal. (Cmd + j)
# 2. Run this command: ./convert-heic-to-jpg.sh

converted=()
for f in rose-images/*.HEIC; do
  base=$(basename "$f" .HEIC)
  sips -s format jpeg "$f" --out "rose-images/$base.jpg"
  mv "$f" rose-images/originals/
  converted+=("$base")
done
echo "Converted ${#converted[@]} file(s):"
for file in "${converted[@]}"; do
  echo "  $file"
done
