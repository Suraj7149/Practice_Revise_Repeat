# def square_numbers(nums):
#     for i in nums:
#         yield (i*2)
    
# if __name__ == '__main__':
#     my_nums = square_numbers([1,2,3,4,5])

#     try:
#         print(next(my_nums))
#         print(next(my_nums))
#         print(next(my_nums))
#         print(next(my_nums))
#     except Exception as Exc:
#         print(f"Program Termiated : {Exc}")
#     else:
#         pass
#     finally:
#         print("...")

nums = [x*x for x in [1,2,3,4,5]]
for num in nums:
    print(num)

