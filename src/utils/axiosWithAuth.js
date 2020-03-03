import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: '68.183.138.134',
        headers: {
            Authorization: token
        }
    });
};