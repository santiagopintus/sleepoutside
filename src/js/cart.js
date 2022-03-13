import { getLocalStorage } from './utils.js';
import {loadHeaderFooter} from "./utils.js";

function getCartContents() {
  let markup = '';
  const cartItems = getLocalStorage('so-cart');
  if (!cartItems){
    document.querySelector('.product-list').innerHTML = "Your cart is empty";
  } else {
    const htmlItems = cartItems.map(item => renderCartItem(item));
    document.querySelector('.product-list').innerHTML = htmlItems;
  }
}

function renderCartItem(item) {
  return `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
}

getCartContents();
loadHeaderFooter();