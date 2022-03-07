import ProductData from './productData.js';
import { getParams } from './utils.js';
/* Instance of Product Data */
const dataSource = new ProductData('tents');
/* GET product id from params */
const productId = getParams('product');
let products = [];
/* GET list of products */
dataSource.getData();
//Gives time to load products
setTimeout(() => {
  console.log(dataSource.findProductById(products, productId));
}, 300);

let cart = [];
export function setProducts(data) {
  //Set products to global variable
  products = data;
}
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
  const product = findProductById(e.target.dataset.id);
  //insert current cart plus new product
  cart.push(product);
  setLocalStorage('so-cart', cart);
  cart = [];
}

// add listener to Add to Cart button
document.getElementById('addToCart').addEventListener('click', addToCart);