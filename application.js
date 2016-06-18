$(document).ready(function(){
	
	$('#wherewhen').on('click','.btn',function(){
		
	$('.date').filter('.available').removeClass('btn-default').addClass('btn-success');
	$('.date').filter('.complete').removeClass('btn-default').addClass('btn-danger');
	});
	
	
});

