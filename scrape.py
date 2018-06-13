import urllib
from bs4 import BeautifulSoup as bs
import re
import requests
from pprint import pprint


class Scrape():
 
    def scrapeHTML(url, htmlCollection, done_urls):

        # get html
        try:   
            with requests.get(url) as response:
                #print(response)
                if response.ok:
                    html = response.text
                else:
                    return False
        except Exception as e:
            print(f'Error: {e}')
        else:
            pass
            

     
        # define dict to insert into db
        data = {
            "url": url, 
            "html": html, 
            }

        # insert dict into db document
        htmlCollection.insert_one(data)

        # record url in "done" collection
        done_urls.add(url)

        return html
    
    def scrapeURL(html, startURL):
        # create soup object to parse
        soup = bs(html, 'lxml')

        # crawl through soup object, find links, add to set object
        links = set()
        for link in soup.findAll('a'):
            links.add(urllib.parse.urljoin(startURL, link.get('href')))

        return links

        


