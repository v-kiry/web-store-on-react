import createStore from 'storeon';

import products from './modules/products';
import cart from './modules/cart';

export default createStore([products, cart]);