import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from './api';

const PATH_REQUEST = '/request';

const config = (token): AxiosRequestConfig => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export function getUserFromId(userId: string, token: string): Promise<AxiosResponse<any>> {
    return api.get(`/users/${userId}`, config(token));
}

export interface Request {
    amount: string;
    userId: string;
    addressId: string;
    required_products: [
        {
            productDetailId: string;
            quantity: number;
        }
    ];
    credit_payment: {
        delayed: boolean;
        number_installments: number;
        save_card_data: boolean;
        transaction_type: string;
        pre_authorization: boolean;
        card: {
            number_token: string;
            cardholder_name: string;
            expiration_month: string;
            expiration_year: string;
        };
    };
}

export function createRequest(data: Request, token: string): Promise<AxiosResponse<any>> {
    return api.post(`${PATH_REQUEST}`, data, config(token));
}