//selecionando tags com o dom
import { mapDeckRandom, mapArenaGen } from './mapFunctions.mjs'
export const bt = document.querySelector('#random-deck')
const carta = document.querySelectorAll('li')
const ulcards = document.querySelector('.cards')
const divarena = document.querySelector('#arenas')

//a função que coloca o deck aletorio na div, será chamada
//sempre que quisermos gerar um novo deck
export function geraDeck() {
	let url = 'https://clashapi.now.sh/api/random-deck'
	//fetch realiza a requisição
	fetch(url)
	  .then(resposta => resposta.json())
	  .then( function(data){ //aqui vai oq vc faz com a resposta definitiva
   		let str = data.map(mapDeckRandom).join('')
		  ulcards.innerHTML = str
			$('ul.cards li ').click(function(){
				$('.box .boxContent').html(($(this).find('.dadosCarta')).html());
			})
		})
}

export function geraArena() {
	let url = 'https://clashapi.now.sh/api/arenas'
	//fetch realiza a requisição
	fetch(url)
	  .then(resposta => resposta.json())
	  .then( function(data){ //aqui vai oq vc faz com a resposta definitiva
			let str = data.map(mapArenaGen).join('')
			divarena.innerHTML = str
			$('#arenas li ').click(function(){
				$('.box .boxContent').html(($(this).find('.dadosArena')).html());
			})
		})
}

export function geraInfo(){
	carta.forEach(card=>{
		card.addEventListener('click', function(){
		})
	})
}
