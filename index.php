<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href='./imports/normalize.css'>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    <script type='text/javascript' src='./imports/jquery-3.1.1.js'></script>
    <script type="text/javascript" src="./imports/jquery-css-transform.js"></script>
    <script type="text/javascript" src="./imports/jquery-animate-css-rotate-scale.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
    <script type="text/javascript" src='./imports/jquery.ui.touch-punch.js'></script>

    <script type='text/javascript' src='./scripts/script.js'></script>
    <script type='text/javascript' src='./scripts/animations.js'></script>
    <script type="text/javascript" src='./scripts/loginAnimations.js'></script>
    <script type='text/javascript' src='./scripts/menu.js'></script>
    <script type='text/javascript' src='./scripts/language.js'></script>
    <script type='text/javascript' src='./scripts/slider.js'></script>
    <script type='text/javascript' src='./scripts/radio.js'></script>
    <script type='text/javascript' src='./scripts/search.js'></script>
    <script type='text/javascript' src='./scripts/uv.js'></script>

    <script type='text/javascript' src='./scripts/multimedia.js'></script>



  <title>23W11</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="./audiojs/audio.min.js"></script>
  <script>
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });
</script>
</head>

<body>

  <div id="page">
    <!-- -------------- -->

    <img src="pics/paintings/birthCut2.png" id="birthCut">

    <!-- -------------- -->
    <div id="frontLayer">
      <!-- ---- -->
      <div id="mainHeader">
        <div id="mainDarken"></div>
        <div id="mainHeaderBackground">
          <img src="./pics/paintings/birthCut4.png"/>
        </div>
        <div id="mainHeaderPanel">
          <language id="mainLanguage">
            <span id="mainEn">EN</span><span>|</span><span id="mainRu">RU</span>
          </language>
          <div id="mainLogo">23W11</div>
          <div id="mainMenuLine">
            <ul id="mainMenu">
              <li id="mainTime">TIME</li>
              <li id="mainSpace">SPACE</li>
              <li id="mainMe">ME</li>
              <li id="mainMusic">MUSIC</li>
              <li id="mainAuction">AUCTION</li>
              <li id="mainContacts">CONTACT ME</li>
            </ul>
          </div>
           <div id="mainSearch">
            <img src="./pics/icons/searchWhite.png">
          </div>
          <div id="mainTopButtons">
            <img src="./pics/icons/bulb.png">
            <img src="./pics/icons/lockWh.png">
          </div>
        </div>
      </div>
      <!-- -------------------------------------- -->
      <!-- -------------------------------------- -->
      <div id="topButtons">
        <div id="uv" class="uvUnHover">
          <img id='uvButton' src="pics/icons/bulb.png">
        </div>
        <div id="lock" class="lockUnHover">
          <img id='lockButton' src="pics/icons/lockWh.png">
        </div>
      </div>
      <!-- -------------- -->
      <div id="maxLine">

        <div id="language">
          <div id='languagewrap'>
            <div id="trigger"></div>
            <div id="en">
              <p>EN</p>
            </div>
            <div id="ru">
              <p>RU</p>
            </div>
          </div>
        </div>
        <!-- -------------- -->
        <div id="search">
          <div id="searchPanel">
            <input type="text" placeholder="search..."/>
            <img src="./pics/icons/searchWhite.png" id="searchReady">
            <img src="./pics/icons/cancelWhite.png" id="searchCancel">
          </div>
          <img src="./pics/icons/searchWhite.png" id="searchButton">
        </div>
      </div>
      <!-- -------------- -->
      <div id="logoLine">
        <div id="logo">
          <p id="logoText">23W11</p>
        </div>
      </div>
      <!-- -------------- -->
      <div id="menuLine">
        <ul id="menu">
          <li id="time">TIME</li>
          <li id="space">SPACE</li>
          <li id="me">ME</li>
          <li id="music">MUSIC</li>
          <li id="auction">AUCTION</li>
          <li id="contacts">CONTACT ME</li>
        </ul>
      </div>
      <!-- -------------- -->
      <!-- -------------- -->
      <div id="videoLine">
        <div id="videoButton" class="videoUnPush">
          <p id='watchVid'>watch clip</p>
        </div>
      </div>
      <!-- -------------- -->
      <div id="picsLine">
        <div id="picsButton" class="picsUnPush">
          <p id='watchPics'>show paintings</p>
        </div>
      </div>
      <!-- -------------- -->
      <!-- -------------- -->
      <!-- <div id="radioLine">
        <div id="radio"></div>
      </div> -->
      <div id="radio">
        <img src="./pics/icons/next.png" id="playPrev">
        <div id="radioButton" class='unHoverButt'>
          <p>RADIO</p>
          <div id="controlRadio">
            <div id="playPauseDiv">
              <img src="./pics/icons/pause.png" id="playPause">
            </div>
            <div id="stopDiv">
              <img src="./pics/icons/stop.png" id="stop">
            </div>
          </div>
        </div>
        <img src="./pics/icons/next.png" id="playNext">
      </div>
    </div>
    <div id="event">
      <p id="eventText">Выставка скоро</p>
    </div>

  </div>

  <!-- -- -- ---- -- -- ---- -- -- ---- -- -- -- -->
  <!--  -- -- ---- -- -- ---- -- -- ---- -- -- -- -->
  <!-- -- -- ---- -- -- ---- -- -- ---- -- -- -- -->
  <!--  -- -- ---- -- -- ---- -- -- ---- -- -- -- -->
  <!-- -- -- ---- -- -- ---- -- -- ---- -- -- -- -->


  <div id="clip">
    <img src="./pics/icons/cancelRed.png" id='closeVideo'>
    <video src="dopeart.mp4" id="dopeArt"></video>
  </div>

  <div id="viewPics">
    <div id="wholePic"><img/></div>
    <div id="closePics">закрыть</div>
    <!-- <div class='onePic'>
      <img src='./pics/paintings/hugs2.jpg'/>
    </div> -->

  </div>


  <!-- ------------------------------------------------ -->
  <!-- ------------------------------------------------ -->

  <div id="darkBack"></div>
  
  <div id="loginPage">
    <div id="login">
      <div id="closeLogin">
        <img src="pics/icons/cancelDark.png">
      </div>
      <div id='loginText'>
        <p id='loginText1'>23W11</p>
        <p id='loginText2'>login</p>
      </div>
      <form id="loginForm" action="index.php" method="post">
         <input type="text" name="username" placeholder="username">
         <input type="password" name="password" placeholder="password">
         <input type="submit" name="submit" value="LOG IN">
      </form>
    </div>
  </div>

  <!-- -------- -------- -------- -------- -->
  <!-- -------- -------- -------- -------- -->
  <!-- -------- -------- -------- -------- -->

  <div id="musicPanel">
    
    <div class="audiojs " classname="audiojs" id="audiojs_wrapper0">
      <audio preload="" src="./music/snoop420.mp3">
        
      </audio>          
      <div class="play-pause">             
        <p class="play"></p>             
        <p class="pause"></p>             
        <p class="loading"></p>             
        <p class="error"></p>           
      </div>           
      <div class="scrubber">             
        <div class="progress" style="width: 0px;">
          
        </div>             
        <div class="loaded" style="width: 280px;">
          
        </div>           
      </div>           
      <div class="time">             
        <em class="played">00:00</em>/<strong class="duration">03:57</strong>           
      </div>           
      <div class="error-message">
        
      </div>
    </div>

    <audio preload></audio>
      <ul>
        <li><a href="#" data-src="./music/snoop420.mp3">Snoop Dogg - 420 (Blaze Up) (Feat. Devin The Dude, Wiz Khalifa & DJ Battlecat)</a></li>
        <li><a href="#" data-src="./music/weeddabs.mp3">Mike Dean - Weed-Dabs-Weed-Dabs</a></li>
        <li><a href="#" data-src="./music/specters.mp3">Nicolas Jaar - Specters of the Future</a></li>
        <li><a href="#" data-src="./music/theego.mp3">Nicolas Jaar & Theatre Roosevelt - The Ego</a></li>
        <li><a href="#" data-src="./music/burnout.mp3">Washed Out - Burn out Blues</a></li>
        <!-- <li><a href="#" data-src="./music/"></a></li> -->
      </ul>
  </div>

</body>
</html>

<?php 
include ('includes/classes/DB.php');
// include ('includes/head.php');
?>
