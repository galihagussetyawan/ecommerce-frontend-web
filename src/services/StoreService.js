import fetch from './Fetch';

class StoreService {

    async getStore() {
        return await fetch
            .get("store")
            .then(response => response.data)
            .catch(error => error.response)
    }

    async createStore(name, username) {
        return await fetch
            .post("store/create", {
                id: null,
                name,
                username,
                user: null
            })
            .then(response => response)
            .catch(error => error);
    };

}

export default new StoreService();