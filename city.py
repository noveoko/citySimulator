import numpy as np
import random

from PIL import Image


class Player:

    def __init__(self):
        self.position = {"x":0, "y":0}
        self.name = name
        self.age = age
        self.iq = iq
        self.alive = True

coords = [[1, 0],[-1,0],[0,-1],[0, 1]]
directions = {
    "up": 0,
    "down":1,
    "left":2,
    "right":3
}

def drawLevel(level):
    img = Image.fromarray(level, 'RGB')
    #img.save('my.png')
    img.show()

level = np.zeros((4,4))


drawLevel(level)
drawLevel(level)

