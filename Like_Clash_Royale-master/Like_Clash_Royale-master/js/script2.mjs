import { mapCardGen } from './mapFunctions.mjs'

let divcards = document.querySelector(".cards")
let visible = [1, 1, 1, 1]
let rarities = ["Common", "Rare", "Epic", "Legendary"]

//Funcao de filtragem das cartas nos
//checkbox do index2.html.
export function cardFilter(){
	for(let index in visible){
		$('.checkbox input#' + rarities[index]).click(function(){
			if(visible[index]){
				$('li.' + rarities[index]).css({display: "none"})
				visible[index] = 0
			}else {
				$('li.' + rarities[index]).css({display: "block"})
				visible[index] = 1
			}
			})
		}
}

export function geraCards(){
	let url = 'https://clashapi.now.sh/api/cards'
	//fetch realiza a requisição
	fetch(url)
	 .then(resposta => resposta.json())
	 .then( function(data){ //aqui vai oq vc faz com a resposta definitiva
			let str = data.map(mapCardGen).join('')
			divcards.innerHTML = str
			$('ul.cards li ').click(function(){
				$('.box .boxContent').html(($(this).find('.dadosCarta')).html());
			})
		})
}
