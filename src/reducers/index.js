import textBoxReducer from './TextBoxReducer'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    textBox: textBoxReducer
})