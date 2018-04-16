$(document).ready(function(){

  var i = 0;
  var r = 2;
  var m = 2;
  var l = 2;

  var step = ['r-2','r-1','r','r+1','r+2'];

  var images = [
    'pics/cluster2.jpg',
    'pics/supreme2.jpg',
    'pics/ambition2.jpg',
    'pics/trip2.jpg',
    'pics/techno2.jpg',
    'pics/mollywood2.jpg',
    'pics/hugs2.jpg',
    'pics/twilight2.jpg',
    'pics/vision2.jpg',
    'pics/admire2.jpg',
    'pics/birth2.png',
  ];

  function changePics() {
    $('#tooLeftImg').attr('src',images[i]);
    $('#leftImg').attr('src',images[i+1]);
    $('#mainImg').attr('src',images[i+2]);
    $('#rightImg').attr('src',images[i+3]);
    $('#tooRightImg').attr('src',images[i+4]);
  };

  changePics();

  var positions = [
    '#tooLeftImg',
    '#leftImg',
    '#mainImg',
    '#rightImg',
    '#tooRightImg'
  ];

  function getNewNumber() {
    if (l < 0) {
      l = images.length;
    }
  }


// LEFT FUNCTIONS
  function leftMove1(leftPosition) {
    $(leftPosition).animate({
      width: '+=10%',
      top: '-=10%',
      left: '+=15%'
    },500,function(){});
  };
  function leftMove2(leftPosition) {
    $(leftPosition).animate({
      width: '+=15%',
      top: '-=15%',
      left: '+=30%'
    },500,function(){});
  };
  function leftMove3(leftPosition) {
    $(leftPosition).animate({
      width: '-=15%',
      top: '+=15%',
      left: '+=45%'
    },500,function(){});
  };
  function leftMove4(leftPosition) {
    $(leftPosition)
    .animate({
      width: '-=10%',
      top: '+=10%',
      left: '+=40%'
    },500,function(){});
  };
  function revertLeftMove(revertLeftPosition) {
    $(revertLeftPosition)
    .css({
      'width': '15%',
      'top': '30%',
      'left': '-15%' })
    .prop('src',images[l]);
  }

// RIGHT FUNCTIONS

  function revertRightMove(revertRightPosition) {
    $(revertRightPosition)
    .css({
      'width': '15%',
      'top': '30%',
      'right': '-15%' })
    .prop('src',images[l]);
  }
  function rightMove1(rightPosition) {
    $(rightPosition).animate({
      width: '-=10%',
      top: '+=10%',
      left: '-=15%'
    },500,function(){});
  };
  function rightMove2(rightPosition) {
    $(rightPosition).animate({
      width: '-=15%',
      top: '+=15%',
      left: '-=30%'
    },500,function(){});
  };
  function rightMove3(rightPosition) {
    $(rightPosition).animate({
      width: '+=15%',
      top: '-=15%',
      left: '+=45%'
    },500,function(){});
  };
  function rightMove4(rightPosition) {
    $(rightPosition)
    .animate({
      width: '+=10%',
      top: '-=10%',
      left: '-=40%'
    },500,function(){});
  };

  function lf(step) {
    leftMove1(positions[step[0]]);
    leftMove2(positions[step[1]]);
    leftMove3(positions[step[2]]);
    leftMove4(positions[step[3]]);

    revertLeftMove(positions[step[4]]);

  }

  function rf(step) {
    leftMove1(positions[step[0]]);
    leftMove2(positions[step[1]]);
    leftMove3(positions[step[2]]);
    leftMove4(positions[step[3]]);

    revertRightMove(positions[step[4]]);

  }

  function replace() {
    for (i = 0; i < step.length; i++) {
      if (step[i] == 'r-2') {
        step[i] == 'r+2';
      }
      else if (step[i] == 'r-1') {
        step[i] == 'r-2';
      }
      else if (step[i] == 'r') {
        step[i] == 'r-1';
      }
      else if (step[i] == 'r+1') {
        step[i] == 'r';
      }
      else if (step[i] == 'r+2') {
        step[i] == 'r+1';
      }
    }
  }


// LEFT ARROW CLICKED
$('#leftArrow').on('click', function(){
  if (m == 1) {
    leftMove1(positions[r-2]);
    leftMove2(positions[r-1]);
    leftMove3(positions[r]);
    leftMove4(positions[r+1]);

    revertLeftMove(positions[r+2]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 2) {
    leftMove1(positions[r+2]);
    leftMove2(positions[r-2]);
    leftMove3(positions[r-1]);
    leftMove4(positions[r]);
    revertLeftMove(positions[r+1]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 3) {
    leftMove1(positions[r+1]);
    leftMove2(positions[r+2]);
    leftMove3(positions[r-2]);
    leftMove4(positions[r-1]);
    revertLeftMove(positions[r]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 4) {
    leftMove1(positions[r]);
    leftMove2(positions[r+1]);
    leftMove3(positions[r+2]);
    leftMove4(positions[r-2]);
    revertLeftMove(positions[r-1]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 5) {
    leftMove1(positions[r-1]);
    leftMove2(positions[r]);
    leftMove3(positions[r+1]);
    leftMove4(positions[r+2]);
    revertLeftMove(positions[r-2]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 6) {
    leftMove1(positions[r-1]);
    leftMove2(positions[r]);
    leftMove3(positions[r+1]);
    leftMove4(positions[r+2]);
    revertLeftMove(positions[r-2]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 7) {
    leftMove1(positions[r-1]);
    leftMove2(positions[r]);
    leftMove3(positions[r+1]);
    leftMove4(positions[r+2]);
    revertLeftMove(positions[r-2]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 8) {
    leftMove1(positions[r-1]);
    leftMove2(positions[r]);
    leftMove3(positions[r+1]);
    leftMove4(positions[r+2]);
    revertLeftMove(positions[r-2]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 9) {
    leftMove1(positions[r-1]);
    leftMove2(positions[r]);
    leftMove3(positions[r+1]);
    leftMove4(positions[r+2]);
    revertLeftMove(positions[r-2]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 10) {
    leftMove1(positions[r-1]);
    leftMove2(positions[r]);
    leftMove3(positions[r+1]);
    leftMove4(positions[r+2]);
    revertLeftMove(positions[r-2]);
    m++;
    l--;
    getNewNumber();
  }
  else if (m == 11) {
    leftMove1(positions[r-1]);
    leftMove2(positions[r]);
    leftMove3(positions[r+1]);
    leftMove4(positions[r+2]);
    revertLeftMove(positions[r-2]);
    m = 2;
    l--;
    getNewNumber();
  }
});

// RIGHT ARROW CLICKED
$('#rightArrow').on('click', function(){

  if (m == 11) {
    revertRightMove(positions[r-2]);
    rightMove1(positions[r-1]);
    rightMove2(positions[r]);
    rightMove3(positions[r+1]);
    rightMove4(positions[r+2]);

    m--;
    l--;
    getNewNumber();
  }
  else if (m == 5) {
    revertRightMove(positions[r-1]);
    rightMove1(positions[r]);
    rightMove2(positions[r+1]);
    rightMove3(positions[r+2]);
    rightMove4(positions[r-2]);

    m--;
    l--;
    getNewNumber();
  }
  else if (m == 4) {
    revertRightMove(positions[r]);
    rightMove1(positions[r+1]);
    rightMove2(positions[r+2]);
    rightMove3(positions[r-2]);
    rightMove4(positions[r-1]);

    m--;
    l--;
    getNewNumber();
  }
  else if (m == 3) {
    revertRightMove(positions[r+1]);
    rightMove1(positions[r+2]);
    rightMove2(positions[r-2]);
    rightMove3(positions[r-1]);
    rightMove4(positions[r]);

    m--;
    l--;
    getNewNumber();
  }
  else if (m == 2) {
    revertRightMove(positions[r+2]);
    rightMove1(positions[r-2]);
    rightMove2(positions[r-1]);
    rightMove3(positions[r]);
    rightMove4(positions[r+1]);

    m--;
    l--;
    getNewNumber();
  }
});


});
