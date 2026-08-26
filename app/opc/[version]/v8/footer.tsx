"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="relative w-full overflow-hidden bg-black">
			<div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[360px] w-[700px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#F0CB6D_0%,rgba(240,203,109,0)_100%)] opacity-30 md:bottom-[-220px] md:h-[440px] md:w-[1000px]" />

			<div className="relative mx-auto w-full max-w-[1440px] px-[28px] pb-[70px] pt-[52px] md:px-[60px] md:pb-[70px] md:pt-[55px]">
				<div className="flex flex-col items-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-start">
					<div className="order-2 mt-[28px] text-center font-raleway text-[14px] font-normal leading-[22px] text-white md:order-none md:mt-0 md:text-left md:text-[15px] md:leading-[22px]">
						<p>Copyright © O Resgate Dos Otimistas.</p>
						<p>Todos os direitos reservados.</p>
					</div>

					<Image
						src="/super_ponto_cego/logo.svg"
						alt="Super Ponto Cego"
						width={150}
						height={82}
						className="order-1 h-auto w-[120px] object-contain md:order-none md:w-[150px]"
					/>

					<div className="order-3 mt-[34px] text-center font-raleway text-white md:order-none md:mt-0 md:text-right">
						<p className="text-[14px] leading-[22px] md:text-[15px]">
							<a
								href="https://www.oresgatedosotimistas.com.br/politica-de-privacidade"
								className="transition-opacity hover:opacity-70"
							>
								Política de privacidade
							</a>

							<span className="mx-[10px]">|</span>

							<a
								href="https://www.oresgatedosotimistas.com.br/termos-de-uso"
								className="transition-opacity hover:opacity-70"
							>
								Termos de uso
							</a>
						</p>

						<p className="mt-[2px] text-[12px] leading-[20px] md:text-[13px]">
							ALIANCA DIVERGENTE LTDA - CNPJ: 59.301.463.0001-36
						</p>
					</div>
				</div>

				<button
					type="button"
					onClick={handleScrollToTop}
					aria-label="Voltar ao topo da página"
					className="ml-auto mt-[48px] hidden items-center gap-[7px] font-roboto text-[16px] font-normal leading-[22px] text-[#F0CB6D] transition-opacity hover:opacity-80 md:flex"
				>
					<span>Voltar ao topo</span>
					<ArrowUp size={17} strokeWidth={1.8} />
				</button>

				<div className="mx-auto mt-[54px] max-w-[1380px] text-center font-raleway text-white md:mt-[46px]">
					<h2 className="text-[16px] font-bold leading-[24px]">
						AVISO LEGAL:
					</h2>

					<div className="mx-auto mt-[14px] text-[14px] font-normal leading-[22px] md:text-[15px] md:leading-[24px]">
						<p>
							Os resultados podem variar de pessoa para pessoa. Este método tem caráter educacional e de desenvolvimento pessoal, não garantindo ganhos financeiros imediatos ou específicos.
						</p>

						<p>
							O sucesso depende da aplicação prática de cada participante. Este site não é afiliado, endossado ou patrocinado pelo Google ou Meta.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}