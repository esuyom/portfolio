$(document).ready(function() {
	var rnd;
	var clickEn = false;
	var select;
	var count;
	var array1;
	var score;

	function cardRnd() {
		array1 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
		for (var i in array1) {
			array1.sort(function() {
				return Math.random() - Math.random()
			});
			
		};
		
		console.log(array1);		
		for(var i = 0; i < array1.length; i++){
			$(".card" + i).children(".back").addClass("b"+ array1[i]);
		}
		
		return array1;
	}
	
	$(".reset").click(function() {
		gameStart();
	});
	
	function gameStart() {
		clickEn = true;
		select = 0;
		count = 0;	
		score = 0;
		
		$(".card").children(".back").removeClass("b1");
		$(".card").children(".back").removeClass("b2");
		$(".card").children(".back").removeClass("b3");
		$(".card").removeClass("clicked");
		$(".card").removeClass("clear");
		
		cardRnd();

	}

	gameStart();

	$(".card").on("click", function() {
		if(clickEn == true && !$(this).hasClass('clicked') && !$(this).hasClass('clear')){
			clickEn = false;
			$(this).addClass("clicked");
			if(select == 0){
				select = $(this).children(".back").attr("class");
				count++;
			}else{
				if($(this).children(".back").attr("class") == select){
					count++;
					if(count == 3){
						setTimeout(function() {
							select = 0;
							count = 0;
							$(".card").each(function(index) {
								if($(this).hasClass('clicked')){
									$(this).addClass("clear");
								}
							});
							score = score+1
							if(score == 3){
								setTimeout(function() {
									alert("성공");
									$(".reset").css("display","block");
								}, 800);
							}
							
						}, 400);
						
					}
				}else{
					setTimeout(function() {
						$(".card").each(function(index) {
							if(!$(this).hasClass('clear')){
								$(this).removeClass("clicked");
							}
						});
						
						select = 0;
						count = 0;
					}, 400);
				}
			}
			
			setTimeout(function() {
				clickEn = true;	
			}, 350);
			
			console.log("score"+score);
			
			
		}
		

	});



})