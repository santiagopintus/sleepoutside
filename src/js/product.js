let products = [];
let cart = [];

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// get tents data
function getProductsData() {
  fetch('../json/tents.json')
    .then(convertToJson)
    .then((data) => {
      products = data;
    });
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  //Get current cart to push new items to
  let currentCart = getLocalStorage('so-cart');
  if (currentCart) {
    cart = currentCart;
  }
  const product = products.find((item) => item.Id === e.target.dataset.id);
  //insert current cart plus new product
  cart.push(product);
  setLocalStorage('so-cart', cart);
  cart = [];
}

getProductsData();
// add listener to Add to Cart button
document.getElementById('addToCart').addEventListener('click', addToCart);