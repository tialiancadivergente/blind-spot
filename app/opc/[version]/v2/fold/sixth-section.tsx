"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
	"/images/v2/Maurício Meirelles.svg",
	"/images/v2/Isabella.svg",
	"/images/v2/Group 482573.svg",
	"/images/v2/Group 482566.svg",
];

export default function SixthSection() {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((current) => (current === images.length - 1 ? 0 : current + 1));
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative h-[2510px] min-h-[2510px] w-full overflow-hidden bg-[url('/images/v2/sexta_dobra_mobile.png')] bg-[length:100%_auto] bg-top bg-no-repeat md:h-[2073px] md:min-h-[2073px] md:bg-[url('/images/v2/sexta_dobra_desktop.png')] md:bg-cover md:bg-center">
			<div className="absolute left-[32px] top-[400px] w-[296px] md:left-[56%] md:top-[96px] md:w-[429px]">
				<h2 className="font-raleway text-[22px] font-extrabold leading-[28px] text-[#000C14] md:text-[32px] md:leading-[36px]">
					Elton Euler: Idealizador
					<br />
					da Imersão <span className="text-[#EBBA3D]">Ponto Cego</span>
				</h2>

				<div className="mt-[30px] font-raleway text-[16px] font-medium leading-[24px] text-[#000C14] md:mt-[32px]">
					<p>
						Terapeuta de renome internacional, Fundador da Holding Império 55
						(previsão de movimentar mais de 1 bilhão de reais em 2025), Doutor
						Honoris Causa, Pai de 5 e um dos autores mais vendidos na Amazon.
					</p>

					<p className="mt-[24px]">
						Elton criou métodos e programas revolucionários como &apos;O Corpo
						Explica&apos;, &apos;Ponto Cego&apos; e a &apos;Aliança
						Divergente&apos; – uma sociedade divergente com mais de 130.000
						Aliados pelo mundo e que deve atingir 1 Milhão de pessoas até o
						final da década.
					</p>

					<p className="mt-[24px]">
						Elton é considerado um dos grandes gênios do século, por desafiar
						padrões e encontrar respostas práticas para questões profundas e
						invisíveis que transformaram a vida de milhares de pessoas.
					</p>

					<p className="mt-[24px] text-[18px] font-bold leading-[24px] md:leading-[26px]">
						Sua fama vai além da internet, já participando de programas no SBT
						e atuando nos bastidores como terapeuta de grandes nomes do cinema,
						música e milionários em momentos de dificuldade, como:
					</p>
				</div>
			</div>

			<div className="absolute left-[58%] top-[750px] hidden w-[1000px] -translate-x-1/2 md:block">
				<div className="flex w-full items-center justify-center gap-[18px]">
					{images.map((image, index) => (
						<div key={image} className="flex w-[230px] flex-none justify-center">
							<Image
								src={image}
								alt={`Pessoa atendida por Elton Euler ${index + 1}`}
								width={230}
								height={363}
								className="h-auto w-[230px] object-contain"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="absolute left-0 top-[1235px] w-full overflow-hidden md:hidden">
				<div className="mx-auto w-[260px] overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-out"
						style={{ transform: `translateX(-${activeSlide * 260}px)` }}
					>
						{images.map((image, index) => (
							<div key={image} className="flex w-[260px] flex-none justify-center">
								<Image
									src={image}
									alt={`Pessoa atendida por Elton Euler ${index + 1}`}
									width={260}
									height={410}
									className="h-auto w-[260px] object-contain"
								/>
							</div>
						))}
					</div>
				</div>

				<div className="mt-[18px] flex items-center justify-center gap-[8px]">
					{images.map((_, index) => (
						<button
							key={index}
							type="button"
							onClick={() => setActiveSlide(index)}
							className={`h-[9px] w-[9px] rounded-full transition-all ${
								activeSlide === index
									? "scale-125 bg-[#EBBA3D]"
									: "bg-white opacity-90"
							}`}
							aria-label={`Ver imagem ${index + 1}`}
						/>
					))}
				</div>
			</div>

			<div className="absolute left-[32px] top-[1735px] w-[296px] text-center md:left-1/2 md:top-[1200px] md:w-[723px] md:-translate-x-1/2">
				<p className="font-raleway text-[16px] font-medium leading-[24px] text-white">
					E muitos, muitos outros famosos…
				</p>

				<h3 className="mt-[43px] font-raleway text-[18px] font-extrabold leading-[26px] text-white md:text-[24px] md:leading-[30px]">
					No Ponto Cego, ele irá te mostrar o que a maioria das soluções ignora
					e como resolver a causa raiz, permitindo que você{" "}
					<span className="text-[#EBBA3D]">
						quebre o bloqueio que vem te impedindo de enriquecer
					</span>
				</h3>

				<Link
					href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
					className="mt-[60px] hidden h-[44px] w-[250px] rounded-[50px] border-x border-[#25D366] bg-[radial-gradient(83.8%_393.52%_at_45.2%_7.95%,_#25D366_0%,_rgba(37,211,102,0)_100%),linear-gradient(0deg,_#015E53,_#015E53)] font-raleway text-[14px] font-extrabold uppercase text-white shadow-[0px_-0.14px_1.92px_0px_#25D36626,0px_-0.35px_4.86px_0px_#25D36636,0px_-0.71px_9.92px_0px_#25D36644,0px_-1.46px_20.44px_0px_#25D36654,0px_-4px_56px_0px_#25D3667A] md:inline-flex md:items-center md:justify-center"
				>
					Liberar acesso
				</Link>
			</div>

			<Image
				src="/images/v2/Group 482497.png"
				alt="Divisor decorativo"
				width={1060}
				height={44}
				className="absolute left-1/2 top-[1550px] hidden h-auto w-[1060px] -translate-x-1/2 md:block"
			/>

			<Image
				src="/images/v2/Group 482482.png"
				alt="Divisor decorativo"
				width={296}
				height={44}
				className="absolute left-[32px] top-[2000px] h-auto w-[296px] md:hidden"
			/>

			<Image
				src="/images/v2/Group 37.svg"
				alt="Logo Ponto Cego"
				width={200}
				height={82}
				className="absolute left-1/2 top-[2085px] h-auto w-[200px] -translate-x-1/2 md:top-[1680px]"
			/>

			<div className="absolute left-1/2 top-[2185px] flex w-[296px] -translate-x-1/2 flex-col items-center gap-[28px] rounded-[12px] bg-[linear-gradient(71.02deg,_#00060A_-34.69%,_#001829_84.94%)] py-[26px] font-raleway text-white md:top-[1830px] md:h-[127px] md:w-[1060px] md:flex-row md:justify-center md:gap-[42px] md:py-0">
				<div className="flex flex-col items-center text-center">
					<div className="flex items-center justify-center gap-[6px]">
						<Image
							src="/images/v2/icone_0202.png"
							alt=""
							width={21}
							height={21}
							className="h-[21px] w-[21px]"
						/>

						<strong className="text-[24px] font-extrabold leading-[30px]">
							1 Dia
						</strong>
					</div>

					<p className="text-[16px] font-medium leading-[24px]">
						de experiência imersiva
					</p>
				</div>

				<div className="flex flex-col items-center text-center md:mr-[-18px]">
					<div className="flex items-center justify-center gap-[6px]">
						<Image
							src="/images/v2/icone_0101.png"
							alt=""
							width={21}
							height={21}
							className="h-[21px] w-[21px]"
						/>

						<strong className="text-[24px] font-extrabold leading-[30px]">
							10 Horas
						</strong>
					</div>

					<p className="text-[16px] font-medium leading-[20px]">
						de diagnóstico e descobertas
					</p>
				</div>

				<div className="flex flex-col items-center text-center md:ml-[-18px]">
					<div className="grid w-[260px] grid-cols-[28px_1fr] items-start gap-[6px] text-left md:flex md:w-auto md:items-center md:justify-center md:text-center">
						<Image
							src="/images/v2/icone_0303.png"
							alt=""
							width={28}
							height={21}
							className="mt-[5px] h-[21px] w-[28px] flex-none md:mt-0"
						/>

						<strong className="text-[24px] font-extrabold leading-[30px]">
							+_pages-opc-alunos_simples mil
						</strong>
					</div>

					<p className="w-[208px] text-[16px] font-medium leading-[20px]">
						pessoas já participaram das edições anteriores
					</p>
				</div>
			</div>
		</section>
	);
}