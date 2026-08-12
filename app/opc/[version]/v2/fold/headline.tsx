import type { ReactNode } from "react";

export type HeadlineId = "h1" | "h2" | "h3";

interface IHeadline {
	id: HeadlineId;
	title: ReactNode;
	highlightText?: ReactNode;
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
	{
		id: "h3",
		title: (
			<>
				&quot;Enxergue o seu <span className="text-[#F0CB6D]">Ponto Cego</span> e enriqueça. Ou ignore e morra frustrado.&quot;
			</>
		),
		highlightText: (
			<>
				Esqueça pós-graduação, transição de carreira ou novos negócios. Você já tem capacidade e disposição para voar, mas ainda não tem Permissão para sair do chão.
			</>
		),
		text: (
			<>
				Faça como 160 mil pessoas: participe da única imersão do mundo que revela o Ponto Cego das pessoas esforçadas que não atingiram o sucesso, riqueza e poder pessoal.
			</>
		),
	},
];

export function getHeadline(headlineId?: string) {
	return Headline.find(({ id }) => id === headlineId) ?? Headline[0];
}