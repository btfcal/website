import socials from "@/data/social.json"
import navLinks from "@/data/nav-links.json"
import Image from "next/image"
import Container from "./container"
import Subscribe from "./subscribe"

export default function Footer() {
	return (
		<footer className="border-t">
			<Container className="flex flex-col items-center gap-12 text-center">
				<Subscribe />
				<div className="flex gap-8">
					{navLinks.map(({ link, title }) => (
						<a
							key={link}
							className="text-slate-500 transition-colors hover:text-slate-800"
							href={link}
						>
							{title}
						</a>
					))}
				</div>
				<div className="flex gap-8">
					{socials.map(({ link, image, name }) => (
						<a
							key={link}
							className="social"
							href={link}
							target="_blank"
							rel="noopener"
							title={name}
						>
							<Image src={image} alt={name} width={24} height={24} />
						</a>
					))}
				</div>
				<p className="max-w-sm text-slate-400">
					We are a student group acting independently of the University of
					California. We take full responsibility for our organization and this
					website.
				</p>
			</Container>
		</footer>
	)
}
