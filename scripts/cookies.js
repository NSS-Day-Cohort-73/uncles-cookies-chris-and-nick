import {database} from "./database.js"

export const generateCookies = () => {
    
    let alphabeticalCookies = database.cookies.sort((elementOne,elementTwo) => elementOne.name.localeCompare(elementTwo.name))
    
    let cookieHTML = ''
    
    for (const item of alphabeticalCookies) {
        cookieHTML += `
        <div class="cookie-card">
            <img src="${item.img}" alt="${item.name} Cookie">
            <div class="cookie-description">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        </div>    
        `
    }
    return cookieHTML

}