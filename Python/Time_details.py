import datetime

# d = datetime.date(2024, 2, 3)

d = datetime.date.today()
print(d)
print(d.weekday())
print(d.isoweekday())

tdelta = datetime.timedelta(days=7)

print(d + tdelta)
print(d - tdelta)


