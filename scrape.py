import urllib
from bs4 import BeautifulSoup as bs
import re
import requests
from pprint import pprint


class Scrape():
 
    def scrapeHTML(url):

        # get url
        try:   
            response = requests.get(url)
        except Exception as e:
            print(f'ScrapeHTML: {e}')

            # return false for scrapeURL check in parent app
            return False

        return response.text
    
    def scrapeURL(html, startURL):
        # create soup object to parse
        soup = bs(html, 'lxml')



        # crawl through soup object, find links, add to set object
        links = set()
        for link in soup.findAll('a'):
            if 'http' in startURL:
                links.add(urllib.parse.urljoin(startURL, link.get('href')))
            else:
                continue

        return links

