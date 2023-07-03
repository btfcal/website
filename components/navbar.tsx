"use client"
import { usePathname } from "next/navigation"
import navLinks from "@/data/nav-links.json"
import Logo from "./logo"
import clsx from "clsx"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col md:flex-row justify-between items-stretch md:items-center md:px-8 text-slate-700">
			<input type="checkbox" id="toggle" className="hidden peer" />
			<div className="flex justify-between items-center px-8 py-2 md:px-0">
				<a href="/" className="flex items-center gap-4">
					<Logo />
					<span className="font-bold font-accent text-lg">
						Build the Future
					</span>
				</a>
				<label htmlFor="toggle" className="cursor-pointer md:hidden">
					<HamburgerMenuIcon />
				</label>
			</div>
			<ul className="hidden peer-checked:flex md:flex flex-col md:flex-row shadow-sm border-y bg-white md:bg-transparent md:shadow-none md:border-none md:gap-8">
				{navLinks.map(({ link, title }) => (
					<a
						key={link}
						className={clsx(
							"hover:text-primary underline-offset-4 underline hover:decoration-primary transition-colors py-4 px-8 md:p-0",
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
