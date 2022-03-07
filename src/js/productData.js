export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
    this.products = this.getData();
  }

  /* Converts response to json */
  convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Bad Response');
    }
  }

  /* Gets products data from json files */
  getData() {
    fetch(this.path)
      .then(this.convertToJson)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* Finds the product inside products array using id */
  findProductById(id) {
    return this.products.find((item) => item.Id === id);
  }
}