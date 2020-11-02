import axios from "axios";

export const Client = (token) => {
    const headers = {};

    if (token) {
        headers.authorization = `Bearer ${token}`;

    }
    return axios.create({

        baseURL: `http://jsonplaceholder.typicode.com/`,
        onError: () => {
        }
    });

}
