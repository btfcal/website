import { getMarkdownContent } from "@/lib/md"

export default async function DeCal() {
	const {
		jsx,
		data: { semester, application_url },
	} = await getMarkdownContent("decal")

	return (
		<div className="container py-12 px-8 mx-auto">
			<h1 className="title text-primary mb-4">DeCal</h1>
			<p className="text-lg sm:text-xl max-w-lg text-slate-600">
				1 founder. 30 students. Every week.
			</p>
			{application_url ? (
				<a
					className="mt-8 mb-12 inline-block py-2 px-6 bg-primary border border-blue-800 font-bold text-white rounded-lg shadow-sm transform hover:scale-105 transition-transform"
					href={application_url}
				>
					Apply for {semester} »
				</a>
			) : (
				<p className="mt-8 font-bold text-primary border-l-2 pl-4">
					Check back to apply for {semester}!
				</p>
			)}
			<div className="markdown">{jsx}</div>
		</div>
	)
}
