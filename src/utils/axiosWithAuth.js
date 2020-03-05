import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'http://68.183.138.134/',
        headers: {
            Authorization: token
        }
    });
};