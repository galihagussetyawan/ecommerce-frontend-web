import axios from "axios";
import { BehaviorSubject } from "rxjs";

import { constants } from "../constants";

class AuthenticationService {
    currentUser = "currentUser";
    currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));

    async login(username, password) {
        return await axios.post(constants.API_URL + "login", {
            username, password
        })
            .then(response => {

                if (!response.ok) {
                    if ([401, 403].indexOf(response.status)) {
                        localStorage.removeItem(this.currentUser);
                    }
                }

                localStorage.setItem(this.currentUser, JSON.stringify(response.data));
                this.currentUserSubject.next(response.data);

                return response;
            })
            .catch(error => error);
    };

    getCurrentUser() {
        return this.currentUserSubject.value;
    };

    async logout() {
        localStorage.removeItem(this.currentUser);
        this.currentUserSubject.next(null);
    };

    async authHeader() {
        const user = JSON.parse(localStorage.getItem(this.currentUser));

        if (user && user.access_token) {
            return { Authorization: "Bearer " + user.access_token };
        } else {
            return {};
        }
    };

    async isAuthenticated() {
        if (localStorage.getItem(this.currentUser) !== null) {
            return true;
        }

        return false;
    }

};

export default new AuthenticationService();