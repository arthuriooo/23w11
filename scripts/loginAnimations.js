$(document).ready(function(){
	// -----
	$('#closeLogin').on('click', function(){
		$('#loginPage').animate({
			top: '-100%'
		}, 700, function(){});
		$('#darkBack').animate({
			backgroundColor: 'rgba(32, 37, 42, 0)'
		}, 500, function(){});
		setTimeout(function(){
			$('#page').css('filter','blur(0px)');
		}, 200);
		setTimeout(function(){
			$('#darkBack').css('display','none');
		}, 500);
	});
// -----------------------
	$('#lock').on('click', function(){
		$('#loginPage').animate({
			top: '0'
		}, 700, function(){});
		$('#darkBack').animate({
			backgroundColor: 'rgba(32, 37, 42, 0.8)'
		}, 500, function(){});
		setTimeout(function(){
			$('#page').css('filter','blur(10px)');
		}, 600);
		setTimeout(function(){
			$('#darkBack').css('display','block');
		}, 500);
	});
	// -----
});