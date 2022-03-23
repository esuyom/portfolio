$(document).ready(function() {
	var rnd;
	var array1;
	var meScore;
	var comScore;
	var clickEn = false;

	function rnd() {
		array1 = ["rock", "scissor", "paper"];
		for (var i in array1) {
			array1.sort(function() {
				return Math.random() - Math.random()
			});
			
		};
		
		$("#computer .hand").addClass(array1[0]);
		
		return array1;
	}

	
	function gameStart() {
		meScore = 0;
		comScore = 0;
		clickEn = true;
		
		rnd();
	}
	
	function reGame() {	
		$("#computer .hand").removeClass("rock");
		$("#computer .hand").removeClass("scissor");
		$("#computer .hand").removeClass("paper");
		$(".hand").removeClass("stretch");

		rnd();

	}
	gameStart();

	$("#user .hand").click(function(){
		if(clickEn == true && !$(this).hasClass("stretch")){
			clickEn = false;
			$(this).addClass("stretch");
			$("#computer .hand").addClass("stretch");
			
			if($(this).hasClass("rock")){
				if($("#computer .hand").hasClass("rock")){
					setTimeout(function() {
						reGame();
					}, 500);
				}else if($("#computer .hand").hasClass("scissor")){
					setTimeout(function() {
						meScore++;
						$("#meScore").text(meScore);
						reGame();
					}, 500);
				}else{
					setTimeout(function() {
						comScore++;
						$("#comScore").text(comScore);
						reGame();
					}, 500);
				}
			}else if($(this).hasClass("scissor")){
				if($("#computer .hand").hasClass("scissor")){
					setTimeout(function() {
						reGame();
					}, 500);
				}else if($("#computer .hand").hasClass("paper")){
					setTimeout(function() {
						meScore++;
						$("#meScore").text(meScore);
						reGame();
					}, 500);
				}else{
					setTimeout(function() {
						comScore++;
						$("#comScore").text(comScore);
						reGame();
					}, 500);
				}
			}else{
				if($("#computer .hand").hasClass("paper")){
					setTimeout(function() {
						reGame();
					}, 500);
				}else if($("#computer .hand").hasClass("rock")){
					setTimeout(function() {
						meScore++;
						$("#meScore").text(meScore);
						reGame();
					}, 500);
				}else{
					setTimeout(function() {
						comScore++;
						$("#comScore").text(comScore);
						reGame();
					}, 500);
				}
			}
			
			setTimeout(function() {
				clickEn = true;	
			}, 800);
		}

	});
	
	


})