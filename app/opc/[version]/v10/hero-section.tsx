"use client";

import React from "react";
import Image from "next/image";
import {
	LeadCaptureForm,
	LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";

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
			className="relative h-[816px] w-full overflow-hidden bg-black bg-[url('/super_ponto_cego/bg_primeira_dobra_mobile.png.png')] bg-cover bg-top bg-no-repeat md:h-[975px] md:bg-[url('/super_ponto_cego/bg_primeira_dobra_desktop.png')]"
		>
			<div className="relative mx-auto h-full w-full">
				<div className="relative h-full w-full translate-y-[52px] md:translate-y-0">
					<Image
						src="/super_ponto_cego/logo_super_ponto_cego.svg"
						alt="Super Ponto Cego"
						width={511}
						height={84}
						priority
						className="absolute left-1/2 top-[190px] h-auto w-[176px] -translate-x-1/2 select-none md:top-[314px] md:w-[200px]"
					/>

					<div className="absolute left-1/2 top-[244px] w-[326px] -translate-x-1/2 text-center md:top-[399px] md:w-[1222px]">
						{titleRedLine}
					</div>

					<div className="absolute left-1/2 top-[406px] w-[128px] -translate-x-1/2 text-center font-poppins text-[16px] font-bold leading-[110%] md:top-[627px] md:w-[390px] md:text-[24.38px] md:leading-[32.5px]">
						<p className="text-[#F0CB6D] md:inline">Evento Gratuito</p>
						<span className="hidden text-white md:inline"> | </span>
						<p className="text-white md:inline">29 de outubro</p>
					</div>

					<div className="absolute left-1/2 top-[460px] w-[151px] -translate-x-1/2 text-center font-poppins text-[12px] font-normal leading-[150%] text-white md:top-[680px] md:w-[417px] md:text-[18px] md:leading-[24px]">
						Preencha abaixo e gere seu link de indicação:
					</div>

					<div className="absolute left-1/2 top-[514px] w-[calc(100%-32px)] max-w-[328px] -translate-x-1/2 [&_form]:!gap-2 [&_form]:!space-y-2 md:top-[730px] md:w-[420px] md:max-w-none md:[&_form]:!gap-3 md:[&_form]:!space-y-3">
						<LeadCaptureForm
							formName={formName}
							onSubmit={onSubmit}
							submitError={submitError}
							emailInputClassName="h-[40px] w-full rounded-full border border-[#676767] bg-[#171717]/80 px-4 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] font-light text-white placeholder:text-[#B8B8B8] focus:outline-none md:h-[46px] md:px-5 md:text-[13px]"
							ddiSelectClassName="h-[40px] rounded-l-full border border-r-0 border-[#676767] bg-[#171717]/80 py-0 pl-9 pr-2 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] text-white focus:outline-none md:h-[46px] md:pl-11 md:text-[13px]"
							phoneInputClassName="!h-[40px] w-full rounded-r-full border border-l-0 border-[#676767] bg-[#171717]/80 px-3 py-0 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] text-white placeholder:text-[#B8B8B8] focus:outline-none md:!h-[46px] md:px-4 md:text-[13px]"
							buttonClassName="h-[40px] w-full rounded-full border border-[#00B46C] bg-gradient-to-r from-[#008C57] to-[#00A96B] px-4 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] font-bold uppercase text-white shadow-[0_0_18px_rgba(0,174,105,0.28)] transition-all hover:brightness-110 md:h-[46px] md:text-[11px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}