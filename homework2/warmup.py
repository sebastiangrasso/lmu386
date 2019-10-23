#HomeWork 2, Sebastian Grasso

import math
from cryptography.fernet import Fernet
import re
import requests
import random
import simplejson as json

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
    triple_list = list()
    for a in range(1, value+1):
        for b in range(1, value+1):
            for c in range(1, value+1):
                if (a ** 2) + (b ** 2) == (c ** 2) and (a < b < c):
                    triple_list.append((a,b,c))
    return triple_list

#Problem 6
def say(firstword = ''):
    if firstword == '':
        return firstword

    def say_again(nextword = ''):
        if nextword == '':
            return firstword
        return say(firstword + ' ' + nextword)

    return say_again

#Problem 7
def interleave(original, *values):
    weave = original.copy()
    index = 0
    for value in values:
        index += 1
        weave.insert(index, value)
        if index < len(original):
            index +=1
    return weave

#Problem 8
class Cylinder:
    def __init__(self, radius=1, height =1):
        self.radius = radius
        self.height = height
    @property
    def volume(self):
        return math.pi * self.radius ** 2 * self.height
    @property
    def surface_area(self):
        return 2 * math.pi * self.radius * self.height + 2 * math.pi * self.radius ** 2

    def stretch(self, stretch_factor):
        self.height*= stretch_factor
    def widen(self, widen_factor):
        self.radius*= widen_factor

#Problem 9
def make_crypto_functions(key):
    code = Fernet(key)

    def encrypt(message):
        return code.encrypt(message)
    def decrypt(message):
        return code.decrypt(message)

    return encrypt, decrypt

#Problem 10
def random_name(**kwargs):
    url = 'http://uinames.com/api/'
    query = requests.get(url = url, params = kwargs)
    response = json.loads(query.content)
    print(response)
    if query.status_code < 200 or query.status_code > 299:
        raise ValueError(response)
    return response.get('surname') + ', ' + response.get('name')