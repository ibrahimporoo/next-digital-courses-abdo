import ProductsList from "./ProductsList"
import productsApis from "../_utils/ProductsApis";


const ProductsSection = async () => {

	const res = await productsApis.getLatestProducts()
	const products = res?.data?.data

	return (
		<div className="mx-2 lg:mx-4 px-8 py-16 md:px-16 lg:px-32">
			<h2 className="text-2xl font-bold mt-16 mb-8">The Latest Products</h2>
			<ProductsList products={products} />
		</div>
	)
}

export default ProductsSection

