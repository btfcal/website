import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { CONTENT_DIR, formatDate } from "@/markdoc/content"
import Container from "@/components/container"

function getPosts() {
	const fileNames = fs.readdirSync(path.join(CONTENT_DIR, "blog"))
	const posts = fileNames.map((fileName) => {
		const slug = fileName.replace(".md", "")
		const fullPath = path.join(CONTENT_DIR, "blog", fileName)
		const fileContents = fs.readFileSync(fullPath, "utf8")

		const { data } = matter(fileContents)

		return {
			slug,
			data,
		}
	})

	return posts.sort((a, b) => {
		return b.data.date - a.data.date
	})
}

export default function Blog() {
	const posts = getPosts()

	return (
		<Container className="flex max-w-screen-md flex-col">
			<h1 className="title mb-4 text-primary">Blog</h1>
			<p className="text-lg text-slate-600 sm:text-xl">
				Updates from the BTF community.
			</p>
			<div className="my-12 divide-y">
				{posts.map((post) => (
					<div key={post.slug} className="py-8">
						<a
							className="font-accent text-xl font-bold text-slate-700"
							href={`/blog/${post.slug}`}
						>
							{post.data.title}
						</a>
						<p className="mt-2 text-slate-500">
							Published {formatDate(post.data.date)}
						</p>
					</div>
				))}
			</div>
		</Container>
	)
}
