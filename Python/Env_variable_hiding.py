import os 

user = os.environ.get("User")
pwd = os.environ.get("Password")

print(f'Username : {user} \nPassword : {pwd}')