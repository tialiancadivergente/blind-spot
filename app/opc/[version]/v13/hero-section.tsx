
"use client";

import React from "react";
import type { LeadCaptureSubmitData } from "./config/lead-capture-form";

interface ContainerProps {
  titleRedLine: React.ReactNode | null;
  redLine: React.ReactNode | null;
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function HeroSection(_props: ContainerProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="min-h-screen w-full bg-[#10352C] px-4 py-14 text-white sm:px-6 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1160px]">
        <header className="mb-12 text-center md:mb-16">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C0964B] md:text-[13px]">
            DUAS IMERSÕES · DOIS SÁBADOS
          </p>

          <h1
            id="hero-title"
            className="mx-auto max-w-[850px] font-serif text-[38px] font-normal leading-[1.1] tracking-[-0.04em] sm:text-[48px] md:text-[70px]"
          >
            Escolha a Imersão que deseja{" "}
            <span className="italic text-[#C0964B]">
              participar:
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[600px] text-[14px] leading-[1.7] text-[#D0DCD6] md:text-[17px]">
            Duas imersões, dois objetivos. Escolha a sua ou
            garanta as duas com uma condição especial no combo.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="flex min-h-[280px] overflow-hidden rounded-[22px] border border-[#E3DFD4] bg-[#F8F7F2] text-[#172820] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex w-[88px] shrink-0 flex-col items-center justify-center bg-[#C0964B] px-2 text-white sm:w-[115px] md:w-[125px]">
              <span className="font-serif text-[55px] leading-none tracking-[-0.08em] md:text-[75px]">
                21
              </span>
              <span className="mt-3 text-[12px] font-bold tracking-[0.2em]">
                NOV
              </span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.13em]">
                SÁBADO
              </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-7 md:p-8">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C0964B] md:text-[12px]">
                  IMERSÃO 01
                </p>

                <h2 className="font-serif text-[30px] leading-[1.05] tracking-[-0.05em] sm:text-[36px] lg:text-[43px]">
                  Permissão para
                  <span className="block italic text-[#C0964B]">
                    Enriquecer
                  </span>
                </h2>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-1 text-[12px] text-[#758078]">
                    Ingresso individual
                  </p>
                  <p className="text-[26px] font-bold leading-none">
                    R$ 99
                  </p>
                </div>

                <a
                  href="https://pay.aliancadivergente.com.br/D9ORB2KN"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#C0964B] px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-all hover:brightness-110"
                >
                  QUERO ESSA
                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>

          <article className="flex min-h-[280px] overflow-hidden rounded-[22px] border border-[#E3DFD4] bg-[#F8F7F2] text-[#172820] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex w-[88px] shrink-0 flex-col items-center justify-center bg-[#AC482E] px-2 text-white sm:w-[115px] md:w-[125px]">
              <span className="font-serif text-[55px] leading-none tracking-[-0.08em] md:text-[75px]">
                28
              </span>
              <span className="mt-3 text-[12px] font-bold tracking-[0.2em]">
                NOV
              </span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.13em]">
                SÁBADO
              </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-7 md:p-8">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#AC482E] md:text-[12px]">
                  IMERSÃO 02
                </p>

                <h2 className="font-serif text-[30px] leading-[1.05] tracking-[-0.05em] sm:text-[36px] lg:text-[43px]">
                  Permissão para
                  <span className="block italic text-[#AC482E]">
                    Emagrecer
                  </span>
                </h2>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-1 text-[12px] text-[#758078]">
                    Ingresso individual
                  </p>
                  <p className="text-[26px] font-bold leading-none">
                    R$ 99
                  </p>
                </div>

                <a
                  href="https://pay.aliancadivergente.com.br/6SQ4I0NP"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#AC482E] px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#8E3925]"
                >
                  QUERO ESSA
                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>

        <article className="relative mt-8 overflow-hidden rounded-[26px] border-2 border-[#C0964B] bg-[#09251E] p-6 shadow-[0_0_45px_rgba(192,150,75,0.16)] sm:p-9 md:p-12">
          <div className="absolute right-0 top-0 rounded-bl-[18px] bg-[#C0964B] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#102A21] sm:text-[12px]">
            MELHOR OFERTA
          </div>

          <div className="flex flex-col gap-8 pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pt-0">
            <div className="min-w-0 flex-1">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full bg-[#C0964B] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#12291F]">
                  COMBO ESPECIAL
                </span>
              </div>

              <h2 className="max-w-[760px] font-serif text-[44px] leading-[1.02] tracking-[-0.06em] text-white sm:text-[58px] md:text-[72px] lg:text-[82px]">
                Compre as duas com{" "}
                <span className="italic text-[#C0964B]">
                  24% de desconto
                </span>
              </h2>

              <p className="mt-6 max-w-[460px] text-[14px] leading-[1.7] text-[#C8D7CE] md:text-[16px]">
                Aproveite uma condição exclusiva para participar
                das duas imersões por um valor especial.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#547164] px-4 py-2 text-[12px] text-[#E1E9E3]">
                  Enriquecer · 21/11
                </span>
                <span className="rounded-full border border-[#547164] px-4 py-2 text-[12px] text-[#E1E9E3]">
                  Emagrecer · 28/11
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-5 rounded-[20px] border border-[#C0964B]/40 bg-[#15392E] p-5 sm:p-6 lg:w-[280px] lg:shrink-0">
              <div>
                <p className="text-[13px] font-medium text-[#C4D2C8]">
                  Valor das duas imersões
                </p>

                <p className="mt-2 text-[20px] font-medium text-[#A9B9AF] line-through">
                  R$ 198,00
                </p>

                <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#C0964B]">
                  NO COMBO, VOCÊ PAGA
                </p>

                <p
                  aria-label="R$ 150,00"
                  className="mt-3 flex items-baseline gap-1 whitespace-nowrap font-serif leading-none tracking-[-0.06em] text-white"
                >
                  <span className="text-[26px] text-[#C0964B]">
                    R$
                  </span>
                  <span className="text-[64px] sm:text-[72px]">
                    150
                  </span>
                  <span className="text-[30px] sm:text-[34px]">
                    ,00
                  </span>
                </p>
              </div>

              <div className="rounded-[12px] border border-[#C0964B]/30 bg-[#C0964B]/15 px-4 py-3 text-center">
                <p className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-[#C0964B]">
                  24% DE DESCONTO
                </p>
              </div>

              <a
                href="https://pay.aliancadivergente.com.br/Z0ILQXKG"
                className="flex min-h-[54px] w-full items-center justify-center rounded-full border border-[#D8B36D] bg-gradient-to-r from-[#D8B36D] to-[#C0964B] px-3 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.02em] text-[#102A21] shadow-[0_6px_18px_rgba(192,150,75,0.18)] transition-all duration-300 hover:-translate-y-[2px] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(192,150,75,0.3)] sm:text-[12px]"
              >
                QUERO APROVEITAR O COMBO
              </a>
            </div>
          </div>
        </article>

        <footer className="mt-10 border-t border-white/15 pt-6 text-center">
          <p className="text-[12px] tracking-[0.05em] text-[#A8B9AE]">
            Imersões Aliança Divergente · Novembro de 2026
          </p>
        </footer>
      </div>
    </section>
  );
}
