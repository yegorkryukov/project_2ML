import urllib
from bs4 import BeautifulSoup as bs
import re


def scrape(url, collection):
    # get html
    with urllib.request.urlopen(url) as response:
        html = response.read()
    
    # get links, store in array
    # https://pythonspot.com/extract-links-from-webpage-beautifulsoup/
    soup = bs(html, 'lxml')
    links = []
    for link in soup.findAll('a', attrs={'href': re.compile("^http://")}):
        links.append(link.get('href'))

    # define dict to insert into db
    data = {
        "url": url, 
        "html": html, 
        "links": links
        }

    # insert dict into db document
    collection.insert_one(data)

    # test
    print('-----')
    print(links)
    print('-----')

    return html


