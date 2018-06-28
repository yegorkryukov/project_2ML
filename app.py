from flask import Flask, jsonify, render_template

#create a session
session = Session(engine)

#make an app instance
app = Flask(__name__)

'''Define the Routes'''

#index
@app.route('/')
def index():
    return render_template('index.html')

#word cloud
@app.route('/word-cloud/<news_org>')
def cloud(news_org=None)
    return 

#chord diagram
@app.route('/chord')

#box plot
@app.route('/box')
  

#run the app
if __name__ == '__main__':
    app.run(debug=True)