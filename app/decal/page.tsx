const APPLICATION_URL = null
const SEMESTER = "Fall 2023"

export default async function DeCal() {
	return (
		<div className="container py-12 px-8 mx-auto">
			<h1 className="title text-primary mb-4">DeCal</h1>
			<p className="text-lg sm:text-xl max-w-lg text-slate-600">
				1 founder. 30 students. Every week.
			</p>
			{APPLICATION_URL ? (
				<a
					className="mt-8 mb-12 inline-block py-2 px-6 bg-primary border border-blue-800 font-bold text-white rounded-lg shadow-sm transform hover:scale-105 transition-transform"
					href={APPLICATION_URL}
				>
					Apply for {SEMESTER} »
				</a>
			) : (
				<p className="mt-8 font-bold text-primary border-l-2 pl-4">
					Check back to apply for {SEMESTER}!
				</p>
			)}
		</div>
	)
}
