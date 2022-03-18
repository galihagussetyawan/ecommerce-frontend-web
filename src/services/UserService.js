import fetch from './Fetch';

class UserService {

    async getUser() {
        return await fetch
            .get("user")
            .then(response => {

                return response.data;
            })
            .catch(error => error)
    }


    /* 
        @Request Body
            id
            userShippingName
            userShippingStreet1
            userShippingStreet2
            userShippingCity
            userShippingState
            userShippingCountry
            userShippingZipCode
            userShippingDefault
            user
    */

    addUserShipping(id, userShippingName, userShippingStreet1, userShippingStreet2, userShippingCity, userShippingState, userShippingCountry, userShippingZipCode, userShippingDefault, user) {

        return fetch
            .post("user/shipping", {
                id, userShippingName, userShippingStreet1, userShippingStreet2, userShippingCity, userShippingState, userShippingCountry, userShippingZipCode, userShippingDefault, user
            })
            .then(response => response.data)
            .catch(error => error.response);
    }
}

export default new UserService();