import "./globals.css";
import { Raleway } from "@next/font/google";
import Header from "./Components/Header";

export const raleway = Raleway({
	weight: ['400', '700'],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
