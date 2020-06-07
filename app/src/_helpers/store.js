import {createStore , applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {rootReducer} from '../_reducers';

export const store = createStore(rootReducer , applyMiddleware(reduxThunk));

store.subscribe( () => console.log(store.getState() ) )