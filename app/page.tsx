import Subscribe from "@/components/subscribe"
import speakers from "@/data/speakers.json"
import Image from "next/image"

export default function Home() {
	return (
		<main>
			<section className="container py-12 px-8 mx-auto flex flex-col items-start sm:items-center sm:text-center">
				<a
					href="https://happy-lobster-238.notion.site/Patent-Pending-0349478eef8a40d4aedef068bd81bead"
					className="bg-accent text-sm px-4 py-1 rounded-full font-bold text-slate-700 hover:translate-x-2 transform transition-all duration-500 whitespace-nowrap"
				>
					Join our coworking community! »
				</a>
				<h1 className="mt-8 title text-slate-800">
					UC&nbsp;Berkeley’s student-run{" "}
					<span className="text-primary shiny">entrepreneurship hub</span>.
				</h1>
				<p className="mt-8 text-slate-600 text-lg sm:text-xl mb-12 max-w-[45ch]">
					Build the Future is a{" "}
					<a className="link" href="/decal/">
						weekly speaker series
					</a>
					, a community, and a team on a mission to transform entrepreneurship
					at Berkeley.
				</p>
				<Subscribe />
			</section>
			<div className="border-t py-24 px-8">
				<section className="max-w-3xl mx-auto">
					<div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 mb-8 md:mb-4">
						<p className="text-xl md:text-2xl text-slate-700">Speaker Series</p>
						<p className="text-slate-500">
							Offered as UGBA 198, a 2-unit DeCal
						</p>
					</div>
					<h2 className="font-accent font-bold text-3xl md:text-4xl text-slate-800">
						1 founder. 30 students. Every week.
					</h2>
					<a
						className="mt-8 mb-12 inline-block py-2 px-6 bg-primary border border-blue-800 font-bold text-white rounded-lg shadow-sm transform hover:scale-105 transition-transform"
						href="/decal/"
					>
						More on the series »
					</a>
					<p className="text-slate-600 font-medium mb-4">Featured Speakers</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-slate-800">
						{speakers.map((speaker) => (
							<div key={speaker.name} className="flex items-center gap-4">
								<Image
									alt={`Picture of ${speaker.name}`}
									height="48"
									width="48"
									className="h-16 w-16 rounded-full shadow"
									src={speaker.image}
								/>
								<div>
									<p className="font-bold">{speaker.name}</p>
									<p>{speaker.company}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	)
}
