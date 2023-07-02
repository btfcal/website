import Image from "next/image"
import logo from "@/public/images/icon.png"

export default function Logo() {
	return <Image alt="Build the Future logo" width="64" height="38" src={logo} />
}
