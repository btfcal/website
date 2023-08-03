import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { CONTENT_DIR } from "@/markdoc/content"

export default function getPosts() {
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

	return posts
}
