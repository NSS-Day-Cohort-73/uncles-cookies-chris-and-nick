import {database} from "./database"

export const generateCookies = () => {
    cookieHTML = ''
    
    for (const item of database.cookies) {
        cookieHTML += `
        <div class="cookie-card">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>    
        `
    }
    return cookieHTML

}