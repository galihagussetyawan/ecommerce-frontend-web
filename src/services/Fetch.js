import Axios from 'axios';
import { constants } from '../constants';
import TokenService from './TokenService';
import https from 'https';

const instance = Axios.create({
    baseURL: constants.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

instance.interceptors.request.use(
    config => {
        const token = TokenService.getLocalAccessToken();

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    error => {

        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    res => res,
    error => {

        const originalRequest = error.config;
        let refreshToken = TokenService.getLocalRefreshToken();

        if (refreshToken && error.response.status === 401 && !originalRequest._retry) {

            originalRequest._retry = true;

            return Axios
                .get(constants.API_URL + "refreshtoken", {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    }
                })
                .then(response => {

                    if (response.status === 200) {

                        TokenService.updateLocalAccessToken(response.data.access_token);
                        console.log("Access token refreshed!");
                        window.location.reload(true);

                        return Axios(originalRequest);
                    }
                })
                .catch(error => {
                    if (error.response.status === 423) {
                        TokenService.removeUser();
                    }

                    return error;

                })
        }

        return Promise.reject(error);
    }
)

export default instance;