import { getMarkdocContent } from "@/markdoc/content"

export default async function DeCal() {
	const {
		jsx,
		data: { title, description, semester, application_url },
	} = await getMarkdocContent("decal")

	return (
		<div className="container py-12 px-8 max-w-prose mx-auto">
			<h1 className="title text-primary mb-4">{title}</h1>
			<p className="text-lg sm:text-xl max-w-lg text-slate-600">
				{description}
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
			<div className="markdown my-12">{jsx}</div>
		</div>
	)
}
