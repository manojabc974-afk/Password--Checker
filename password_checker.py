import re

password = input("Enter your password: ")

strength = "Weak"

if (len(password) >= 8 and
    re.search("[A-Z]", password) and
    re.search("[a-z]", password) and
    re.search("[0-9]", password) and
    re.search("[@#$%^&+=]", password)):
    strength = "Strong"

elif len(password) >= 6:
    strength = "Medium"

print("Password Strength:", strength)