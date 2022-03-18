import fetch from './Fetch';

class CartService {

    async getCart() {
        return await fetch
            .get("cart")
            .then(response => response.data)
            .catch(error => error.response)
    }

    async addToCart(product, quantity) {
        return await fetch
            .post("cart/save", {
                product, quantity
            })
            .then(response => response.data)
            .catch(error => error.response);
    }

    /* 
        UPDATE CART
        @body {id, quantity, isCheckout}
     */
    async updateCart(id, quantity, isCheckout) {
        return await fetch
            .put("cart/update", {
                "id": id, "quantity": quantity, "checkout": isCheckout
            })
            .then(response => response.data)
            .catch(error => error.response);
    }

    async deleteCart(id) {
        return await fetch
            .delete("cart", {
                params: {
                    id
                }
            })
            .then(response => response)
            .catch(error => error.response);
    }

}

export default new CartService();