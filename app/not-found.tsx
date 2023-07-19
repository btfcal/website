/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container"
import Link from "next/link"

export default function NotFound() {
	return (
		<Container className="flex max-w-2xl flex-col items-center text-center">
			<h1 className="title mb-8">
				We couldn’t find the page you’re looking for.
			</h1>
			<p className="markdown text-lg text-slate-600">
				If you think something important is missing, you can reach out to a
				facilitator on the <Link href="/team">Build the Future team</Link>.
			</p>
			<Link
				className="mt-8 rounded-lg border border-blue-800 bg-primary px-6 py-2 font-bold text-white shadow-sm"
				href="/"
			>
				Go home
			</Link>
		</Container>
	)
}
