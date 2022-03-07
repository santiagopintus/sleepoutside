function convertToJson(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Bad Response');
    }
}

export default class ProductData{
    constructor(category){
        this.category = category;
        this.path = `../json/${this.category}.json`;
    }
    getData(){
    fetch('../json/${this.category}.json')
        .then(convertToJson)
        .then((data) => data);
    }

    async findProductById(id) {
        const products = await this.getData()
        return products.find((item) => item.Id === e.target.dataset.id);
    }
}

