const cartItems = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'RMF_FROM_CART':
            return state.filter( cartItem => cartItem.id !== action.payload.id )
    }
    return state;
}

export default cartItems;
