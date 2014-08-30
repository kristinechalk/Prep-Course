/*
Mark ingrediant after bought
----------------------------
*/

$('input:checkbox:checked').val();




/* 
Can keep their place in the directions list 
-------------------------------------------
*/

$(document).ready(function() {
    $(".instructions ol li").click(function() {
    	$(".instructions ol li").removeClass("highlighted");
        $(this).addClass("highlighted");
    });


    /*
	Create button hide photos & show photos
	---------------------------------------
	*/
	$(".js-imgToggle").click(function() {
		var isHidden = $(".intro").hasClass("is-hidden");

		if (isHidden) {
			$(".intro").removeClass("is-hidden");
			$(".intro_img").fadeIn("1000");
			$(".js-imgToggle").text("Hide photos!");
		}
		else {
			$(".intro").addClass("is-hidden");
			$(".intro_img").fadeOut("slow");
			$(".js-imgToggle").text("Show photos!");
		}	
	});	
});
		
	













