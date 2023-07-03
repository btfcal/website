import socials from "@/data/social.json"
import Image from "next/image"
import Container from "./container"

export default function Footer() {
	return (
		<footer className="border-t">
			<Container>
				<div className="flex items-end gap-4 rounded-lg">
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
				<p className="mt-4 max-w-sm text-slate-500">
					We are a student group acting independently of the University of
					California. We take full responsibility for our organization and this
					website.
				</p>
			</Container>
		</footer>
	)
}
