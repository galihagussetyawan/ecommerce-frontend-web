class TokenService {
    constructor() {
        this.state = {
            user: "currentUser",
        }
    }

    getLocalAccessToken() {
        const user = JSON.parse(localStorage.getItem(this.state.user));

        return user?.access_token;
    }

    getLocalRefreshToken() {
        const user = JSON.parse(localStorage.getItem(this.state.user));

        return user.refresh_token;
    }

    getUser() {
        return JSON.parse(localStorage.getItem(this.state.user));
    }

    setUser(data) {
        localStorage.setItem(this.state.user, JSON.stringify(data));
    }

    removeUser() {
        localStorage.removeItem(this.state.user);
    }

    updateLocalAccessToken(token) {
        let user = JSON.parse(localStorage.getItem(this.state.user));
        user.access_token = token;

        localStorage.setItem(this.state.user, JSON.stringify(user));
    }
}

export default new TokenService();