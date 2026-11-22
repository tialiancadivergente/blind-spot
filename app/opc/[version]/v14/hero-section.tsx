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
      className="relative min-h-screen w-full overflow-hidden bg-[#10352C] px-4 py-12 text-white sm:px-6 md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,109,113,0.25),transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-[960px]">
        <header className="text-center">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C0964B] md:text-[13px]">
            ALIANÇA DIVERGENTE APRESENTA
          </p>

          <div className="mb-8 inline-flex items-center overflow-hidden rounded-full border border-[#C0964B]/50 bg-[#09251E]/60">
            <span className="bg-[#C0964B] px-5 py-3 text-[13px] font-extrabold tracking-[0.08em] text-[#10352C]">
              28 NOV
            </span>

            <span className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white md:text-[12px]">
              SÁBADO
            </span>
          </div>

          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.35em] text-[#D0DCD6] md:text-[17px]">
            IMERSÃO
          </p>

          <h1
            id="hero-title"
            className="mx-auto font-serif text-[48px] font-normal leading-[1.02] tracking-[-0.05em] sm:text-[68px] md:text-[88px]"
          >
            Permissão para
            <span className="block italic text-[#C0964B]">
              Emagrecer
            </span>
          </h1>

          <div className="mx-auto mt-8 h-px w-[80px] bg-[#C0964B]/60" />

          <p className="mx-auto mt-6 max-w-[540px] text-[15px] leading-[1.7] text-[#D0DCD6] md:text-[18px]">
            Garanta sua participação na Imersão Permissão para Emagrecer.
            Escolha abaixo a condição de ingresso correspondente ao seu perfil.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-[840px] md:mt-16">
          <div className="mb-7 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C0964B]">
              GARANTA SEU INGRESSO
            </p>

            <h2 className="mt-3 font-serif text-[30px] leading-tight tracking-[-0.04em] text-white md:text-[40px]">
              Escolha sua condição
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <article className="relative flex flex-col overflow-hidden rounded-[22px] border-2 border-[#C0964B] bg-[#F8F7F2] text-[#172820] shadow-[0_8px_40px_rgba(192,150,75,0.15)] transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#C0964B] px-5 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#10352C] md:text-[12px]">
                CONDIÇÃO EXCLUSIVA PARA ALIADOS
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8 md:p-9">
                <div className="mb-5">
                  <span className="inline-flex rounded-full border border-[#006D71]/25 bg-[#006D71]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#006D71]">
                    ALIADO
                  </span>
                </div>

                <h3 className="font-serif text-[34px] leading-[1.05] tracking-[-0.05em] md:text-[40px]">
                  Ingresso
                  <span className="block italic text-[#006D71]">
                    exclusivo
                  </span>
                </h3>

                <p className="mt-4 text-[13px] leading-relaxed text-[#758078] md:text-[14px]">
                  Valor especial para membros da Aliança Divergente.
                </p>

                <div className="mt-7 border-t border-[#DDDED5] pt-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#006D71]">
                    VALOR PARA ALIADOS
                  </p>

                  <p
                    aria-label="99 reais"
                    className="flex items-baseline gap-1 whitespace-nowrap font-serif leading-none tracking-[-0.06em] text-[#10352C]"
                  >
                    <span className="text-[26px]">R$</span>

                    <span className="text-[76px] md:text-[84px]">
                      99
                    </span>

                    <span className="text-[32px]">,00</span>
                  </p>
                </div>

                <a
                  href="https://pay.aliancadivergente.com.br/6SQ4I0NP"
                  className="mt-8 flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#006D71] px-5 py-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_6px_18px_rgba(0,109,113,0.2)] transition-all duration-300 hover:brightness-110"
                >
                  QUERO PARTICIPAR
                </a>

                <p className="mt-4 text-center text-[11px] text-[#758078]">
                  Ingresso individual · 28 de novembro
                </p>
              </div>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-[22px] border-2 border-[#E3DFD4] bg-[#F8F7F2] text-[#172820] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-[#E7EAE3] px-5 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#10352C] md:text-[12px]">
                INGRESSO PARA NÃO ALIADOS
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8 md:p-9">
                <div className="mb-5">
                  <span className="inline-flex rounded-full border border-[#758078]/30 bg-[#758078]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#52645A]">
                    NÃO ALIADO
                  </span>
                </div>

                <h3 className="font-serif text-[34px] leading-[1.05] tracking-[-0.05em] md:text-[40px]">
                  Ingresso
                  <span className="block italic text-[#006D71]">
                    individual
                  </span>
                </h3>

                <p className="mt-4 text-[13px] leading-relaxed text-[#758078] md:text-[14px]">
                  Para quem ainda não faz parte da Aliança Divergente.
                </p>

                <div className="mt-7 border-t border-[#DDDED5] pt-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#52645A]">
                    VALOR PARA NÃO ALIADOS
                  </p>

                  <p
                    aria-label="399 reais"
                    className="flex items-baseline gap-1 whitespace-nowrap font-serif leading-none tracking-[-0.06em] text-[#10352C]"
                  >
                    <span className="text-[26px]">R$</span>

                    <span className="text-[76px] md:text-[84px]">
                      399
                    </span>

                    <span className="text-[32px]">,00</span>
                  </p>
                </div>

                <a
                  href="https://pay.aliancadivergente.com.br/F329WNOC"
                  className="mt-8 flex min-h-[56px] w-full items-center justify-center rounded-full border-2 border-[#006D71] px-5 py-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-[#006D71] transition-all duration-300 hover:bg-[#006D71] hover:text-white"
                >
                  QUERO PARTICIPAR
                </a>

                <p className="mt-4 text-center text-[11px] text-[#758078]">
                  Ingresso individual · 28 de novembro
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[840px] items-center justify-center gap-2 text-[#B8C9BD]">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          <span className="text-[12px]">
            Compra realizada em ambiente seguro
          </span>
        </div>

        <footer className="mt-12 border-t border-white/15 pt-6 text-center md:mt-16">
          <p className="text-[12px] tracking-[0.05em] text-[#A8B9AE]">
            Imersão Permissão para Emagrecer · Novembro de 2026
          </p>

          <p className="mt-2 text-[11px] text-[#A8B9AE]/70">
            Aliança Divergente
          </p>
        </footer>
      </div>
    </section>
  );
}