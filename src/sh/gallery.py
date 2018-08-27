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
    img = name.split('.')[0].split('-')[2]
    width = info[2].split('x')[0]
    height = info[2].split('x')[1]
    return [name, int(row), int(col), int(img), int(width), int(height)]
image_data = map(name_and_size, image_data)
image_data = sorted(image_data, key=lambda x: (x[1], x[2], x[3]))

# Group the rows.
index = 0
col_index = 0
image_rows = []
for data in image_data:
    if data[1] > index:
        image_rows.append([])
        col_index = 0
        index += 1

    if data[2] > col_index:
        image_rows[-1].append([])
        col_index += 1

    image_rows[-1][-1].append(data)

# Print the gallery output.
def print_col(data):
    return "'" + "', '".join(map(lambda x: sys.argv[1] + x[0], data)) + "'"

def print_data(data):
    return "        { urls: [" + print_col(data) + "], width: " + str(data[0][4]) + ", height: " + str(data[0][5]) + " }"

def print_row(row):
    return '    [\n' + ',\n'.join(map(print_data, row)) + '\n    ]'

print('[\n' + ',\n'.join(map(print_row, image_rows)) + '\n]')
