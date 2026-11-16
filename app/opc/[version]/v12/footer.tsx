
"use client";

import Image from "next/image";

export default function Footer() {
	return (
		<footer className="relative w-full overflow-hidden bg-[#062027]">
			<div className="relative mx-auto w-full max-w-[1440px] px-[24px] py-[24px] md:px-[60px] md:py-[28px]">
				<div className="flex flex-col items-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
					<div className="order-2 mt-[16px] text-center font-raleway text-[14px] font-normal leading-[22px] text-white md:order-none md:mt-0 md:text-left md:text-[15px]">
						<p>Copyright © O Ponto Cego.</p>
						<p>Todos os direitos reservados.</p>
					</div>

					<Image
						src="/v11/logo.svg"
						alt="O Fim do Acaso"
						width={243}
						height={30}
						className="order-1 h-auto w-[203px] object-contain md:order-none md:w-[243px]"
					/>

					<div className="order-3 mt-[16px] text-center font-raleway text-white md:order-none md:mt-0 md:text-right">
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
			</div>
		</footer>
	);
}
