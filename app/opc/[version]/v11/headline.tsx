
import type { ReactNode } from "react";

interface IHeadline {
	id: number | string;
	isPicture: boolean;
	isLogo: boolean;
	title: ReactNode;
	text: ReactNode;
}

export const Headline: IHeadline[] = [
	{
		id: "h1",
		isPicture: false,
		isLogo: true,
		title: (
			<>
				<h1
					id="hero-title"
					className="w-full [font-family:'Teramo',serif] text-[clamp(18px,5.51vw,21.51px)] font-bold uppercase leading-[1.35] tracking-normal text-white md:text-[25.74px]"
				>
					<span className="block whitespace-nowrap">
						O que parecia azar,
					</span>
					<span className="block whitespace-nowrap">
						coincidência ou injustiça
					</span>
					<span className="block whitespace-nowrap">
						ganha explicação:
					</span>
				</h1>

				<p className="mt-[14px] w-full [font-family:'Teramo',serif] text-[clamp(17.5px,5.48vw,21.36px)] font-normal leading-[1.35] tracking-normal text-white md:mt-[16px] md:text-[25.55px]">
					<span className="block whitespace-nowrap">
						Toda semana mostramos por que
					</span>
					<span className="block whitespace-nowrap">
						as coisas acontecem, como elas
					</span>
					<span className="block whitespace-nowrap">
						se conectam e qual utilidade cada
					</span>
					<span className="block whitespace-nowrap">
						acontecimento tem na sua vida.
					</span>
				</p>

				<p className="mt-[20px] w-full whitespace-nowrap [font-family:'Teramo',serif] text-[clamp(15px,4.44vw,17.3px)] font-bold uppercase leading-[1.35] tracking-normal text-white md:mt-[18px] md:text-[20.7px]">
					Quarta-feira às 12h. Sem replay.
				</p>
			</>
		),
		text: null,
	},
];
