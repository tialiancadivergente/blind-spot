
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const cards = [
	{ src: "/v12/image%201990.png", alt: "Depoimento 1" },
	{ src: "/v12/image%201991.png", alt: "Depoimento 2" },
	{ src: "/v12/image%201992.png", alt: "Depoimento 3" },
	{ src: "/v12/image%201993.png", alt: "Depoimento 4" },
];

export default function Biography() {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [activeCard, setActiveCard] = useState(0);

	const goToCard = (index: number) => {
		if (!carouselRef.current) return;
		carouselRef.current.scrollTo({
			left: carouselRef.current.clientWidth * index,
			behavior: "smooth",
		});
		setActiveCard(index);
	};

	const handleScroll = () => {
		if (!carouselRef.current) return;
		const { scrollLeft, clientWidth } = carouselRef.current;
		if (!clientWidth) return;
		setActiveCard(Math.min(cards.length - 1, Math.max(0, Math.round(scrollLeft / clientWidth))));
	};

	return (
		<>
			<section
				id="super-ponto-cego"
				aria-labelledby="super-ponto-cego-titulo"
				className="relative h-[3308px] w-full overflow-hidden bg-black bg-[url('/v12/bg_segunda_dobra_mobile.png')] bg-cover bg-top bg-no-repeat md:h-[2430px] md:bg-[url('/v12/bg_segunda_dobra_desktop.png')]"
			>
				<div className="relative mx-auto h-full w-full max-w-[1280px]">
					<h2
						id="super-ponto-cego-titulo"
						className="absolute left-1/2 top-[74.15px] m-0 w-[377.36px] max-w-[calc(100%-32px)] -translate-x-1/2 text-center [font-family:'Spectral',serif] text-[23.85px] font-bold leading-[1.15] tracking-normal text-[#101920] md:top-[54.58px] md:w-[701.19px] md:max-w-none md:text-[44.33px]"
					>
						Veja algumas pessoas que já
						<br className="hidden md:block" />
						{" "}identificaram seus Pontos Cegos:
					</h2>

					<div className="absolute left-1/2 top-[196.62px] w-[325.61px] max-w-[calc(100%-32px)] -translate-x-1/2 md:hidden">
						<div
							ref={carouselRef}
							onScroll={handleScroll}
							aria-label="Depoimentos de pessoas que identificaram seus Pontos Cegos"
							className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
						>
							{cards.map((card) => (
								<div key={card.src} className="w-full shrink-0 snap-center">
									<Image
										src={card.src}
										alt={card.alt}
										width={326}
										height={732}
										unoptimized
										className="block h-auto w-full object-contain"
									/>
								</div>
							))}
						</div>

						<div className="mt-[18px] flex items-center justify-center gap-[10px]" aria-label="Navegação dos depoimentos">
							{cards.map((card, index) => (
								<button
									key={card.src}
									type="button"
									onClick={() => goToCard(index)}
									aria-label={`Ver depoimento ${index + 1}`}
									aria-current={activeCard === index ? "true" : undefined}
									className={`h-[9px] w-[9px] rounded-full transition-all duration-300 ${
										activeCard === index
											? "scale-110 bg-[#C0964B]"
											: "bg-[#C0964B]/35"
									}`}
								/>
							))}
						</div>
					</div>

					<h3 className="absolute left-1/2 top-[1174.92px] m-0 w-[327.69px] max-w-[calc(100%-32px)] -translate-x-1/2 text-center [font-family:'Teramo',serif] text-[31.54px] font-bold uppercase leading-[1.35] tracking-normal text-white md:left-[428.85px] md:top-[1037.79px] md:max-w-none md:translate-x-0">
						O QUE VOCÊ VAI
						<br />
						<span className="italic text-[#C0964B]">TER ACESSO:</span>
					</h3>

					<p className="absolute left-1/2 top-[1301.7px] m-0 w-[163px] -translate-x-1/2 text-center [font-family:'Teramo',serif] text-[22.47px] font-normal leading-[27.47px] tracking-normal text-[#053038] md:left-[720.86px] md:top-[1443.87px] md:translate-x-0">
						Evento <strong className="font-bold">Online;</strong>
					</p>

					<p className="absolute left-1/2 top-[1385.27px] m-0 w-[355.99px] max-w-[calc(100%-24px)] -translate-x-1/2 text-center [font-family:'Teramo',serif] text-[22.47px] font-normal leading-[27.47px] tracking-normal text-[#053038] md:left-[205px] md:top-[1185.81px] md:max-w-none md:translate-x-0">
						Apostila com 8 Ferramentas de
						<br />
						<strong className="font-bold">Desbloqueio Financeiro;</strong>
					</p>

					<p className="absolute left-1/2 top-[1511.89px] m-0 w-[334.33px] max-w-[calc(100%-24px)] -translate-x-1/2 text-center [font-family:'Teramo',serif] text-[17.85px] font-normal leading-[21.82px] tracking-normal text-[#053038] md:left-[217.19px] md:top-[1329.13px] md:max-w-none md:translate-x-0">
						<strong className="font-bold">
							Garantia 'De Repente' 120 dias:
						</strong>{" "}
						se você não receber nenhum dinheiro inesperado na sua conta bancária durante 120 dias após o Ponto Cego, nós vamos devolver o seu investimento no ingresso do evento;
					</p>

					<p className="absolute left-1/2 top-[1715px] m-0 w-[355.99px] max-w-[calc(100%-24px)] -translate-x-1/2 text-center [font-family:'Teramo',serif] text-[22.47px] font-normal leading-[27.47px] tracking-normal text-[#053038] md:left-[624.4px] md:top-[1206.34px] md:max-w-none md:translate-x-0">
						Suporte ativo <strong className="font-bold">durante o evento;</strong>
					</p>

					<p className="absolute left-1/2 top-[1830px] m-0 w-[343px] max-w-[calc(100%-24px)] -translate-x-1/2 text-center [font-family:'Teramo',serif] text-[18.34px] font-normal leading-[22.41px] tracking-normal text-[#053038] md:left-[630.46px] md:top-[1348.42px] md:max-w-none md:translate-x-0">
						Transmissão em <strong className="font-bold">Qualidade de Cinema.</strong>
					</p>

					<a
						href="#hero"
						className="absolute left-1/2 top-[1941.49px] flex h-[41px] w-[350px] max-w-[calc(100%-32px)] -translate-x-1/2 items-center justify-center gap-[12px] rounded-[50px] border-x-2 border-x-transparent px-[12px] text-center [font-family:'Raleway',sans-serif] text-[16px] font-extrabold uppercase leading-[24px] text-white transition-all hover:brightness-110 md:top-[1540px] md:gap-[10px]"
						style={{
							background: "radial-gradient(100.26% 100% at 50% 0%, #00BC71 0%, rgba(12,112,72,0) 100%) padding-box, linear-gradient(0deg, #006D41, #006D41) padding-box, linear-gradient(90deg, #00D47F 0%, rgba(0,212,127,0) 35%, rgba(0,212,127,0) 65%, #00D47F 100%) border-box",
						}}
					>
						ENTRAR NA LISTA DE ESPERA
					</a>

					<h3 className="absolute left-[67.5px] top-[2133.72px] m-0 w-[349px] max-w-[calc(100%-80px)] [font-family:'Spectral',serif] text-[40.48px] font-bold leading-[1.15] tracking-normal text-[#C0964B] md:left-[202.27px] md:top-[1648.66px] md:max-w-none">
						Ramon Galimberti
					</h3>

					<p className="absolute left-[67.5px] top-[2190.72px] m-0 w-[341.6px] max-w-[calc(100%-80px)] [font-family:'Raleway',sans-serif] text-[20.15px] font-bold leading-[1.35] tracking-normal text-white [font-variant-numeric:lining-nums_proportional-nums] md:left-[202.27px] md:top-[1705.66px] md:max-w-none">
						Engenheiro, mestre e mentor de desenvolvimento humano. Durante muito tempo, Ramon viveu a frustração de se esforçar muito e ver a vida parar no quase.
					</p>

					<p className="absolute left-[73.54px] top-[2342.61px] m-0 w-[343.44px] max-w-[calc(100%-85px)] [font-family:'Raleway',sans-serif] text-[16.06px] font-normal leading-[1.35] tracking-normal text-white [font-variant-numeric:lining-nums_proportional-nums] md:left-[202.27px] md:top-[1860.27px] md:max-w-none">
						O dinheiro não permanecia, os planos não se firmavam, o relacionamento não deu certo e ele usava o ticket do pai para virar o mês.
					</p>

					<p className="absolute left-[67.5px] top-[2425.34px] m-0 w-[349.49px] max-w-[calc(100%-80px)] [font-family:'Raleway',sans-serif] text-[15.6px] font-normal leading-[1.35] tracking-normal text-white [font-variant-numeric:lining-nums_proportional-nums] md:left-[202.27px] md:top-[1940.27px] md:max-w-none">
						Travado na vida, buscou resposta do porquê isso acontecia. E assim, ele uniu seus conhecimentos em engenharia, comportamento humano e sua experiência prática para identificar e corrigir os padrões invisíveis que travam dinheiro, relacionamentos, e a saúde.
					</p>

					<div className="absolute left-[67.5px] top-[2577.62px] w-[350px] max-w-[calc(100%-80px)] [font-family:'Raleway',sans-serif] [font-variant-numeric:lining-nums_proportional-nums] md:left-[204.4px] md:top-[2081.27px] md:max-w-none">
						<p className="m-0 text-[18.66px] font-bold leading-[1.35] tracking-normal text-[#C0964B]">
							Hoje, Ramon é casado, construiu uma nova história e tornou-se o primeiro brasileiro autorizado a aplicar a Teoria da Permissão.
						</p>

						<p className="mt-[18px] text-[15.6px] font-normal leading-[1.35] tracking-normal text-white">
							Com mais de 600mil seguidores ja participou de entrevistas em emissoras como SBT, Band e Record, vem falando de algo que muita gente vive, mas quase ninguém sabe explicar: por que pessoas capazes e dedicadas não conseguem ir mais longe.
						</p>
					</div>
				</div>
			</section>

			<section
				aria-labelledby="lista-espera-titulo"
				className="relative w-full bg-[#C0964B] px-[24px] py-[38px] md:px-[40px] md:py-[48px]"
			>
				<div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-[28px] md:flex-row md:items-center md:gap-[60px]">
					<div className="max-w-[680px]">
						<h2
							id="lista-espera-titulo"
							className="m-0 [font-family:'Spectral',serif] text-[27px] font-bold leading-[1.15] text-[#07242C] md:text-[35px]"
						>
							Entre para a lista de espera e garanta o seu ingresso com a melhor condição.
						</h2>

						<p className="mt-[15px] [font-family:'Raleway',sans-serif] text-[15px] font-medium leading-[1.55] text-[#07242C] md:text-[17px]">
							No dia <strong className="font-extrabold">25/11</strong>, vamos liberar no <strong className="font-extrabold">Grupo Exclusivo</strong> o link com desconto especial no valor do ingresso.
						</p>

						<p className="mt-[13px] [font-family:'Raleway',sans-serif] text-[13px] font-semibold italic leading-[1.4] text-[#07242C] md:text-[14px]">
							*Apenas algumas vagas estarão disponíveis*
						</p>
					</div>

					<style>{`
						@keyframes listaEsperaPulse {
							0%, 100% { transform: scale(1); }
							50% { transform: scale(1.045); }
						}
					`}</style>

					<a
						href="#hero"
						className="flex h-[52px] w-full shrink-0 items-center justify-center rounded-full border border-[#053038] bg-[#053038] px-[22px] text-center [font-family:'Raleway',sans-serif] text-[13px] font-extrabold uppercase tracking-normal text-white shadow-[0_8px_22px_rgba(7,36,44,0.22)] transition-[filter,box-shadow] duration-200 hover:brightness-110 motion-safe:animate-[listaEsperaPulse_2.5s_ease-in-out_infinite] md:w-[350px] md:text-[15px]"
					>
						ENTRAR NA LISTA DE ESPERA
					</a>
				</div>
			</section>
		</>
	);
}
