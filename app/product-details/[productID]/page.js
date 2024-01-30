'use client';
import { useEffect, useState } from "react";

import Breadcrumb from "/app/_component/Breadcrumb.jsx";
import ProductBanner from "/app/_component/ProductBanner";
import ProductInfo from "/app/_component/ProductInfo";
import ProductsList from "/app/_component/ProductsList";
import productsApis from "/app/_utils/ProductsApis";

const ProductDetails = ({ params }) => {
	const { productID } = params;
	const [product, setProduct] = useState();
	const [productsByCategory, setProductsByCategory] = useState([]);

	const getSingleProduct_ = () => {
		productsApis.getSingleProduct(productID).then(res => {
			setProduct(res?.data?.data);
			getProductsByCategory_(res?.data?.data?.attributes?.category);
		});
	};

	const getProductsByCategory_ = (category) => {
		productsApis.getProductsByCategory(category).then(res => {
			setProductsByCategory(res?.data?.data);
		});
	};
/*
--- Server Component
	const resSingleProduct = await productsApis.getSingleProduct(productID);
	const product = resSingleProduct?.data?.data;
	const resProducts = await productsApis.getProductsByCategory(resSingleProduct?.data?.data?.attributes?.category);
	const productsByCategory = resProducts?.data?.data;

	console.log("Products By Category:\n", productsByCategory);
*/
	useEffect(() => {
		getSingleProduct_();
	}, []);

	return (
		<div className="px-8 py-16 mt-8 md:px-32">
			<Breadcrumb />
			<div className="flex flex-col lg:flex-row gap-8 pt-16">
				<ProductBanner product={product} />
				<ProductInfo product={product} />
			</div>
			<div className="pt-16">
				<h2 className="text-2xl font-bold mt-16 mb-8">Similar Courses</h2>
				<ProductsList products={productsByCategory} />
			</div>
		</div>
	)
}

export default ProductDetails
