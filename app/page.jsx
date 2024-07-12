"use client";

import Nav from "@/components/Nav";
import Image from "next/image";
import MainBtn from "@/components/MainBtn";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function Home() {
	const main = useRef();

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);
			const mm = gsap.matchMedia();
			mm.add("(min-width: 1024px)", () => {
				gsap.from("#image1", {
					y: 300,
					scrollTrigger: {
						scrub: true,
						trigger: "#section1",
						start: "top bottom",
						end: "bottom top",
						// markers: "true",
					},
				});

				gsap.from("#image2", {
					y: 300,
					scrollTrigger: {
						scrub: true,
						trigger: "#section2",
						start: "top bottom",
						end: "bottom top",
						// markers: "true",
					},
				});

				gsap.from("#image3", {
					y: 300,
					scrollTrigger: {
						scrub: true,
						trigger: "#section3",
						start: "top bottom",
						end: "bottom top",
						// markers: "true",
					},
				});
			});
		},
		{ scope: main }
	);

	return (
		<main
			ref={main}
			className="bg-zinc-900 bg-[url('/assets/brick.svg')] min-h-screen"
		>
			<Nav />
			<div className="bg-[radial-gradient(circle_at_50%_50%,transparent_30%,#18181b)] grid max-lg:grid-rows-2 max-lg:pt-32 lg:grid-cols-2 w-screen lg:min-h-screen">
				<div className="w-full grid gap-3 lg:gap-4 place content-center px-6 lg:px-12 2xl:px-24">
					<h1 className="2xl:text-6xl sm:text-5xl text-4xl text-zinc-200 font-bold">
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 !leading-tight bg-clip-text text-transparent whitespace-nowrap">
							Get your dream body
						</div>
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
							in 3 months
						</div>
					</h1>
					<p className="2xl:text-2xl  sm:text-xl text-lg text-zinc-400">
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
				<div className="relative w-full h-full min-h-96">
					<div className="absolute max-lg:bottom-3 max-lg:bg-gradient-to-r max-lg:left-0 bottom-0 -left-6 bg-gradient-to-b from-red-700/80 via-red-500/80 to-red-700/80 w-full h-full clip-tl"></div>
					<Image
						fill="true"
						src="/assets/gym.webp"
						quality={100}
						className="object-cover clip-tl"
						priority="true"
					/>
				</div>
			</div>

			{/* Section 2 */}

			<div
				id="section1"
				className="bg-[radial-gradient(circle_at_50%_50%,transparent_30%,#18181b)] min-h-screen grid lg:grid-cols-2 place-content-center items-center gap-16 pt-32 pb-16 relative px-6"
			>
				{/* <div className="absolute right-0 top-0 bg-zinc-800 clip-bl w-1/2 h-full z-0" /> */}
				<div
					id="image1"
					className="w-full max-w-128 aspect-square lg:aspect-[2/3] justify-self-end max-lg:order-2 relative"
				>
					<div className="absolute w-full h-full bg-gradient-to-bl from-red-700/80 via-red-500/80 to-red-700/80 -bottom-4 -left-4 max-sm:-bottom-2 max-sm:-left-2 clip-yl"></div>
					<Image
						src="/assets/gym1.webp"
						quality={100}
						alt="a well-equipped gym"
						className=" object-cover clip-yl"
						fill
					/>
				</div>
				<div className="grid gap-6 z-10 lg:pr-12">
					<h2 className="lg:text-5xl text-4xl text-zinc-200 font-bold">
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 !leading-tight bg-clip-text text-transparent whitespace-nowrap">
							Best-equipped gym
						</div>
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
							in town
						</div>
					</h2>
					<ul className="list-disc lg:text-2xl text-xl text-zinc-300 px-6 sm:px-8 grid gap-3">
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

			<div
				id="section2"
				className="bg-[radial-gradient(circle_at_50%_50%,transparent_30%,#18181b)] min-h-screen grid lg:grid-cols-2 place-content-center items-center gap-16 pt-16 px-6 py-16"
			>
				<div className="grid gap-6 z-10 lg:pl-12 2xl:pl-24">
					<h2 className="lg:text-5xl text-4xl text-zinc-200 font-bold">
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 !leading-tight bg-clip-text text-transparent whitespace-nowrap">
							Best-equipped gym
						</div>
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
							in town
						</div>
					</h2>
					<ul className="list-disc lg:text-2xl text-xl text-zinc-300 px-6 sm:px-8 grid gap-3">
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
						<li>Cool point in favor of header</li>
					</ul>
					<MainBtn
						text="Call to action"
						href="/"
					/>
				</div>
				<div
					id="image2"
					className="w-full max-w-128 aspect-square lg:aspect-[2/3] relative"
				>
					<div className="absolute w-full h-full bg-gradient-to-bl from-red-700/80 via-red-500/80 to-red-700/80 -bottom-4 -left-4 max-sm:-bottom-2 max-sm:-left-2 clip-yl"></div>
					<Image
						src="/assets/gym2.webp"
						quality={100}
						alt="a woman deadlifting"
						className=" object-cover object-top clip-yl"
						fill
					/>
				</div>
			</div>

			{/* Section 4 */}

			<div
				id="section3"
				className="bg-[radial-gradient(circle_at_50%_50%,transparent_30%,#18181b)] min-h-screen grid lg:grid-cols-2 place-content-center items-center gap-16 pt-16 px-6 py-16"
			>
				<div
					id="image3"
					className="w-full max-w-128 aspect-square lg:aspect-[2/3] justify-self-end max-lg:order-2 relative"
				>
					<div className="absolute w-full h-full bg-gradient-to-bl from-red-700/80 via-red-500/80 to-red-700/80 -bottom-4 -left-4 max-sm:-bottom-2 max-sm:-left-2 clip-yl"></div>
					<Image
						src="/assets/gym3.webp"
						quality={100}
						alt="a man spotting another man on the benchpress"
						className=" object-cover object-top clip-yl"
						fill
					/>
				</div>
				<div className="grid gap-6 z-10 lg:pr-12">
					<h2 className="lg:text-5xl text-4xl text-zinc-200 font-bold">
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 !leading-tight bg-clip-text text-transparent whitespace-nowrap">
							Best-equipped gym
						</div>
						<div className="bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
							in town
						</div>
					</h2>
					<ul className="list-disc lg:text-2xl text-xl text-zinc-300 px-6 sm:px-8 grid gap-3">
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

			<div className="min-h-screen grid content-center pt-16 py-16 bg-zinc-900 ">
				<h2 className="sm:text-5xl text-4xl text-center text-zinc-300 font-bold">
					Membership plans:
				</h2>
				<div className="grid lg:grid-cols-3 px-12 2xl:px-48 mt-12 lg:mt-24 gap-12 *:w-full *:max-w-[344px] *:h-fit *:p-8 *:pr-10 place-content-center">
					<div className="justify-self-end bg-gradient-to-br from-zinc-400/70 via-zinc-900 to-zinc-900 relative before:w-[calc(100%-8px)] before:h-[calc(100%-8px)] before:absolute clip-tr before:bg-zinc-900 before:inset-1 z-0 before:-z-10">
						<h3 className="text-2xl text-zinc-300 font-bold">
							Membership plan
						</h3>
						<p className="text-zinc-500 mt-1">Short description for plan</p>
						<p className="text-5xl py-6 font-medium bg-gradient-to-b from-zinc-50 to-zinc-600 bg-clip-text text-transparent">
							$999
							<span className="text-xl ml-1">/mo</span>
						</p>
						<button className="bg-gradient-to-b from-red-500/80 to-red-700/80 text-zinc-100 font-bold tracking-wider text-base w-full py-3 uppercase clip-btn">
							Choose plan
						</button>
						<ul className="grid px-6 gap-4 my-6 text-lg *:text-zinc-400 list-disc">
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
						</ul>
					</div>

					<div className="justify-self-center bg-gradient-to-b from-red-500 via-red-900/50 to-zinc-900 relative before:w-[calc(100%-8px)] before:h-[calc(100%-8px)] before:absolute clip-tr before:bg-zinc-900 before:inset-1 z-0 before:-z-10">
						<h3 className="text-2xl text-zinc-300 font-bold">
							Membership plan
						</h3>
						<p className="text-zinc-500 mt-1">Short description for plan</p>
						<p className="text-5xl py-6 font-medium bg-gradient-to-b from-zinc-50 to-zinc-600 bg-clip-text text-transparent">
							$999
							<span className="text-xl ml-1">/mo</span>
						</p>
						<button className="bg-gradient-to-b from-red-500 to-red-700 text-zinc-100 font-bold tracking-wider text-base w-full py-3 uppercase clip-btn">
							Choose plan
						</button>
						<ul className="grid px-6 gap-4 my-6 text-lg *:text-zinc-400 list-disc">
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
							<li>Cool benefit</li>
						</ul>
					</div>

					<div className="bg-gradient-to-br from-zinc-400/70 via-zinc-900 to-zinc-900 relative before:w-[calc(100%-8px)] before:h-[calc(100%-8px)] before:absolute clip-tr before:bg-zinc-900 before:inset-1 z-0 before:-z-10">
						<h3 className="text-2xl text-zinc-300 font-bold">
							Membership plan
						</h3>
						<p className="text-zinc-500 mt-1">Short description for plan</p>
						<p className="text-5xl py-6 font-medium bg-gradient-to-b from-zinc-50 to-zinc-600 bg-clip-text text-transparent">
							$999
							<span className="text-xl ml-1">/mo</span>
						</p>
						<button className="bg-gradient-to-b from-red-500/80 to-red-700/80 text-zinc-100 font-bold tracking-wider text-base w-full py-3 uppercase clip-btn">
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

			<div className="bg-[radial-gradient(circle_at_50%_50%,transparent_30%,#18181b)] min-h-screen grid content-center justify-items-center gap-4 relative pt-16 *:px-6">
				<h2 className="sm:text-5xl text-4xl font-bold text-white text-center">
					Awesome call to action
				</h2>
				<p className="sm:text-lg text-base text-neutral-400 max-w-144 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
					quibusdam amet, soluta eaque ea deserunt!
				</p>
				<div className="grid lg:grid-cols-2 place-content-center lg:gap-16 gap-8 items-center mt-12">
					<form className="grid gap-4">
						<input
							type="text"
							name=""
							id=""
							className="px-6 bg-zinc-300 text-zinc-900 md:py-4 py-3 md:text-xl text-lg w-full clip-btn placeholder:text-zinc-400 hover:scale-x-95 focus:scale-x-95 origin-left transition-transform duration-300"
							placeholder="Placeholder"
						/>
						<input
							type="text"
							name=""
							id=""
							className="px-6 bg-zinc-300 text-zinc-900 md:py-4 py-3 md:text-xl text-lg w-[calc(100%-7px)] clip-btn placeholder:text-zinc-400 hover:scale-x-95 focus:scale-x-95 origin-left transition-transform duration-300"
							placeholder="Placeholder"
						/>
						<input
							type="text"
							name=""
							id=""
							className="px-6 bg-zinc-300 text-zinc-900 md:py-4 py-3 md:text-xl text-lg w-[calc(100%-14px)] clip-btn placeholder:text-zinc-400 hover:scale-x-95 focus:scale-x-95 origin-left transition-transform duration-300"
							placeholder="Placeholder"
						/>
						<button
							type="submit"
							className="bg-gradient-to-b from-red-500 to-red-700 text-zinc-100 font-bold tracking-wider text-lg w-[calc(100%-21px)] md:py-4 py-3 uppercase clip-btn hover:scale-x-95 focus:scale-x-95 origin-left transition-transform duration-300"
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
				<div className="lg:absolute lg:bottom-0 border-t-2 bg-zinc-900 border-zinc-800 w-screen justify-center flex max-md:flex-col max-lg:mt-4 whitespace-nowrap gap-4 sm:gap-16 md:px-12 py-4 text-sm bg-inherit text-neutral-600">
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
