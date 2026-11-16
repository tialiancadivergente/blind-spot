
"use client";

import React from "react";
import Image from "next/image";
import {
	LeadCaptureForm,
	LeadCaptureSubmitData,
} from "./config/lead-capture-form";

interface ContainerProps {
	titleRedLine: React.ReactNode | null;
	redLine: React.ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({
	titleRedLine,
	formName,
	onSubmit,
	submitError,
}: ContainerProps) {
	return (
		<section
			id="hero"
			aria-labelledby="hero-title"
			className="relative h-[586px] w-full overflow-hidden bg-black bg-[url('/v12/bg_primeira_dobra_mobile.png')] bg-cover bg-top bg-no-repeat md:h-[810px] md:bg-[url('/v12/bg_primeira_dobra_desktop.png')]"
		>
			<div className="relative mx-auto h-full w-full max-w-[1280px]">
				<div className="absolute left-[53.2px] top-[142.68px] z-20 md:left-[84px] md:top-[65.09px]">
					<img
						src="/v12/logo_mobile.png"
						alt="Ponto Cego"
						width={202}
						height={19}
						className="block h-[19.48px] w-[202.28px] max-w-none object-contain md:hidden"
					/>

					<Image
						src="/v12/logo_desktop.png"
						alt="Ponto Cego"
						width={200}
						height={83}
						priority
						className="hidden h-[82.89px] w-[199.52px] object-contain md:block"
					/>
				</div>

				<div className="absolute left-[53.2px] top-[183.37px] w-[261.51px] max-w-[calc(100%-70px)] text-left md:left-[84px] md:top-[193.83px] md:w-[488.58px] md:max-w-none">
					{titleRedLine}
				</div>

				<div className="absolute left-[53.2px] top-[430px] w-[267.28px] max-w-[calc(100%-70px)] [&_form]:!gap-2 [&_form]:!space-y-2 md:left-[84px] md:top-[548px] md:w-[410.93px] md:max-w-none md:[&_form]:!gap-3 md:[&_form]:!space-y-3">
					<LeadCaptureForm
						formName={formName}
						onSubmit={onSubmit}
						submitError={submitError}
						submitLabel="ENTRAR NA LISTA DE ESPERA"
						emailInputClassName="h-[33.88px] w-full !rounded-[2.05px] border border-white bg-white px-4 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] font-light text-[#07242C] placeholder:text-[#07242C] focus:outline-none md:h-[40.54px] md:!rounded-[2.46px] md:px-5 md:text-[14px]"
						ddiSelectClassName="h-[33.88px] !rounded-l-[2.05px] !rounded-r-none border border-r-0 border-white bg-white py-0 pl-9 pr-2 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] text-[#07242C] focus:outline-none md:h-[40.54px] md:!rounded-l-[2.46px] md:pl-11 md:text-[14px]"
						phoneInputClassName="!h-[33.88px] w-full !rounded-l-none !rounded-r-[2.05px] border border-l-0 border-white bg-white px-3 py-0 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] text-[#07242C] placeholder:text-[#07242C] focus:outline-none md:!h-[40.54px] md:!rounded-r-[2.46px] md:px-4 md:text-[14px]"
						buttonClassName="h-[40px] w-full rounded-full border border-[#00B46C] bg-gradient-to-r from-[#008C57] to-[#00A96B] px-4 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] font-bold uppercase text-white shadow-[0_0_18px_rgba(0,174,105,0.28)] transition-all hover:brightness-110 md:h-[52px] md:text-[12px]"
					/>
				</div>
			</div>
		</section>
	);
}
