import { formatDate, getMarkdocContent } from "@/markdoc/content"
import path from "path"

export default async function Post({ params }: { params: { slug: string } }) {
	const { jsx, data } = await getMarkdocContent(path.join("blog", params.slug))

	return (
		<div className="container py-12 px-8 mx-auto markdown">
			<h1>{data.title}</h1>
			<p className="text-slate-600">Published {formatDate(data.date)}</p>
			{jsx}
		</div>
	)
}
