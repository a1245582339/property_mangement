import http from './index';
const domin  = '/part';

export const getPart = query => {
    return http.get(`${domin}`, {params: query})
}

export const updataPart = data => {
    return http.post(`${domin}`, data)
}