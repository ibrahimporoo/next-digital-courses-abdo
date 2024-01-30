'use client';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Cart from './Cart';
import cartApis from '../_utils/CartApis';
import CartContext from '../_context/CartContext';

const Header = () => {

	const { cart, setCart } = useContext(CartContext);
	const [isOpen, setIsOpen] = useState(false);

	const { user } = useUser();
	const path = usePathname();

	const getCartItems = () => {

		cartApis.getCartItemsByUser(user.primaryEmailAddress.emailAddress).then(res => {

			res?.data?.data.forEach(cItem => {
				setCart((oldCart) => [
					...oldCart,
					{
						id: cItem?.id,
						product: cItem?.attributes?.products?.data[0]
					}
				]);
			})

		});

	};

	useEffect(() => {
		user && getCartItems();
  }, [user]);

	return !(path === '/sign-in' || path === '/sign-up') && (
		<header className="bg-white fixed top-0 left-0 w-[100%] z-50">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<Link className="block text-teal-600" href="/">
					<Image src='/logo.svg' alt='logo' width={60} height={60}></Image>
				</Link>

				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Global" className="hidden md:block">
						<ul className="flex items-center gap-6 text-sm">

							<li>
								<Link className="text-gray-500 transition hover:text-gray-500/75 font-semibold" href="/about"> About </Link>
							</li>

							<li>
								<Link className="text-gray-500 transition hover:text-gray-500/75 font-semibold" href="/"> Careers </Link>
							</li>

							<li>
								<Link className="text-gray-500 transition hover:text-gray-500/75 font-semibold" href="/"> Services </Link>
							</li>

							<li>
								<Link className="text-gray-500 transition hover:text-gray-500/75 font-semibold" href="/"> Projects </Link>
							</li>

							<li>
								<Link className="text-gray-500 transition hover:text-gray-500/75 font-semibold" href="/"> Blog </Link>
							</li>

						</ul>
					</nav>

					<div className="flex items-center gap-4">
						{
							!user ? (
								<>
									<div className="sm:flex sm:gap-4">
									<Link
										className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
										href="/sign-in"
									>
										Login
									</Link>

									<Link
										className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
										href="/sign-in"
									>
										Register
									</Link>
								</div>

								<button
									className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
								>
									<span className="sr-only">Toggle menu</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
									</svg>
								</button>
								</>
							) :
							(
								<div className='flex items-center gap-4'>
									<div className='flex cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
										<ShoppingCart />
										<p className='ms-1'>({ cart?.length })</p>
										{ isOpen && <Cart cart={ cart } />}
									</div>
									{
										user? <UserButton afterSignOutUrl="/"/>
										: <div className='w-6 h-6 rounded-full bg-slate-200 animate-pulse'></div> 
									}
									
								</div>
							)
						}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
