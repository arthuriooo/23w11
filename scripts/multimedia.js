$(document).ready(function(){
	$('#videoButton').on('click', function(){
		$('#clip').fadeIn();
		setTimeout(function(){
			$('#dopeArt').trigger('play');
		}, 300);
	});
});