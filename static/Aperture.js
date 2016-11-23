$(window).bind('scroll', function() {
  if($(window).scrollTop() > 140) {
    $('#nav').addClass('navbar-fixed');
    document.getElementById('sublogo').classList.add('visible');
    document.getElementById('sublogo').classList.remove('hidden');
  }
  else {
    $('#nav').removeClass('navbar-fixed');
    document.getElementById('sublogo').classList.remove('visible');
    document.getElementById('sublogo').classList.add('hidden');
  }
  if($(window).scrollTop() < 140) {
    for(var i = 1; i <= 6; i++) {
      var N = 't' + i;
      document.getElementById(N).classList.remove('underline');
    }
  }
  else if($(window).scrollTop() < 900) {
    for(var i = 1; i <= 6; i++) {
      var N = 't' + i;
      if(i == 1) document.getElementById(N).classList.add('underline');
      else document.getElementById(N).classList.remove('underline');
    }
  }
  else if($(window).scrollTop() < 1700) {
    for(var i = 1; i <= 6; i++) {
      var N = 't' + i;
      if(i == 2) document.getElementById(N).classList.add('underline');
      else document.getElementById(N).classList.remove('underline');
    }
  }
  else if($(window).scrollTop() < 2720) {
    for(var i = 1; i <= 6; i++) {
      var N = 't' + i;
      if(i == 3) document.getElementById(N).classList.add('underline');
      else document.getElementById(N).classList.remove('underline');
    }
  }
  else if($(window).scrollTop() < 3280) {
    for(var i = 1; i <= 6; i++) {
      var N = 't' + i;
      if(i == 4) document.getElementById(N).classList.add('underline');
      else document.getElementById(N).classList.remove('underline');
    }
  }
  else if($(window).scrollTop() < 3690) {
    for(var i = 1; i <= 6; i++) {
      var N = 't' + i;
      if(i == 5) document.getElementById(N).classList.add('underline');
      else document.getElementById(N).classList.remove('underline');
    }
  }
  else {
    for(var i = 1; i <= 6; i++) {
      var N = 't' + i;
      if(i == 6) document.getElementById(N).classList.add('underline');
      else document.getElementById(N).classList.remove('underline');
    }
  }
});
