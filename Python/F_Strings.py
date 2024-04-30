from datetime import datetime
First_name = "Suraj"
Last_name = "Gupta"

_info = {'Name' : "Suraj", 'Age': 21}

if __name__ == '__main__':
    # line = "My name is {} {}".format(First_name, Last_name)
    # line = f'My name is {First_name} {Last_name}'
    # line = f'My name is {First_name.upper()} {Last_name.lower()}'
    # line = "My Name is {} and I am {} years old".format(_info['Name'], _info['Age'])
    # line = f'My Name is {_info["Name"]} and i am {_info["Age"]} years old.' 
    # print(line)

    # for n in range(1,6):
    #     statement = f"The value is {n:02}"
    #     print(statement)

    
    birthday = datetime(2003, 1, 17)
    print(f"My birthday is on {birthday}")

