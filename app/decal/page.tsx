import Container from "@/components/container"
import { getMarkdocContent } from "@/markdoc/content"

export default async function DeCal() {
	const {
		jsx,
		data: { title, description, semester, application_url },
	} = await getMarkdocContent("decal")

	return (
		<Container className="max-w-screen-md">
			<h1 className="title mb-4 text-slate-800">{title}</h1>
			<p className="max-w-lg text-lg text-slate-600 sm:text-xl">
				{description}
			</p>
			{application_url ? (
				<a
					className="mb-12 mt-8 inline-block transform rounded-lg border border-blue-800 bg-primary px-6 py-2 font-bold text-white shadow-sm transition-transform hover:scale-105"
					href={application_url}
				>
					Apply for {semester} »
				</a>
			) : (
				<p className="mt-8 border-l-2 pl-4 font-bold text-primary">
					Check back to apply for {semester}!
				</p>
			)}
			<div className="markdown my-12">{jsx}</div>
		</Container>
	)
}
