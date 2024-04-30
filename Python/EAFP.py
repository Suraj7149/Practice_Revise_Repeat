# Duck typing and Easier to ask forgiveness than permission (EAFP)

class Duck:
    def quack(self):
        print("Quack, QUACK MODAFUKA!!!")
    
    def fly(self):
        print("Flappy, FLAPPY Bish!!!")

class Living_thing:
    def quack():
        print("I'm quacking like a duck.")
    
    def fly(self):
        print("I'm flapping my wings!")

def quack_and_fly(thing):
        if isinstance(thing, Duck):
            thing.quack()
            thing.fly()
        else:
            print("This has to be a Duck!")


# def quack_and_fly(thing):
#     if hasattr(thing,  "quack"):
#         if callable(thing.quack):
#             thing.quack()

#     if hasattr(thing,  "fly"):
#         if callable(thing.fly):
#             thing.fly()


if __name__ == "__main__":
    
    d = Duck()
    quack_and_fly(d)

    L = Living_thing()
    quack_and_fly(L)
