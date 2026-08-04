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
		const interval = setInterval(() => setActiveSlide((current) => (current + 1) % studentsCarouselImages.length), 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative left-1/2 z-10 mt-[36px] w-screen -translate-x-1/2 overflow-hidden">
			<div className="group hidden w-screen overflow-hidden md:block">
				<div className="flex w-max translate-x-[430px] gap-[16px] transition-transform duration-700 ease-in-out group-hover:translate-x-0">
					{studentsCarouselImages.map((image, index) => (
						<img
							key={image}
							src={image}
							alt={`Aluna ${index + 1}`}
							width={210}
							height={472}
							className="h-[472px] w-[210px] shrink-0 object-contain"
						/>
					))}
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
			aria-labelledby="ponto-cego-titulo"
			className="relative min-h-[1111px] w-full overflow-hidden bg-[#000C14] bg-[url('/images/v2/terceira_dobra_nova_mobile.png')] bg-[length:100%_1111px] bg-top bg-no-repeat md:min-h-[1080px] md:bg-[#FDF8ED] md:bg-none"
		>
			<div className="absolute inset-x-0 top-0 hidden h-[600px] bg-[url('/images/v2/terceira_dobra_nova_desktop.png')] bg-[length:100%_1050px] bg-top bg-no-repeat md:block" />

			<div className="relative z-10 mx-auto max-w-[348px] pt-[50px] text-left md:max-w-[620px] md:pt-[70px] md:text-center">
				<h2
					id="ponto-cego-titulo"
					className="font-raleway text-[18px] font-bold leading-[26px] md:text-[32px] md:font-extrabold md:leading-[42px]"
				>
					<span className="text-[#D2A534]">O Ponto Cego</span>
					<span className="text-[#010D15]"> é um quartinho escuro</span>
					<br className="hidden md:block" />
					<span className="text-[#010D15]"> onde mora o seu mundo relacional.</span>
				</h2>

				<div className="mt-4 space-y-[20px] font-raleway text-[14px] leading-[24px] text-[#010D15] md:mt-[24px] md:space-y-[14px] md:text-[16px] md:leading-[28px]">
					<p>
						Onde moram as questões e bloqueios mais profundos, que insistem
						<br className="hidden md:block" /> em te prender a circunstâncias, pessoas e na busca pelo sucesso.
					</p>

					<p>Vai ser fácil enxergar esse lugar? Não...</p>

					<p>Mas a boa notícia é que...</p>

					<p>
						Ao remover essa "sujeira" do seu núcleo emocional, você
						<br className="hidden md:block" /> finalmente terá Permissão para ser, agir e ter o que quiser.
					</p>

					<p>Assim como aconteceu com a...</p>
				</div>

				<StudentsCarousel />

				<Link
					href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
					className="relative z-20 mx-auto mt-[50px] hidden h-[44px] w-[250px] items-center justify-center rounded-[50px] border border-x-[#46E96F] p-[10px] font-raleway text-[16px] font-bold text-white transition-all hover:brightness-110 md:flex"
					style={{
						background: "radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
						boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
					}}
				>
					LIBERAR ACESSO
				</Link>
			</div>
		</section>
	);
}