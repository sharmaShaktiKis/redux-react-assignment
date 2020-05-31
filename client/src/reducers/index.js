import {combineReducers} from 'redux';
import providerReducer from './providerReducer';
import serviceReducer from './serviceReducer';

export default combineReducers({
    providers: providerReducer,
   services:serviceReducer
});