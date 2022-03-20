import { renderListWithTemplate, getLocalStorage } from './utils.js';

export default class CartList {
  constructor(cartKey, listElement) {
    //Key for querying the local storage
    this.cartKey = cartKey;
    //Element to render the cart
    this.listElement = listElement;
    //Total price of the cart
    this.total = 0;
  }

  async init() {
    // get the cart from the local storage
    const list = getLocalStorage(this.cartKey);
    // Calculate total price of cart
    this.calculateListTotal(list);
    // render the list
    this.renderList(list);
  }
  
  // PREPARES THE TEMPLATE WITH THE PRODUCT DATA AND RETURNS IT
  prepareTemplate(template, product) {
    console.log(product)
    template.querySelector('.cart-card__image img').src =  product.Images.PrimaryMedium;
    template.querySelector('.cart-card__image img').alt += product.Name;
    template.querySelector('.card__name').textContent = product.Name;
    template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
    template.querySelector('.cart-card__price').textContent += product.FinalPrice; 
    return template;
  }
  // Calculate total price of cart
  calculateListTotal(list) {
    const amounts = list.map((item) => item.FinalPrice);
    const total = amounts.reduce((sum, item) => sum + item);
    this.total = total.toFixed(2);
  }
  renderList(list) {
    // Removing possible content from the cart container
    this.listElement.innerHTML = '';
    // Get the template
    const template = document.getElementById('cartItemTemplate');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    document.querySelector('.list-total').innerText += ` $${this.total}`;
  }
}
