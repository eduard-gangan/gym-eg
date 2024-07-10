import Nav from "@/components/Nav";
import Image from "next/image";
import MainBtn from "@/components/MainBtn";

export default function Home() {
	return (
		<main className="bg-zinc-900 min-h-screen">
			<Nav />
			<div className="grid lg:grid-cols-2 w-screen min-h-screen">
				<div className="w-full grid gap-2 lg:gap-4 place content-center px-6 lg:px-12">
					<h1 className="2xl:text-6xl text-5xl text-zinc-200 font-bold">
						Awesome header for this site
					</h1>
					<p className="2xl:text-2xl  text-xl text-zinc-300">
						Short description of this gym, their mission maybe, the services
						they provide
					</p>
					<MainBtn
						href="/"
						text="Call to action"
					/>
					<div className="flex content-baseline">
						<img
							src="/assets/star.svg"
							alt="star"
						/>
						<img
							src="/assets/star.svg"
							alt="star"
						/>
						<img
							src="/assets/star.svg"
							alt="star"
						/>
						<img
							src="/assets/star.svg"
							alt="star"
						/>
						<img
							src="/assets/star.svg"
							alt="star"
						/>
						<p className="text-zinc-400 ml-2">89 reviews</p>
					</div>
				</div>
				<div className="relative w-full h-full">
					<div className="absolute w-full h-full" />
					<Image
						fill="true"
						src="/assets/gym.webp"
						quality={100}
						className="object-cover clip-tl"
					/>
				</div>
			</div>

			{/* Section 2 */}

			<div className="min-h-screen grid grid-cols-2 place-content-center items-center gap-16 py-16 relative">
				{/* <div className="absolute right-0 top-0 bg-zinc-800 clip-bl w-1/2 h-full z-0" /> */}
				<Image
					src="/assets/gym1.webp"
					quality={100}
					alt="a well-equipped gym"
					className="aspect-[2/3] justify-self-end clip-yl"
					width={500}
					height={600}
				/>
				<div className="grid gap-6 z-10">
					<h2 className="text-zinc-200 text-5xl font-bold">
						Cool benefit of this gym
					</h2>
					<ul className="list-disc text-2xl text-zinc-300 px-6 grid gap-3">
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
					</ul>
					<MainBtn
						text="Call to action"
						href="/"
					/>
				</div>
			</div>

			{/* Section 3 */}

			<div className="min-h-screen grid grid-cols-2 place-content-center items-center gap-16 pt-16">
				<div className="grid gap-6 justify-self-end">
					<h2 className="text-zinc-200 text-5xl font-bold">
						Cool benefit of this gym
					</h2>
					<ul className="list-disc text-2xl text-zinc-300 px-6 grid gap-3">
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
					</ul>
					<MainBtn
						text="Call to action"
						href="/"
					/>
				</div>
				<Image
					src="/assets/gym2.webp"
					alt="a woman who is deadlifting"
					className="aspect-[2/3] object-cover clip-yl"
					width={500}
					height={600}
				/>
			</div>

			{/* Section 4 */}

			<div className="min-h-screen grid grid-cols-2 place-content-center items-center gap-16 mt-16">
				<Image
					src="/assets/gym3.webp"
					alt="a man spotting another man on the benchpress"
					className="aspect-[2/3] justify-self-end clip-yl"
					width={500}
					height={600}
				/>
				<div className="grid gap-6 ">
					<h2 className="text-zinc-200 text-5xl font-bold">
						Cool benefit of this gym
					</h2>
					<ul className="list-disc text-2xl text-zinc-300 px-6 grid gap-3">
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
					</ul>
					<MainBtn
						text="Call to action"
						href="/"
					/>
				</div>
			</div>

			{/* Section 5 */}

			<div className="min-h-screen grid content-center mt-16 ">
				<h2 className="text-5xl text-center text-zinc-300 font-bold">
					Membership plans:
				</h2>
				<div className="grid lg:grid-cols-3 px-12 2xl:px-48 mt-24 gap-12 *:w-full *:max-w-[344px] *:h-fit *:p-6 *:pr-8 place-content-center">
					<div className="justify-self-end bg-gradient-to-b from-red-500 via-red-900/50 to-zinc-900 relative before:w-[calc(100%-8px)] before:h-[calc(100%-8px)] before:absolute clip-tr before:bg-zinc-900 before:inset-1 before:[clip-path:polygon(90%_100%,0%_100%,0%_0%,100%_0%)] z-0 before:-z-10">
						<h3 className="text-2xl text-zinc-300 font-bold">
							Membership plan
						</h3>
						<p className="text-zinc-500 mt-1">Short description for plan</p>
						<p className="text-5xl py-6 font-medium bg-gradient-to-b from-zinc-50 to-zinc-600 bg-clip-text text-transparent">
							$999
							<span className="text-xl">/mo</span>
						</p>
						<button className="bg-gradient-to-b from-red-500 to-red-700 text-zinc-100 font-bold tracking-wider text-base w-full py-3 uppercase [clip-path:polygon(98.5%_100%,0%_100%,0%_0%,100%_0%)]">
							Choose plan
						</button>
						<ul className="grid px-6 gap-4 my-6 text-lg *:text-zinc-400 list-disc">
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
						</ul>
					</div>

					<div className="justify-self-center bg-gradient-to-b from-red-500 via-red-900/50 to-zinc-900 relative before:w-[calc(100%-8px)] before:h-[calc(100%-8px)] before:absolute clip-tr before:bg-zinc-900 before:inset-1 before:[clip-path:polygon(90%_100%,0%_100%,0%_0%,100%_0%)] z-0 before:-z-10">
						<h3 className="text-2xl text-zinc-300 font-bold">
							Membership plan
						</h3>
						<p className="text-zinc-500 mt-1">Short description for plan</p>
						<p className="text-5xl py-6 font-medium bg-gradient-to-b from-zinc-50 to-zinc-600 bg-clip-text text-transparent">
							$999
							<span className="text-xl">/mo</span>
						</p>
						<button className="bg-gradient-to-b from-red-500 to-red-700 text-zinc-100 font-bold tracking-wider text-base w-full py-3 uppercase [clip-path:polygon(98.5%_100%,0%_100%,0%_0%,100%_0%)]">
							Choose plan
						</button>
						<ul className="grid px-6 gap-4 my-6 text-lg *:text-zinc-400 list-disc">
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
						</ul>
					</div>

					<div className="bg-gradient-to-b from-red-500 via-red-900/50 to-zinc-900 relative before:w-[calc(100%-8px)] before:h-[calc(100%-8px)] before:absolute clip-tr before:bg-zinc-900 before:inset-1 before:[clip-path:polygon(90%_100%,0%_100%,0%_0%,100%_0%)] z-0 before:-z-10">
						<h3 className="text-2xl text-zinc-300 font-bold">
							Membership plan
						</h3>
						<p className="text-zinc-500 mt-1">Short description for plan</p>
						<p className="text-5xl py-6 font-medium bg-gradient-to-b from-zinc-50 to-zinc-600 bg-clip-text text-transparent">
							$999
							<span className="text-xl">/mo</span>
						</p>
						<button className="bg-gradient-to-b from-red-500 to-red-700 text-zinc-100 font-bold tracking-wider text-base w-full py-3 uppercase [clip-path:polygon(98.5%_100%,0%_100%,0%_0%,100%_0%)]">
							Choose plan
						</button>
						<ul className="grid px-6 gap-4 my-6 text-lg *:text-zinc-400 list-disc">
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Section 6 */}

			<div className="min-h-screen grid place-content-center place-items-center gap-4 relative mt-16">
				<h2 className="text-5xl font-bold text-white text-center">
					Awesome call to action
				</h2>
				<p className="text-lg text-neutral-400 max-w-144 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
					quibusdam amet, soluta eaque ea deserunt!
				</p>
				<div className="grid lg:grid-cols-2 place-content-center gap-16 items-center mt-12">
					<form className="grid gap-4">
						<input
							type="text"
							name=""
							id=""
							className="px-6 py-4 text-xl w-full [clip-path:polygon(98.5%_100%,0%_100%,0%_0%,100%_0%)]"
							placeholder="Placeholder"
						/>
						<input
							type="text"
							name=""
							id=""
							className="px-6 py-4 text-xl w-[calc(100%-8px)] [clip-path:polygon(98.5%_100%,0%_100%,0%_0%,100%_0%)]"
							placeholder="Placeholder"
						/>
						<input
							type="text"
							name=""
							id=""
							className="px-6 py-4 text-xl w-[calc(100%-16px)] [clip-path:polygon(98.5%_100%,0%_100%,0%_0%,100%_0%)]"
							placeholder="Placeholder"
						/>
						<button
							type="submit"
							className="bg-gradient-to-b from-red-500 to-red-700 text-zinc-100 font-bold tracking-wider text-lg w-[calc(100%-24px)] py-4 uppercase [clip-path:polygon(98.5%_100%,0%_100%,0%_0%,100%_0%)]"
						>
							Send
						</button>
					</form>
					<Image
						width={400}
						height={400}
						src="/assets/footer.webp"
						alt="a man unracking some dumbells"
						className="clip-yr"
					/>
				</div>
				<div className="absolute bottom-0 left-0 w-screen justify-center flex gap-16 px-6 md:px-12 py-4 text-sm bg-inherit text-neutral-600">
					<p>lorem ipsum</p>
					<p>lorem ipsum</p>
					<p>lorem ipsum</p>
					<p>lorem ipsum</p>
					<p>lorem ipsum</p>
				</div>
			</div>
		</main>
	);
}
