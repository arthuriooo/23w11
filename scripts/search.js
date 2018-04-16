$(document).ready(function(){
  $('#searchButton').on('click',function(){
    setTimeout(function(){
      $('#searchPanel').animate({
        top: '8px'
      },500,function(){});
    },500);
    $('#searchButton').animate({
      top: '-110%'
    },500,function(){});
  });

  $('#searchCancel').on('click',function(){

    $('#searchPanel').animate({
      top: '-110%'
    },500,function(){});
    setTimeout(function(){
      $('#searchButton').animate({
        top: '0'
      },500,function(){});
    },500);
  });
});
