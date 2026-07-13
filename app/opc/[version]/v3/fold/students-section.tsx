"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const studentsCarouselImages = [
	"/images/v2/Group 482550.png",
	"/images/v2/Group 482551.png",
	"/images/v2/Group 482552.png",
	"/images/v2/Group 482553.png",
	"/images/v2/Group 482615.png",
	"/images/v2/Group 482618.png",
	"/images/v2/Group 482619.png",
];

function StudentsCarousel() {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((current) => (current + 1) % studentsCarouselImages.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative left-1/2 mt-[36px] w-screen -translate-x-1/2 overflow-hidden md:mt-[24px]">
			<div className="hidden w-screen overflow-hidden md:block">
				<div className="group w-screen overflow-hidden">
					<div className="flex w-max translate-x-[430px] gap-[16px] transition-transform duration-700 ease-in-out group-hover:translate-x-0">
						{studentsCarouselImages.map((image, index) => (
							<img
								key={image}
								src={image}
								alt={`Aluna ${index + 1}`}
								width={174}
								height={391}
								className="h-[391px] w-[174px] shrink-0 object-contain"
							/>
						))}
					</div>
				</div>
			</div>

			<div className="flex w-full flex-col items-center md:hidden">
				<img
					src={studentsCarouselImages[activeSlide]}
					alt={`Aluna ${activeSlide + 1}`}
					width={265}
					height={502}
					className="h-auto w-[265px] object-contain"
				/>

				<div className="mt-[18px] flex items-center justify-center gap-[8px]">
					{studentsCarouselImages.map((_, index) => (
						<button
							key={index}
							type="button"
							onClick={() => setActiveSlide(index)}
							className={`h-[8px] w-[8px] rounded-full transition-all ${
								activeSlide === index ? "bg-[#D2A534]" : "bg-[#D9D9D9]"
							}`}
							aria-label={`Ir para aluna ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default function StudentsSection() {
	return (
		<section
			className={`
				relative
				w-full
				bg-[#000C14]
				bg-no-repeat
				bg-cover
				bg-[url('/images/v2/students_section_mobile.webp')]
				bg-top
				min-h-[3867px]

				md:bg-[url('/images/v2/students_section_descktop.webp')]
				md:bg-contain
				md:bg-top
				md:min-h-[2780px]
			`}
		>
			<div className="max-w-[348px] md:max-w-[620px] mx-auto text-left md:text-center pt-[50px] md:pt-[20px]">
				<h2 className="font-raleway font-bold md:font-extrabold text-[18px] leading-[26px] md:text-[32px] md:leading-[40px]">
					<span className="text-[#D2A534]">O Ponto Cego</span>
					<span className="text-[#010D15]"> é um quartinho escuro</span>
					<br className="hidden md:block" />
					<span className="text-[#010D15]">
						{" "}onde mora o seu mundo relacional.
					</span>
				</h2>

				<div className="mt-4 text-[#010D15] font-raleway text-[14px] leading-[24px] md:text-[16px] md:leading-[24px] space-y-[20px] md:space-y-[2px]">
					<p>
						Onde moram as questões e bloqueios mais profundos, que insistem
						<br className="hidden md:block" />
						{" "}em te prender a circunstâncias, pessoas e na busca pelo sucesso.
					</p>

					<p>Vai ser fácil enxergar esse lugar? Não...</p>

					<p>Mas a boa notícia é que...</p>

					<p>
						Ao remover essa "sujeira" do seu núcleo emocional, você
						<br className="hidden md:block" />
						{" "}finalmente terá Permissão para ser, agir e ter o que quiser.
					</p>

					<p>Assim como aconteceu com a...</p>
				</div>

				<StudentsCarousel />

				<Link
					href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
					className="
						mt-[20px]
						w-full
						h-[44px]
						flex items-center justify-center
						font-raleway font-bold text-[16px] text-[#FFFFFF]
						rounded-[50px]
						border-l border-r border-[1px] border-[#46E96F]
						p-[10px]
						transition-all hover:brightness-110
						mx-auto
						md:mt-[24px] md:w-[250px] md:h-[44px]
					"
					style={{
						background:
							"radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
						boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
					}}
				>
					LIBERAR ACESSO
				</Link>

				<div className="mt-[60px] flex justify-center">
					<img
						src="/images/v2/permita_se_poder_ter_mobile.png"
						alt="logo"
						className="block md:hidden"
					/>

					<img
						src="/images/v2/qual_e_o_seu_debito_desktop.png"
						alt="logo"
						width={1060}
						height={44}
						className="hidden md:block max-w-none w-[1000px]"
					/>
				</div>
			</div>

			<div className="absolute top-[1850px] left-1/2 -translate-x-1/2 w-[314px] text-left text-[#F4F0E1] font-raleway text-[14px] leading-[24px] space-y-[20px] md:hidden">
				<p>
					Com que frequência você se pega dizendo -{" "}
					<span className="font-extrabold">"tenho que fazer isso pelo..."</span>
				</p>

				<p>
					Esse <span className="font-extrabold">"tenho que"</span> associado ao
					plano dos outros esconde uma responsabilidade oculta, um débito
					emocional que você tem com outra pessoa, seja ela viva ou morta.
				</p>

				<p>
					Por isso que,{" "}
					<span className="font-extrabold">
						sempre que você ganha dinheiro, o seu inconsciente dá um jeito de se
						desfazer do dinheiro...
					</span>
				</p>

				<p>
					Seja dando esse dinheiro para outras pessoas resolverem os problemas
					delas, seja fazendo novas dívidas ou pagando por "imprevistos" que
					sempre acontecem quando você está com{" "}
					<span className="font-extrabold">dinheiro sobrando.</span>
				</p>

				<p>
					Ao enxergar o seu Ponto Cego,{" "}
					<span className="font-extrabold">você terá a oportunidade de sair</span>{" "}
					desse ciclo sem fim de dívidas, boletos e de falta de resultado.
				</p>
			</div>

			<div className="absolute top-[2610px] left-1/2 -translate-x-1/2 w-[348px] md:hidden">
				<div className="space-y-[24px]">
					<h2 className="font-raleway font-extrabold text-[18px] leading-[26px]">
						<span className="text-[#D2A534]">A falta de Permissão</span>
						<span className="text-[#000C14]"> faz você</span>
						<br />
						<span className="text-[#000C14]">
							se sentir incapaz, acabando com a sua
						</span>
						<br />
						<span className="text-[#000C14]">disposição.</span>
					</h2>

					<div className="text-[#000C14] font-raleway text-[16px] leading-[24px] space-y-[24px]">
						<p className="font-extrabold">
							Além de gerar os sentimentos de medo, culpa e insegurança.
						</p>

						<p>
							E o que causa a falta de Permissão?
							<br />
							A dependência emocional originada pela
							<br />
							bagunça do seu núcleo interno
							<br />e externo.
						</p>

						<p>
							É difícil avançar na vida quando
							<br />
							você tem os sonhos, problemas e as
							<br />
							expectativas de um monte de pessoas que
							<br />
							não deveriam estar no seu núcleo emocional,
							<br />
							<span className="font-extrabold">nas suas costas.</span>
						</p>

						<p>
							Muito tem se falado, ultimamente, de
							<br />
							merecimento, mas o fato é que as pessoas não
							<br />
							têm <span className="font-extrabold">PERMISSÃO</span> para prosperar e avançar na
							<br />
							vida.
						</p>
					</div>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="
							w-full
							h-[44px]
							flex items-center justify-center
							font-raleway font-bold text-[16px] text-[#FFFFFF]
							rounded-[50px]
							border-l border-r border-[1px] border-[#46E96F]
							p-[10px]
							transition-all hover:brightness-110
							mx-auto
						"
						style={{
							background:
								"radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
							boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
						}}
					>
						LIBERAR ACESSO
					</Link>
				</div>
			</div>

			<div className="hidden md:block absolute top-[920px] right-[180px] max-w-[454px] text-left text-[#F4F0E1] font-raleway text-[16px] leading-[24px] space-y-[16px]">
				<p>
					Com que frequência você se pega dizendo -{" "}
					<span className="font-extrabold">"tenho que fazer isso pelo…"</span>
				</p>

				<p>
					Se a resposta for ao menos UMA vez... você ainda não pode ter
					dinheiro, mesmo podendo ganhar dinheiro.
				</p>

				<p>
					Esse <span className="font-extrabold">"tenho que"</span> associado ao
					plano dos outros esconde uma responsabilidade oculta, um débito
					emocional que você tem com outra pessoa, seja ela viva ou morta.
				</p>

				<p>
					Por isso que,{" "}
					<span className="font-extrabold">
						sempre que você ganha dinheiro, o seu inconsciente dá um jeito de se
						desfazer do dinheiro…
					</span>
				</p>

				<p>
					Seja dando esse dinheiro para outras pessoas resolverem os problemas
					delas, seja fazendo novas dívidas ou pagando por "imprevistos" que
					sempre acontecem quando você está com{" "}
					<span className="font-extrabold">dinheiro sobrando.</span>
				</p>

				<p>
					Ao enxergar o seu Ponto Cego,{" "}
					<span className="font-extrabold">você terá a oportunidade de sair</span>{" "}
					desse ciclo sem fim de dívidas, boletos e de falta de resultado.
				</p>

				<Link
					href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
					className="
						!mt-[40px]
						w-full
						h-[56px]
						flex items-center justify-center
						font-raleway font-bold text-[16px] text-[#FFFFFF]
						rounded-[50px]
						border-l border-r border-[1px] border-[#46E96F]
						p-[10px]
						transition-all hover:brightness-110
						md:w-[250px] md:h-[44px]
					"
					style={{
						background:
							"radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
						boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
					}}
				>
					LIBERAR ACESSO
				</Link>

				<div className="absolute top-[600px] left-[-315px] w-[520px] h-[347px] flex justify-center">
					<div className="space-y-[16px]">
						<h2 className="font-raleway font-extrabold text-[27px] leading-[35px]">
							<span className="text-[#D2A534]">A falta de Permissão</span>
							<span className="text-[#000C14]"> faz você</span>
							<br />
							<span className="text-[#000C14]">
								se sentir incapaz, acabando com
							</span>
							<br />
							<span className="text-[#000C14]">a sua disposição.</span>
						</h2>

						<div className="text-[#000C14] font-raleway text-[14px] leading-[24px] space-y-[8px]">
							<p className="font-extrabold">
								Além de gerar os sentimentos de medo, culpa e insegurança.
							</p>

							<p>
								E o que causa a falta de Permissão? A dependência emocional
								<br />
								originada pela bagunça do seu núcleo interno e externo.
							</p>

							<p>
								É difícil avançar na vida quando você tem os sonhos, problemas
								<br />e as expectativas de um monte de pessoas que não deveriam
								<br />
								estar no seu núcleo emocional,{" "}
								<span className="font-extrabold">nas suas costas.</span>
							</p>

							<p>
								Muito tem se falado, ultimamente, de merecimento, mas o fato
								<br />é que as pessoas não têm{" "}
								<span className="font-extrabold">PERMISSÃO</span> para prosperar e
								avançar
								<br />
								na vida.
							</p>
						</div>

						<div>
							<Link
								href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
								className="
									mt-[30px]
									w-[250px]
									h-[44px]
									flex items-center justify-center
									font-raleway font-bold text-[16px] text-[#FFFFFF]
									rounded-[50px]
									border-l border-r border-[1px] border-[#46E96F]
									p-[10px]
									transition-all hover:brightness-110
								"
								style={{
									background:
										"radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
									boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
								}}
							>
								LIBERAR ACESSO
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute top-[3320px] md:top-[2015px] left-1/2 -translate-x-1/2 w-[348px] md:w-[762px]">
				<h2 className="text-center font-raleway font-bold text-[18px] leading-[26px] md:text-[32px] md:leading-[40px] text-[#26333B]">
					Os 3 sintomas de quem{" "}
					<span className="text-[#D2A534] font-bold">ainda não tem</span>
					<br className="md:hidden" />
					<span className="md:hidden">
						{" "}Permissão para ter sucesso, riqueza e
					</span>
					<span className="hidden md:inline"> Permissão</span>
					<br className="hidden md:block" />
					<span className="md:hidden"> poder pessoal:</span>
					<span className="hidden md:inline">
						{" "}para ter sucesso, riqueza e poder pessoal:
					</span>
				</h2>
			</div>

			<div className="absolute top-[3450px] left-1/2 -translate-x-1/2 w-full px-[20px] md:hidden">
				<div className="overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
					<div className="flex gap-[12px] w-max">
						<div
							id="sintoma-1"
							className="
								snap-start
								shrink-0
								w-[340px]
								h-[367px]
								rounded-[10px]
								border border-[rgba(255,255,255,0.08)]
								bg-[linear-gradient(163.44deg,rgba(0,12,20,0.85)_-1.53%,rgba(0,26,43,0.85)_100%)]
								px-[36px]
								pt-[44px]
								pb-[32px]
							"
						>
							<div className="w-[31px] h-[30px] rounded-full border-[5px] border-[#FF0000] mb-[22px]" />

							<h3 className="font-raleway font-bold text-[20px] leading-[28px] text-[#FFFFFF] mb-[22px]">
								Resultado Bloqueado
							</h3>

							<p className="font-raleway font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
								Quando uma trava te prende onde você está e te impede de avançar o
								mínimo sequer na vida.
								<br />
								<br />
								Por mais que você tente e se esforce, às vezes até mais do que
								outras pessoas ao seu redor, o resultado simplesmente não vem.
							</p>
						</div>

						<div
							id="sintoma-2"
							className="
								snap-start
								shrink-0
								w-[340px]
								h-[367px]
								rounded-[10px]
								border border-[rgba(255,255,255,0.08)]
								bg-[linear-gradient(163.44deg,rgba(0,12,20,0.85)_-1.53%,rgba(0,26,43,0.85)_100%)]
								px-[36px]
								pt-[44px]
								pb-[32px]
							"
						>
							<div className="w-[31px] h-[30px] rounded-full border-[5px] border-[#FF0000] mb-[22px]" />

							<h3 className="font-raleway font-bold text-[20px] leading-[28px] text-[#FFFFFF] mb-[22px]">
								Resultado Atrasado
							</h3>

							<p className="font-raleway font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
								Quando você tem capacidade, energia e é reconhecido, mas um salto
								financeiro tem demorado muito mais do que o normal para acontecer.
							</p>
						</div>

						<div
							id="sintoma-3"
							className="
								snap-start
								shrink-0
								w-[340px]
								h-[367px]
								rounded-[10px]
								border border-[rgba(255,255,255,0.08)]
								bg-[linear-gradient(163.44deg,rgba(0,12,20,0.85)_-1.53%,rgba(0,26,43,0.85)_100%)]
								px-[36px]
								pt-[44px]
								pb-[32px]
							"
						>
							<div className="w-[31px] h-[30px] rounded-full border-[5px] border-[#FF0000] mb-[22px]" />

							<h3 className="font-raleway font-bold text-[20px] leading-[28px] text-[#FFFFFF] mb-[22px]">
								Resultado Diminuído
							</h3>

							<p className="font-raleway font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
								Quando seus resultados não estão compatíveis com o esforço que
								você faz para obtê-los. Mesmo se esforçando, o resultado vem em
								doses pequenas e frustrantes.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-[20px] flex items-center justify-center gap-[10px]">
					<a
						href="#sintoma-1"
						className="block w-[10px] h-[10px] rounded-full bg-[#D9D9D9]"
					/>
					<a
						href="#sintoma-2"
						className="block w-[10px] h-[10px] rounded-full bg-[#D9D9D9]"
					/>
					<a
						href="#sintoma-3"
						className="block w-[10px] h-[10px] rounded-full bg-[#D9D9D9]"
					/>
				</div>
			</div>

			<div className="hidden md:block absolute top-[2130px] left-1/2 -translate-x-1/2 w-full px-[20px] md:px-0">
				<div className="flex flex-col items-center gap-[20px] md:flex-row md:justify-center">
					<div className="w-[340px] h-[367px] rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(163.44deg,rgba(0,12,20,0.85)_-1.53%,rgba(0,26,43,0.85)_100%)] px-[36px] pt-[44px] pb-[32px]">
						<div className="w-[31px] h-[30px] rounded-full border-[5px] border-[#FF0000] mb-[22px]" />

						<h3 className="font-raleway font-bold text-[20px] leading-[28px] text-[#FFFFFF] mb-[22px]">
							Resultado Bloqueado
						</h3>

						<p className="font-raleway font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
							Quando uma trava te prende onde você está e te impede de avançar o
							mínimo sequer na vida.
							<br />
							<br />
							Por mais que você tente e se esforce, às vezes até mais do que
							outras pessoas ao seu redor, o resultado simplesmente não vem.
						</p>
					</div>

					<div className="w-[340px] h-[367px] rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(163.44deg,rgba(0,12,20,0.85)_-1.53%,rgba(0,26,43,0.85)_100%)] px-[36px] pt-[44px] pb-[32px]">
						<div className="w-[31px] h-[30px] rounded-full border-[5px] border-[#FF0000] mb-[22px]" />

						<h3 className="font-raleway font-bold text-[20px] leading-[28px] text-[#FFFFFF] mb-[22px]">
							Resultado Atrasado
						</h3>

						<p className="font-raleway font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
							Quando você tem capacidade, energia e é reconhecido, mas um salto
							financeiro tem demorado muito mais do que o normal para acontecer.
						</p>
					</div>

					<div className="w-[340px] h-[367px] rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(163.44deg,rgba(0,12,20,0.85)_-1.53%,rgba(0,26,43,0.85)_100%)] px-[36px] pt-[44px] pb-[32px]">
						<div className="w-[31px] h-[30px] rounded-full border-[5px] border-[#FF0000] mb-[22px]" />

						<h3 className="font-raleway font-bold text-[20px] leading-[28px] text-[#FFFFFF] mb-[22px]">
							Resultado Diminuído
						</h3>

						<p className="font-raleway font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
							Quando seus resultados não estão compatíveis com o esforço que
							você faz para obtê-los. Mesmo se esforçando, o resultado vem em
							doses pequenas e frustrantes.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}