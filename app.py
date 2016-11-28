'''
궁금한거 있으면 leynuxms@gmail.com이나 010-9811-1040으로 문자주세요.

Developed by mase. 2016.11.26
Copyright by Aperture in Dimigo.

'''

# 첫번째 줄에서 불러온 것은 필수적이니 제거 하지 말아요.
from flask import Flask, render_template, url_for, request, redirect
from flask.ext.mobility.decorators import mobile_template
from mobile.sniffer.detect import  detect_mobile_browser
from mobile.sniffer.utilities import get_user_agent

app = Flask(__name__)
ua = get_user_agent(self.request)

#404떳을 경우
@app.errorhandler(404)
def page_not_found():
    return render_template('404page.html'), 404

# PC
@app.route('/')
def main():
    return render_template('main.html')

#모바일 기기를 위해 리다이렉팅을 하기위해서 만든 함수
@app.route('/mobile')
def mobile():
    return render_template('mobileAperture.html')

if __name__ == '__main__':
    app.run(host = '133.130.101.236', port =5000,debug=True)
