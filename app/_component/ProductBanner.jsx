import Image from "next/image";

const ProductBanner = ({ product }) => {
	return (
		<>
			{ product?
			<Image src={product?.attributes?.banner?.data?.attributes?.url}
				alt="course-img"
				width={280}
				height={200}
				className="h-96 md:w-[500px] object-cover rounded-md shadow-sm" /> :
				<div className="w-[450px] h-96 bg-slate-200 rounded-lg animate-pulse"></div>
			}
		</>
	)
}

export default ProductBanner
