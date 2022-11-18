import React from 'react';
import axios, { AxiosResponse } from 'axios';

export default class Services {
    static getUserLogin(
        phone: string
    ): Promise<AxiosResponse<Record<string, string>>> {
        
        return axios.post<Record<string, string>>(
            'http://188.225.33.40/api/user/login',
            { phone: `${phone}` },
            { headers: { accept: 'application/json' } }
        );
    }

    static getUserInfo(
        token: string
    ): Promise<AxiosResponse<Record<string, object>>> {
        return axios.get<Record<string, object>>('http://188.225.33.40/api/user/info', {
            headers: {
                accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
        });
    }
}
