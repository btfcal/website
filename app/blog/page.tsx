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
		<Container className="flex max-w-3xl flex-col items-center">
			<div className="text-center">
				<h1 className="title mb-4 text-primary">Blog</h1>
				<p className="max-w-lg text-lg text-slate-600 sm:text-xl">
					Updates from the BTF community.
				</p>
			</div>
			<div className="my-12 space-y-8">
				{posts.map((post) => (
					<div key={post.slug} className="border-l-4 border-dotted pl-4">
						<a
							className="font-accent text-2xl font-bold text-slate-700"
							href={`/blog/${post.slug}`}
						>
							{post.data.title}
						</a>
						<p className="mt-2 text-lg text-slate-500">
							Published {formatDate(post.data.date)}
						</p>
					</div>
				))}
			</div>
		</Container>
	)
}
