import logging


logging.basicConfig(filename="Test.log", level=logging.DEBUG, 
                    format='%(asctime)s:%(levelname)s:%(message)s ')
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x , y):
    return x/y

if __name__ == "__main__":
    
    num_1 = 10
    num_2 = 5

    # result_1 = add(num_1, num_2)
    # logging.debug("Add: {} + {} = {}".format(num_1, num_2, result_1))
    # result_2 = subtract(num_1, num_2)
    # logging.debug("Subtract: {} - {} = {}".format(num_1, num_2, result_2))
    # result_3 = multiply(num_1, num_2)
    # logging.debug("Multiply: {} * {} = {}".format(num_1, num_2, result_3))
    # result_4 = divide(num_1, num_2)
    # logging.debug("Divide: {} / {} = {}".format(num_1, num_2, result_4))