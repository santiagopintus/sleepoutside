import ProductData from './productData.js';
const tents = new ProductData('tents');

// let products = tents.products;
let products = tents.getData();
console.log(products);

let cart = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// add to cart button event handler
function addToCart(e) {
  //Get current cart to push new items to
  let currentCart = getLocalStorage('so-cart');
  if (currentCart) {
    cart = currentCart;
  }
  const product = findProductById(products, e.target.dataset.id);
  //insert current cart plus new product
  cart.push(product);
  setLocalStorage('so-cart', cart);
  cart = [];
}

// add listener to Add to Cart button
document.getElementById('addToCart').addEventListener('click', addToCart);