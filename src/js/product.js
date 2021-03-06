import ExternalServices from './ExternalServices.js';
import ProductDetails from './productDetails.js';
import { getParam } from './utils.js';
import {loadHeaderFooter} from './utils.js';


const dataSource = new ExternalServices();
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);

product.init();
loadHeaderFooter();