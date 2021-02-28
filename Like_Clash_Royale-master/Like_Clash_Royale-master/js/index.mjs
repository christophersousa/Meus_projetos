import { geraDeck, geraInfo, geraArena, bt } from './script.mjs'
// import { changeBanner, autoChangeBanner } from './changeBanner.mjs'
import { scrollLogoChanger } from './transition.mjs'
import { lightbox } from './lightbox.mjs'

$(document).ready(scrollLogoChanger)
$(document).ready(lightbox)
// changeBanner()
// autoChangeBanner()
geraDeck() //deck que é gerado ao carregar a página
bt.addEventListener('click', geraDeck)
geraInfo()
geraArena()
