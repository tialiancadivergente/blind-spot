
"use client";

import React from "react";
import { CalendarDays } from "lucide-react";
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
			className="relative h-[1180px] w-full overflow-hidden bg-black bg-[url('/v11/bg_primeira_dobra_mobile.png')] bg-cover bg-top bg-no-repeat md:h-[833px] md:bg-[url('/v11/bg_primeira_dobra_desktop.png')]"
		>
			<div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col items-center md:block">
				<div className="relative mt-[64px] flex w-full flex-col items-start px-[24px] md:absolute md:left-0 md:top-[72px] md:mt-0 md:w-auto md:px-0">
					<div className="w-max whitespace-nowrap [font-family:'Spectral',serif] text-[23.59px] font-bold leading-[1.1] text-white md:text-[28px]">
						Me Empresta sua <span className="text-[#C0964B]">Vida</span>
					</div>

					<div className="mt-[16px] flex items-center gap-[8px] md:mt-[18px]">
						<CalendarDays
							className="h-[14.11px] w-[14.11px] shrink-0 text-[#C0964B]"
							strokeWidth={1.8}
							aria-hidden="true"
						/>
						<span className="whitespace-nowrap [font-family:'Raleway',sans-serif] text-[13.76px] font-medium leading-[1.35] text-white md:hidden">
							Toda Quarta, 12h – ZOOM – GRATUITO
						</span>
						<span className="hidden whitespace-nowrap [font-family:'Raleway',sans-serif] text-[16.46px] font-medium leading-[1.35] text-white md:block">
							TODA QUARTA 12h – ZOOM – GRATUITO
						</span>
					</div>
				</div>

				<div className="relative mt-[24px] w-[calc(100%-32px)] max-w-[345px] text-left md:absolute md:left-0 md:top-[185px] md:mt-0 md:w-[413px] md:max-w-none">
					{titleRedLine}
				</div>

				<div className="relative mt-[18px] w-[343.47px] max-w-[calc(100%-32px)] [&_form]:!gap-2 [&_form]:!space-y-2 md:absolute md:left-0 md:top-[513px] md:mt-0 md:w-[410.93px] md:max-w-none md:[&_form]:!gap-3 md:[&_form]:!space-y-3">
					<LeadCaptureForm
						formName={formName}
						onSubmit={onSubmit}
						submitError={submitError}
						emailInputClassName="h-[33.88px] w-full !rounded-[2.05px] border border-white bg-white px-4 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] font-light text-[#07242C] placeholder:text-[#07242C] focus:outline-none md:h-[40.54px] md:!rounded-[2.46px] md:px-5 md:text-[14px]"
						ddiSelectClassName="h-[33.88px] !rounded-l-[2.05px] !rounded-r-none border border-r-0 border-white bg-white py-0 pl-9 pr-2 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] text-[#07242C] focus:outline-none md:h-[40.54px] md:!rounded-l-[2.46px] md:pl-11 md:text-[14px]"
						phoneInputClassName="!h-[33.88px] w-full !rounded-l-none !rounded-r-[2.05px] border border-l-0 border-white bg-white px-3 py-0 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] text-[#07242C] placeholder:text-[#07242C] focus:outline-none md:!h-[40.54px] md:!rounded-r-[2.46px] md:px-4 md:text-[14px]"
						buttonClassName="h-[40px] w-full rounded-full border border-[#00B46C] bg-gradient-to-r from-[#008C57] to-[#00A96B] px-4 [font-family:'Bricolage_Grotesque',sans-serif] text-[11px] font-bold uppercase text-white shadow-[0_0_18px_rgba(0,174,105,0.28)] transition-all hover:brightness-110 md:h-[52px] md:text-[12px]"
					/>
				</div>

				<div className="relative mt-[30px] w-[calc(100%-40px)] max-w-[350px] -translate-y-[20px] text-left md:hidden">
					<h2 className="m-0 [font-family:'Spectral',serif] text-[30px] leading-[1.15] tracking-normal text-white">
						<strong className="font-bold">
							Você já está há algum tempo tentando ir mais longe.
						</strong>{" "}
						<span className="font-normal">
							Mas falta algo que você ainda não tem!
						</span>
					</h2>

					<p className="mt-[24px] [font-family:'Raleway',sans-serif] text-[19.79px] font-bold leading-[1.35] tracking-normal text-white [font-variant-numeric:lining-nums_proportional-nums]">
						Você se esforça mais que a maioria...
					</p>

					<p className="mt-[18px] [font-family:'Raleway',sans-serif] text-[19.37px] font-bold leading-[1.35] tracking-normal text-[#C0964B] [font-variant-numeric:lining-nums_proportional-nums]">
						E mesmo assim vê pessoas que não se dedicam igual,
						conquistando uma vida melhor e mais leve que a sua.
					</p>

					<p className="mt-[26px] [font-family:'Spectral',serif] text-[23.77px] font-bold italic leading-[1.15] tracking-normal text-white">
						Você sabe e estuda mais que eles...
					</p>

					<p className="mt-[18px] [font-family:'Raleway',sans-serif] text-[16.59px] font-normal leading-[1.35] tracking-normal text-white [font-variant-numeric:lining-nums_proportional-nums]">
						E mesmo assim se pergunta por que pessoas menos
						inteligentes que você conseguem ter a vida que você
						quer, e você não...
					</p>
				</div>
			</div>
		</section>
	);
}
