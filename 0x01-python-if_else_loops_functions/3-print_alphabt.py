#!/usr/bin/python3
for letter in range(97, 123):
    if not(letter == 101 or letter == 113):
        print("{}".format(chr(letter)), end="")
