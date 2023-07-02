import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function Details({
	summary,
	children,
}: {
	summary: string
	children: React.ReactNode
}) {
	return (
		<details className="group">
			<summary className="flex items-center gap-2">
				{summary}
				<ChevronDownIcon />
			</summary>
			{children}
		</details>
	)
}

export const details = {
	render: "Details",
	children: ["paragraph", "tag", "list"],
	attributes: {
		summary: {
			type: String,
			required: true,
		},
	},
}
