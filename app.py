from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    address = request.form['address']
    date = request.form['date']
    test = request.form['test']
    message = f'Blood sample collection request submitted successfully for {name} at {address} on {date} for {test} test.'
    return render_template('index.html', message=message)

if __name__ == '__main__':
    app.run(debug=True)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
