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
    triplelist = list()
    for a in range(1, value+1):
        for b in range(1, value+1):
            for c in range(1, value+1):
                if (a ** 2) + (b ** 2) == (c ** 2) and (a < b < c):
                    tripleList.append(a,b,c)
    return triplelist

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
