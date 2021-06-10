import { combineReducers } from 'redux';
import statusPromptReducer from './status-prompt/status-prompt.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    statusPrompt: statusPromptReducer,
    user: userReducer
})