import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { CONTENT_DIR, formatDate } from "@/markdoc/content"

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
		<div className="container max-w-3xl py-12 px-8 mx-auto flex items-center flex-col">
			<div className="text-center">
				<h1 className="title text-primary mb-4">Blog</h1>
				<p className="text-lg sm:text-xl max-w-lg text-slate-600">
					Updates from the BTF community.
				</p>
			</div>
			<div className="my-12 space-y-8">
				{posts.map((post) => (
					<div key={post.slug} className="border-l-4 border-dotted pl-4">
						<a
							className="text-2xl font-accent font-bold text-slate-700"
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
		</div>
	)
}
