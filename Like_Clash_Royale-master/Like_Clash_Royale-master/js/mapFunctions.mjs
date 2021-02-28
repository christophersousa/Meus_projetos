//As primeiras quatro funções desse arquivo são
//complementos para as funções "importantes",
//que estão la em baixo sendo exportadas.

function testaRaridade(card) {
	if(card.rarity == 'Rare')
		return 'statorange'
	else if(card.rarity == 'Epic')
		return 'statpurple'
	else if(card.rarity =='Common')
		return 'statgray'
	else if(card.rarity =='Legendary')
		return 'statblue'
}

const verificString = (a => {
	var RegExp = /(-?[0-9]|')+/g;
	let string = a.replace(RegExp,"");
	return string
 })

function geraCardsArenas(number){
	let url = 'https://clashapi.now.sh/api/cards'
	//fetch realiza a requisição
	let str;
	fetch(url)
	  .then(resposta => resposta.json())
	  .then(function(data){ //aqui vai oq vc faz com a resposta definitiva
			str = data.filter(x => x.arena == number).map(item =>
				`<img src="https://clashapi.now.sh/images/cards/${item['idName']}.png"</li>`).join('')
			$('#namecard'+number).html(str)
	})
}

function geraChests(number){
	let url = 'https://clashapi.now.sh/api/chests'
	//fetch realiza a requisição
	let str;
	fetch(url)
	  .then(resposta => resposta.json())
	  .then(function(data){ //aqui vai oq vc faz com a resposta definitiva
			str = data.filter(x => x.arena == number)
				.map(item => `<div class="staticsEachChest"><div class="staticsForChest">
											<a href='#${item['idName']}'
											data-html = true
        							data-toggle="popover"
        							data-placement= "right"
        							data-arrowcolor ="#f1eded"
       								data-content="<img src='imagens/Gold.png' class='goldpopuver'>
       								<span class='goldchest'>${item.gold.min} - ${item.gold.max}</span>">
											<img src="https://clashapi.now.sh/images/chests/${verificString(item['idName'])}.png"></a>
											</div><div class="cardsNumber"><img src="imagens/card.png">${item.cards.number}
											</div></div></li>`).join('')
			$('#namechests'+number).html(str);
			$('[data-toggle="popover"]').ggpopover();
		})
}

export const mapDeckRandom = item =>
  `<li><a href="#${item["idName"]}" class="lightbox">
		<img src="https://clashapi.now.sh/images/cards/${item["idName"]}.png">
		</a><div class="dadosCarta" id="${item["idName"]}"><span class="sword">
		<img src="imagens/sword.png"></span><p class="namecard">
		${item["idName"]}</p><div class ="totalstatics"><div class ="imagestatics">
		<img src="https://clashapi.now.sh/images/cards/${item["idName"]}.png"></div>
    <div class="statics"><div id="colorido" class="${testaRaridade(item)}">
    <p><div class ="tipicrar">RARITY:</div><div class="statrar"> ${item.rarity}</div>
    </p><p><div class="tipictip"> TYPE :</div><div class="stattip">${item.type}</div></p></div>
    <p><div class ="tipicare">ARENA :</div><div class="statare">${item.arena}</div></p>
    <p><div class="tipiccos">COST :</div><div class="statcos">${item.elixirCost}</div></p>
    <p><div class="descrip">${item.description}</div></p></div></div></div></li>`

export const mapArenaGen = item	=>
  `<li><a href="#${item["idName"]}" class="lightbox">
  	<img src="https://clashapi.now.sh/images/arenas/${item['idName']}.png">
  	</a><div class="dadosArena" id="${item["idName"]}"> <div class="staticsArena">
  	<div class="nameArena">Arena ${item.number}</div><div class="staticsCards">Cards-Unlocks:
    <span id="namecard${item.number}">${geraCardsArenas(item.number)}</span></div>
    <div class="titleChest">Chests:</div><div class ="staticsChests">
    <span class="forEachChest" id="namechests${item.number}">${geraChests(item.number)}</span></div>
    <div class="staticsGolds"><div class="vitorygold">Vitory Gold:<img src="imagens/Gold.png">
    <span class ="resultold">${item.victoryGold}</span> </div> <div class="mintrophies">MinTrophies:
  	<img src="imagens/coctrophy.png"><span class ="resultrophies">
    ${item.minTrophies}</span></div></div></div></div> <p class="namearena">${item['idName']}</p></li>`

export const mapCardGen = item =>
	`<li class="${item.rarity}"><a href="#${item["idName"]}" class="lightbox">
		<img src="https://clashapi.now.sh/images/cards/${item["idName"]}.png"></a>
		<div class="dadosCarta" id="${item["idName"]}"><span class="sword">
		<img src="imagens/sword.png"></span><p class="namecard">${item["idName"]}</p>
		<div class ="totalstatics"><div class ="imagestatics">
		<img src="https://clashapi.now.sh/images/cards/${item["idName"]}.png"></div>
		<div class="statics"><div id="colorido" class="${testaRaridade(item)}"><p>
		<div class ="tipicrar">RARITY:</div><div class="statrar"> ${item.rarity}</div></p>
		<p><div class="tipictip"> TYPE :</div><div class="stattip">${item.type}</div></p></div>
		<p><div class ="tipicare">ARENA :</div><div class="statare">${item.arena}</div></p>
		<p><div class="tipiccos">COST :</div><div class="statcos">${item.elixirCost}</div></p>
		<p><div class="descrip">${item.description}</div></p></div></div></div></li>`
