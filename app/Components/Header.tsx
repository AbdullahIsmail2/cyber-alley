"use client";

import Link from "next/link";
import { useState } from "react";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import { raleway } from "../layout";

export default function Header() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<header
			className={`bg-custom-gradient flex items-center justify-between h-20 px-10 ${raleway.className} fixed top-0 right-0 left-0`}
		>
			<div className="cursor-pointer">
				<h2>Logo</h2>
			</div>

			<button
				onClick={() => setShowMobileMenu(!showMobileMenu)}
				className="z-50 sm:hidden absolute bg-transparent aspect-square top-7 right-8"
			>
				{showMobileMenu ? <Close /> : <Hamburger />}
			</button>

			<nav
				className={`fixed top-0 bottom-0 z-40 py-40 px-10 right-0 sm:static sm:left-auto sm:right-auto sm:top-auto sm:bottom-auto sm:bg-transparent sm:py-0  sm:h-full sm:flex sm:items-center ${
					showMobileMenu ? "left-0 glass" : "left-[100%]"
				} transform duration-[1000ms] ease-out `}
			>
				<ul className="flex flex-col sm:flex-row gap-10 sm:gap-x-5">
					<li className="hover:text-myblue font-bold">
						<Link href="">Home</Link>
					</li>
					<li className="hover:text-myblue font-bold ">
						<Link href="/about">About</Link>
					</li>
					<li className="hover:text-myblue font-bold">
						<Link href="/services">Services</Link>
					</li>
					<li className="hover:text-myblue font-bold">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
