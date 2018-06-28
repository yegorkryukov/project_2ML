from flask import Flask, jsonify, render_template
import json
import pprint

#make an app instance
app = Flask(__name__)

'''Define the Routes'''

#index
@app.route('/')
def index():
    return render_template('chordtest9.html')
    #return (
    #    f"<h1>Chord Diagram</h1><br/><br/>"
    #    f"Available Routes:<br/>"
    #    """<a href="/chord">Chord Diagram</a><br/>"""        
    #)

#chord diagram
@app.route('/chord')
def chord():

    with open('chorddata.json') as filename:
        chorddata = json.load(filename)

    return (jsonify(chorddata))     

#run the app
if __name__ == '__main__':
    app.run(debug=True)