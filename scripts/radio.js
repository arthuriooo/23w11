$(document).ready(function(){
	
	// var playNow = 0;
	// var song = $('#song ul li');

	// var music = [
	// 	'./music/snoop420.mp3',
	// 	'./music/weeddabs.mp3',
	// 	'./music/specters.mp3',
	// 	'./music/theego.mp3',
	// 	'./music/burnout.mp3',
	// ];

	// $('#radioButton').on('click', function(){
	// 	song.attr('data-src', music[playNow]).play();
	// });

	$(function() { 
        // Setup the player to autoplay the next track
        var a = audiojs.createAll({
          trackEnded: function() {
            var next = $('ul li.playing').next();
            if (!next.length) next = $('ul li').first();
            next.addClass('playing').siblings().removeClass('playing');
            audio.load($('a', next).attr('data-src'));
            audio.play();
          }
        });
        
        // Load in the first track
        var audio = a[0];
            first = $('ul a').attr('data-src');
        $('ul li').first().addClass('playing');
        audio.load(first);

        // Load in a track on click
        $('ul li').click(function(e) {
          e.preventDefault();
          $(this).addClass('playing').siblings().removeClass('playing');
          audio.load($('a', this).attr('data-src'));
          audio.play();
        });
        // Keyboard shortcuts
        $(document).keydown(function(e) {
          var unicode = e.charCode ? e.charCode : e.keyCode;
             // right arrow
          if (unicode == 39) {
            var next = $('li.playing').next();
            if (!next.length) next = $('ul li').first();
            next.click();
            // back arrow
          } else if (unicode == 37) {
            var prev = $('li.playing').prev();
            if (!prev.length) prev = $('ul li').last();
            prev.click();
            // spacebar
          } else if (unicode == 32) {
            audio.playPause();
          }
        })
      });



});

