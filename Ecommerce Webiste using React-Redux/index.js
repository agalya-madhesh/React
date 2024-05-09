//in actions we tell them what we want 


export const addItem = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}