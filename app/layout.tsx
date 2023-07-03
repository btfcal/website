import Footer from "@/components/footer"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Build the Future",
	description: "UC Berkeley’s student-run entrepreneurship hub.",
	metadataBase: new URL("https://thefuture.build"),
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
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
