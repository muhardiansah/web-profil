$(document).ready(function(){
	$("#slider img:gt(0)").hide();

	setInterval(function() {
		var current = $('#slider img:visible');

		var next = current.next().length ? current.next() : $('#slider img:eq(0)');
		current.fadeOut(1000);
		next.fadeIn(1000);
	}, 3000);
});
