'''
궁금한거 있으면 leynuxms@gmail.com이나 010-9811-1040으로 문자주세요.

Developed by mase. 2016.11.26
Copyright by Aperture in Dimigo.

'''

# 첫번째 줄에서 불러온 것은 필수적이니 제거 하지 말아요.
from flask import Flask, render_template, url_for, request, redirect
app = Flask(__name__)

# PC
@app.route('/')
def main():
    return render_template('main.html')


if __name__ == '__main__':
    app.run(host = '0.0.0.0', port =80)
