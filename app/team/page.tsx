import team from "@/data/team.json"
import alumni from "@/data/alumni.json"
import Image from "next/image"

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
	const socials = ["linkedin", "twitter", "email"] as const
	// The factor is 1 if order is ascending, -1 if descending.
	// This basically inverts the sort comparison function if order is
	// descending.
	const factor = order === "asc" ? 1 : -1
	return people
		.sort((a, b) => factor * (a.class < b.class ? -1 : 1))
		.map((person) => (
			<div key={person.name}>
				<div className="w-full relative h-48 mb-4">
					<Image
						src={person.image}
						alt={`Picture of ${person.name}`}
						fill
						className="object-cover object-top rounded-lg shadow-sm"
					/>
				</div>
				<p className="text-slate-800 font-medium">
					{person.name} ‘{person.class}
				</p>
				<p className="text-slate-500 text-sm">{person.major}</p>
				<div className="flex mt-2 gap-1">
					{socials.map(
						(social) =>
							person[social] && (
								<a
									key={social}
									href={
										social === "email"
											? `mailto:${person[social]}`
											: person[social]
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
			</div>
		))
}

export default function Team() {
	return (
		<div className="container py-12 px-8 mx-auto">
			<h1 className="title text-primary mb-4">Team</h1>
			<p className="text-lg sm:text-xl max-w-lg text-slate-600">
				We’re a small team of facilitators with an ambitious mission.
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
				<People people={team} order="asc" />
			</div>
			<h2 className="text-3xl mt-12 font-accent font-bold">Alumni</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
				<People people={alumni} order="desc" />
			</div>
		</div>
	)
}
