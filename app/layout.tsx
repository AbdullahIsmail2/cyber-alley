import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Header from "./Components/Header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en pt-safe">
			<body className={`antialiased`}>
				<Header />
				{children}
        <Analytics />
			</body>
		</html>
	);
}
