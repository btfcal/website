import clsx from "clsx"

export default function Container({
	children,
	className,
	as = "div",
}: {
	children: React.ReactNode
	className?: string
	as?: keyof JSX.IntrinsicElements
}) {
	const Component = as
	return (
		<Component className={clsx("container mx-auto px-8 py-12", className)}>
			{children}
		</Component>
	)
}
