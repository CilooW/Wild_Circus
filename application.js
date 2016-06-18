$(document).ready(function(){
	
	$('#wherewhen').on('click','button',function(){
		var ok = $('<p>Ok! You shall pass and order <a href="#">here!</a></p>');
		
		if ($(this).filter('.available')){
			$(this).filter('.available').text('');
			$(this).filter('.available').append(ok).addClass('btn-success').removeClass('available');
		}
	

		var no = $('<p>Awww! Sorry, there is no longer places for this date!</p>');
		if ($(this).filter('.complete')){
			$(this).filter('.complete').text('');
			$(this).closest('.date').filter('.complete').append(no).addClass('btn-danger').removeClass('complete');
		}
		
	});
});

