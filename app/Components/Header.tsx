"use client";

import { useState } from "react";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import { raleway } from "../fonts";
import Listitem from "./Listitem";

export default function Header() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<header
			className={`flex items-center justify-between h-20 px-10 ${raleway.className} fixed top-0 right-0 left-0 `}
		>
			<div className="cursor-pointer">
				<h2>Logo</h2>
			</div>

			<button
				onClick={() => setShowMobileMenu(!showMobileMenu)}
				className="z-50 xs:hidden bg-transparent aspect-square"
			>
				<span
					className={`transform transition-all duration-500 ease-in-out top-7 right-8 ${
						showMobileMenu
							? "hidden opacity-0 scale-50"
							: "block opacity-100 scale-100"
					}`}
				>
					<Hamburger />
				</span>
				<span
					className={`absolute transform transition-all duration-500 ease-in-out top-6 right-9 ${
						showMobileMenu
							? "opacity-100 scale-100 rotate-180"
							: "opacity-0 scale-50"
					}`}
				>
					<Close />
				</span>
			</button>

			<nav
				className={`fixed top-0 bottom-0  z-40 py-40 px-10 xs:px-0  right-0 xs:static xs:left-auto xs:right-auto xs:top-auto xs:bottom-auto xs:py-0  xs:h-full xs:flex xs:items-center ${
					showMobileMenu ? "left-[-2%] bg-white " : "left-[100%] bg-white "
				} transform duration-[1000ms] ease-out border-l-[1px] border-black xs:border-none`}
			>
				<span className="absolute top-8 left-10 xs:hidden">Logo</span>
				<ul className="flex flex-col xs:flex-row gap-10 xs:gap-x-5">
					<Listitem name="Home" linkTo="/" />
					<Listitem name="About" linkTo="/about" />
					<Listitem name="Services" linkTo="/services" />
					<Listitem name="Blog" linkTo="/blog" />
					<Listitem name="Contact" linkTo="/contact" />
				</ul>
			</nav>
		</header>
	);
}
