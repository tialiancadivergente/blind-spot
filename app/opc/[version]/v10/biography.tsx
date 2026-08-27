"use client";

import { ArrowUp } from "lucide-react";

export default function Biography() {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const ButtonParticipate = () => (
		<button
			type="button"
			onClick={handleScrollToTop}
			className="h-[40px] w-full max-w-[332px] whitespace-nowrap rounded-[49.24px] border border-transparent px-[12px] text-[14px] font-bold uppercase leading-[125%] text-white shadow-[0_4px_14px_rgba(0,117,70,0.28)] transition-all hover:brightness-110 [background:radial-gradient(42.75%_101.03%_at_50%_50%,#00BC71_0%,rgba(12,112,72,0)_100%)_padding-box,linear-gradient(#007546,#007546)_padding-box,linear-gradient(90deg,#00D47F_0%,rgba(0,212,127,0)_50%,#00D47F_100%)_border-box] md:h-[52px] md:max-w-[470px] md:rounded-[67.3px] md:px-[16px] md:text-[19px]"
		>
			Quero participar gratuitamente
		</button>
	);

	return (
		<section
			id="super-ponto-cego"
			aria-labelledby="super-ponto-cego-titulo"
			className="relative h-[2136px] w-full overflow-hidden bg-black bg-[url('/super_ponto_cego/bg_segunda_dobra_mobile.png')] bg-cover bg-top bg-no-repeat md:h-[2024px] md:bg-[url('/super_ponto_cego/bg_segunda_dobra_desktop.png')]"
			style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
		>
			<div className="relative mx-auto h-full w-full max-w-[1280px]">
				<div className="absolute left-[30px] top-[29px] w-[315px] md:left-[32px] md:top-[213px] md:w-[650px]">
					<h2
						id="super-ponto-cego-titulo"
						className="m-0 text-[24px] font-bold uppercase leading-[125%] tracking-normal text-white md:text-[30px]"
					>
						Como vai funcionar
					</h2>

					<div className="mt-[30px] flex w-full flex-col gap-[20px] text-[17px] font-light leading-[140%] text-white md:mt-[34px] md:gap-[19px] md:text-[22px] md:leading-[145%]">
						<p className="m-0">
							<span className="mr-[5px]">→</span>
							Você convida pessoas que não conhecem a Aliança Divergente para
							o evento <span className="font-medium">GRATUITO</span> Super Ponto
							Cego
						</p>

						<p className="m-0">
							<span className="mr-[5px]">→</span>
							Eles se cadastram com{" "}
							<span className="font-medium">SEU LINK</span>
						</p>

						<p className="m-0">
							<span className="mr-[5px]">→</span>
							Quanto mais gente você trouxer, mais prêmios você ganha!
						</p>
					</div>
				</div>

				<div className="absolute left-1/2 top-[1130px] flex w-[360px] -translate-x-1/2 flex-col items-center rounded-[19.84px] bg-white px-[26px] pb-[48px] pt-[48px] text-[#07242C] shadow-[0_10px_30px_rgba(0,0,0,0.28)] md:left-[220px] md:top-[962px] md:min-h-[630px] md:w-[840px] md:translate-x-0 md:rounded-[14px] md:px-[72px] md:py-[58px]">
					<h3 className="m-0 w-full text-center text-[34px] font-bold uppercase leading-[115%] text-[#C0964B] md:text-[50px] md:leading-[118%]">
						<span className="block">Prêmios</span>
						<span className="block">por indicações</span>
					</h3>

					<ul className="mt-[38px] w-full max-w-[290px] list-disc space-y-[18px] pl-[20px] text-left text-[16px] font-medium leading-[125%] text-[#07242C] md:mt-[44px] md:max-w-[590px] md:space-y-[20px] md:pl-[26px] md:text-[22px] md:leading-[125%]">
						<li>
							<span className="font-bold">10 indicações:</span> Gravação do
							Encontro: Destrave a Vida dos Sonhos
						</li>

						<li>
							<span className="font-bold">30 indicações:</span> Treinamento
							como vender usando redes sociais
						</li>

						<li>
							<span className="font-bold">60 indicações:</span> Live com o
							Jordão
						</li>

						<li>
							<span className="font-bold">
								Top 1 (Acima de 60 indicações):
							</span>{" "}
							Pense Comigo com Jordão
						</li>
					</ul>

					<div className="mt-[38px] flex w-full justify-center md:mt-[46px]">
						<ButtonParticipate />
					</div>
				</div>
			</div>
		</section>
	);
}