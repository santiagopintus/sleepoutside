import { formatExpirationDate } from './utils.js';
import { loadHeaderFooter } from './utils.js';
import CheckoutProcess from './CheckoutProcess.js';

loadHeaderFooter();

const myCheckout = new CheckoutProcess('so-cart', '.checkout-summary');
myCheckout.init();

document
  .querySelector('#zip')
  .addEventListener('blur', myCheckout.calculateOrdertotal.bind(myCheckout));
// listening for click on the button
document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
  e.preventDefault();

  myCheckout.checkout();
});

formatExpirationDate(expiration);