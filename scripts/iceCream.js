import {database} from "./database.js"

// set a HTML string variable then iterate through the database.iceCream array
// for each element of the array create an HTML string for each property and then concatenate them together and return
export const iceCreamList = () => {
    
    let alphabeticalIceCream = database.iceCream.sort((elementOne,elementTwo) => elementOne.name.localeCompare(elementTwo.name))
    let iceCreamHTML = ""
    for(const iceCream of alphabeticalIceCream){
        iceCreamHTML += `
        <div class="ice-cream-card">
            
            <img src="${iceCream.img}" alt= "${iceCream.name}">
            <div class="ice-cream-description">
                <h3>
                    ${iceCream.name}
                </h3>

                <p>
                    ${iceCream.description}
                </p>
            </div>
        </div>`
    }
    return iceCreamHTML
}