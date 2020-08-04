import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { productsReducer } from '../reducers/productsReducer';
import { authReducer } from '../reducers/authReducer';
import { carReducer } from '../reducers/carReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    products: productsReducer,
    auth: authReducer,
    car: carReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)