import fetch from './Fetch';

class ImageService {

    async uploadImageProduct(images) {

        let formData = new FormData();

        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }

        return await fetch
            .post("product/images", formData, {
                "Content-Type": "multipart/form-data"
            })
            .then(response => response.data)
            .catch(error => error.response);
    }

    async getImage(imageName) {
        return await fetch
            .get("image", {
                params: {
                    "image": imageName
                }
            })
            .then(response => response)
            .catch(error => error.response)
    }

    async addImageToProduct(image, product) {
        return await fetch
            .post("image-to-product", {
                image, product
            })
            .then(response => response.data)
            .catch(error => error.response);
    }
}

export default new ImageService();