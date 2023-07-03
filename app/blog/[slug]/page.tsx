import Container from "@/components/container"
import { formatDate, getMarkdocContent } from "@/markdoc/content"
import path from "path"

export default async function Post({ params }: { params: { slug: string } }) {
	const { jsx, data } = await getMarkdocContent(path.join("blog", params.slug))

	return (
		<Container className="markdown max-w-screen-md">
			<h1 className="!mb-2 !text-4xl">{data.title}</h1>
			<p className="!mb-12 text-base text-slate-600">
				Published {formatDate(data.date)}
			</p>
			{jsx}
		</Container>
	)
}
