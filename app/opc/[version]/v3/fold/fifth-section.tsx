"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const firstCarouselImages = [
	"/images/v2/OPC Agosto-5.png",
	"/images/v2/OPC Agosto-26.png",
	"/images/v2/OPC Agosto-27.png",
	"/images/v2/OPC Agosto-34.png",
	"/images/v2/OPC Agosto-35.png",
	"/images/v2/OPC Agosto-46.png",
];

const secondCarouselImages = [
	"/images/v2/OPC Agosto-72.png",
	"/images/v2/OPC Agosto-80.png",
	"/images/v2/OPC Agosto-127.png",
	"/images/v2/OPC Agosto-109.png",
	"/images/v2/OPC Agosto-131.png",
	"/images/v2/OPC Agosto-119.png",
	"/images/v2/OPC Agosto-145.png",
];

const thirdImages = [
	"/images/v2/OPC Agosto-124.png",
	"/images/v2/OPC Agosto-160.png",
	"/images/v2/OPC Agosto-182.png",
	"/images/v2/OPC Agosto-184.png",
];

function CarouselBlock({
	images,
	title,
	subtitle,
	mobileSubtitle,
}: {
	images: string[];
	title: string;
	subtitle: React.ReactNode;
	mobileSubtitle?: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		if (!isOpen) return;

		const interval = setInterval(() => {
			setActiveSlide((current) => (current + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [isOpen, images.length]);

	return (
		<div className="flex w-full flex-col items-center">
			{isOpen && (
				<div className="mb-[42px] w-full overflow-hidden md:mb-[56px]">
					<div className="hidden w-full justify-center overflow-hidden md:flex">
						<div className="group flex w-full max-w-[1440px] justify-start overflow-hidden">
							<div className="flex gap-10 transition-transform duration-700 ease-in-out group-hover:-translate-x-[355px]">
								{images.map((image, index) => (
									<Image
										key={image}
										src={image}
										alt={`Imagem do carrossel ${index + 1}`}
										width={342}
										height={381}
										className="h-[381px] w-auto shrink-0 object-cover"
									/>
								))}
							</div>
						</div>
					</div>

					<div className="flex w-full flex-col items-center md:hidden">
						<div className="w-[296px] overflow-hidden">
							<Image
								src={images[activeSlide]}
								alt={`Imagem do carrossel ${activeSlide + 1}`}
								width={296}
								height={381}
								className="h-[381px] w-[296px] object-cover"
							/>
						</div>

						<div className="mt-6 flex items-center justify-center gap-2">
							{images.map((_, index) => (
								<button
									key={index}
									type="button"
									onClick={() => setActiveSlide(index)}
									className={`h-2 w-2 rounded-full transition-all ${
										activeSlide === index ? "bg-[#DBB658]" : "bg-[#FFFFFF66]"
									}`}
									aria-label={`Ir para imagem ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			)}

			<div className="flex w-full flex-col items-center">
				<p className="text-center font-roboto text-[12px] font-bold uppercase leading-[22px] text-white">
					{title}
				</p>

				<button
					type="button"
					onClick={() => setIsOpen((current) => !current)}
					className="mt-1 flex items-center justify-center gap-3"
					aria-label={isOpen ? "Fechar carrossel" : "Abrir carrossel"}
				>
					<span className="hidden text-center font-epilogue text-[24px] font-bold leading-[30px] text-[#DBB658] md:inline">
						{subtitle}
					</span>

					<span className="text-center font-epilogue text-[22px] font-bold leading-[38px] text-[#DBB658] md:hidden">
						{mobileSubtitle ?? subtitle}
					</span>

					<Image
						src="/images/v2/sendbutton.svg"
						alt=""
						width={16}
						height={20}
						className={`h-[16.57px] w-[13px] shrink-0 transition-transform duration-300 md:h-[20.4px] md:w-[16px] ${
							isOpen ? "rotate-180" : "rotate-0"
						}`}
					/>
				</button>

				<div className="mt-4 h-[2px] w-[296px] bg-[#DBB658] md:w-[522px]" />
			</div>
		</div>
	);
}

function StaticImagesBlock({
	images,
	title,
	subtitle,
	mobileSubtitle,
}: {
	images: string[];
	title: string;
	subtitle: React.ReactNode;
	mobileSubtitle?: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex w-full flex-col items-center">
			{isOpen && (
				<div className="mb-[42px] w-full overflow-hidden md:mb-[56px]">
					<div className="hidden w-full justify-center md:flex">
						<div className="flex w-full max-w-[1440px] justify-center gap-10 overflow-hidden">
							{images.map((image, index) => (
								<Image
									key={image}
									src={image}
									alt={`Imagem do ato ${index + 1}`}
									width={342}
									height={381}
									className="h-[381px] w-auto shrink-0 object-cover"
								/>
							))}
						</div>
					</div>

					<div className="flex w-full flex-col items-center md:hidden">
						<div className="grid w-[296px] grid-cols-2 gap-4">
							{images.map((image, index) => (
								<Image
									key={image}
									src={image}
									alt={`Imagem do ato ${index + 1}`}
									width={140}
									height={156}
									className="h-[156px] w-[140px] object-cover"
								/>
							))}
						</div>
					</div>
				</div>
			)}

			<div className="flex w-full flex-col items-center">
				<p className="text-center font-roboto text-[12px] font-bold uppercase leading-[22px] text-white">
					{title}
				</p>

				<button
					type="button"
					onClick={() => setIsOpen((current) => !current)}
					className="mt-1 flex items-center justify-center gap-3"
					aria-label={isOpen ? "Fechar imagens" : "Abrir imagens"}
				>
					<span className="hidden text-center font-epilogue text-[24px] font-bold leading-[30px] text-[#DBB658] md:inline">
						{subtitle}
					</span>

					<span className="text-center font-epilogue text-[22px] font-bold leading-[38px] text-[#DBB658] md:hidden">
						{mobileSubtitle ?? subtitle}
					</span>

					<Image
						src="/images/v2/sendbutton.svg"
						alt=""
						width={16}
						height={20}
						className={`h-[16.57px] w-[13px] shrink-0 transition-transform duration-300 md:h-[20.4px] md:w-[16px] ${
							isOpen ? "rotate-180" : "rotate-0"
						}`}
					/>
				</button>

				<div className="mt-4 h-[2px] w-[296px] bg-[#DBB658] md:w-[522px]" />
			</div>
		</div>
	);
}

function VideoImpactBlock() {
	return (
		<div className="mt-[150px] flex w-full flex-col items-center md:mt-[190px]">
			<h2 className="w-[296px] text-center font-raleway text-[22px] font-extrabold leading-[26px] text-white md:w-[587px] md:text-[32px] md:leading-[36px]">
				Veja toda a <span className="text-[#DBB658]">emoção</span> e impacto do
				<br />
				<span className="text-[#DBB658]">Ponto Cego</span> em 01 minuto...
			</h2>

			<Image
				src="/images/v2/Thumb.png"
				alt="Vídeo Ponto Cego"
				width={739}
				height={416}
				className="mt-[51px] h-auto w-[296px] md:mt-[80px] md:w-[739px]"
			/>

			<div className="mt-[50px] w-[265px] text-center font-raleway text-[16px] font-medium leading-[24px] text-white md:w-[559px]">
				<p>
					Aqui você não encontrará um motivacional para enriquecer, o Ponto
					Cego é justamente o oposto dessa maré superficial.
				</p>

				<p className="mt-6">
					Porque aqui, nós sabemos que a segunda-feira chega…
				</p>

				<p className="mt-6">
					… e quando ela chegar você terá as armas necessárias para prosperar e
					mudar de vida (rápido) eliminando as travas emocionais que te impedem
					de ter sucesso…
				</p>

				<p className="mt-6">Não tem segredo.</p>

				<p className="mt-6">
					Ou você tem resultado,
					<br />
					ou você não paga.
				</p>

				<p className="mt-6">
					Aproveite esta oportunidade e esteja diante do melhor ambiente para te
					trazer Percepções para tomar Decisões importantes que te levam a Ações
					que irão mudar a sua vida.
				</p>
			</div>

			<Link
				href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
				className="
					mt-[34px]
					flex
					h-[44px]
					w-[250px]
					items-center
					justify-center
					rounded-[50px]
					border-x
					border-[#25D366]
					bg-[radial-gradient(83.8%_393.52%_at_45.2%_7.95%,_#25D366_0%,_rgba(37,211,102,0)_100%),linear-gradient(0deg,_#015E53,_#015E53)]
					p-[10px]
					font-raleway
					text-[12px]
					font-extrabold
					uppercase
					leading-[16px]
					text-white
					shadow-[0px_-0.14px_1.92px_0px_#25D36626,0px_-0.35px_4.86px_0px_#25D36636,0px_-0.71px_9.92px_0px_#25D36644,0px_-1.46px_20.44px_0px_#25D36654,0px_-4px_56px_0px_#25D3667A]
					transition-all
					hover:brightness-110
				"
			>
				Liberar acesso
			</Link>
		</div>
	);
}

export default function FifthSection() {
	return (
		<section className="relative w-full overflow-hidden bg-[#000C14]">
			<div className="relative z-10 mx-auto flex w-full max-w-[1920px] flex-col items-center px-8 py-[80px] md:px-0 md:py-[120px]">
				<CarouselBlock
					images={firstCarouselImages}
					title="manhã - ato 1"
					subtitle="A grande descoberta"
				/>

				<div className="mt-[110px] w-full md:mt-[150px]">
					<CarouselBlock
						images={secondCarouselImages}
						title="tarde - ato 2"
						subtitle={
							<>
								Diagnóstico de núcleo emocional
								<br />e 4 padrões controladores
							</>
						}
						mobileSubtitle="Diagnóstico de núcleo emocional e 4 padrões controladores"
					/>
				</div>

				<div className="mt-[110px] w-full md:mt-[150px]">
					<StaticImagesBlock
						images={thirdImages}
						title="noite - ato 3"
						subtitle={
							<>
								O ritual final para aumentar
								<br />a permissão em 4 passos
							</>
						}
						mobileSubtitle={
							<>
								O ritual final para aumentar
								<br />a permissão em 4 passos
							</>
						}
					/>
				</div>

				<VideoImpactBlock />
			</div>
		</section>
	);
}