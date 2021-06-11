import { combineReducers } from 'redux';
import statusPromptReducer from './status-prompt/status-prompt.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    statusPrompt: statusPromptReducer,
    user: userReducer,
    cart: cartReducer
})