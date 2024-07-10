"use client";

import Link from "next/link";

const MainBtn = (props) => {
	return (
		<Link
			href={props.href}
			className="bg-[radial-gradient(circle_at_50%_100%,_#ef4444_-10%,#991b1b);] text-white font-bold w-fit px-12 py-4 text-xl uppercase tracking-wider inline-block"
		>
			{props.text}
		</Link>
	);
};

export default MainBtn;
