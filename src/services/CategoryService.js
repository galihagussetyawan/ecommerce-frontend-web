import fetch from './Fetch';

class CategoryService {

    async getAllCategories() {
        return await fetch
            .get("categories")
            .then(response => response.data)
            .catch(error => error)
    }
}

export default new CategoryService();