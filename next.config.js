/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/guide/:path",
				destination: "/blog/guide-:path",
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
