/* eslint-disable @next/next/no-img-element */

export default function Figure({ title, src }: { title: string; src: string }) {
	return (
		<figure>
			<img src={src} alt={title} />
			<figcaption>{title}</figcaption>
		</figure>
	)
}

export const figure = {
	render: "Figure",
	selfClosing: true,
	attributes: {
		title: {
			type: String,
			required: true,
		},
		src: {
			type: String,
			required: true,
		},
	},
}
