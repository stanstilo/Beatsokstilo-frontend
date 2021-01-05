import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from  './auth';
import beatReducer from './beat';
import sellReducer from './sell'
import playerReducer from './playerReducer'

const rootReducer = combineReducers({
    authReducer,
    form: formReducer,
    beatReducer,
    playerReducer,
    sellReducer,
});
 
export default rootReducer