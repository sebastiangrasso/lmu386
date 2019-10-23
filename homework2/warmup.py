#HomeWork 2, Sebastian Grasso

import math
from cryptography.fernet import Fernet
import re
import requests
import random

#Problem 1
def change(number):
    if number < 0:
        raise ValueError('amount cannot be negative')
        
    denominations = {'Quarter': 25, 'Dime': 10, 'Nickel': 5, 'Penny': 1}

    quarters = math.floor(number/denominations['Quarter'])
    number %= denominations['Quarter']
    dimes = math.floor(number / denominations['Dime'])
    number %= denominations['Dime']
    nickels = math.floor(number / denominations['Nickel'])
    number %= denominations['Nickel']
    pennies = math.floor(number / denominations['Penny'])
    number %= denominations['Penny']

    return quarters, dimes, nickels, pennies

#Problem 2
def strip_quotes(string):
    return string.replace('\'', '').replace('\"', "")

#Problem 3
def scramble(string):
    return ''.join(random.sample(string, len(string)))

#Problem 4
def powers(base, limit):
    successive = 1
    while successive <= limit:
        yield successive
        successive *= base

#Problem 5
def triples(value):
    triplelist = list()
    for a in range(1, value+1):
        for b in range(1, value+1):
            for c in range(1, value+1):
                if (a ** 2) + (b ** 2) == (c ** 2) and (a < b < c):
                    tripleList.append(a,b,c)
    return triplelist

def say(firstWord = ''):
    if firstWord == '':
        return firstWord

    def sayAgain(nextWord = ''):
        if nextWord == '':
            return firstWord
        return say(firstWord + ' ' + nextWord)

    return sayAgain

#7
def interleave(array, *argv):
    result = []
    arrayLength = len(array)
    valuesLength = 0
    for arg in argv:
        valuesLength+=1
    max_len = max(arrayLength, valuesLength)
    for i in range(max_len):
        if (i < arrayLength):
            result.append(array[i])
        if (i < valuesLength):
            result.append(argv[i])
    return result

#8
class Cylinder:
    def __init__(self, radius = 1, height = 1):
        self.radius = radius
        self.height = height
    @property
    def volume(self):
        return math.pi * self.radius * self.radius * self.height
    @property
    def surface_area(self):
        return 2 * math.pi * self.radius * self.height + (2 * math.pi * self.radius * self.radius)
    def stretch(self, stretch_factor):
        self.height *= stretch_factor
    def widen(self, widen_factor):
        self.radius *= widen_factor


#9
def make_crypto_functions(key):
    k = Fernet(key)
    def encrypt(s):
        return k.encrypt(s)
    def decrypt(token):
        return k.decrypt(token)
    return (encrypt, decrypt)

#10
def random_name(**k):
    url = 'http://uinames.com/api/'
    info = requests.get(url=url, params=k)
    person = json.loads(info.content)
    if 'error' in person:
        raise ValueError('{"error": "Invalid gender"}')
    result = person.get('surname') + ', ' + person.get('name')
    return result
