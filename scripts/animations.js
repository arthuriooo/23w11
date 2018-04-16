$(document).ready(function(){
	var radioOn = false; 

	function radioTransform() {
		radioOn = true;

		$('#radioButton p').fadeOut();
		setTimeout(function(){
			$('#radioButton')
			.animate({
				height: '60px'
			},500,function(){})
			.removeClass("hoverButt")
			.addClass("unHoverButt");
			$('#playPrev, #playNext').css('display','inline');
		}, 500);
		setTimeout(function(){
			$('#controlRadio').fadeIn(600);
			$('#playPrev').animate({
				right: '60%',
				opacity: '0.8'
			}, 700,function(){});
			$('#playNext').animate({
				left: '60%',
				opacity: '0.8'
			}, 700,function(){});
		}, 1000);
	}

	function goToMainVersion() {
		$('#playPause').attr('src','./pics/icons/play.png')
		$('#birthCut, #topButtons, #maxLine, #logoLine, #menuLine, #videoLine, #picsLine').fadeOut(800);
		setTimeout(function(){
			$('#mainHeader').animate({
				top: '0'
			}, 600, function(){});
		}, 600);
	}

	$('#radioButton').on('click', function(){
		radioTransform();
	});

	$("#radioButton").hover(function() {
		if (!radioOn) {
			$("#radioButton").removeClass("unHoverButt").addClass("hoverButt"); 
		}
	}, function() {
		if (!radioOn) {
   			$("#radioButton").removeClass("hoverButt").addClass("unHoverButt");  
		}
	});

	$('#videoButton').on('click', function(){
		$('#clip').fadeIn();
		setTimeout(function(){
			$('#dopeArt').play();
		}, 300);
	});

	$('#closeVideo').on('click', function(){
		var video = document.getElementById('dopeArt');
		video.pause();
		video.currentTime = 0;
		video.load();
		$('#clip').fadeOut();
	});


	var n = 1;
	var p;

	var pics = [
		'./pics/paintings/hugs2.jpg',
		'./pics/paintings/mollywood2.jpg',
		'./pics/paintings/supreme2.jpg',
		'./pics/paintings/trip2.jpg',
		'./pics/paintings/techno2.jpg',
		'./pics/paintings/twilight2.jpg',
		'./pics/paintings/vision2.jpg',
		'./pics/paintings/cluster2.jpg',
		'./pics/paintings/birth2.png',
		'./pics/paintings/ambition2.jpg',
		'./pics/paintings/admire2.jpg'
	];

	$('#picsButton').on('click', function(){
		$('#viewPics').fadeIn(700);
		if (n == 1) {
			for (p in pics) {
				$('#viewPics')
				.append("<div class='onePic'><img src='" + pics[p] + "'></div>");
			}
		}
		n++;
	});

	$('#closePics').on('click', function(){
		$('#viewPics').fadeOut(700);
	});


	



	


	// ---
	$("#uv").hover(function() {
    	$("#uv").removeClass("uvUnHover").addClass("uvHover"); 
    }, function() {
       	$("#uv").removeClass("uvHover").addClass("uvUnHover");  
	});
	// --------------
	$("#lock").hover(function() {
    	$("#lock").removeClass("lockUnHover").addClass("lockHover"); 
    }, function() {
       	$("#lock").removeClass("lockHover").addClass("lockUnHover");  
	});
	// ---
	// 
	// ---
	$("#videoButton").hover(function() {
    	$("#videoButton").removeClass("videoUnPush").addClass("videoPush"); 
    }, function() {
       	$("#videoButton").removeClass("videoPush").addClass("videoUnPush");  
	});
	// ---------------
	$("#picsButton").hover(function() {
    	$("#picsButton").removeClass("picsUnPush").addClass("picsPush"); 
    }, function() {
       	$("#picsButton").removeClass("picsPush").addClass("picsUnPush");  
	});
	// ---
	// 
	// ---
	$('#time').on('click', function(){
		radioTransform();
		goToMainVersion();
	});
	$('#space').on('click', function(){
		radioTransform();
		goToMainVersion();
	});
	$('#me').on('click', function(){
		radioTransform();
		goToMainVersion();
	});
	$('#music').on('click', function(){
		radioTransform();
		goToMainVersion();
		$('#musicPanel').fadeIn();
	});
	$('#auction').on('click', function(){
		radioTransform();
		goToMainVersion();
	});
	$('#contacts').on('click', function(){
		radioTransform();
		goToMainVersion();
	});
});














