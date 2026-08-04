import type { ReactNode } from "react";

export type HeadlineId = "h1" | "h2";

interface IHeadline {
	id: HeadlineId;
	title: ReactNode;
	text: ReactNode;
}

export const Headline: IHeadline[] = [
	{
		id: "h1",
		title: (
			<>
				Em apenas 1 dia,{" "}
				<span className="text-[#F0CB6D]">descubra como ganhar mais,</span>{" "}
				crescer na carreira e melhorar a sua vida financeira.
			</>
		),
		text: (
			<>
				Sem trocar de profissão, sem mais cursos, sem continuar repetindo os mesmos resultados.
			</>
		),
	},
	{
		id: "h2",
		title: (
			<>
				Em apenas 1 dia, descubra o Ponto Cego que está impedindo você de{" "}
				<span className="text-[#F0CB6D]">
					ganhar mais, crescer na carreira e conquistar sua independência financeira.
				</span>
			</>
		),
		text: (
			<>
				Sem trocar de profissão, sem começar tudo de novo, sem continuar repetindo os mesmos resultados.
			</>
		),
	},
];

export function getHeadline(headlineId?: string) {
	return Headline.find(({ id }) => id === headlineId) ?? Headline[0];
}