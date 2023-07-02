import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Markdoc from "@markdoc/markdoc"
import React from "react"
import { remark } from "remark"
import smartypants from "remark-smartypants"

const CONTENT_DIR = path.join(process.cwd(), "content")

/**
 * Get the content of a Markdown file by its path in the content dir.
 * Inspired by https://github.com/dylanmeivis/nextjs13-starter-markdoc.
 *
 * @param pathname The path for the Markdown file relative to the content dir.
 * @returns JSX in `jsx` and the frontmatter in `data`.
 */
export async function getMarkdownContent(pathname: string) {
	const filePath = path.join(CONTENT_DIR, pathname + ".md")
	const source = fs.readFileSync(filePath, "utf-8")

	const { data, content } = matter(source)

	const ast = Markdoc.parse(
		(await remark().use(smartypants).process(content)).toString(),
	)

	const transformed = Markdoc.transform(ast, {})
	const jsx = Markdoc.renderers.react(transformed, React)

	return { data, jsx }
}
