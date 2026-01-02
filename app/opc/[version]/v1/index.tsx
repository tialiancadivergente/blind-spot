"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Ban, CreditCard, MonitorSmartphone, Phone } from "lucide-react";
import Image from "next/image";
import { useParams, useSearchParams, useRouter } from "next/navigation";

export type Formv1Props = {
  versaoUrl?: string | null;
  precoUrl?: number | null;
  versionParamRaw?: string | null;
};

export default function Formv1({
  versaoUrl = null,
  precoUrl: precoUrlProp = null,
  versionParamRaw = null,
}: Formv1Props) {
  const precoUrl = precoUrlProp === 19 || precoUrlProp === 47 ? precoUrlProp : 47;
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [temperatura, setTemperatura] = useState<string | null>(null);
  const [tipo, setTipo] = useState<string | null>(null);
  const [versao, setVersao] = useState<string | null>(versaoUrl);
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
      const versaoValue = versaoUrl ?? params.version;
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
      setVersao((versaoValue as string) ?? null);
      setTemperatura(temperaturaValue as string);
    }
  }, [params]);

  // Função para construir a URL de redirecionamento
  const buildRedirectUrl = () => {
    // Construir o path base com os valores dinâmicos
    const basePath = `/quest-opc/${versionSlug}`;

    // Iniciar com os parâmetros de email e telefone
    const queryParams = new URLSearchParams();

    // Adicionar UTMs se existirem
    if (formFields) {
      Object.entries(formFields).forEach(([key, value]) => {
        queryParams.append(key, value);
      });
    }

    // Construir a URL completa
    return `${basePath}?${queryParams.toString()}`;
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

      if (precoUrl != null) {
        payload.price = precoUrl;
      }

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

      if (precoUrl != null) {
        leadData.price = precoUrl;
      }

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
        const redirectUrl = buildRedirectUrl();
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
          window.history.pushState({}, "", redirectUrl);
        }

        // Usar window.location.href para navegação completa
        if (typeof window !== "undefined") {
          window.location.href = redirectUrl;
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
          src="/images/opc/banner-ponto-cego.webp"
          alt="Logo Ponto Cego"
          width={1920}
          height={797}
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
      <div className="max-w-5xl w-full text-white text-2xl font-bold flex flex-col gap-3 items-center justify-center mx-auto z-10">
        <div className="w-full sm:h-[425px] h-[200px] sm:bg-[url('/images/opc/banner-ponto-cego.webp')] bg-no-repeat bg-top bg-cover overflow-hidden flex items-end justify-start text-white sm:text-4xl text-2xl font-bold text-left">
          <p>
            TESTE GRATUITO DE <br /> NÍVEL DE {precoUrl}
            <span className="text-[#C0964B]"> PERMISSÃO</span>
          </p>
        </div>
        <h1 className="text-white sm:text-4xl text-2xl font-normal text-left">
          Ou você <span className="font-bold">aumenta sua Permissão</span>. Ou
          diminui o tamanho dos seus sonhos e objetivos.
        </h1>
        <div className="text-[#FFFFFFB3] text-left font-normal sm:text-[20px]/[28px] text-[16px]/[24px] flex flex-col gap-6">
          <p>
            <span className="font-bold">
              Faça o teste para descobrir o seu nível de Permissão
            </span>{" "}
            e entender os bloqueios que te impedem de conquistar mais
            resultados.
          </p>
          <p className="italic">⏳Teste rápido: leva menos de 3 minutos</p>
        </div>
        <button
          className="btn-secondary mt-6 bg-[#C0964B] text-custom-secondary-foreground rounded-md"
          onClick={() => {
            const redirectUrl = buildRedirectUrl();
            window.location.href = redirectUrl;
          }}
        >
          COMEÇAR TESTE
        </button>
      </div>
    </section>
  );
}
