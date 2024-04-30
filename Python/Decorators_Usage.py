def prefix_decorator(prefix):
    def decorator_function(original_function):
        def wrapper_function(*args, **kwargs):
            print(prefix, end=" ")
            result = original_function(*args, **kwargs)
            return result
        return wrapper_function
    return decorator_function


@prefix_decorator("Out:")
def display_info(name, age):
    print("display_info ran with arguments ({}, {})".format(name,age))

if __name__ == "__main__":
    display_info("Suraj", 21)
    display_info("Faceit grinders", 1)