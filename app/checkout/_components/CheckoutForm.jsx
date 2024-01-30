import axios from "axios";
import orderApis from '../../_utils/OrderApis.js'
import cartApis from "../../_utils/CartApis";

import { useContext, useState } from "react";
import CartContext from "../../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import {
	useStripe,
	useElements,
	PaymentElement
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }) => {

	const { cart, setCart } = useContext(CartContext);
	const { user } = useUser();

	const stripe = useStripe();
	const elements = useElements();

	const [errorMessage, setErrorMessage] = useState();
	const [loading, setLoading] = useState(false);

	const handleError = (error) => {
		setLoading(false);
		setErrorMessage(error.message);
	};

	const handleAddOrder = () => {

		try {

			let productIDS = [];
			cart.forEach(el => {
				productIDS.push(el?.product?.id);
			});

			const data = {
				data: {
					email: user.primaryEmailAddress.emailAddress,
					username: user.fullName,
					amount,
					products: productIDS
				}
			};

			orderApis.addOrder(data).then(res => {
				if(res) {
					cart.forEach(el => {
						cartApis.deleteFromCart(el?.id);
					})
					setCart([]);
				}
			}).catch(err => {
				console.log("Order API Don't Work ERR:");
				console.log(err);
			})

		} catch(err) {
			console.log("Adding Order ERR:");
			console.log(err);
		}

	};

	const sendEmail = async () => {
		const userData = {
			fullName: user.fullName,
			email: user.primaryEmailAddress.emailAddress,
			amount
		};
		await axios.post("/api/send", userData);
	};


	// Trigger Submitting
	const handleSubmit = async (event) => {

		event.preventDefault();

		if (!stripe) {
			return;
		}

		setLoading(true);

		handleAddOrder();
		sendEmail();

		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}

		try {
			const { data } = await axios.post("/api/create-intent", {
				data: { amount: amount },
			});
			const clientSecret = data;

			// Confirm the PaymentIntent using the details collected by the Payment Element
			await stripe.confirmPayment({
				elements,
				clientSecret,
				confirmParams: {
					return_url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/payment-confirm`,
				},
			});
		} catch (err) {
			console.log("Payment err:");
			console.log(err);
		}

	};

	return (
		<form onSubmit={handleSubmit} className="mx-16 md:mx-32 pt-32 pb-16">
			<PaymentElement />
			<button
				className="w-full bg-blue-400 cursor-pointer focus:outline-1 outline-blue-400 active:scale-95 transition p-2 rounded-md mt-4 text-white font-semibold"
				type="submit"
				disabled={!stripe || loading}
			>
				Submit Payment
			</button>
			<p className="text-gray-400 p-2 rounded-sm my-2">
				{errorMessage && <div>{errorMessage}</div>}
			</p>
		</form>
	);

};

export default CheckoutForm;
