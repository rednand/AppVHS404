import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers';

const rootReducer = combineReducers({
  movies: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
