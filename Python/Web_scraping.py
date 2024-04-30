from bs4 import BeautifulSoup
import requests

if __name__ == "__main__":
    # with open("Python\\Sample.html") as html_file:
    #     soup = BeautifulSoup(html_file, "lxml")
    #     # match = soup.find("body")
    #     # # print(match)

    #     # headline = match.h2.text
    #     # print(headline)

    #     for article in soup.find_all("body"):
    #         headline = article.h2.text
    #         print(headline)

    #         summary = article.p.text
    #         print(summary)

    #         print()
    html_file = requests.get("https://www.geeksforgeeks.org/python-programming-language/?ref=gcse").text
    soup = BeautifulSoup(html_file, "lxml")
    headline = html_file.h2.a.text
    print(headline)