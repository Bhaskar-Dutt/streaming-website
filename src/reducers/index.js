import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form : formReducer,
    streams: streamReducer
}); 

// use form here or you will see an error