"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const questions = [
	"Qual é a data e horário do evento?",
	"É um Evento Presencial ou Online?",
	"Como funciona o período de experiência?",
	"Quais são as formas de pagamento?",
];

const answer =
	"A próxima edição vai acontecer no dia _pages-opc-data-extenso. Os ingressos online ainda estão disponíveis, já os presenciais foram esgotados.";

export default function TenthSection() {
	const [openQuestion, setOpenQuestion] = useState<number | null>(0);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<section
			id="decima-dobra"
			aria-labelledby="decima-dobra-titulo"
			className="
				relative
				w-full
				min-h-[1141px]
				md:min-h-[1039px]
				overflow-hidden
				bg-[url('/images/v2/decima_dobra_mobile.png')]
				md:bg-[url('/images/v2/decima_dobra_desktop.png')]
				bg-[length:100%_100%]
				bg-top
				bg-no-repeat
			"
		>
			<h2
				id="decima-dobra-titulo"
				className="
					absolute
					top-[92px]
					left-1/2
					w-[296px]
					-translate-x-1/2
					font-raleway
					text-[18px]
					font-extrabold
					leading-[26px]
					text-white

					md:top-[67px]
					md:w-[757px]
					md:text-center
					md:text-[32px]
					md:leading-[36px]
				"
			>
				<span className="md:hidden">
					Ainda não decidiu pelo seu sucesso? Veja o que outras pessoas também perguntam…
				</span>

				<span className="hidden md:block">
					<span className="block text-[#F0CB6D]">
						Ainda não decidiu pelo seu sucesso?
					</span>

					<span className="block text-white">
						Veja o que outras pessoas também perguntam…
					</span>
				</span>
			</h2>

			<div
				className="
					absolute
					top-[231px]
					left-1/2
					w-[297px]
					-translate-x-1/2

					md:top-[267px]
					md:w-[1060px]
					md:space-y-[10px]
				"
			>
				{questions.map((question, index) => {
					const isOpen = openQuestion === index;

					return (
						<div
							key={question}
							className={`
								w-full
								overflow-hidden
								border-b
								border-white
								transition-[height]
								duration-300

								md:border-b-0
								md:bg-[#13191D]

								${isOpen ? "h-[194px] md:h-[194px]" : "h-[124px] md:h-[74px]"}
							`}
						>
							<button
								type="button"
								aria-expanded={isOpen}
								aria-controls={`faq-resposta-${index}`}
								onClick={() => setOpenQuestion(isOpen ? null : index)}
								className={`
									flex
									w-full
									items-center
									justify-between
									text-left

									${isOpen ? "h-[72px]" : "h-[123px]"}

									md:h-[74px]
									md:px-[35px]
								`}
							>
								<span
									className="
										max-w-[220px]
										font-raleway
										text-[16px]
										font-extrabold
										leading-[24px]
										text-white

										md:max-w-none
										md:text-[18px]
										md:leading-[26px]
									"
								>
									{question}
								</span>

								<span
									aria-hidden="true"
									className="
										flex
										h-[41px]
										w-[41px]
										shrink-0
										items-center
										justify-center
										rounded-full
										bg-gradient-to-b
										from-[#F0CC6E]
										to-[#8A753F]
									"
								>
									<span
										className={`
											block
											h-[11px]
											w-[11px]
											border-b-[3px]
											border-r-[3px]
											border-black
											transition-transform
											duration-300

											${isOpen ? "rotate-[225deg] translate-y-[3px]" : "rotate-45 -translate-y-[2px]"}
										`}
									/>
								</span>
							</button>

							{isOpen && (
								<div id={`faq-resposta-${index}`}>
									<div
										className="
											hidden
											h-px
											w-[952px]
											bg-white/25

											md:mx-auto
											md:block
										"
									/>

									<p
										className="
											pt-[6px]
											font-raleway
											text-[14px]
											font-medium
											leading-[22px]
											text-white

											md:px-[35px]
											md:pt-[31px]
										"
									>
										{answer}
									</p>
								</div>
							)}
						</div>
					);
				})}
			</div>

			<footer
				className="
					absolute
					top-[822px]
					left-1/2
					flex
					w-[297px]
					-translate-x-1/2
					flex-col
					items-center

					md:hidden
				"
			>
				<Image
					src="/images/v2/Group 38.svg"
					alt="Ponto Cego"
					width={165}
					height={67}
					className="h-auto w-[165px]"
				/>

				<p
					className="
						mt-[52px]
						text-center
						font-['Montserrat']
						text-[14px]
						font-normal
						leading-[24px]
						text-white
					"
				>
					<span className="block">© 2026. All rights reserved.</span>

					<Link
						href="/politica-de-privacidade"
						className="block transition-opacity hover:opacity-80"
					>
						Política de Privacidade
					</Link>
				</p>

				<button
					type="button"
					onClick={scrollToTop}
					className="
						mt-[88px]
						bg-[#050C17]/50
						px-[28px]
						py-[8px]
						font-['Roboto']
						text-[16px]
						font-normal
						leading-[22px]
						text-[#F0CB6D]
						transition-opacity
						hover:opacity-80
					"
				>
					Voltar ao topo ↑
				</button>
			</footer>

			<footer
				className="
					absolute
					top-[822px]
					left-1/2
					hidden
					w-[1060px]
					-translate-x-1/2
					items-center
					justify-between

					md:flex
				"
			>
				<Image
					src="/images/v2/Group 38.svg"
					alt="Ponto Cego"
					width={91}
					height={37}
					className="h-auto w-[91px]"
				/>

				<p
					className="
						font-['Montserrat']
						text-[16px]
						font-normal
						leading-none
						text-white
					"
				>
					© 2026. All rights reserved.{" "}

					<Link
						href="/politica-de-privacidade"
						className="transition-opacity hover:opacity-80"
					>
						Política de Privacidade
					</Link>
				</p>

				<button
					type="button"
					onClick={scrollToTop}
					className="
						font-['Roboto']
						text-[16px]
						font-normal
						leading-[22px]
						text-[#F0CB6D]
						transition-opacity
						hover:opacity-80
					"
				>
					Voltar ao topo ↑
				</button>
			</footer>
		</section>
	);
}