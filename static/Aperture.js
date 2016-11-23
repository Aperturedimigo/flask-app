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
});
