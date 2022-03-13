import {renderListWithTemplate} from './utils.js';

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.init();
  }
  async init() {
    // GETS THE PRODUCTS FROM THE DATA SOURCE
    const products = await this.dataSource.getData(this.category);
    // RENDERS THE PRODUCTS
    this.renderList(products);
  }
  // PREPARES THE TEMPLATE WITH THE PRODUCT DATA AND RETURNS IT
  prepareTemplate(template, product) {
    template.querySelector('a').href +=  product.Id;
    template.querySelector('img').src = product.Thumbnail;
    template.querySelector('.card__brand').textContent = product.Brand.Name;
    template.querySelector('.card__name').textContent = product.NameWithoutBrand;
    template.querySelector('.product-card__price').textContent = `$${product.ListPrice}`;
    return template;
  }
  renderList(products) {
    // Removing possible content from the list
    this.listElement.innerHTML = '';
    // Get the template
    const template = document.getElementById('productCardTemplate');
    renderListWithTemplate(template, this.listElement, products, this.prepareTemplate);
  }
}