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
			className="flex md:flex-col items-center md:items-start gap-4"
			key={person.name}
		>
			<Image
				src={`/images/team/${person.image}`}
				alt={`Picture of ${person.name}`}
				width="200"
				height="200"
				className="object-cover object-top rounded-lg shadow-sm w-24 h-24 md:w-48 md:h-48"
			/>
			<div>
				<p className="text-slate-800 font-medium text-lg">
					{person.name} ‘{person.class}
				</p>
				<p className="text-slate-500 text-sm">{person.major}</p>
				<Socials person={person} />
			</div>
		</div>
	))
	if (order === "desc") results.reverse()

	return (
		<div className="grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 mt-12">
			{results}
		</div>
	)
}

export default function Team() {
	return (
		<Container>
			<h1 className="title text-primary mb-4">Team</h1>
			<p className="text-lg sm:text-xl max-w-lg text-slate-600">
				We’re a small team of facilitators with an ambitious mission.
			</p>
			<People people={team} order="asc" />
			<h2 className="text-3xl mt-12 font-accent font-bold">Alumni</h2>
			<People people={alumni} order="desc" />
		</Container>
	)
}
