import Link from "next/link";

const Hero = () => {
	return (
		<section className="bg-gray-50">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
				<div className="mx-auto max-w-xl text-center">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						Understand User Flow.
						<strong className="font-extrabold text-teal-700 sm:block"> Increase Conversion. </strong>
					</h1>

					<p className="mt-4 sm:text-xl/relaxed">
						Get The best courses with excellent Instructors
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link
							className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
							href="/"
						>
							Get Started
						</Link>

						<Link
							className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
							href="/about"
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Hero
