import '../globals.css'
import Image from "next/image";
import Link from "next/link";

const PaymentConfirm = () => {
	return (
		<div className="py-16 text-center mx-16 md:mx-3">
			<Image
				className="mx-auto animate scale-up-center"
				src="/badge-check.svg"
				alt="check-mark"
				width={180}
				height={180}
			></Image>
			<h2 className="text-2xl text-teal-600 font-semibold">
				Payment Succeeded !!
			</h2>
			<h2 className="text-1xl my-6 text-gray-500">
				We sent an email with tour order confirmation along with digital content
			</h2>
			<Link href="/" className="py-2 px-4 text-white rounded-md bg-teal-600">
				Go to Home
			</Link>
		</div>
	);
};

export default PaymentConfirm;
