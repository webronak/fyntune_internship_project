import {addCartItems, reduceCartItems} from './cart.utils';

const INNITIAL_STATE = {
    cartItems:[],
}

const cartReducer = (state =  INNITIAL_STATE, action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems:addCartItems(state.cartItems,action.payload)
            };
        case 'REDUCE_ITEM':
            return{
                ...state,
                cartItems:reduceCartItems(state.cartItems,action.payload)
            }
    
        default:
            return state;
    }
}

export default cartReducer;