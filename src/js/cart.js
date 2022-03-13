import { loadHeaderFooter } from './utils.js';
import cartList from './shoppingCart.js';

loadHeaderFooter();

const cart = new cartList('so-cart', document.querySelector('.cart-list'));

cart.init();