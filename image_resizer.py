import os

from cv2 import cv2

os.chdir("src/assets/images/courses")
# read image
img = cv2.imread('deep_learning.jpg', cv2.IMREAD_UNCHANGED)

# get dimensions of image
dimensions = img.shape
print(dimensions)

for images in os.listdir():
    print(images)
    img = cv2.imread(images, cv2.IMREAD_UNCHANGED)
    stretch_near = cv2.resize(img, (dimensions[1], dimensions[0]),
                              interpolation=cv2.INTER_NEAREST)
    cv2.imwrite(images, stretch_near)
