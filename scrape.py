import urllib
from bs4 import BeautifulSoup as bs
import re
import requests
from pprint import pprint

class Scrape():

    '''
        this method takes a url, scrapes the html and stores it in the database as 
        a document.  It also appends the url into the "done" collection so that 
        the system can check it before calling the method.  It also calls the 
        scrapeURL to extract all the urls from the page
    '''
    def scrapeHTML(url, htmlCollection, done_LinksCollection, todo_LinksCollection):

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
        urlData = {
            "url": url
        }
        done_LinksCollection.insert_one(urlData)

        # call the scrapeURL method to capture all the links on the page
        # Scrape.scrapeURL(html, todo_LinksCollection)

        return html
    
    def scrapeURL(html, todo_LinksCollection):
        # create soup object to parse
        soup = bs(html, 'lxml')

        # pull Set object from todo_LinksCollection
        links = Set([])     # NOT RIGHT

        # crawl through soup object, find links, add to set object
        for link in soup.findAll('a', attrs={'href': re.compile("^http://")}):
            links.add(link.get('href'))

        # TODO: save Set object to database

        # test
        pprint(links)

        


