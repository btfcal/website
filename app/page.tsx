import Subscribe from "@/components/subscribe"
import speakers from "@/data/speakers.json"
import Image from "next/image"
import withDelian from "@/public/images/decal/with-delian.jpg"
import decal from "@/public/images/decal/decal.png"
import basesCollab from "@/public/images/coworking/bases-collab.jpg"
import Container from "@/components/container"

function Photos() {
	return (
		<div className="-z-10 mt-8 flex max-w-full items-start gap-12">
			<Image
				src={withDelian}
				alt="Picture of the class with Delian Asparouhov"
				placeholder="blur"
				className="hidden h-48 w-96 translate-y-8 -rotate-6 transform rounded-lg object-cover shadow-xl lg:block"
			/>
			<Image
				src={decal}
				alt="Picture of students in a classroom with a guest speaker in front of them"
				placeholder="blur"
				className="hidden h-48 w-96 translate-y-8 -rotate-1 transform rounded-lg object-cover shadow-xl sm:block"
			/>
			<Image
				src={basesCollab}
				alt="Picture of a group of students working together in a coworking space"
				placeholder="blur"
				className="h-48 w-96 translate-y-8 rotate-2 transform rounded-lg object-cover shadow-xl"
			/>
		</div>
	)
}

function Background() {
	return (
		<>
			<div
				style={{
					backgroundColor: "rgba(255,255,255,0)",
					backgroundImage:
						"linear-gradient(#f0f4f8 1px, transparent 1px), linear-gradient(to right, #f0f4f8 1px, transparent 1px)",
					backgroundSize: "80px 80px",
				}}
				className="absolute inset-0 -z-10"
			/>
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white" />
		</>
	)
}

export default function Home() {
	return (
		<main>
			<Background />
			<Container
				as="section"
				className="flex flex-col items-start pb-0 sm:items-center sm:text-center"
			>
				<a
					href="https://happy-lobster-238.notion.site/Patent-Pending-0349478eef8a40d4aedef068bd81bead"
					className="transform whitespace-nowrap rounded-full bg-accent px-4 py-1 text-sm font-bold text-slate-700 transition-all duration-500 hover:translate-x-2"
				>
					Join our coworking community! »
				</a>
				<h1 className="title mt-8 text-slate-800 md:text-5xl">
					UC&nbsp;Berkeley’s student-run{" "}
					<span className="shiny text-primary">entrepreneurship hub</span>.
				</h1>
				<p className="mb-12 mt-8 max-w-[45ch] text-lg text-slate-600 sm:text-xl">
					Build the Future is a weekly speaker series, a community, and a team
					on a mission to transform entrepreneurship at Berkeley.
				</p>
				<Subscribe />
				<Photos />
			</Container>
			<div className="z-10 border-t bg-white px-8 py-24">
				<section className="mx-auto max-w-3xl">
					<div className="mb-8 flex flex-col items-baseline gap-2 md:mb-4 md:flex-row md:gap-4">
						<p className="text-xl text-slate-700 md:text-2xl">Speaker Series</p>
						<p className="text-slate-500">
							Offered as UGBA 198, a 2-unit DeCal
						</p>
					</div>
					<h2 className="font-accent text-3xl font-bold text-slate-800 md:text-4xl">
						1 founder. 30 students. Every week.
					</h2>
					<a
						className="mb-12 mt-8 inline-block transform rounded-lg border border-blue-800 bg-primary px-6 py-2 font-bold text-white shadow-sm transition-transform hover:scale-105"
						href="/decal/"
					>
						More on the series »
					</a>
					<p className="mb-4 font-medium text-slate-600">Featured Guests</p>
					<div className="grid grid-cols-1 gap-4 text-slate-800 sm:grid-cols-2 md:grid-cols-3">
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
