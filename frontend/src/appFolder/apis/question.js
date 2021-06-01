import api from './config';


const prefix = "/questions";


export const getQuestions = async(count=5) => {
    return await api.get(`${prefix}/?count=${count}`);
};