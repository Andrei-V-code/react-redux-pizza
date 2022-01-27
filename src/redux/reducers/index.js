import { combineReducers } from 'redux';

import filters from './fiters';
import pizzas from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart
});

export default rootReducer;