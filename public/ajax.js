$(function(){
	$('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$.ajax({
			url:'http://localhost:3000',
			method:'post',
			data:{
				heading:$('.heading').val(),
				text:$('.text').val()
			},
			success: function(res){
				console.log(res);
				location.href=location.href;

			},
			error: function(res){
				console.log(res.responseText);
			}
		});
	});
});