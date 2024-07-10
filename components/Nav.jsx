import Link from "next/link";
import Image from "next/image";

const Nav = () => {
	return (
		<nav className="fixed top-0 w-screen h-16 z-30 flex items-center px-6 lg:px-12 bg-gradient-to-b from-zinc-950 to-zinc-950/0 backdrop-blur-sm">
			<Link href="/">
				<Image
					src="/logo.svg"
					width={112}
					height={48}
					alt="logo"
				/>
			</Link>
			<Link
				href="tel:+1-123-123-123"
				className="ml-auto text-white"
			>
				+1-123-123-123
			</Link>
			<button className="ml-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 24 24"
				>
					<path
						fill="#ffffff"
						d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
					/>
				</svg>
			</button>
		</nav>
	);
};

export default Nav;
