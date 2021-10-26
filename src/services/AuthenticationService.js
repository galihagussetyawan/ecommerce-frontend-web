import axios from "axios";
import { BehaviorSubject } from "rxjs";

import { constants } from "../constants";

class AuthenticationService {
    currentUser = "currentUser";
    currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));

    async login() {
        return await axios.get(constants.API_URL + "login")
            .then(response => {
                if (!response.ok) {
                    if ([401, 403].indexOf(response.status)) {
                        localStorage.removeItem(this.currentUser);
                        window.location.reload(true);
                    }
                }

                localStorage.setItem(this.currentUser, JSON.stringify(response.data));
                this.currentUserSubject.next(response.data);

                return response;
            })
            .catch(error => error);
    };

    async getCurrentUser() {
        return await JSON.parse(localStorage.getItem(this.currentUser));
    };

    async logout() {
        localStorage.removeItem(this.currentUser);
        this.currentUserSubject.next(null);
        window.location.reload(true);
    };

    async authHeader() {
        const user = JSON.parse(localStorage.getItem(this.currentUser));

        if (user && user.access_token) {
            return { "Authorization": "Bearer " + user.access_token };
        } else {
            return {};
        }
    }

};

export default new AuthenticationService();