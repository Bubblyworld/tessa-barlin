#!/usr/bin/python
import os
import sys
import shutil
import subprocess

EPSILON = 0.000001

# Get files.
image_files = sys.argv[1:]
image_files.sort()

# Get identify information (type, size, etcetera).
def info(file):
    raw_info = subprocess.run(['identify', '-ping', '-format', '%f %w %h', file], stdout = subprocess.PIPE).stdout
    return raw_info.decode('utf-8').strip().split()
image_data = map(info, image_files)

# Extract the image row, column, name and dimensions.
def name_and_size(info):
    name = info[0]
    width = int(info[1])
    height = int(info[2])
    aspect = float(width) / float(height)

    return [name, aspect, width, height]
image_data = map(name_and_size, image_data)

# Utility for checking if two floats are equal up to some epsilon.
def equal(a, b):
    return abs(a - b) < EPSILON

# Check if a map's values contains a float up to epsilon.
def contains(map, a):
    for b in map.keys():
        if equal(a, b):
            return True
    return False

# Group images by aspect.
aspect_map = {}
for data in image_data:
    if not contains(aspect_map, data[1]):
        aspect_map[data[1]] = []

    aspect_map[data[1]].append( data[0] )

# Rename them to our chosen syntax.
index = 0
for aspect in aspect_map:
    dirname = str(aspect)
    if not os.path.exists(dirname):
        os.mkdir(dirname)

    for data in aspect_map[aspect]:
        shutil.move(data, dirname)
