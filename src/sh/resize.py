#!/usr/bin/python
# Converts output from imagemagick's identify into a usable GalleryPage input.
# USAGE: ./gallery.py PREFIX [IMG_FILES]
import sys
import subprocess

# Get files.
image_files = sys.argv[1:]
image_files.sort()
print('Image files: ' + str(image_files))

# Resize the given image file.
def resize(file):
    name = file.split('.')[0]
    print("Resizing: " + file)
    subprocess.run(['convert', file, '-resize', '10%', '-quality', '70', name + '_sma.jpg'])
    subprocess.run(['convert', file, '-resize', '20%', '-quality', '70', name + '_med.jpg'])
    subprocess.run(['convert', file, '-resize', '30%', '-quality', '70', name + '_lar.jpg'])

for file in image_files:
    resize(file)
