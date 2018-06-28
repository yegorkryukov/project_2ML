from flask import Flask, jsonify, render_template, send_file, url_for


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


# chord diagram
# @app.route('/chord')

# box plot
# @app.route('/box')
  

#run the app
if __name__ == '__main__':
    app.run(debug=True)