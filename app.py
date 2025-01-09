from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/driver-behavior')
def driver_behavior():
    return render_template('driver_behavior.html')

@app.route('/collaboration')
def collaboration():
    return render_template('collaboration.html')

@app.route('/sustainability')
def sustainability():
    return render_template('sustainability.html')

@app.route('/driver-ranking')
def driver_ranking():
    return render_template('driver_ranking.html')

if __name__ == '__main__':
    app.run(debug=True)