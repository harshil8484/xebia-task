$(document).ready(function(){
	$('#login').click(function(){
		var user = $("#user").val();
		var password = $('#password').val();
		var error = true;

		$('#loading').html("<img src='images/loader.gif'/>").fadeIn('fast');

		$.ajax({
			type:"GET",
			url:"http://swapi.co/api/people/1/?format=json",
			dataType:"json",
			success:function(data){
				$('#loading').fadeOut('fast');
				var name = data.name;
				var birth= data.birth_year;
				if(user == name && password == birth){
					alert("correct");
				}
				 	
				
			}

		});
		return false;
	});	
});


// $.ajax({
// 			type:"GET",
// 			url:"http://swapi.co/api/people/1/?format=json",
// 			success:function(data){
// 				console.log(data.name,data.birth_year)
// 			}
// 		});