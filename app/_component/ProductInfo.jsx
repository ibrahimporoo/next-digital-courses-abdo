'use client';
import { useUser } from '@clerk/nextjs';
import { GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import cartApis from '../_utils/CartApis';
import { useContext } from 'react';
import cartContext from '../_context/CartContext'

const ProductInfo = ({ product }) => {
	const { cart, setCart } = useContext(cartContext)
	const { user } = useUser();
	const router = useRouter();
	const handleAddToCart = () => {
		if(!user) {
			router.push('/sign-in');
		} else {
			// Add To Cart
			const data = {
				data: {
					username: user.fullName,
					email: user.primaryEmailAddress.emailAddress,
					products: [product?.id]
				}
			}
			cartApis.addToCart(data).then(res => {
				setCart([...cart, { id: res?.data?.data?.id, product }])
			}).catch(err => {
				console.log("Error:", err);
			})
		}
	}

	return (
		<div className="max-w-[720px]">
			{
				product?
				<>
					<h1 className="text-lg font-medium relative py-3 mb-8 w-fit">
						Details of the course
						<span className="absolute bottom-0 left-0 w-[60%] h-[5px] bg-gray-200"></span>
					</h1>
					<h2 className="font-bold text-[17px] mb-8">{ product?.attributes?.title }</h2>
					<p className="mb-8">{ product?.attributes?.description }</p>
					<button
						className="rounded bg-teal-600 px-8 py-2 flex items-center gap-2 w-fit text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500"
						onClick={handleAddToCart}
					>
						<GraduationCap />
						Add to Cart
					</button>
				</>
				:
				<>
					<h1 className="w-44 h-10 bg-slate-200 rounded-lg animate-pulse mb-8">
					</h1>
					<h2 className="w-72 h-6 bg-slate-200 rounded-lg animate-pulse mb-8"></h2>
					<p className="min-w-96 h-44 bg-slate-200 rounded-lg animate-pulse mb-8"></p>
					<div
						className="rounded w-52 h-4 px-8 py-4 bg-slate-200 animate-pulse"
					>
					</div>
				</>
			}
		</div>
	)
}

export default ProductInfo
