class MyRange:
    def __init__(self, start, end):
        self.value = start
        self.end = end
    
    def __iter__(self):
        return self

    def __next__(self):
        if self.value >= self.end:
            raise StopIteration
        current = self.value
        self.value += 1
        return current


def my_range(start, end):
    current = start
    while current < end:
        yield current
        current += 1


if __name__ == "__main__":
    num = [1,2,3]
    i_num = iter(num)

    nums = MyRange(1, 10)
    for i in nums:
        print(i)
    # print(i_num)
    # print()
    # print(dir(i_num))
    try:
        # print(next(i_num))
        # print(next(i_num))
        # print(next(i_num))
        # print(next(i_num))
        for i in nums:
            print(i)
        print(next(nums))
    except Exception as exc:
        print(f"List Ended. {exc}")

    # for i in i_num:
    #     print(i)