import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from './api';

const PATH = '/users/';
const config = (token): AxiosRequestConfig => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export function getUserFromId(userId: string, token: string): Promise<AxiosResponse<any>> {
    return api.get(`${PATH}${userId}`, config(token));
}