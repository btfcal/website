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
		<Component className={clsx("container py-12 px-8 mx-auto", className)}>
			{children}
		</Component>
	)
}
