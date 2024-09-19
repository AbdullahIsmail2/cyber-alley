import { raleway } from "../fonts";

export default function Hero() {
	
	return (
		<section
			className={`min-h-screen px-10 flex flex-col items-center justify-center ${raleway.className} text-center gap-8 md:gap-10 bg-custom-gradient`}
		>
			<h1 className="text-4xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[70px] font-bold">
				Cyber Security With A Professional Team
			</h1>
			<h5 className="max-w-[1000px] mx-auto xs:px-4 md:px-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur
				et ipsam itaque eaque voluptatum, alias, at officiis
				<span className="hidden md:inline">
					doloribus sunt tempora, obcaecati amet nobis voluptate! Voluptas, quas
					dolor.
				</span>
			</h5>
			<button className="bg-myblue text-white w-[150px] py-4">
				Get started
			</button>
		</section>
	);
}
