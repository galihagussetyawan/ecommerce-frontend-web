import axios from "axios";

// import config
import { constants } from '../constants';
class ProductService {
    async getProducts() {
        return await axios.get(constants.API_URL + "products")
            .then(response => response.data)
            .catch(error => error);
    }
};

export default new ProductService();