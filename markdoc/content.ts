import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Markdoc from "@markdoc/markdoc"
import React from "react"
import Details, { details } from "./schema/Details.markdoc"
import Figure, { figure } from "./schema/Figure.markdoc"

export const CONTENT_DIR = path.join(process.cwd(), "content")

export function formatDate(date: Date) {
	return Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date)
}

/**
 * Get the content of a Markdown file by its path in the content dir.
 * Inspired by https://github.com/dylanmeivis/nextjs13-starter-markdoc.
 *
 * @param pathname The path for the Markdown file relative to the content dir.
 * @returns JSX in `jsx` and the frontmatter in `data`.
 */
export async function getMarkdocContent(pathname: string) {
	const filePath = path.join(CONTENT_DIR, pathname + ".md")
	const source = fs.readFileSync(filePath, "utf-8")

	const { data, content } = matter(source)

	const ast = Markdoc.parse(content)

	const transformed = Markdoc.transform(ast, {
		tags: {
			details,
			figure,
		},
	})
	const jsx = Markdoc.renderers.react(transformed, React, {
		components: {
			Details,
			Figure,
		},
	})

	return { data, jsx }
}
