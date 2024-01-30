import axiosClient from './axiosClient';

const addOrder = (payload) => axiosClient.post('/orders', payload);

export default {
	addOrder
}