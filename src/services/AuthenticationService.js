import fetch from "./Fetch";
import TokenService from "./TokenService";
import { BehaviorSubject, retry } from "rxjs";
class AuthenticationService {
    currentUser = "currentUser";
    currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));

    async login(username, password) {
        // return await axios.post(constants.API_URL + "login", {
        //     username, password
        // })
        //     .then(response => {

        //         if (response.status === 200) {
        //             localStorage.setItem(this.currentUser, JSON.stringify(response.data));
        //             this.currentUserSubject.next(response.data);
        //         }

        //         return response;
        //     })
        //     .catch(error => {
        //         if (error.response.data.status === 403) {
        //             localStorage.removeItem(this.currentUser);
        //         }

        //         return error.response.data;
        //     })

        return fetch
            .post("login", {
                username,
                password
            })
            .then(response => {

                if (response.status === 200) {
                    TokenService.setUser(response.data);
                    this.currentUserSubject.next(response.data);
                }

                return response;
            })
            .catch(error => {

                if (error.response.data.status === 403) {
                    TokenService.removeUser();
                }

                return error.response;
            })
    };

    getCurrentUser() {
        return this.currentUserSubject.value;
    };

    async logout() {
        TokenService.removeUser();
        this.currentUserSubject.next(null);
        window.location.reload(true);
    };

    async authHeader() {
        const user = JSON.parse(localStorage.getItem(this.currentUser));

        if (user && user.access_token) {
            return { Authorization: "Bearer " + user.access_token };
        } else {
            return {};
        }
    };

    isAuthenticated() {
        if (localStorage.getItem(this.currentUser) !== null) {
            return true;
        }

        return false;
    }

    //authentication user by role
    async isAuhenticationPublic() {
        return await fetch
            .get("authentication/public")
            .then(response => {

                if (response.status === 200) return true;

            })
            .catch(error => {
                if (error) return false;
            });
    }

    async isAuthenticationBuyer() {

        return await fetch
            .get("authentication/buyer")
            .then(response => {

                if (response.status === 200) return true;

            })
            .catch(error => {
                if (error) return false;
            });
    }

    async isAuthenticationSeller() {
        return await fetch
            .get("authentication/seller")
            .then(response => {

                if (response.status === 200) return true;

            })
            .catch(error => {
                if (error) return false;
            });
    }

    async refreshToken() {
        const refreshToken = TokenService.getLocalRefreshToken();

        return await fetch
            .get("refreshtoken", {
                headers: {
                    Authorization: `Bearer ${refreshToken}`
                }
            })
            .then(response => {

                if (response.status === 200) {
                    TokenService.updateLocalAccessToken(response.data.access_token);
                }

            })
            .catch(error => {

                if (error.response.status === 423) {
                    TokenService.removeUser();
                }

                return error;
            });
    }

};

export default new AuthenticationService();