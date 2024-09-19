
export const randomize = (arr) => {
    const object = Math.floor(Math.random() * arr.length)
    return arr[object]
}