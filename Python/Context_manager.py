class open_file():
    
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode       
        print("File Opened.")
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_val, trackback):
        self.file.close()
        print("File Closed")

if __name__ == "__main__":
    with open_file("Python\\Sample.txt", "w") as File:
        File.write("Testing")

    print(File.closed)