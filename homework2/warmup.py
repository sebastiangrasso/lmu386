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
    return string.replace("'\''", "").replace('\"', "")

#Problem 3
def scramble(string):
    return string.join(random.sample(string, len(string)))

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