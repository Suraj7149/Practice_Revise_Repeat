List1 = [0,1,2,3,4,5,6,7,8,9,10]

# To print the list in reverse or slice in reverse.
print(List1[::-1]) 

# To print small portion or a Sliced part.
print(List1[1:4])

# To print every nth element of the sliced part.
print(List1[1:7:2]) # n = 2


List2 = [n*n for n in List1]
n = 0
List3 = map(lambda n: n*n, List1)

List_4 = [num for num in List1 if num%2 ==0]

# for numbers in List1:
#     if numbers%2 == 0:
#         List_4.append(numbers)

print(List_4)

