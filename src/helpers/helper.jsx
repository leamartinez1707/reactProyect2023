export const unifyItems = (cart, item) => {

    return cart.map((e) => {
        if(e.id === item.id){
            console.log(e)
            e.counter = item.counter
            e.stock = item.stock
        }
        return e;
    })
}

export const existsCart = (cart, item) => {
    return cart.some((a) => a.id === item.id)
}