import axiosClient from './axiosClient';

const addToCart = (payload) => axiosClient.post('/carts', payload);

const getCartItemsByUser = (email) => axiosClient.get(`/carts?populate[products][populate]=*&filters[email][$eq]=${email}`);

const deleteFromCart = (id) => axiosClient.delete(`/carts/${id}`);


export default {
	addToCart,
	getCartItemsByUser,
	deleteFromCart
}


