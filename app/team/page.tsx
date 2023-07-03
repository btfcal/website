import team from "@/data/team.json"
import alumni from "@/data/alumni.json"
import Image from "next/image"
import Container from "@/components/container"
import sortBy from "lodash-es/sortBy"

interface SocialsProps {
	person: Person
}
function Socials({ person }: SocialsProps) {
	const socials = ["linkedin", "twitter", "email"] as const

	return (
		<div className="mt-4 flex gap-2">
			{socials.map(
				(social) =>
					person[social] && (
						<a
							key={social}
							href={
								social === "email" ? `mailto:${person[social]}` : person[social]
							}
							target="_blank"
							rel="noopener noreferrer"
							className="mr-2"
						>
							<Image
								src={`/vectors/social/${social}.svg`}
								alt={social}
								width={16}
								height={16}
							/>
						</a>
					),
			)}
		</div>
	)
}

interface Person {
	name: string
	class: string
	major: string
	image: string
	linkedin?: string
	twitter?: string
	email?: string
}
function People({
	people,
	order,
}: {
	people: Person[]
	order: "asc" | "desc"
}) {
	const results = sortBy(people, ["class"]).map((person) => (
		<div
			className="flex items-center gap-4 md:flex-col md:items-start"
			key={person.name}
		>
			<Image
				src={`/images/team/${person.image}`}
				alt={`Picture of ${person.name}`}
				width="200"
				height="200"
				className="h-24 w-24 rounded-lg object-cover object-top shadow-sm md:h-48 md:w-48"
			/>
			<div>
				<p className="text-lg font-medium text-slate-800">
					{person.name} ‘{person.class}
				</p>
				<p className="text-sm text-slate-500">{person.major}</p>
				<Socials person={person} />
			</div>
		</div>
	))
	if (order === "desc") results.reverse()

	return (
		<div className="mt-12 grid gap-8 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
			{results}
		</div>
	)
}

export default function Team() {
	return (
		<Container>
			<h1 className="title mb-4 text-primary">Team</h1>
			<p className="max-w-lg text-lg text-slate-600 sm:text-xl">
				We’re a small team of facilitators with an ambitious mission.
			</p>
			<People people={team} order="asc" />
			<h2 className="mt-12 font-accent text-3xl font-bold">Alumni</h2>
			<People people={alumni} order="desc" />
		</Container>
	)
}
