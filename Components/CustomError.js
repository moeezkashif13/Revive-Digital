import Link from "next/link";

export default function CustomError({type="service"}){

    return <section className="flex items-center h-full p-16  ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-primary ">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-primary text-2xl font-semibold md:text-3xl">Sorry, this {type} is not available .</p>
			<p className="mt-4 mb-8 font-medium">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded  ">Back to homepage</Link>
		</div>
	</div>
</section>


}