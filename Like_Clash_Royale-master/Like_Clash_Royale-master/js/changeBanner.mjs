let banner = 1
const nmrDeBanners = 4
//nmeDeBanners é a quantidade de banners -1 que
//existem na pasta imagens.

var animacaoRight = 'animated slideInRight'
var animacaoLeft = 'animated slideInLeft'
var animacaofim = 'webkitAnimationEnd'

var $arrowRight = $('section .fa-angle-right')
var $arrowLeft = $('section .fa-angle-left')
var $banners = $('section#banners')

export function changeBanner(){
 $arrowRight.click(function(){
   banner++
   if(banner > nmrDeBanners)
     banner = 0
    $banners.css({"background-image": `url('./imagens/banner${banner}.jpg')`})
      .addClass(animacaoRight).one(animacaofim, function(){
      $(this).removeClass(animacaoRight)
   })
 })
 $arrowLeft.click(function(){
   banner--
   if(banner < 0)
     banner = nmrDeBanners
    $banners.css({"background-image": `url('./imagens/banner${banner}.jpg')`})
      .addClass(animacaoLeft).one(animacaofim, function(){
      $(this).removeClass(animacaoLeft)
   })
 })
}

export function autoChangeBanner(){
 setInterval(function(){
   $banners.addClass(animacaoLeft).one(animacaofim, function() {
     $(this).removeClass(animacaoLeft)
   })
   $banners.css({"background-image": `url('./imagens/banner${banner}.jpg')`})
    .addClass(animacaoRight).one(animacaofim, function(){
      $(this).removeClass(animacaoRight)
   })
   banner++
   if(banner > nmrDeBanners)
     banner = 0
 }, 6000)
}
