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
			<h1
				id="hero-title"
				className="[font-family:'Bricolage_Grotesque',sans-serif] text-[30px] font-bold uppercase leading-[110%] tracking-normal text-white md:text-[62.6px] md:leading-[150%]"
			>
				<span className="md:hidden">
					<span className="block text-[#F0CB6D]">Ganhe prêmios</span>
					<span className="block">convidando</span>
					<span className="block">pessoas para O</span>
					<span className="block">Super Ponto Cego</span>
				</span>

				<span className="hidden md:block">
					<span className="block whitespace-nowrap">
						<span className="text-[#F0CB6D]">Ganhe prêmios</span>{" "}
						convidando
					</span>
					<span className="block whitespace-nowrap">
						pessoas para O Super Ponto Cego
					</span>
				</span>
			</h1>
		),
		text: null,
	},
];