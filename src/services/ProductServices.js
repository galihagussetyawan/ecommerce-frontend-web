import axios from "axios";

// import config
import { constants } from '../constants';

// async function getProducts() {
//     return await axios.get(constants.API_URL + "products")
//         .then(response => response.data)
// }


// export const ProductServices = {
//     getProducts
// }

class ProductService {
    async getProducts() {
        return await axios.get(constants.API_URL + "products")
            .then(response => response.data)
            .catch(error => error);
    }
};

export default new ProductService();