"use client";

import { useEffect, useState } from "react";

const benefits = [
	<>Evento Ao Vivo e Online no Zoom;</>,
	<>Acesso à Gravação do evento;</>,
	<>Apostila com 8 Ferramentas<br />de Desbloqueio Financeiro;</>,
	<><strong className="font-bold">Garantia &apos;De Repente&apos; 120 dias:</strong> se você não receber nenhum dinheiro inesperado na sua conta bancária durante 120 dias após o Ponto Cego, nós vamos devolver o seu investimento no ingresso do evento;</>,
	<>Suporte ativo durante o evento;</>,
	<>Transmissão em Qualidade de Cinema.</>,
];

const testimonialPages = [
	[482591, 482592, 482593, 482594, 482595],
	[482596, 482597, 482598, 482599],
	[482600, 482601, 482602, 482604],
];

export default function SeventhSection() {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => setActiveSlide((current) => (current + 1) % testimonialPages.length), 4500);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative flex w-full min-h-[1600px] justify-center overflow-hidden bg-[url('/images/v2/setima_dobra_mobile.webp')] bg-[length:100%_1494px] bg-top bg-no-repeat md:min-h-[1751px] md:bg-[url('/images/v2/setima_dobra_desktop.webp')] md:bg-cover md:bg-center">
			<div className="relative min-h-[1600px] w-full max-w-[1200px] px-6 md:min-h-[1751px] md:px-0">
				<h2 className="absolute left-1/2 top-[290px] w-[178px] -translate-x-1/2 text-center font-raleway text-[18px] font-extrabold leading-[24px] text-white md:top-[450px] md:w-[587px] md:text-[32px] md:leading-[36px]">
					Destrave seu acesso ao <span className="text-[#EBBA3D]">Ponto Cego</span>
				</h2>

				<p className="absolute left-1/2 top-[370px] w-[225px] -translate-x-1/2 whitespace-nowrap text-center font-raleway text-[16px] font-extrabold uppercase leading-[36px] text-[#00253D] md:top-[620px] md:w-[338px] md:text-[24px]">
					_pages-opc-data-extenso
				</p>

				<div className="absolute left-1/2 top-[415px] flex -translate-x-1/2 flex-col items-center md:top-[700px]">
					<h3 className="text-center font-raleway text-[24px] font-extrabold leading-[36px] text-[#EBBA3D] md:text-[32px]">Executivo</h3>
					<p className="-mt-2 text-center font-raleway text-[14px] font-extrabold leading-[36px] text-white">(Ingresso Online)</p>
				</div>

				<div className="absolute left-0 right-0 top-[535px] w-full px-5 md:top-[825px] md:px-0">
					<div className="flex w-full flex-col items-center md:flex-row md:justify-center md:gap-[68px]">
						<ul className="order-1 flex w-full max-w-[320px] flex-col gap-[12px] font-raleway text-[16px] font-medium leading-[20px] text-[#000C14] md:order-3 md:max-w-[378px] md:gap-[8px]">
							{benefits.map((benefit, index) => (
								<li key={index} className="flex w-full items-start gap-[10px]">
									<span aria-hidden="true" className="mt-[1px] block h-[18px] w-[18px] shrink-0 font-raleway text-[27px] font-medium leading-[18px] text-[#DB992F]">✓</span>
									<span className="min-w-0 flex-1">{benefit}</span>
								</li>
							))}
						</ul>

						<div className="hidden md:order-2 md:block md:h-[306px] md:w-px md:shrink-0 md:bg-[#DB992F]" />

						<div className="order-2 mt-[58px] flex w-full max-w-[340px] flex-col items-center text-center font-raleway text-[#101B22] md:order-1 md:mt-0 md:w-[430px] md:max-w-none">
							<p className="text-[16px] font-medium leading-[24px]">De R$ 500,00 por</p>

							<div className="mt-[13px] flex items-end justify-center">
								<span className="mr-[7px] pb-[4px] text-[16px] font-bold leading-[24px]">R$</span>
								<strong className="text-[72px] font-bold leading-[51px] tracking-[-1px]">47,00</strong>
							</div>

							<p className="mt-[22px] w-full whitespace-nowrap text-[14px] font-medium leading-[24px] md:text-[16px]">(Cupom de 90% de desconto já aplicado)</p>

							<button type="button" className="mt-[18px] flex h-[54px] w-[294px] max-w-full items-center justify-center rounded-[50px] border-x border-y-0 border-solid border-[#25D366] px-[10px] font-raleway text-[16px] font-bold leading-[24px] text-black shadow-[0_-0.14px_1.92px_#25D36626,0_-0.35px_4.86px_#25D36636,0_-0.71px_9.92px_#25D36644,0_-1.46px_20.44px_#25D36654,0_-4px_56px_#25D3667A] md:mt-[32px] md:w-[319px] md:uppercase" style={{ background: "radial-gradient(83.8% 393.52% at 45.2% 7.95%, #25D366 0%, rgba(37,211,102,0) 100%), linear-gradient(0deg, #015E53, #015E53)" }}>
								Comprar agora com desconto
							</button>
						</div>
					</div>

					<div className="mt-[60px] w-full md:mt-[108px]">
						<h3 className="mx-auto w-[241px] text-center font-raleway text-[18px] font-extrabold leading-[24px] text-[#00121F] md:w-[723px] md:text-[24px] md:leading-[30px]">
							Depoimentos de quem <span className="block md:inline">assistiu online:</span>
						</h3>

						<div className="mx-auto mt-[36px] w-full max-w-[420px] overflow-hidden md:mt-[72px] md:max-w-[1200px] md:pl-[80px]">
							<div key={activeSlide} className="flex w-max items-start gap-[28px] transition-opacity duration-500 md:gap-[68px]">
								{testimonialPages[activeSlide].map((image, index) => (
									<img key={image} src={`/images/v2/Group ${image}.svg`} alt={`Depoimento de quem assistiu online ${activeSlide * 5 + index + 1}`} draggable={false} className="h-auto w-[280px] shrink-0 select-none object-contain object-top md:h-[220px] md:w-[220px]" />
								))}
							</div>
						</div>

						<div className="mt-[22px] flex items-center justify-center gap-[6px] md:mt-[42px]">
							{testimonialPages.map((_, index) => (
								<button key={index} type="button" aria-label={`Mostrar grupo de depoimentos ${index + 1}`} onClick={() => setActiveSlide(index)} className={`h-[10px] w-[10px] rounded-full transition-colors ${activeSlide === index ? "bg-[#DB992F]" : "bg-[#6B4A14]"}`} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}