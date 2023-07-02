"use client"
import { usePathname } from "next/navigation"
import navLinks from "@/data/nav-links.json"
import Logo from "./logo"
import clsx from "clsx"

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col text-sm sm:text-base md:flex-row justify-between sm:items-center p-8 text-slate-700">
			<div>
				<a href="/" className="flex items-center gap-4">
					<Logo />
					<span className="font-bold font-accent text-lg">
						Build the Future
					</span>
				</a>
			</div>
			<ul className="flex gap-4">
				{navLinks.map(({ link, title }) => (
					<a
						key={link}
						className={clsx(
							pathname === link && "text-primary underline underline-offset-4",
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
