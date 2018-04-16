$(document).ready(function(){
	$('#eventsBtn').on('click', function(){
		$('#events').css('display', 'block');
		$('#posts').css('display', 'none');
		$('#paintings').css('display', 'none');
		$('#music').css('display', 'none');
		$('#auction').css('display', 'none');

		$('#panelTitle').text('панель управления - события');
	});
	$('#postsBtn').on('click', function(){
		$('#events').css('display', 'none');
		$('#posts').css('display', 'block');
		$('#paintings').css('display', 'none');
		$('#music').css('display', 'none');
		$('#auction').css('display', 'none');

		$('#panelTitle').text('панель управления - статьи');
	});
	$('#paintingsBtn').on('click', function(){
		$('#events').css('display', 'none');
		$('#posts').css('display', 'none');
		$('#paintings').css('display', 'block');
		$('#music').css('display', 'none');
		$('#auction').css('display', 'none');

		$('#panelTitle').text('панель управления - картины');
	});
	$('#musicBtn').on('click', function(){
		$('#events').css('display', 'none');
		$('#posts').css('display', 'none');
		$('#paintings').css('display', 'none');
		$('#music').css('display', 'block');
		$('#auction').css('display', 'none');

		$('#panelTitle').text('панель управления - музыка');
	});
	$('#auctionBtn').on('click', function(){
		$('#events').css('display', 'none');
		$('#posts').css('display', 'none');
		$('#paintings').css('display', 'none');
		$('#music').css('display', 'none');
		$('#auction').css('display', 'block');

		$('#panelTitle').text('панель управления - аукцион');
	});


	$('#toAddNewPost').on('click', function(){
		$('#alreadyPosted').fadeOut();
		$('#addNewPost').fadeIn();
		$('#panelTitle').text('панель управления - статьи - новая статья');
	});
});








