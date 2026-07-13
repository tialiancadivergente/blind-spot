"use client";

import Image from "next/image";
import React from "react";

const cards = [
	{
		title: "PERCEBER",
		text: "Você precisa ter novas Percepções sobre o que tem causado sua falta de resultados e como superar o medo, a culpa e a insegurança.",
	},
	{
		title: "DECIDIR",
		text: "Toda percepção, para gerar mudanças na sua vida, precisa ser acompanhada de uma Decisão. O QUÊ você precisa fazer.",
	},
	{
		title: "AGIR",
		text: "Nenhuma decisão é capaz de mudar a sua vida. Depois de Perceber e Decidir, você precisa elaborar um plano de ação. O COMO fazer.",
	},
];

export default function NextStepSection() {
	return (
		<section
			className="
				relative
				w-full
				min-h-[2001px]
				h-[2001px]
				md:min-h-[1797px]
				md:h-[1797px]
				bg-[#000C14]
				flex
				justify-center
				overflow-hidden md:overflow-visible
			"
		>
			<div className="relative z-10 w-full max-w-[1060px] px-8 md:px-0 pt-[30px] md:pt-[40px]">
				<Image
					src="/images/v2/falta_de_permissão_mobile.png"
					alt="Falta de permissão"
					width={296}
					height={46}
					className="block md:hidden w-[296px] h-[46px] object-contain"
					priority
				/>

				<Image
					src="/images/v2/falta_de_permissão_desktop.png"
					alt="Falta de permissão"
					width={1060}
					height={44}
					className="relative z-20 hidden md:block w-[1060px] h-[44px] object-contain md:-translate-y-[180px]"
					priority
				/>

<h2
	className="
		mt-[35px]
		md:mt-[40px]
		md:-translate-y-[100px]
		w-[296px]
		md:w-[610px]
		font-raleway
		font-extrabold
		text-[18px]
		leading-[26px]
		md:text-[32px]
		md:leading-[40px]
		text-left
		text-white
	"
>
					E para superar a{" "}
					<span className="text-[#F0CB6D]">falta de Permissão</span>,
					você precisará participar do Ponto Cego para:
				</h2>

				<div className="mt-[54px] flex flex-col gap-[10px] md:gap-[20px]">
					{cards.map((card) => (
						<div
							key={card.title}
							className="
								w-[296px]
								h-[319px]
								md:w-[1060px]
								md:h-[199px]
								border-l
								border-[#F0CB6D]
								bg-[#001522]
								flex
								flex-col
								md:flex-row
							"
						>
							<div
								className="
									w-full
									md:w-[360px]
									h-[126px]
									md:h-full
									flex
									items-center
									pl-[31px]
									md:pl-[62px]
									bg-[#000C14]/30
								"
							>
								<h3
									className="
										font-raleway
										font-extrabold
										text-[#F0CB6D]
										text-[32px]
										leading-[24px]
										md:text-[50px]
										md:leading-[60px]
									"
								>
									{card.title}
								</h3>
							</div>

							<div
								className="
									flex
									flex-1
									items-start
									md:items-center
									pl-[31px]
									pr-[32px]
									pt-[39px]
									md:pt-0
									md:pl-[64px]
									md:pr-0
								"
							>
								<p
									className="
										w-[232px]
										md:w-[524px]
										font-raleway
										font-medium
										text-white
										text-[16px]
										leading-[24px]
									"
								>
									{card.text}
								</p>
							</div>
						</div>
					))}
				</div>

				<div
					className="
						mt-[33px]
						md:mt-[150px]
						w-[296px]
						md:w-full
						flex
						flex-col
						md:flex-row
						items-center
						justify-between
						gap-[35px]
					"
				>
					<p
						className="
							w-[259px]
							md:w-[610px]
							font-raleway
							font-medium
							text-white
							text-[16px]
							leading-[24px]
							md:text-[26px]
							md:leading-[110%]
							text-center
							md:text-left
						"
					>
						Por isso, não existe nada tão personalizado e completo quanto o
						Ponto Cego{" "}
						<span className="font-extrabold">
							para transformar a sua vida e se livrar dessas amarras
						</span>{" "}
						que estão te impedindo de alcançar o sucesso.
					</p>

					<button
						className="
							w-[296px]
							md:w-[250px]
							h-[44px]
							rounded-[50px]
							border-x
							border-[#25D366]
							bg-[radial-gradient(83.8%_393.52%_at_45.2%_7.95%,_#25D366_0%,_rgba(37,211,102,0)_100%),linear-gradient(0deg,_#015E53,_#015E53)]
							shadow-[0px_-0.14px_1.92px_0px_#25D36626,0px_-0.35px_4.86px_0px_#25D36636,0px_-0.71px_9.92px_0px_#25D36644,0px_-1.46px_20.44px_0px_#25D36654,0px_-4px_56px_0px_#25D3667A]
							font-raleway
							font-extrabold
							text-white
							text-[12px]
							uppercase
							flex
							items-center
							justify-center
						"
					>
						Liberar acesso
					</button>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 z-0 w-full">
				<Image
					src="/images/v2/img_terceira_dobra_mobile.png"
					alt="Experiência imersiva"
					width={360}
					height={548}
					className="block md:hidden w-full h-auto object-cover object-bottom"
				/>

				<Image
					src="/images/v2/img_terceira_dobra_desktop.png"
					alt="Experiência imersiva"
					width={1920}
					height={600}
					className="hidden md:block w-full h-auto object-cover object-bottom"
				/>
			</div>

			<div
				className="
					absolute
					z-20
					left-1/2
					-translate-x-1/2
					bottom-[350px]
					md:bottom-[60px]
					w-[296px]
					md:w-[1060px]
				"
			>
				<h2
					className="
						w-[296px]
						md:w-[587px]
						font-raleway
						font-extrabold
						text-white
						text-[20px]
						leading-[28px]
						md:text-[32px]
						md:leading-[40px]
						text-left
					"
				>
					Em 1 dia de{" "}
					<span className="text-[#F0CB6D]">Experiência Imersiva</span>, nós
					vamos encontrar exatamente o que está te Travando e iremos aumentar a
					sua Permissão
				</h2>

				<Image
					src="/images/v2/img_desktop_01.png"
					alt="Linha decorativa"
					width={1060}
					height={44}
					className="hidden md:block mt-[64px] w-[1060px] h-[44px] object-contain"
				/>
			</div>
		</section>
	);
}