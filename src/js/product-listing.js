import ProductData from './productData.js';
import ProductList from './productList.js';  
import { getParam, loadHeaderFooter } from './utils.js';

// Get category from URL
const category = getParam('category');
// first create an instance of our ProductData class

const dataSource = new ProductData(category);
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
if (category) { 
  const myList = new ProductList(category, dataSource, listElement);
  // finally call the init method to show our products
  myList.init();
} else {
  // if we don't have a category, show a message
  listElement.innerHTML = `
  <h4>No category found. Select one of the following</h4>
  <section class="category-select">
    <a href="?category=tents">
      <img src="../images/tent-tn.svg" alt="Tent Icon from Noun Project: Mustofa Bayu">
      <h3>Tents</h3>
    </a>
    <a href="?category=backpacks">
      <img src="../images/backpack-tn.svg" alt="Backpack Icon from Noun Project: Mustofa Bayu">
      <h3>Backpacks</h3>
    </a>
    <a href="?category=sleeping-bags">
      <img src="../images/sleeping-bag-tn.svg" alt="Sleeping Bag Icon from Noun Project: Mustofa Bayu">
      <h3>Sleeping Bags</h3>
    </a>
    <a href="?category=hammocks">
      <img src="../images/hammock-tn.svg" alt="Hammock Icon from Noun Project: Paul Richard">
      <h3>Hammocks</h3>
    </a>
  </section>`;

}

loadHeaderFooter();