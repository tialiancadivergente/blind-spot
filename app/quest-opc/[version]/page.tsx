"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import TagManager from "react-gtm-module";
import { questionsOpc } from "@/lib/questions-opc";
import { CustomInputRadio } from "@/app/components/custom-input-radio";
import { QuestOpcResult } from "@/app/components/QuestOpcResult";
import { Progress } from "@/components/ui/progress";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { phoneFormatter } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Formv1Props } from "@/app/opc/[version]/v1";

// Schema de validação para o formulário
const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
});

type FormData = z.infer<typeof formSchema>;

export default function QuestODP({
  versaoUrl = null,
  precoUrl: precoUrlProp = null,
  versionParamRaw = null,
}: Formv1Props) {
  const precoUrl = precoUrlProp === 19 || precoUrlProp === 47 ? precoUrlProp : 47;
  const params = useParams();
  const searchParams = useSearchParams();
  const INTERSTITIAL_AFTER_QUESTION_INDEX = 1; // após a 2ª pergunta (index 1), antes de ir para a 3ª
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [weights, setWeights] = useState<Record<number, number>>({});
  const [completed, setCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [interstitialNextIndex, setInterstitialNextIndex] = useState<
    number | null
  >(null);
  const [progressValue, setProgressValue] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [versao, setVersao] = useState<string | null>(null);
  const [domain, setDomain] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [leadFirstName, setLeadFirstName] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();
  const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [animatedCompletionPercent, setAnimatedCompletionPercent] = useState(0);
  const [showCalculatedResult, setShowCalculatedResult] = useState(false);

  const versionParamEffective =
    versionParamRaw ??
    (Array.isArray((params as any)?.version)
      ? (params as any).version[0]
      : ((params as any)?.version as string | undefined)) ??
    null;

  const versionSlug = (() => {
    // Se já vier no formato "vX-YY", preserva
    if (typeof versionParamEffective === "string" && versionParamEffective.includes("-")) {
      return versionParamEffective;
    }

    // Caso venha só "vX", completa com o preço (whitelist em `precoUrl`)
    const versionOnly =
      versaoUrl ??
      (typeof versionParamEffective === "string" ? versionParamEffective : null) ??
      "v1";

    return `${versionOnly}-${precoUrl}`;
  })();

  const questionVariants = {
    enter: (dir: 1 | -1) => ({
      opacity: 0,
      y: dir === 1 ? 14 : -14,
      filter: "blur(2px)",
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: (dir: 1 | -1) => ({
      opacity: 0,
      y: dir === 1 ? -14 : 14,
      filter: "blur(2px)",
    }),
  };

  const questionTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      };

  useEffect(() => {
    return () => {
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
        advanceTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Anima a barra/contador do bloco "Quase tudo pronto!"
    if (!completed || showForm) return;
    if (shouldReduceMotion) {
      setAnimatedCompletionPercent(100);
      setShowCalculatedResult(true);
      return;
    }

    setAnimatedCompletionPercent(0);
    setShowCalculatedResult(false);
    const durationMs = 7000;
    const start = performance.now();

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimatedCompletionPercent(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      setAnimatedCompletionPercent(100);
      setShowCalculatedResult(true);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [completed, showForm, shouldReduceMotion]);

  // Configuração do React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isFormSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const getLabelFromAnswer = (number: number) => {
    const answerValue = answers[number];
    if (!answerValue) return "";
    const question1 = questionsOpc.find((q) => q.id === number);
    if (!question1) return "";
    const option = question1.options.find((opt) => opt.value === answerValue);
    return option ? option.label : "";
  };

  const launch =
    totalScore <= 21
      ? "[ODP] [NOV25] BAIXA PERMISSAO"
      : "[ODP] [NOV25] MEDIA PERMISSAO";
  const tagId: number = totalScore <= 21 ? 120304 : 120305;

  // Capturar o domínio da página
  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname;
      console.log("Current domain:", currentDomain);
      setDomain(currentDomain);
    }
  }, []);

  // Verificar se estamos no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Atualiza o valor do progresso quando a pergunta atual muda
    const newProgress = ((currentQuestion + 1) / questionsOpc.length) * 100;
    setProgressValue(newProgress);
  }, [currentQuestion]);

  const handleAnswer = (value: string) => {
    if (completed || isLoading || isAdvancing || showInterstitial) return;
    const question = questionsOpc[currentQuestion];
    const selectedOption = question.options.find(
      (option) => option.value === value
    );

    if (selectedOption) {
      const newAnswers = { ...answers, [question.id]: value };
      const newWeights = { ...weights, [question.id]: selectedOption.weight };

      setAnswers(newAnswers);
      setWeights(newWeights);

      // Avança automaticamente para a próxima questão ao selecionar uma opção
      const novoScore = Object.values(newWeights).reduce(
        (sum, weight) => sum + weight,
        0
      );
      setTotalScore(novoScore);

      const isLast = currentQuestion >= questionsOpc.length - 1;
      const shouldShowInterstitial =
        currentQuestion === INTERSTITIAL_AFTER_QUESTION_INDEX && !isLast;
      const nextIndex = currentQuestion + 1;
      const delayMs = shouldReduceMotion ? 0 : 500;

      setIsAdvancing(true);
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
      }
      advanceTimeoutRef.current = setTimeout(() => {
        setIsAdvancing(false);
        advanceTimeoutRef.current = null;

        if (shouldShowInterstitial) {
          setDirection(1);
          setInterstitialNextIndex(nextIndex);
          setShowInterstitial(true);
          return;
        }

        if (!isLast) {
          setDirection(1);
          setCurrentQuestion((q) => q + 1);
        } else {
          setCompleted(true);
        }
      }, delayMs);
    }
  };

  const handleContinueAfterInterstitial = () => {
    if (interstitialNextIndex == null) return;
    setShowInterstitial(false);
    setInterstitialNextIndex(null);
    setDirection(1);
    setCurrentQuestion(interstitialNextIndex);
  };

  const handleNext = () => {
    const novoScore = Object.values(weights).reduce(
      (sum, weight) => sum + weight,
      0
    );
    setTotalScore(novoScore);

    if (currentQuestion < questionsOpc.length - 1) {
      setDirection(1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  // Função auxiliar para capitalizar o primeiro nome
  const capitalizeFirstName = (fullName: string): string => {
    const firstName = fullName.split(" ")[0];
    return firstName
      ? firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
      : "";
  };

  // Função auxiliar para determinar a faixa com base no score
  const getFaixa = (score: number): string => {
    return score > 21 ? "Faixa M" : "Faixa B";
  };

  // Função auxiliar para obter a URL base de redirecionamento
  const getBaseUrl = (score: number): string => {
    return score <= 21
      ? "https://odp.aliancadivergente.com.br/odp-v1-b/"
      : "https://odp.aliancadivergente.com.br/odp-v1-m/";
  };

  // Função auxiliar para construir a URL de redirecionamento
  const buildRedirectUrl = (
    baseUrl: string,
    firstName: string,
    firstAnswer: string
  ): string => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("ndl", firstName);
    params.set("imp", firstAnswer);
    return `${baseUrl}?${params.toString()}`;
  };

  // Função auxiliar para preparar respostas detalhadas
  const prepareDetailedAnswers = (): Record<string, string> => {
    const detailedAnswers: Record<string, string> = {};

    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const questionObj = questionsOpc.find(
        (q) => q.id === parseInt(questionId)
      );
      const selectedOption = questionObj?.options.find(
        (opt) => opt.value === answerValue
      );

      if (questionObj) {
        detailedAnswers[questionObj.question] =
          selectedOption?.label || answerValue;
      }
    });

    return detailedAnswers;
  };

  // Função auxiliar para obter parâmetros UTM
  const getUtmParams = () => ({
    utm_source: searchParams.get("utm_source") || "",
    utm_medium: searchParams.get("utm_medium") || "",
    utm_campaign: searchParams.get("utm_campaign") || "",
    utm_content: searchParams.get("utm_content") || "",
    utm_term: searchParams.get("utm_term") || "",
  });

  // Função auxiliar para enviar dados ao GTM
  const sendToGTM = (gtmData: Record<string, any>) => {
    TagManager.dataLayer?.({
      dataLayer: {
        event: "leadscore",
        ...gtmData,
      },
    });
  };

  // Função auxiliar para registrar o lead
  const registerLead = async (leadPayload: Record<string, any>) => {
    const response = await fetch("/api/register-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadPayload),
    });

    if (!response.ok) {
      throw new Error("Falha ao registrar lead");
    }

    return response;
  };

  // Função auxiliar para enviar dados ao quiz proxy
  const sendToQuizProxy = async (payload: Record<string, any>) => {
    try {
      const response = await fetch("/api/quiz-proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Success:", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const onSubmit = async (data: FormData) => {
    setLeadFirstName(capitalizeFirstName(data.nome));
    setShowForm(false);
  };

  const onSubmitStandby = async (data: FormData) => {
    // Validações iniciais
    if (!completed || hasSent) {
      return;
    }

    try {
      setIsLoading(true);

      // Simulação de delay para melhor UX
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Preparar dados básicos
      const firstNameCapitalized = capitalizeFirstName(data.nome);
      const primeiraResposta = getLabelFromAnswer(1);
      const faixa = getFaixa(totalScore);
      const baseUrl = getBaseUrl(totalScore);
      const redirectUrl = buildRedirectUrl(
        baseUrl,
        firstNameCapitalized,
        primeiraResposta
      );

      // Preparar respostas detalhadas
      const detailedAnswers = prepareDetailedAnswers();

      // Preparar dados para GTM
      const gtmData = {
        email: data.email,
        answers: answers,
        totalScore: Math.round(totalScore),
        faixa: faixa,
        tipo: "",
        version: versao,
        temperature: totalScore <= 21 ? "b" : "m",
      };

      // Preparar payload completo
      const payload = {
        ...gtmData,
        detailedAnswers: detailedAnswers,
        domain: domain,
        launch,
        ...getUtmParams(),
        path: window.location.pathname,
      };

      const leadPayload = {
        ...gtmData,
        parametroCompleto: `${versao}-${faixa}`,
        domain: domain,
        uri: domain,
        launch,
        tagId,
        path: window.location.pathname,
        formFields: getUtmParams(),
      };

      // Enviar para GTM
      sendToGTM(gtmData);

      // Registrar lead
      await registerLead(leadPayload);

      // Enviar para quiz proxy e redirecionar
      // Não aguardamos a resposta para não bloquear o redirecionamento
      sendToQuizProxy(payload).finally(() => {
        setHasSent(true);
        window.location.replace(redirectUrl);
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      // Em caso de erro, ainda tentamos redirecionar o usuário
      const baseUrl = getBaseUrl(totalScore);
      const firstNameCapitalized = capitalizeFirstName(data.nome);
      const primeiraResposta = getLabelFromAnswer(1);
      const redirectUrl = buildRedirectUrl(
        baseUrl,
        firstNameCapitalized,
        primeiraResposta
      );
      setHasSent(true);
      window.location.replace(redirectUrl);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
        advanceTimeoutRef.current = null;
      }
      setIsAdvancing(false);
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questionsOpc.length) * 100;

  const currentQuestionData = questionsOpc[currentQuestion];
  const selectedValue = answers[currentQuestionData.id] || "";
  const isLastQuestion = currentQuestion === questionsOpc.length - 1;

  // Se não estamos no cliente, não renderize nada
  if (!isClient) {
    return null;
  }

  return (
    <div>
      <section
        className={`relative flex items-start justify-center overflow-hidden min-h-[100vh] h-full `}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 sm:bg-[url('/images/opc/bg.webp')] bg-no-repeat bg-right-top overflow-hidden bg-cover bg-[#0E1113]" />
        </div>

        {/* Loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-t-teal-600 border-r-transparent border-b-teal-600 border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg font-medium">
                Processando suas respostas...
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Aguarde um momento, você será redirecionado em breve.
              </p>
            </div>
          </div>
        )}

        {/* Background com overlay */}
        <div className="container mx-auto relative h-full px-4 py-10">
          <div className="mb-6 md:mb-8 flex justify-start">
            <Image
              src="/images/opc/logo-ponto-cego.png"
              alt="Logotipo O Fim das Relações Ruins"
              width={80}
              height={33}
              priority
              className="object-contain select-none pointer-events-none mb-4"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center py-0">
            <div className="w-full max-w-5xl mx-auto">
              {completed && (
                <>
                  {!showForm ? (
                    <>
                      {showCalculatedResult ? (
                        <QuestOpcResult
                          name={leadFirstName}
                          totalScore={totalScore}
                          urgentAreaLabel={getLabelFromAnswer(11)
                            .replace(/^[^A-Za-zÀ-ÖØ-öø-ÿ0-9]+/, "")
                            .trim()}
                          motivationLabel={getLabelFromAnswer(12)
                            .replace(/^[^A-Za-zÀ-ÖØ-öø-ÿ0-9]+/, "")
                            .trim()}
                          versaoUrl={versionSlug}
                        />
                      ) : (
                        <>
                          <Image
                            src="/images/opc/elton-euler-ponto-cego.webp"
                            alt="Elton Euler"
                            width={1920}
                            height={797}
                            className="object-cover min-h-[265px]"
                          />
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                              key="calculating"
                              initial={
                                shouldReduceMotion
                                  ? false
                                  : { opacity: 0, y: 10 }
                              }
                              animate={
                                shouldReduceMotion ? {} : { opacity: 1, y: 0 }
                              }
                              exit={
                                shouldReduceMotion ? {} : { opacity: 0, y: -10 }
                              }
                              transition={
                                shouldReduceMotion
                                  ? { duration: 0 }
                                  : {
                                      duration: 0.25,
                                      ease: [0.16, 1, 0.3, 1] as [
                                        number,
                                        number,
                                        number,
                                        number
                                      ],
                                    }
                              }
                              id="result-odp"
                              className="relative w-full max-w-4xl mx-auto mt-16 flex flex-col items-center justify-center gap-6"
                            >
                              <div className="mb-4 md:mb-5 flex flex-col items-center justify-center w-full">
                                <Progress
                                  value={animatedCompletionPercent}
                                  className="h-2 bg-gray-700"
                                />
                                <p className="text-right text-sm text-white mt-1.5">
                                  {animatedCompletionPercent}%
                                </p>
                              </div>
                              <h3
                                className="text-white text-2xl font-medium text-center z-50 relative"
                                style={{
                                  color: "#fff",
                                }}
                              >
                                O resultado do seu Teste de Nível de Permissão
                                está sendo calculado
                              </h3>
                            </motion.div>
                          </AnimatePresence>
                        </>
                      )}
                    </>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6 z-50 relative"
                    >
                      <div className="space-y-4 text-left">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-white text-sm font-medium mb-2"
                          >
                            Preencha seu e-mail para ter acesso ao seu Teste de
                            Nível de Permissão *
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-lg bg-[#0a1a1f] border border-[#C0964B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0964B] focus:border-transparent"
                            placeholder="Digite seu e-mail"
                            required={false}
                          />
                          {errors.email && (
                            <p className="text-red-300 text-sm mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="nome"
                            className="block text-white text-sm font-medium mb-2"
                          >
                            Qual é o seu primeiro nome? *
                          </label>
                          <input
                            {...register("nome")}
                            type="text"
                            id="nome"
                            className="w-full px-4 py-3 rounded-lg bg-[#0a1a1f] border border-[#C0964B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0964B] focus:border-transparent"
                            placeholder="Digite seu nome"
                            required={false}
                          />
                          {errors.nome && (
                            <p className="text-red-300 text-sm mt-1">
                              {errors.nome.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="w-full mt-10">
                        <button
                          type="submit"
                          onClick={handleContinueAfterInterstitial}
                          className="w-full text-[#000] cursor-pointer text-base font-bold py-4 px-8 rounded-md transition-all duration-200 bg-gradient-to-b from-[#ECC46A] to-[#C0964B] hover:from-[#9b7a3e] hover:to-[#c0964b] uppercase tracking-wider"
                        >
                          Continuar teste
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}

              {!completed && (
                <div className="w-full max-w-2xl mx-auto">
                  <div>
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                      custom={direction}
                    >
                      {showInterstitial ? (
                        <motion.div
                          key={`interstitial-${
                            interstitialNextIndex ?? "next"
                          }`}
                          custom={direction}
                          variants={questionVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={questionTransition}
                        >
                          <div className="flex flex-col items-center text-center gap-4 text-white">
                            <Image
                              src="/images/opc/depoimento-ponto-cego.webp"
                              alt="Depoimento"
                              width={1024}
                              height={429}
                              className="object-cover"
                              priority={false}
                            />

                            <div className="text-lg md:text-xl font-bold">
                              Mais de 156 mil pessoas já fizeram esse
                              Diagnóstico para entender o que as impedia de
                              conquistar mais resultados. Chegou a sua vez!
                            </div>
                            <div className="text-[#FFFFFFB3] text-sm md:text-base">
                              ✅ Marque as alternativas a seguir com total
                              sinceridade para garantir que o resultado te
                              mostre o que você precisa fazer para aumentar o
                              seu nível de Permissão.
                            </div>

                            <div className="w-full mt-10">
                              <button
                                type="button"
                                onClick={handleContinueAfterInterstitial}
                                className="w-full text-[#000] cursor-pointer text-base font-bold py-4 px-8 rounded-md transition-all duration-200 bg-gradient-to-b from-[#C0964B] to-[#ECC46A] hover:from-[#9b7a3e] hover:to-[#c0964b] uppercase tracking-wider"
                              >
                                Continuar teste
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={currentQuestionData.id}
                          custom={direction}
                          variants={questionVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={questionTransition}
                        >
                          <h3
                            className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-5 text-left z-50 relative"
                            style={{
                              color: "#fff",
                            }}
                          >
                            {currentQuestionData.question}
                          </h3>

                          {currentQuestionData.description && (
                            <p className="text-[#FFFFFFB3] text-[14px]/[20px] font-medium mb-4 md:mb-5 md:text-left text-center z-50 relative">
                              {currentQuestionData.description}
                            </p>
                          )}

                          <CustomInputRadio
                            className="z-50 relative"
                            options={currentQuestionData.options}
                            value={selectedValue}
                            onChange={handleAnswer}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
