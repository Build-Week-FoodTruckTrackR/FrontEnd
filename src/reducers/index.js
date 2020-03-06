import {combineReducers} from 'redux';

///reducers
import trucksReducer from './trucks'

const reducers = combineReducers({

    trucks: trucksReducer

});

export default reducers;