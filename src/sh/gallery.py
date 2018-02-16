#!/usr/bin/python
# Converts output from imagemagick's identify into a usable GalleryPage input.
# USAGE: ./gallery.py PREFIX [IMG_FILES]
import sys
import subprocess

# Get files.
image_files = sys.argv[2:]
image_files.sort()
print('Image files: ' + str(image_files))

# Get identify information (type, size, etcetera).
def info(file):
    raw_info = subprocess.run(['identify', file], stdout = subprocess.PIPE).stdout
    return raw_info.decode('utf-8').strip().split()
image_data = map(info, image_files)

# Extract the image row, column, name and dimensions.
def name_and_size(info):
    name = info[0]
    row = name.split('.')[0].split('-')[0]
    col = name.split('.')[0].split('-')[1]
    width = info[2].split('x')[0]
    height = info[2].split('x')[1]
    return [name, int(row), int(col), int(width), int(height)]
image_data = map(name_and_size, image_data)

# Group the rows.
index = 0
image_rows = []
for data in image_data:
    if data[1] > index:
        image_rows.append([])
        index += 1

    image_rows[-1].append(data)

# Print the gallery output.
def print_data(data):
    return "        { url: '" + sys.argv[1] + data[0] + "', width: " + str(data[3]) + ", height: " + str(data[4]) + " }"

def print_row(row):
    return '    [\n' + ',\n'.join(map(print_data, row)) + '\n    ]'

print('[\n' + ',\n'.join(map(print_row, image_rows)) + '\n]')
