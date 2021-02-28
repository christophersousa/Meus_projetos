//Funcao para mudar o tamanho do logo do
//Clash Royale no menu do site quando
//o scroll sair ou chegar no topo.

export function scrollLogoChanger(){
	var flag=false;
	var scroll;
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if (scroll >200) {
			if(!flag){
				$("#logo").css({"margin-top": "-20px","width": "130px","height": "130px"});
				$("header").css({"background-color":"#3c3c3c"});
				flag = true;
			}
		}else{
			if (flag){
				$("#logo").css({"margin-top": "0px","width":"400px","height": "400px"});
				$("header").css({"background-color":"transparent"});
				flag = false;
			}
		}
	})
}
