export const generateHTML = (arr, type,) => {
    
    let alphabetical = arr.sort((elementOne,elementTwo) => elementOne.name.localeCompare(elementTwo.name))
    
    let typeHTML = ''
    
    for (const item of alphabetical) {
        typeHTML += `
        <div class="${type} card">
            <img src="${item.img}" alt="${item.name}">
            <div class="description">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        </div>    
        `
    }
    return typeHTML

}

export const generateSpecials = (item, type)=> {
    return `
        <div class="${type} card">
            <img src="${item.img}" alt="${item.name}">
            <div class="description">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        </div>    
        `
}