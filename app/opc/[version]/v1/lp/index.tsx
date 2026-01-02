"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Ban, Check, CreditCard, MonitorSmartphone, Phone } from "lucide-react";
import Image from "next/image";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { Formv1Props } from "../index";

export default function LpV1({
  versaoUrl = null,
  precoUrl: precoUrlProp = null,
  versionParamRaw = null,
}: Formv1Props) {
  const params = useParams();

  const rawVersionParam =
    versionParamRaw ??
    (Array.isArray((params as any)?.version)
      ? (params as any).version[0]
      : ((params as any)?.version as string | undefined)) ??
    null;

  const [, priceRaw] = (rawVersionParam ?? "").split("-");
  const parsedPrice = priceRaw ? Number(priceRaw.replace(",", ".")) : null;
  const precoCandidate =
    precoUrlProp ?? (Number.isFinite(parsedPrice) ? parsedPrice : null);

  const precoUrl =
    precoCandidate === 19 || precoCandidate === 47 ? precoCandidate : 47;
  const precoDisplay = precoUrl === 19 ? "19,90" : "47";
  const searchParams = useSearchParams();
  const router = useRouter();

  const CHECKOUT_URL_PRICE_19 = "https://sf.omeugps.com.br/sf/?sfunnel=1049";
  const CHECKOUT_URL_DEFAULT = "https://sf.omeugps.com.br/sf/?sfunnel=1063";
  const [temperatura, setTemperatura] = useState<string | null>(null);
  const [tipo, setTipo] = useState<string | null>(null);
  const [versao, setVersao] = useState<string | null>(null);
  const [formFields, setFormFields] = useState<Record<string, string> | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ddi, setDdi] = useState("+55");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [domain, setDomain] = useState<string>("");
  const [redLine, setRedLine] = useState<string | null>(null);
  const [titleRedLine, setTitleRedLine] = useState<React.ReactNode | null>(
    null
  );
  const [isLogo, setIsLogo] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isPicture, setIsPicture] = useState(false);

  const fullUrl = Object.values(params).flat().join("/");

  const launch = "[ODP] 2025";

  // Capturar o domínio da página
  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname;
      console.log("Current domain:", currentDomain);
      setDomain(currentDomain);
    }
  }, []);

  // Capturar UTMs da queryString
  useEffect(() => {
    if (searchParams) {
      const utmParams: Record<string, string> = {};
      let hasUtm = false;

      // Lista de parâmetros UTM comuns
      const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_id",
      ];

      // Verificar cada parâmetro UTM
      utmKeys.forEach((key) => {
        const value = searchParams.get(key);
        if (value) {
          utmParams[key] = value;
          hasUtm = true;
        }
      });

      // Adicionar outros parâmetros da query que não são UTM
      searchParams.forEach((value, key) => {
        if (!utmKeys.includes(key) && key !== "temperatura") {
          utmParams[key] = value;
          hasUtm = true;
        }
      });

      // Definir formFields apenas se houver UTMs
      if (hasUtm) {
        console.log("UTM params:", utmParams);
        setFormFields(utmParams);
      }
    }
  }, [searchParams]);

  // Mapeamento dos benefícios para exibição
  const benefitsMapping = [
    {
      id: "h1",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-white lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Encontre um homem de valor até no Tinder.
        </p>
      ),
      text: (
        <p>
          O lugar influencia, mas seus padrões ocultos definem quem te nota e
          quem você aceita.
        </p>
      ),
    },
    {
      id: "h2",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-white lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Descubra o segredo das mulheres que atraem homens de valor.
        </p>
      ),
      text: (
        <p>
          Elas não são melhores que você,{" "}
          <span className="font-bold">
            mas romperam com os padrões ocultos que só atraem homens ruins.
          </span>
        </p>
      ),
    },
    {
      id: "h3",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-[#C0964B] lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Relacionamentos ruins e vida financeira travada?
        </p>
      ),
      text: (
        <p>
          Elimine os 4 padrões que você repete inconscientemente que te impedem
          de ter o relacionamento que deseja...
          <p className="font-bold">e até de ser mais próspera.</p>
        </p>
      ),
    },
    {
      id: "h4",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-[#C0964B] lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Você merece mais do que migalhas de amor.
        </p>
      ),
      text: (
        <p>
          Elimine os padrões ocultos que te fazem atrair homens ruins{" "}
          <span className="font-bold">
            e construa um amor seguro, companheiro e próspero.
          </span>
        </p>
      ),
    },
    {
      id: "h5",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-[#C0964B] lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          O seu último relacionamento acabou mal?
        </p>
      ),
      text: (
        <p>
          Eu sei que não foi a primeira vez. E não será a última se você
          continuar com os padrões ocultos{" "}
          <span className="font-bold">
            que te impedem de encontrar um homem de valor.
          </span>
        </p>
      ),
    },
    {
      id: "h6",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-white lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Se você sempre escolhe o cara errado, isso vai mudar agora!
        </p>
      ),
      text: (
        <p>
          Descubra{" "}
          <span className="font-bold">
            como parar de atrair, aceitar e conviver
          </span>{" "}
          com homens ruins.
        </p>
      ),
    },
  ];

  useEffect(() => {
    if (params && params.temperature) {
      console.log("temperatura param", params.temperature);
      let tipoValue = params.headline;
      const versaoValue = params.version;
      const temperaturaValue = params.temperature;
      const isDarkValue = params.theme;

      if (isDarkValue === "2") {
        setIsDark(true);
      } else {
        setIsDark(false);
      }

      const redLineVersion = params.headline;
      tipoValue = `redline-${redLineVersion}`;
      console.log("RedLine Version:", redLineVersion);
      const redLineText = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.text;
      const titleRedLineText = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.title;
      const _isLogo = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.isLogo;
      const _isPicture = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.isPicture;
      if (redLineText) {
        setRedLine(redLineText as unknown as string);
        console.log("RedLine:", redLineText);
      }

      if (titleRedLineText) {
        setTitleRedLine(titleRedLineText);
        console.log("Title RedLine:", titleRedLineText);
      }

      if (_isPicture !== undefined) {
        setIsPicture(_isPicture);
      }

      if (_isLogo !== undefined) {
        setIsLogo(_isLogo);
      }

      console.log("Tipo:", tipoValue);
      console.log("Versão:", versaoValue);
      console.log("Temperatura:", temperaturaValue);

      setTipo(tipoValue);
      setVersao(versaoValue as string);
      setTemperatura(temperaturaValue as string);
    }
  }, [params]);

  // Função para construir a URL de checkout (mantém UTMs/parâmetros atuais)
  const buildCheckoutUrl = () => {
    const baseUrl =
      precoUrl === 19 ? CHECKOUT_URL_PRICE_19 : CHECKOUT_URL_DEFAULT;
    const url = new URL(baseUrl);

    // Reaproveita todos os parâmetros atuais (UTMs etc), sem sobrescrever o sfunnel
    if (typeof window !== "undefined") {
      const current = new URL(window.location.href);
      current.searchParams.forEach((value, key) => {
        if (key === "sfunnel") return;
        url.searchParams.set(key, value);
      });
    } else if (formFields) {
      // fallback SSR-safe (caso algum dia seja executado fora do browser)
      Object.entries(formFields).forEach(([key, value]) => {
        if (key === "sfunnel") return;
        url.searchParams.set(key, value);
      });
    }

    return url.toString();
  };

  const redirectToCheckout = () => {
    if (typeof window === "undefined") return;
    window.open(buildCheckoutUrl(), "_blank", "noopener");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const cleanedPhone = whatsapp.replace(/\s+|-|\(|\)|\./g, "");

      const fullPhone = `${ddi}${cleanedPhone}`;

      // Preparar o payload para a API
      const payload: Record<string, any> = {
        email,
        phone: fullPhone,
        temperature: temperatura,
        tipo,
        version: versao,
        parametroCompleto: fullUrl,
        domain,
        uri: domain,
        path: window.location.pathname,
      };

      // Adicionar formFields ao payload apenas se existir
      if (formFields) {
        payload.formFields = formFields;
      }

      const response = await fetch("/api/register-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha ao registrar lead");
      }

      // Preparar dados para localStorage
      const leadData: Record<string, any> = {
        email,
        whatsapp: fullPhone,
        temperature: temperatura,
        tipo,
        version: versao,
        launch,
        domain,
        parametroCompleto: fullUrl,
        date: new Date().toISOString(),
      };

      // Adicionar formFields aos dados do localStorage apenas se existir
      if (formFields) {
        leadData.formFields = formFields;
      }

      const leads = JSON.parse(localStorage.getItem("leads") || "[]");
      leads.push(leadData);
      localStorage.setItem("leads", JSON.stringify(leads));

      setSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    } finally {
      setIsSubmitting(false);

      // Redirecionar após um breve delay para mostrar a mensagem de sucesso
      setTimeout(() => {
        const redirectUrl = buildCheckoutUrl();
        console.log("Redirecionando para:", redirectUrl);

        const funnels = {
          q: "https://sf.aliancadivergente.com.br/sf/?sfunnel=48",
          m: "https://sf.aliancadivergente.com.br/sf/?sfunnel=39",
          f: "https://sf.aliancadivergente.com.br/sf/?sfunnel=31",
        };

        // Adicionar parâmetros da URL atual
        const currentUrl = new URL(window.location.href);
        const currentParams = new URLSearchParams(currentUrl.search);

        // Construir URLs com parâmetros adicionais
        Object.keys(funnels).forEach((key) => {
          const url = new URL(funnels[key as keyof typeof funnels]);

          // Adicionar todos os parâmetros da URL atual
          currentParams.forEach((value, param) => {
            url.searchParams.append(param, value);
          });

          const fullPhone = whatsapp.replace(/\s+|-|\(|\)|\./g, "");
          // Adicionar email, telefone e país
          url.searchParams.append("email", email);
          url.searchParams.append("phone", fullPhone);
          url.searchParams.append("country", ddi.replace("+", ""));

          // Atualizar a URL no objeto funnels
          funnels[key as keyof typeof funnels] = url.toString();
        });

        // if (Object.keys(funnels).includes(temperatura || '')) {
        //   window.location.href = funnels[temperatura as keyof typeof funnels];
        //   return; // Interrompe a execução para evitar o redirecionamento padrão
        // }

        if (typeof window !== "undefined") {
          window.location.assign(redirectUrl);
        }
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      // Remove todos os caracteres não numéricos
      const numericValue = value.replace(/\D/g, "");

      // Aplica a formatação de acordo com a quantidade de dígitos
      let formattedValue = numericValue;
      if (ddi === "+55") {
        // Formato brasileiro: (XX) XXXXX-XXXX
        if (numericValue.length <= 2) {
          formattedValue = numericValue;
        } else if (numericValue.length <= 7) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
            2
          )}`;
        } else {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
            2,
            7
          )}-${numericValue.slice(7, 11)}`;
        }
      } else {
        // Formato genérico para outros países
        if (numericValue.length > 3 && numericValue.length <= 7) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(
            3
          )}`;
        } else if (numericValue.length > 7) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(
            3,
            7
          )}-${numericValue.slice(7)}`;
        }
      }

      setWhatsapp(formattedValue);
    } else {
      setWhatsapp(value);
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[100vh] flex flex-col sm:bg-[url('/images/opc/bg.webp')] bg-no-repeat sm:bg-right-top overflow-hidden sm:bg-[#0E1113] bg-[#000C14] z-0 w-full sm:px-20 px-4 py-6 gap-4`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/opc/banner-quiz-ponto-cego.webp"
          alt="Banner Quiz Ponto Cego"
          width={1936}
          height={804}
          className="object-cover min-h-[265px] sm:hidden z-0"
        />
        <div
          className="pointer-events-none absolute inset-0 z-10 sm:hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.80) 100%)",
          }}
        />
      </div>
      <Image
        src="/images/opc/logo-ponto-cego.png"
        alt="Logo Ponto Cego"
        width={100}
        height={100}
        className="object-contain z-10 sm:w-[100px] sm:h-[100px] w-[70px] relative"
      />
      <div className="max-w-5xl w-full text-white text-base font-bold flex flex-col gap-3 items-start justify-start mx-auto z-10">
        <div className="w-full sm:h-[425px] h-[200px] sm:bg-[url('/images/opc/banner-quiz-ponto-cego.webp')] bg-no-repeat bg-top bg-cover overflow-hidden flex p-4 items-end justify-center text-white sm:text-4xl text-2xl font-bold text-center" />
        <h1 className="text-white text-2xl font-bold text-left">
          ⚡️ Em um dia de Experiência Imersiva, nós vamos encontrar exatamente
          o que está te travando e aumentar sua Permissão
        </h1>
        <div className="text-[#FFFFFFB3] text-left font-normal text-[16px]/[24px] flex flex-col gap-4">
          <p>
            Ao garantir sua vaga para o Ponto Cego, você irá receber um{" "}
            <span className="font-bold">
              Diagnóstico Personalizado de Dependência Emocional
            </span>
            , ou seja, um conjunto de ferramentas de simples preenchimento que
            irão te mostrar exatamente:
          </p>
          <ul className="list-disc list-inside">
            <li>O que é a Permissão;</li>
            <li>O que está travando sua Permissão;</li>
            <li>
              E como aumentar a Permissão para destravar seus resultados .
            </li>
          </ul>
          <p className="font-bold">
            No Ponto Cego, Elton Euler irá te mostrar o que a maioria das
            soluções ignora e como resolver a causa raiz, permitindo que você
            quebre o bloqueio que vem te impedindo de enriquece
          </p>
          <h2 className="text-white text-2xl font-bold text-left">
            1️⃣ A grande descoberta
          </h2>
          <p>
            Logo no início do evento, você vai entender o motivo real de ainda
            não ter ido mais longe. Você já tem capacidade e disposição para
            voar, mas ainda não tem Permissão para sair do chão.{" "}
          </p>
          <p>
            Quando você descobrir como corrigir isso, atingir o sucesso, riqueza
            e poder pessoal será uma consequência inevitável
          </p>
          <h2 className="text-white text-2xl font-bold text-left">
            2️⃣ Diagnóstico de núcleo emocional e 4 padrões controladores
          </h2>
          <p>
            Entenda os padrões que te aprisionam dentro da Dependência Emocional
            te impedindo de prosperar e por que sempre que parece engrenar, as
            coisas dão errado na sua vida.{" "}
          </p>
          <p>
            Para resolver isso, vamos fazer um Diagnóstico para encontrar seu
            Ponto Cego e como combatê-lo através de ferramentas para desbloquear
            seus resultados.{" "}
          </p>
          <p>
            🎁 Esse é o momento em que dinâmicas guiadas vão acontecer e você
            terá espaço para fazer perguntas diretamente ao Elton.{" "}
          </p>
          <h2 className="text-white text-2xl font-bold text-left">
            3️⃣ A grande descoberta
          </h2>
          <p>
            O fechamento do Ponto Cego é um processo guiado e profundo,
            desenhado para consolidar tudo o que você descobriu.{" "}
          </p>
          <p>
            Em 4 passos, você vai revisar suas novas Percepções, estruturar
            Decisões que precisam ser tomadas e criar um plano de Ação para
            colocar em prática o que viu durante a imersão.{" "}
          </p>
          <h2 className="text-white text-2xl font-bold text-left">
            🔥 APROVEITE O DESCONTO DE 90% PARA GARANTIR A SUA VAGA NA PRÓXIMA
            EDIÇÃO:
          </h2>

          <div
            className="border border-[#C0964B] rounded-xl p-4 w-full sm:max-w-[350px] mx-auto"
            style={{
              background:
                "linear-gradient(0deg, #000C14, #000C14), radial-gradient(73.09% 84.34% at 50% -3.4%, rgba(34, 53, 78, 0.65) 0%, rgba(34, 53, 78, 0) 100%)",
            }}
          >
            <p className="text-[#C0964B] text-center font-bold text-xl">
              INGRESSO ONLINE
            </p>
            <div className="w-full h-[1px] bg-[#22354E] my-4" />
            <p className="text-white font-bold text-center text-base mb-4">
              AO GARANTIR SUA VAGA PARA O PONTO CEGO, VOCÊ RECEBE:
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 font-bold text-[#C0964B]" />
                <p className="text-white text-base">Evento Online;</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="min-w-6 min-h-6 font-bold text-[#C0964B]" />
                <p className="text-white text-base">
                  Apostila com 8 Ferramentas de Desbloqueio Financeiro;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 font-bold text-[#C0964B]" />
                <p className="text-white text-base">
                  Diagnóstico de Dependência Emocional
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 font-bold text-[#C0964B]" />
                <p className="text-white text-base">
                  Garantia incondicional de 120 dias;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 font-bold text-[#C0964B]" />
                <p className="text-white text-base">
                  Suporte ativo durante o evento;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 font-bold text-[#C0964B]" />
                <p className="text-white text-base">
                  Transmissão em Qualidade de Cinema.
                </p>
              </div>
            </div>
            <div className="my-6 text-center">
              <p className="text-white text-base">
                De <span className="text-[#D70000] line-through">R$500</span>{" "}
                por apenas
              </p>
              <p
                className="text-transparent bg-clip-text text-7xl font-bold"
                style={{
                  background:
                    "radial-gradient(91.44% 280.69% at 50% 50%, #FFFFFF 0%, #4C5C91 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                R${precoDisplay}
              </p>
              <p className="text-[#FFFFFFB3] text-xs mt-2">
                (Cupom de 90% de desconto já aplicado)
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#22354E] my-4" />
            <p className="text-white text-base text-center">
              <span className="font-bold">Toque no botão abaixo</span> e
              aproveite essa condição especial disponível por tempo limitado:
            </p>
            <button
              className="w-full p-4 text-white text-base font-bold rounded-full my-8"
              style={{
                background:
                  "linear-gradient(0deg, #25D366, #015E53), radial-gradient(83.8% 393.52% at 45.2% 7.95%, #25D366 0%, rgba(37, 211, 102, 0) 100%)",
                border: "1px solid #25D366",
                boxShadow: `
                  0px -0.14px 1.92px 0px #25D36626,
                  0px -0.35px 4.86px 0px #25D36636,
                  0px -0.71px 9.92px 0px #25D36644,
                  0px -1.46px 20.44px 0px #25D36654,
                  0px -4px 56px 0px #25D3667A
                `,
              }}
              onClick={() => {
                redirectToCheckout();
              }}
            >
              QUERO MEU DIAGNÓSTICO
            </button>
          </div>
          <div className="w-full bg-white p-8 rounded-xl sm:max-w-[350px] mx-auto">
            <Image
              src="/images/opc/selo-garantia.webp"
              alt="Selo Garantia Incondicional"
              width={245}
              height={245}
              className="object-contain mx-auto mb-4"
            />
            <p className="text-[#000C14] text-base font-bold">
              Além disso, você tem: 
            </p>
            <p className="text-[#000C14] text-[22px] font-bold">
              Garantia Incondicional  
            </p>
            <p className="text-[#000C14] text-base mt-4">
              Você pode participar da Imersão e se não gostar, a gente devolve
              100% do seu dinheiro.  
            </p>
          </div>
          <div className="text-white text-base flex flex-col gap-4 mt-8">
            <p className="font-bold">
              🔎 Essa é a sua melhor oportunidade para ter acesso a um
              Diagnóstico Personalizado de Dependência Emocional
            </p>
            <p>
              O Diagnóstico revela o que está te travando e você recebe a
              direção de como resolver aquilo que impede sua vida de avançar,
              mesmo tendo muita Capacidade e Disposição{" "}
            </p>
            <div className="w-full">
              <button
                type="submit"
                className="w-full text-[#000] cursor-pointer text-base font-bold py-4 px-8 rounded-md transition-all duration-200 bg-gradient-to-b from-[#ECC46A] to-[#C0964B] hover:from-[#9b7a3e] hover:to-[#c0964b] uppercase tracking-wider"
                onClick={() => {
                  redirectToCheckout();
                }}
              >
                QUERO MEU DIAGNÓSTICO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
