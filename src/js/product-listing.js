import ProductData from './productData.js';
import ProductList from './productList.js';  
import { getParam } from './utils.js';

//OLD METHOD
// const tentsDataSource = new ProductData('tents');
// new ProductList('tents', tentsDataSource, document.querySelector('.product-list'));

const category = getParam('category');
// first create an instance of our ProductData class.
const dataSource = new ProductData(category);
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();