import Container from "@/components/container"
import { getMarkdocContent } from "@/markdoc/content"
import clsx from "clsx"

export default async function DeCal() {
	const {
		jsx,
		data: {
			title,
			description,
			semester,
			application_url,
			application_deadline,
		},
	} = await getMarkdocContent("decal")

	return (
		<Container className="max-w-screen-md">
			<h1 className="title mb-2 text-slate-800">{title}</h1>
			<p className="max-w-lg text-lg text-slate-600 sm:text-2xl">
				{description}
			</p>
			<a
				className={clsx(
					"mb-4 mt-8 inline-block rounded-lg border border-blue-800 bg-primary px-6 py-2 font-bold text-white shadow-sm",
					application_url
						? "transform transition-transform hover:scale-105"
						: "cursor-not-allowed opacity-75",
				)}
				href={application_url || "#"}
			>
				{application_url
					? `Apply for ${semester} »`
					: "Check back later to apply!"}
			</a>
			{application_deadline && (
				<p className="text-sm text-slate-600">Due {application_deadline}</p>
			)}
			<div className="markdown my-12">{jsx}</div>
		</Container>
	)
}
