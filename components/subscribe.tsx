export default function Subscribe() {
	return (
		<div className="py-4">
			<p className="mb-2 text-sm font-medium text-slate-700">
				Never miss what’s happening at Berkeley.
			</p>
			<form
				className="flex flex-col items-stretch gap-2 sm:flex-row"
				action="https://buttondown.email/api/emails/embed-subscribe/btf"
				method="POST"
			>
				<label className="w-full" htmlFor="email">
					<input
						className="w-80 rounded-lg border px-4 py-2 shadow-sm"
						id="email"
						type="email"
						name="email"
						placeholder="Enter your email..."
					/>
				</label>
				<button
					className="rounded-lg border border-blue-800 bg-primary px-6 py-2 font-bold text-white shadow-sm"
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
