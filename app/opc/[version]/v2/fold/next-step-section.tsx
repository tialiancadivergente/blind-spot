"use client";

import Image from "next/image";
import Link from "next/link";

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
		<section className="relative flex h-[2001px] min-h-[2001px] w-full justify-center overflow-hidden bg-[#000C14] md:h-[1797px] md:min-h-[1797px] md:overflow-visible">
			<div className="relative z-10 w-full max-w-[1060px] px-8 pt-[30px] md:px-0 md:pt-[40px]">
				<Image
					src="/images/v2/falta_de_permissão_mobile.png"
					alt="Falta de permissão"
					width={296}
					height={46}
					className="block h-[46px] w-[296px] object-contain md:hidden"
					priority
				/>

				<h2 className="mt-[35px] w-[296px] text-left font-raleway text-[18px] font-extrabold leading-[26px] text-white md:mt-[40px] md:w-[610px] md:text-[32px] md:leading-[40px]">
					E para superar a <span className="text-[#F0CB6D]">falta de Permissão</span>, você precisará participar do Ponto Cego para:
				</h2>

				<div className="mt-[54px] flex flex-col gap-[10px] md:gap-[20px]">
					{cards.map((card) => (
						<div key={card.title} className="flex h-[319px] w-[296px] flex-col border-l border-[#F0CB6D] bg-[#001522] md:h-[199px] md:w-[1060px] md:flex-row">
							<div className="flex h-[126px] w-full items-center bg-[#000C14]/30 pl-[31px] md:h-full md:w-[360px] md:pl-[62px]">
								<h3 className="font-raleway text-[32px] font-extrabold leading-[24px] text-[#F0CB6D] md:text-[50px] md:leading-[60px]">
									{card.title}
								</h3>
							</div>

							<div className="flex flex-1 items-start pl-[31px] pr-[32px] pt-[39px] md:items-center md:pl-[64px] md:pr-0 md:pt-0">
								<p className="w-[232px] font-raleway text-[16px] font-medium leading-[24px] text-white md:w-[524px]">
									{card.text}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-[33px] flex w-[296px] flex-col items-center justify-between gap-[35px] md:mt-[150px] md:w-full md:flex-row">
					<p className="w-[259px] text-center font-raleway text-[16px] font-medium leading-[24px] text-white md:w-[610px] md:text-left md:text-[26px] md:leading-[110%]">
						Por isso, não existe nada tão personalizado e completo quanto o Ponto Cego{" "}
						<span className="font-extrabold">para transformar a sua vida e se livrar dessas amarras</span>{" "}
						que estão te impedindo de alcançar o sucesso.
					</p>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="flex h-[44px] w-[296px] items-center justify-center rounded-[50px] border-x border-[#25D366] bg-[radial-gradient(83.8%_393.52%_at_45.2%_7.95%,_#25D366_0%,_rgba(37,211,102,0)_100%),linear-gradient(0deg,_#015E53,_#015E53)] font-raleway text-[12px] font-extrabold uppercase text-white shadow-[0px_-0.14px_1.92px_0px_#25D36626,0px_-0.35px_4.86px_0px_#25D36636,0px_-0.71px_9.92px_0px_#25D36644,0px_-1.46px_20.44px_0px_#25D36654,0px_-4px_56px_0px_#25D3667A] md:w-[250px]"
					>
						Liberar acesso
					</Link>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 z-0 w-full">
				<Image
					src="/images/v2/img_terceira_dobra_mobile.png"
					alt="Experiência imersiva"
					width={360}
					height={548}
					className="block h-auto w-full object-cover object-bottom md:hidden"
				/>

				<Image
					src="/images/v2/img_terceira_dobra_desktop.png"
					alt="Experiência imersiva"
					width={1920}
					height={600}
					className="hidden h-auto w-full object-cover object-bottom md:block"
				/>
			</div>

			<div className="absolute bottom-[350px] left-1/2 z-20 w-[296px] -translate-x-1/2 md:bottom-[60px] md:w-[1060px]">
				<h2 className="w-[296px] text-left font-raleway text-[20px] font-extrabold leading-[28px] text-white md:w-[587px] md:text-[32px] md:leading-[40px]">
					Em 1 dia de <span className="text-[#F0CB6D]">Experiência Imersiva</span>, nós vamos encontrar exatamente o que está te Travando e iremos aumentar a sua Permissão
				</h2>

				<Image
					src="/images/v2/img_desktop_01.png"
					alt="Linha decorativa"
					width={1060}
					height={44}
					className="mt-[64px] hidden h-[44px] w-[1060px] object-contain md:block"
				/>
			</div>
		</section>
	);
}