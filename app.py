from flask import (Flask, jsonify, render_template, 
                   send_file, url_for)
import json


#make an app instance
app = Flask(__name__)

'''Define the Routes'''

#index
@app.route('/')
def index():
    return render_template('index.html')

#word cloud
@app.route('/view/<word_cloud>')
def cloud(word_cloud):
    return send_file(f"static/img/{word_cloud}")

#chord diagram
@app.route('/chord')
def chord():

    with open('static/data/chorddata.json') as filename:
        chorddata = json.load(filename)

    return (jsonify(chorddata))   

#boxplot
@app.route('/boxplot')
def boxplot():

    with open('static/data/boxdata.json') as filename:
        boxdata = json.load(filename)

    return (jsonify(boxdata)) 

#run the app
if __name__ == '__main__':
    app.run(debug=True)