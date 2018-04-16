$(document).ready(function(){
  var lang = 'en';

  $('#en').on('click',function(){
    if (lang == 'ru') {
      $('#trigger').animate({
        left: '0%'
      },500,function(){});
      $('#en p').animate({
        color:'black'
      },500,function(){});
      $('#ru p').animate({
        color:'white'
      },500,function(){});
      lang = 'en';
    }
  });
  $('#ru').on('click',function(){
    if (lang == 'en') {
      $('#trigger').animate({
        left: '50%'
      },500,function(){});
      $('#en p').animate({
        color:'white'
      },500,function(){});
      $('#ru p').animate({
        color:'black'
      },500,function(){});
      lang = 'ru';
    }
  });
});
