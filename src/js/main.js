import ProductData from "./productData.js";
import ProductList from "./productList.js";
import {loadHeaderFooter} from "./utils.js";

document.addEventListener('DOMContentLoaded', () => {

  const tentsDataSource = new ProductData("tents", true);
  new ProductList("tents", tentsDataSource, document.querySelector(".product-list"));
  //Load header and footer
  loadHeaderFooter();
});