''' If-Else statements in Python are part of conditional statements, 
which decide the control of code.
Types of Control Flow in Python

Python control flow statements are as follows:

if, if-else, nested-if, if-elif-else ladder 

'''

# Python program to illustrate If.

if True:
    print("If Statement turned to True.")

# Python program to illustrade If-Else.

if False:
    print("If statement turned to Flase.")
else:
    print("Else block executed.")

# Python program to illustrate Nested-if.

if True:
    print("First block of If executed.")
    if True:
        print("Second block of if executed.")
        if False:
            print("Third block of if executed.")
        else: 
            print("First else block executed.")
else:
    print("second block of else executed.")

# Python illustration for Elif.
    
if False: 
    ...
elif True:
    print("First block of elif executed.")
else:
    print("Block of else has been executed.")

# Python program to illustrate short hand if-else 
i = 10
print(True) if i < 15 else print(False) 
a = 330
b = 340
print("A") if a > b else print("=") if a == b else print("B")
# c = (a+1) if a > b else (a+b) if a == b else (b+1)
# print(c)
