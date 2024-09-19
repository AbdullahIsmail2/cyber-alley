import { raleway } from "../layout";
export default function Hero() {
	return (
			<section className={`min-h-[calc(100vh_-_5rem)] px-10 flex flex-col items-center justify-center pb-20 ${raleway.className} text-center gap-10 bg-custom-gradient`}>
				<h1 className="text-4xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[70px] font-bold">Cyber Security With A Professional Team</h1>
				<h5 className="max-w-[1000px] mx-auto px-10">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
					pariatur et ipsam itaque eaque voluptatum, alias, at officiis qui
					doloribus sunt tempora, obcaecati amet nobis voluptate! Voluptas, quas
					dolor. 
				</h5>
				<button className="bg-myblue text-white w-[150px] py-4">Get started</button>
			</section>
	);
}
