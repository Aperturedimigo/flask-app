from flask import Flask, render_template, url_for, request

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(host = '133.130.101.236', port =5000,debug=True)
