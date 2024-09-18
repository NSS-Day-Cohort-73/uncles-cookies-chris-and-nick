import {database} from "./database.js"

// set a HTML string variable then iterate through the database.iceCream array
// for each element of the array create an HTML string for each property and then concatenate them together and return
export const iceCreamList = () => {
    
    let iceCreamHTML = ""
    for(const iceCream of database.iceCream){
        iceCreamHTML += `
        <div class="ice-cream-card">
            
            <img src=${iceCream.image} alt= ${iceCream.name}>

            <h3>
                 ${iceCream.name}
            </h3>

            <p>
                ${iceCream.description}
            </p>
        </div>`
    }
    return iceCreamHTML
}