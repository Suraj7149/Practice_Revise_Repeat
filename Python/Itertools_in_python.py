import itertools

# counter = itertools.count()
# counter = itertools.count(start = 5, step = 5)
counter = itertools.cycle([1,2])
# counter = itertools.count(start = 5, step =-2)

# for num in counter:
#     print(num)

print(next(counter))
print(next(counter))
print(next(counter))

data = [100, 200, 300, 400]

daily_data = list(zip(itertools.count(), data))

# print(daily_data)