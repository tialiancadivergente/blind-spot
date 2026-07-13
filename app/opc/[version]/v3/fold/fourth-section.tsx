"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const items = [
	"Qual a diferença entre Capacidade, Disposição e Permissão;",
	"Quais Padrões-Controladores estão dentro do seu Núcleo Emocional Interno e Externo;",
	"Quais as relações e circunstâncias que estão te impedindo de atrair o sucesso;",
	"Quais armadilhas inconscientes estão te bloqueando para o sucesso, confiança e sua versão mais livre.",
];

export default function FourthSection() {
	return (
		<section
			className="
				relative
				w-full
				min-h-[1770px]
				h-[1770px]
				md:min-h-[1498px]
				md:h-[1498px]
				bg-[url('/images/v2/quarta_dobra_mobile.webp')]
				md:bg-[url('/images/v2/quarta_dobra_desktop.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				justify-center
				overflow-hidden
			"
		>
			<div
				className="
					w-full
					max-w-[1060px]
					px-8
					md:px-0
					pt-[24px]
					md:pt-[100px]
				"
			>
				<Image
					src="/images/v2/experiencia_imerciva_mobile.png"
					alt="Experiência imersiva"
					width={296}
					height={46}
					className="block md:hidden w-[296px] h-auto object-contain mb-[58px]"
					priority
				/>

				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[32px] md:gap-0">
					<h2
						className="
							w-[296px]
							md:w-[576px]
							font-raleway
							font-extrabold
							text-white
							text-[18px]
							leading-[26px]
							md:text-[32px]
							md:leading-[32px]
							text-left
						"
					>
						<span className="hidden md:inline">
							Ao garantir um dos ingressos
							<br />
							do Ponto Cego, você irá receber
							<br />
							uma{" "}
							<span className="text-[#F0CB6D]">
								Análise de Permissão
								<br />
								personalizada.
							</span>
						</span>

						<span className="md:hidden">
							Ao garantir um dos ingressos do Ponto Cego, você irá receber uma{" "}
							<span className="text-[#F0CB6D]">
								Análise de Permissão personalizada.
							</span>
						</span>
					</h2>

					<div className="w-[296px] md:w-[492px] text-white font-raleway">
						<h3 className="font-extrabold text-[16px] leading-[24px] mb-[10px]">
							O que isso significa?
						</h3>

						<p className="font-medium text-[16px] leading-[24px] mb-[18px]">
							Você vai receber um conjunto de ferramentas de simples
							preenchimento que irão te mostrar exatamente:
						</p>

						<ul className="flex flex-col gap-[12px]">
							{items.map((item) => (
								<li key={item} className="flex items-start gap-[8px]">
									<Image
										src="/images/v2/vector.svg"
										alt=""
										width={16}
										height={16}
										className="mt-[2px] h-[16px] w-[16px] min-w-[16px] object-contain"
									/>

									<span className="font-medium text-[16px] leading-[20px]">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div
					className="
						mt-[280px]
						md:mt-[160px]
						w-[299px]
						md:w-[425px]
						md:ml-[80px]
						font-raleway
						text-[#000C14]
					"
				>
					<div
						className="
							w-[299px]
							md:w-[425px]
							text-[16px]
							leading-[24px]
							md:text-[24px]
							md:leading-[110%]
						"
					>
						<p className="font-extrabold">
							Existe toda uma lógica e ritual{" "}
							<span className="font-medium">
								por trás deste diagnóstico, para que você encontre respostas e
								decida agir.
							</span>
						</p>
					</div>

					<p className="mt-[18px] md:mt-[22px] w-[299px] md:w-[403px] font-medium text-[16px] leading-[24px]">
						Esta imersão foi{" "}
						<span className="font-extrabold">milimetricamente pensada</span> em
						cada detalhe para a sua conclusão ser inevitável.
					</p>

					<p className="mt-[18px] md:mt-[22px] w-[299px] md:w-[403px] font-medium text-[16px] leading-[24px]">
						<span className="font-extrabold">_pages-opc-alunos</span> já
						participaram e aprovaram, então não tem como dar errado ou você não
						gostar e, caso isso aconteça,{" "}
						<span className="font-extrabold">eu devolvo o seu dinheiro.</span>
					</p>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="
							mt-[24px]
							md:hidden
							flex
							w-[296px]
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
							items-center
							justify-center
						"
					>
						Liberar acesso
					</Link>
				</div>
			</div>

			<Link
				href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
				className="
					hidden
					md:flex
					absolute
					top-[740px]
					left-1/2
					translate-x-[180px]
					w-[250px]
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
					items-center
					justify-center
				"
			>
				Liberar acesso
			</Link>

			<div
				className="
					absolute
					left-1/2
					-translate-x-1/2
					bottom-[280px]
					md:bottom-[450px]
					w-[296px]
					md:w-[587px]
					text-center
					font-raleway
				"
			>
				<p className="text-[#f6bf35] font-bold text-[16px] leading-[24px]">
					<span className="hidden md:inline">
						Diga adeus ao papo motivacional porque….
					</span>

					<span className="md:hidden">
						Diga adeus ao papo
						<br />
						motivacional porque….
					</span>
				</p>

				<h2
					className="
						mt-[12px]
						text-[#000C14]
						md:text-white
						font-extrabold
						text-[18px]
						leading-[22px]
						md:text-[32px]
						md:leading-[36px]
					"
				>
					<span className="hidden md:inline">
						O Ponto Cego será um dia de respostas e intervenções
					</span>

					<span className="md:hidden">
						O Ponto Cego será um dia
						<br />
						de respostas e intervenções
					</span>
				</h2>
			</div>
		</section>
	);
}