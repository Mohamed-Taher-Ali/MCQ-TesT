import api from './config';



const prefix = "/users";



export const getUsers = async () => {
    return await api.get(`${prefix}/`);
};


export const checkUserName = async (name) => {
    return await api.get(`${prefix}/checkUserName/${name}`);
};


export const addUser = async (body) => {
    return await api.post(`${prefix}/addUser`, body);
};


export const updateUser = async (name, body) => {
    return await api.patch(`${prefix}/updateUser/${name}`, body);
};