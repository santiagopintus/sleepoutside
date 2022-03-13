import { renderListWithTemplate, getLocalStorage } from './utils.js';

export default class CartList {
  constructor(cartKey, listElement) {
    //Key for querying the local storage
    this.cartKey = cartKey;
    //Element to render the cart
    this.listElement = listElement;
  }

  async init() {
    // get the cart from the local storage
    const list = getLocalStorage(this.cartKey);
    // render the list
    this.renderList(list);
  }
  
  prepareTemplate(template, product) {
    template.querySelector('.cart-card__image img').src =  product.Image;
    template.querySelector('.cart-card__image img').alt += product.Name;
    template.querySelector('.card__name').textContent = product.Name;
    template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
    template.querySelector('.cart-card__price').textContent += product.FinalPrice; 
    return template;
  }
  
  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = '';
    //get the template
    const template = document.getElementById('cart-card-template');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    
  }
}
