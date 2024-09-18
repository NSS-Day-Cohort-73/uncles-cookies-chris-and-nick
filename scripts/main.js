import { iceCreamList } from "./iceCream.js";
import { generateCookies } from "./cookies.js"

// initialize HTML strings
let cookieHTML = generateCookies()
let iceCreamHTML = iceCreamList()

// select HTML elements
let cookieDOM = document.querySelector(".cookie-container")
let iceCreamDOM = document.querySelector(".ice-cream-container")

// update them with the HTML strings
cookieDOM.innerHTML = cookieHTML
iceCreamDOM.innerHTML = iceCreamHTML