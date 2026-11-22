
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
					className="m-0 w-full [font-family:'Teramo',serif] text-[19.73px] font-bold uppercase leading-[1.35] tracking-normal text-white md:text-[30.6px]"
				>
					Entre para a lista
					<br className="hidden md:inline" /> de espera da imersão que
					<br className="hidden md:inline" /> vai te mostrar o Ponto
					<br className="hidden md:inline" /> Cego que tem te impedido
					<br className="hidden md:inline" /> de ir mais longe.
				</h1>

				<p className="mt-[18px] w-full [font-family:'Teramo',serif] text-[12.73px] font-normal leading-[1.35] tracking-normal text-white md:mt-[27px] md:max-w-[414.42px] md:text-[19.74px] md:font-bold">
					<strong className="font-bold text-[#C0964B]">
						No dia 25/11,
					</strong>{" "}
					<strong className="font-bold">
						vamos liberar os ingressos
					</strong>{" "}
					para o Ponto Cego, que vai acontecer no dia 12/12, com a melhor
					condição possível.
				</p>
			</>
		),
		text: null,
	},
];
