import { setProducts } from './product.js';
/* Converts response to json */
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}
export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  /* Gets products data from json files */
  getData() {
    fetch(this.path)
      .then(data => {
        data = convertToJson(data)
        data.then(data => {
          setProducts(data);
        });
      });
  }
  
  /* Finds the product inside products array using id */
  findProductById(items, id) {
    return items.find((item) => item.Id === id);
  }
}