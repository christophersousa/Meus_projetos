import { cardFilter, geraCards } from './script2.mjs'
import { changeBanner, autoChangeBanner } from './changeBanner.mjs'
import { scrollLogoChanger } from './transition.mjs'
import { lightbox } from './lightbox.mjs'

$(document).ready(scrollLogoChanger)
$(document).ready(lightbox)
changeBanner()
autoChangeBanner()
cardFilter()
geraCards()
