function login() {
	scrollRols()
}

$(document).ready(function(){

	var flag=false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if (scroll > 200) {
			if(!flag){
				$("#logo").css({"margin-top": "-5px","width": "80px","height": "60px"});
				$(".containerHeader").css({"background-color":"#3c3c3c"});
				flag = true;
			}
		}else if (scroll >= 0){
			if (flag){
				scrollRols()
				flag = false;
			}
		}
	});
});

function scrollRols(){
	$("#logo").css({"margin-top": "150px","width":"300px","height": "300px"});
	$(".containerHeader").css({"background-color":"transparent"});
}