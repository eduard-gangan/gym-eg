import { Ubuntu } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Ubuntu({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export const metadata = {
	title: "Get Your Dream Body in 3 Months",
	metadataBase: "https://fitness-eg.netlify.app",
	description:
		"Only the best trainers, the best equipment, the best programs, and the best atmosphere. Contact us today for a 50% discount on your next plan !",
	openGraph: {
		title: "Get Your Dream Body in 3 Months",
		description:
			"Only the best trainers, the best equipment, the best programs, and the best atmosphere. Contact us today for a 50% discount on your next plan !",
		images: "/assets/gym3.webp",
	},
	twitter: {
		card: "summary_large_image",
		title: "Get Your Dream Body in 3 Months",
		description:
			"Only the best trainers, the best equipment, the best programs, and the best atmosphere. Contact us today for a 50% discount on your next plan !",
		image: "/assets/gym3.webp",
	},
	icons: {
		shortcut: { url: "/favicon.ico", type: "image/x-icon" },
		icon: [
			{ url: "/favicon.ico", type: "image/x-icon" },
			{ url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
			{ url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
		],
		apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
		manifest: "/site.webmanifest",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SmoothScroller>{children}</SmoothScroller>
			</body>
		</html>
	);
}
