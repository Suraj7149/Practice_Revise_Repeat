'''
Loops in python are as follows:

For , While, shorthand loops

'''

# Python illustration for For loops.

Name = "This is a string to contain name."

for Variable in Name:
    if Variable != "i" and Variable != "I":
        print(Variable, end= ' ')
    else:
        pass # or Continue
print(" ")

# Python illustration for While loop.

A = 100
print(" ")
while A != 0:
    if A%10 == 0:
        print(A)
        A=A-1
        #continue
    else:
        A = A-1
print(' ')



# # Python illustration for Shorthand loop.

numbers = [12, 34, 1, 4, 4, 67, 37, 9, 0, 81]

# # Approach 1
# result = []
# for index in range(len(numbers)):
#     if numbers[index] > 5:
#         result.append(numbers[index])
# print(result)  #Prints [12, 34, 67, 37, 9, 81]

# Approach 2 (Slightly cleaner, for-in loops)
result = []
for number in numbers:
    if number > 5:
        result.append(number)
print(result) #Prints [12, 34, 67, 37, 9, 81]

# # Approach 3 (Enter List Comprehension)
# result = []
# result = [number for number in numbers if number > 5]
# print(result)
# # or more generally:
# #[function(number) for number in numbers if condition(number)]
