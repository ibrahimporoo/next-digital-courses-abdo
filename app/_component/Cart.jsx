import Link from "next/link"

const Cart = ({ cart }) => {
	return (
		<div className={`w-72 min-h-36 max-h-80 px-4 pb-4 bg-gray-200 shadow-md rounded-lg absolute top-[64px] right-24`}>

			<div className="mt-4 space-y-6 max-h-64 overflow-y-auto">
				<ul className="space-y-4">
					{
						cart.map(item => (
							<li key={item.id}  className="flex items-center gap-4">
								<img
									src={item?.product?.attributes?.banner?.data?.attributes?.url}
									alt="choosed-product"
									className="h-16 w-16 rounded object-cover flex-1"
								/>

								<div className="flex-1">
									<h3 className="text-sm text-gray-900 line-clamp-1">{ item?.product?.attributes?.title }</h3>

									<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
										<div>
											<dt className="inline">category:</dt>
											<dd className="inline">{ item?.product?.attributes?.category }</dd>
										</div>

										<div>
											<dt className="inline">price:</dt>
											<dd className="inline">{ item?.product?.attributes?.price }</dd>
										</div>
									</dl>
								</div>
							</li>
						))

					}

				</ul>

				<div className="space-y-4 text-center">

					<Link
						href="/cart"
						className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
					>
						View my cart ({ cart.length })
					</Link>
				</div>
			</div>

		</div>
	)
}

export default Cart
