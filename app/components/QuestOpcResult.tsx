"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { useRouter, useSearchParams } from "next/navigation";

type QuestOpcResultProps = {
  name: string;
  totalScore: number;
  urgentAreaLabel?: string;
  motivationLabel?: string;
};

type QuestOpcScoreResult = {
  percentRangeLabel: string;
  resultLabel: "MUITO BAIXO" | "BAIXO" | "MÉDIO" | "ALTO" | "MUITO ALTO";
};

const RESULT_COPY_BY_LABEL: Partial<
  Record<QuestOpcScoreResult["resultLabel"], React.ReactNode>
> = {
  "MUITO BAIXO": (
    <div className="text-[#FFFFFF] text-base md:text-xl text-left max-w-2xl flex flex-col items-start justify-center gap-4">
      <p>
        Você ainda não enxerga{" "}
        <span className="font-bold">claramente seus bloqueios</span> ou prefere
        acreditar que não existem.{" "}
      </p>

      <p>Isso te faz repetir os mesmos padrões.</p>

      <p>
        Mas a boa notícia é:{" "}
        <span className="font-bold">tomar consciência é o primeiro passo</span>.
      </p>
    </div>
  ),
  BAIXO: (
    <div className="text-[#FFFFFF] text-base md:text-xl text-left max-w-2xl flex flex-col items-start justify-center gap-4">
      <p>
        Você já <span className="font-bold">percebe algumas travas</span>, mas
        ainda se vê como vítima das circunstâncias.
      </p>
      <p>
        A clareza sobre as causas ainda é pequena. Esse é o momento de abrir os
        olhos para os{" "}
        <span className="font-bold">padrões que mais te prendem</span>.
      </p>
    </div>
  ),
  MÉDIO: (
    <div className="text-[#FFFFFF] text-base md:text-xl text-left max-w-2xl flex flex-col items-start justify-center gap-4">
      <p>
        Você já{" "}
        <span className="font-bold">
          reconhece alguns bloqueios e busca soluções
        </span>
        , mas não consegue sustentar mudanças. Avança, mas volta atrás.
      </p>
      <p>
        O desafio é criar consistência para{" "}
        <span className="font-bold">
          transformar essa consciência em resultado real
        </span>
        .
      </p>
    </div>
  ),
  ALTO: (
    <div className="text-[#FFFFFF] text-base md:text-xl text-left max-w-2xl flex flex-col items-start justify-center gap-4">
      <p>
        Você já <span className="font-bold">quebrou alguns padrões</span>, mas
        ainda carrega dependências emocionais e bloqueios fortes.
      </p>
      <p>
        O próximo passo é{" "}
        <span className="font-bold">
          superar esses pontos que continuam segurando sua evolução
        </span>
        .
      </p>
    </div>
  ),
  "MUITO ALTO": (
    <div className="text-[#FFFFFF] text-base md:text-xl text-left max-w-2xl flex flex-col items-start justify-center gap-4">
      <p>
        Você <span>enxerga coisas que te travam</span>, mas ainda não
        transformou totalmente essa consciência em resultados consistentes.
      </p>
      <p>
        Sempre <span className="font-bold">existe um próximo nível</span> e é
        isso que vai te fazer desbloquear os resultados que você tem{" "}
        <span className="font-bold">Capacidade de gerar</span>.
      </p>
    </div>
  ),
};

const RESULT_IMAGE_BY_LABEL: Record<
  QuestOpcScoreResult["resultLabel"],
  string
> = {
  "MUITO BAIXO": "/images/opc/muito-baixo.png",
  BAIXO: "/images/opc/baixo.png",
  MÉDIO: "/images/opc/medio.png",
  ALTO: "/images/opc/alto.png",
  "MUITO ALTO": "/images/opc/muito-alto.png",
};

function getResultByScore(score: number): QuestOpcScoreResult {
  if (score <= 14) {
    return { percentRangeLabel: "0% a 20%", resultLabel: "MUITO BAIXO" };
  }
  if (score >= 15 && score <= 20) {
    return { percentRangeLabel: "20% a 40%", resultLabel: "BAIXO" };
  }
  if (score >= 21 && score <= 26) {
    return { percentRangeLabel: "40% a 60%", resultLabel: "MÉDIO" };
  }
  if (score >= 27 && score <= 33) {
    return { percentRangeLabel: "60% a 80%", resultLabel: "ALTO" };
  }
  return { percentRangeLabel: "80% a 100%", resultLabel: "MUITO ALTO" };
}

export function QuestOpcResult({
  name,
  totalScore,
  urgentAreaLabel = "",
  motivationLabel = "",
}: QuestOpcResultProps) {
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const searchParams = useSearchParams();
  const safeName = (name || "").trim();
  const score = Math.round(totalScore);
  const { percentRangeLabel, resultLabel } = getResultByScore(score);
  const resultImageSrc = RESULT_IMAGE_BY_LABEL[resultLabel];
  const resultCopy = RESULT_COPY_BY_LABEL[resultLabel];

  const handleGoToLp = () => {
    const qs = searchParams?.toString();
    const href = qs ? `/opc/v1/lp?${qs}` : "/opc/v1/lp";
    router.push(href);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key="result"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }
        }
        className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-4"
      >
        <div className="text-[#F4F0F1] sm:text-4xl text-2xl font-bold text-center">
          Aqui está o resultado do seu teste{safeName ? `, ${safeName}` : ""}
        </div>
        <div className="text-[#FFFFFF] text-base md:text-xl text-center max-w-2xl">
          Esse é o seu nível atual de Permissão
        </div>
        <div className="text-[#ECC46A] text-4xl md:text-5xl font-extrabold text-center">
          {resultLabel}
        </div>
        <div className="text-[#FFFFFFB3] text-sm md:text-base text-center">
          {percentRangeLabel}
        </div>
        <Image
          src={resultImageSrc}
          alt="Barra Ponto Cego"
          width={500}
          height={84}
          className="object-cover"
        />
        {resultCopy}
        <div className="text-[#FFFFFF] text-base md:text-xl w-full text-left max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
          <p
            className="w-full border border-[#C0964B] rounded-xl p-2 flex flex-col items-center justify-center text-center"
            style={{
              background:
                "linear-gradient(0deg, #000C14, #000C14), radial-gradient(73.09% 84.34% at 50% -3.4%, rgba(34, 53, 78, 0.65) 0%, rgba(34, 53, 78, 0) 100%)",
            }}
          >
            <span className="md:text-base text-sm">
              Principal área para mudar:
            </span>
            <span className="text-[#ECC46A] font-bold">
              {urgentAreaLabel || "—"}
            </span>
          </p>
          <p
            className="w-full border border-[#C0964B] rounded-xl p-2 flex flex-col items-center justify-center text-center"
            style={{
              background:
                "linear-gradient(0deg, #000C14, #000C14), radial-gradient(73.09% 84.34% at 50% -3.4%, rgba(34, 53, 78, 0.65) 0%, rgba(34, 53, 78, 0) 100%)",
            }}
          >
            <p className="md:text-base text-sm">O que mais te motiva:</p>
            <span className="text-[#ECC46A] font-bold">
              {motivationLabel || "—"}
            </span>
          </p>
        </div>
        <div className="!text-[#FFFFFFB3] text-sm md:text-base w-full text-left max-w-2xl flex flex-col items-start justify-center gap-4">
          <p className="font-bold text-white text-xl md:text-2xl">
            Você já tem Capacidade e Disposição para ter mais resultados.
          </p>
          <p>
            O que falta para destravar o seu próximo nível é AUMENTAR SUA
            PERMISSÃO.
          </p>
          <p>
            Chegou a sua vez de ter acesso a essa descoberta que está mudando a
            vida de milhares de pessoas no Brasil e no mundo.
          </p>

          <p>
            Mais de 156 mil pessoas já participaram da única imersão que revela
            o Ponto Cego das pessoas esforçadas que não atingiram o sucesso,
            riqueza e poder pessoal.
          </p>

          <p className="font-bold text-white text-xl md:text-2xl">
            E agora essa oportunidade está disponível para você também.
          </p>

          <p>
            👇 Toque no botão abaixo para liberar seu acesso com uma condição
            especial:
          </p>
        </div>

        <button
          type="button"
          onClick={handleGoToLp}
          className="btn-secondary mt-6 bg-[#C0964B] text-black font-bold rounded-md text-xl w-full max-w-2xl capitalize"
        >
          Quero saber mais
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
