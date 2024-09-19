import { generateHTML, generateSpecials } from "./cookies.js"
import {database} from "./database.js"
import { randomize } from "./randomizer.js"

// initialize HTML strings

const cookieHTML = generateHTML(database.cookies, "cookies")
const iceCreamHTML = generateHTML(database.iceCream, "ice-cream")


// select HTML elements
const background = document.getElementById('background')
const specials = document.querySelector('.special-selection')
const cookieDOM = document.querySelector("#cookie-container")
const iceCreamDOM = document.querySelector("#ice-cream-container")

//randomize specials
const cookieSpecial = randomize(database.cookies)
const iceCreamSpecial = randomize(database.iceCream)

// update them with the HTML strings
cookieDOM.innerHTML = cookieHTML
iceCreamDOM.innerHTML = iceCreamHTML
specials.innerHTML = generateSpecials(cookieSpecial, "cookies") + generateSpecials(iceCreamSpecial, "ice-cream")

//add event listener to close daily specials
background.addEventListener('click', ()=>{background.classList.add('hidden')})