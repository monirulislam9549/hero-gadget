// add data to local storage
const addToDb = (id) => {
    // localStorage.setItem('shopping-cart', id)
    let shoppingCart = {}

    // get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1
    }
    // set the data
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// get stored data from cart 
const getStoredCart = () => {
    let shoppingItem = {}

    // get previous data from local storage
    const storedItem = localStorage.getItem('shopping-cart')
    if (storedItem) {
        shoppingItem = JSON.parse(storedItem)
    }
    return shoppingItem;
}

export {
    addToDb,
    getStoredCart,

}