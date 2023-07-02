export default function Subscribe() {
	return (
		<div className="py-4">
			<p className="mb-2 text-sm text-slate-700 font-medium">
				Never miss what’s happening at Berkeley.
			</p>
			<form
				className="sm:flex-row gap-2 flex flex-col items-stretch"
				action="https://buttondown.email/api/emails/embed-subscribe/btf"
				method="POST"
			>
				<label className="w-full" htmlFor="email">
					<input
						className="rounded-lg border shadow-sm w-80 px-4 py-2"
						id="email"
						type="email"
						name="email"
						placeholder="Enter your email..."
					/>
				</label>
				<button
					className="py-2 px-6 bg-primary border border-blue-800 font-bold text-white rounded-lg shadow-sm"
					type="submit"
					value="Subscribe"
				>
					Subscribe
				</button>
			</form>
			<p className="mt-2 text-sm text-slate-500">
				Use your .edu email if you have one!
			</p>
		</div>
	)
}
