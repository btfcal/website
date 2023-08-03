import Container from "@/components/container"
import { formatDate, getMarkdocContent } from "@/markdoc/content"
import { notFound } from "next/navigation"
import path from "path"
import getPosts from "../get-posts"

export async function generateStaticParams() {
	return getPosts()
}

export default async function Post({ params }: { params: { slug: string } }) {
	let jsx, data
	try {
		;({ jsx, data } = await getMarkdocContent(path.join("blog", params.slug)))
	} catch {
		notFound()
	}

	return (
		<Container className="markdown max-w-screen-md">
			<h1 className="!mb-2 !text-4xl">{data.title}</h1>
			<p className="!mb-12 text-base text-slate-600">
				Published {formatDate(data.date)} {data.author && `by ${data.author}`}
			</p>
			{jsx}
		</Container>
	)
}
