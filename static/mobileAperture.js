// 모바일 부분 자바스크립트

//모바일 기기일시 페이지 리다이렉팅
var mobileDevice = new Array("iPhone", "iPod", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "SonyEricsson");
for(var txt in mobileDevice){
  if(navigator.userAgent.match(mobileDevice[txt]) != null){
    location.href='m.wonny.me';

  }
}

//툴바 감추기
window.addEventListener('load', function(){setTimeout(scrollTo, 0, 0, 1);}, false);
