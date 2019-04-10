var globalUrl = 'http://39.98.33.48/';
$('.mavList li').click(function() {
	var tarUrl = $(this).attr("data-url");
	window.location.href= globalUrl + tarUrl;
})
