import Footer from "@/components/footer"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Build the Future",
	description: "UC Berkeley’s student-run entrepreneurship hub.",
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
				className="absolute -z-10 inset-0"
			/>
			<div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent to-white" />
		</>
	)
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className="font-primary antialiased">
				<Background />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
