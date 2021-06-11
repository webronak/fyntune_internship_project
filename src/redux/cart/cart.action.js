export const addItemToCart = (item) => {
    return{
        type:'ADD_ITEM',
        payload:item
    }
}

export const reduceItemToCart = (item) => {
    return{
        type:'REDUCE_ITEM',
        payload:item
    }
}