import axios from "axios";

const request = axios.create({
    headers: {
        "Content-Type": "application/json, multipart/form-data",
    },
    baseURL: "https://api.al-muamalat.uz/api",
    params: {}
});
request.interceptors.request.use(
    (response) => {
        const token = localStorage.getItem("testUserToken")
        if (token) {
            response.headers.Authorization = `Bearer ${token}`;
        }
        return response;
    },
    (error) => {
        console.log(error);

        return Promise.reject(error);
    }
)

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const statusCose = error?.response
        if (statusCose === 401) {
            window.localStorage.clear();
        }
        return Promise.reject(error);
    }
);

export {request}