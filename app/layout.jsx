import { Ubuntu } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Ubuntu({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
