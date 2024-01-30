
import axiosClient from "./axiosClient";


const getLatestProducts = () => axiosClient.get('/products?populate=*', {
	next: { revalidate: 3600 }
});
const getSingleProduct = (id) => axiosClient.get(`/products/${id}?populate=*`);
const getProductsByCategory = (categoryName) => axiosClient.get(`/products?filters[category][$eq]=${categoryName}&populate=*`);

export default {
	getLatestProducts,
	getSingleProduct,
	getProductsByCategory
}