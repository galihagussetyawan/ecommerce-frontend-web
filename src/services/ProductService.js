import fetch from './Fetch';

class ProductService {

    async getProducts() {
        return await fetch
            .get("products")
            .then(response => response.data)
            .catch(error => error);
    }

    async getProductById(id) {
        return await fetch
            .get("product", {
                params: {
                    id
                }
            })
            .then(response => response.data)
            .catch(error => error.response);
    }


    /* 
        @Request Body
    name, description, category, price, size, stock 
    */
    async createProduct(name, description, category, price, size, stock) {
        return await fetch
            .post("product/save", {
                name, description, category, price, size, stock
            })
            .then(response => response.data)
            .catch(error => error);
    }
};

export default new ProductService();