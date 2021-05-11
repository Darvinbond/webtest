$(document).ready(()=>{

	$(".ser_txt1").hide();
	$(".ser_txt2").hide();
	$(".ser_txt3").hide();
	$(".ser_txt4").hide();
	$(".icn").hide();

	$("#cem").click(function(){
		window.location.href = "services.html#cement";
	});
	$("#pet").click(function(){
		window.location.href = "services.html#petrol";
	});
	$("#hos").click(function(){
		window.location.href = "services.html#hospi";
	});



	$(".bk").mouseenter(function(){
		// $(".ser_txt1").show();
		$(this).find("img").animate({
			opacity: "0.3"
		}, 400, function(){
			$(this).next().show();
		});
		
	});
	$(".bk").mouseleave(function(){
		// $(".ser_txt1").hide();
		$(this).find("img").animate({
			opacity: "1"
		}, 400, function(){
			$(this).next().hide();
		});
		
	});



	$(".ser1").mouseenter(function(){
		$(".ser_txt1").show();
		$(".ser_img1").animate({
			opacity: "0.3"
		}, 400);
	});
	$(".ser1").mouseleave(function(){
		$(".ser_txt1").hide();
		$(".ser_img1").animate({
			opacity: "1"
		}, 400);
	});

	$(".ser2").mouseenter(function(){
		$(".ser_txt2").show();
		$(".ser_img2").animate({
			opacity: "0.3"
		}, 400);
	});
	$(".ser2").mouseleave(function(){
		$(".ser_txt2").hide();
		$(".ser_img2").animate({
			opacity: "1"
		}, 400);
	});

	$(".ser3").mouseenter(function(){
		$(".ser_txt3").show();
		$(".ser_img3").animate({
			opacity: "0.3"
		}, 400);
	});
	$(".ser3").mouseleave(function(){
		$(".ser_txt3").hide();
		$(".ser_img3").animate({
			opacity: "1"
		}, 400);
	});

	$(".ser4").mouseenter(function(){
		$(".ser_txt4").show();
		$(".ser_img4").animate({
			opacity: "0.3"
		}, 400);
	});
	$(".ser4").mouseleave(function(){
		$(".ser_txt4").hide();
		$(".ser_img4").animate({
			opacity: "1"
		}, 400);
	});

})