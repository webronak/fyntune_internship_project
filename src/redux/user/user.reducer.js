const INNITITAL_STATE = {
    user:false
}

const userReducer = (state = INNITITAL_STATE,action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;