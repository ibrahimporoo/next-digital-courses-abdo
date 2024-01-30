import Image from "next/image";
import Link from "next/link";


const ProductsList = ({ products }) => {
	return (
		<div className="grid gap-4 sm:grid-cols-2 md:gap-4 md:grid-cols-3 xl:grid-cols-4">

			{ products?.map((product) => {
				return (

					<Link href={`/product-details/${product.id}`} key={product.id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
						<Image
							src={product?.attributes?.banner?.data?.attributes?.url}
							alt={`course-img-${product.id}`}
							className="h-56 w-full object-cover"
							width={400}
							height={300}
						/>

						<div className="bg-white p-4 sm:p-6">
							<time className="block text-xs text-gray-500"> 10th Oct 2022 </time>

							<h3 className="mt-0.5 text-[12px] min-h-14 md:text-lg line-clamp-2 text-gray-900">{product?.attributes?.title}</h3>

							<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
								{product?.attributes?.description}
							</p>
						</div>
					</Link>
				)
			}) }

		</div>
	)
}

export default ProductsList;
