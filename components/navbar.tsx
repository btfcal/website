"use client"
import { usePathname } from "next/navigation"
import navLinks from "@/data/nav-links.json"
import Logo from "./logo"
import clsx from "clsx"

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col md:flex-row justify-between sm:items-center px-8 py-4 text-slate-700">
			<div>
				<a href="/" className="flex items-center gap-4">
					<Logo />
					<span className="font-bold font-accent text-lg">
						Build the Future
					</span>
				</a>
			</div>
			<ul className="flex gap-6">
				{navLinks.map(({ link, title }) => (
					<a
						key={link}
						className={clsx(
							"hover:text-primary underline-offset-4 underline hover:decoration-primary transition-colors",
							pathname === link
								? "font-bold decoration-inherit"
								: "decoration-transparent",
						)}
						href={link}
					>
						{title}
					</a>
				))}
			</ul>
		</nav>
	)
}
