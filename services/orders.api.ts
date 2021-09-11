import axios from "axios";

export const apiOrders = axios.create({
    baseURL: 'http://localhost:3000/'
});

