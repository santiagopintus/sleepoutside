import { loadHeaderFooter } from './utils.js';
import cartList from './shoppingCart.js';

loadHeaderFooter();

const cart = new cartList('so-cart', document.querySelector('.cart-list'));

cart.init();

//check to see if there is anything in the cart...
// if (cart.total > 0) {
//   // show our checkout button and total if there are items in the cart.
//   document.querySelector('.list-footer').classList.remove('hide');
// }