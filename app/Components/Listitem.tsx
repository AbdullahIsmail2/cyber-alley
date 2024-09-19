import Link from "next/link";
import Arrow from "../icons/Arrow";

export default function Listitem({name, linkTo}) {
	return (
		<li className=" hover:text-myblue flex items-center gap-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:top-8 after:w-full after:h-[1px] after:bg-black  xs:after:absolute xs:after:bottom-auto xs:after:left-auto xs:after:top-auto xs:after:w-0 xs:after:h-0 xs:after:bg-transparent ">
			<Link href={linkTo} className="flex items-center gap-3 w-full justify-between ">
				<span>{name}</span>
				<span className="xs:hidden">
					<Arrow />
				</span>
			</Link>
		</li>
	);
}
