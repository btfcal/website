import socials from "@/data/social.json"
import Logo from "./logo"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className="border-t py-12 px-8 gap-8 flex flex-col md:flex-row justify-between items-start">
			<div>
				<Logo />
				<p className="mt-4 text-slate-500 max-w-prose">
					We are a student group acting independently of the University of
					California. We take full responsibility for our organization and this
					website.
				</p>
			</div>
			<div className="flex gap-4 p-4 rounded-lg">
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
		</footer>
	)
}
