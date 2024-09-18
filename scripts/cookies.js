import {database} from "./database.js"

export const generateCookies = () => {
    let cookieHTML = ''
    
    for (const item of database.cookies) {
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