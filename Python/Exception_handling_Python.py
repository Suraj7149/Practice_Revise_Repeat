


if __name__ == '__main__':
    try: 
        print(int("a"))

    except Exception as Exc:
        print(f"Program terminated : "+ str(Exc))

    else:
        print(int("123"))
    finally:
        print("456")