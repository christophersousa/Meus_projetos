export function lightbox(){

	//Cards
	$('ul.cards, .lightbox').click(function(){
		$('.box').bPopup({
	   	easing: 'easeOutBack', //uses jQuery easing plugin
      speed: 650,
      transition: 'slideDown'
		})
		$('.box').css('display', 'block')
	})

	//Arenas
	$('#arenas, .lightbox').click(function(){
		$('.box').bPopup({
	  	easing: 'easeOutBack', //uses jQuery easing plugin
      speed: 650,
      transition: 'slideDown'
		})
		$('.box').css('display', 'block')
	})

		//Close
	$('.b-close').click(function(){
		$('.background').animate({'opacity':'0'}, 500, 'linear', function() {
			$('.background, .box').css('display','none')
		})
	})

	$('.background').click(function(){
		$('.background').animate({'opacity':'0'}, 500, 'linear', function() {
			$('.background').css('display','none')
		})
	})

	//Estilização do Scroll Content
	$('.lerMais').click(function(){
		$('.scrollContent').bPopup({
			speed: 650,
			easing: 'easeOutBack',
      transition: 'slideIn',
	    transitionClose: 'slideBack'
		})
		$('.scrollContent').css('display','block');
	})
}
