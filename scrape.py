import urllib
from bs4 import BeautifulSoup as bs
import re
import requests
from pprint import pprint


class Scrape():


    def recursiveScrape(self, startURL, urls, htmlCollection, done_urls):
        
        for url in urls:
            # print("DONE: ", type(done_urls))
            # print("URLS: ", type(urls))
            if len(done_urls) == 0:
                # if url has been scraped, skip to next loop
                return done_urls
            elif url in done_urls:
                continue
            else:
                # scrape page
                with requests.get(url) as response:
                    html = response.text

                # define dict 
                data = {
                    "url": url, 
                    "html": html, 
                    }

                # store dict in database
                htmlCollection.insert_one(data)
                print("DONE: ", type(done_urls))
                # record url in "done" collection
                done_urls.append(url)
                print("DONE AGAIN: ", type(done_urls))
                
                # extract links
                links = Scrape.scrapeURL(html, startURL)

                # create set of links not in urls AND in domain
                subset = links - urls
                
                # recursive call with new set
                done_urls = done_urls.append(self.recursiveScrape(self, startURL, subset, htmlCollection, done_urls))
                


        return done_urls
    
    def scrapeHTML(url, htmlCollection, done_urls):

        # get html
        with requests.get(url) as response:
            html = response.text
     

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
            links.add(startURL + link.get('href'))

        return links

        


