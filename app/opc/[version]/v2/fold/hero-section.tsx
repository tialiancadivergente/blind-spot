import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className={`
      relative
      min-h-[720px] md:min-h-[806px]
      flex flex-col
      items-center
      justify-start
      overflow-hidden
      bg-black
      bg-[url('/images/v2/primeira_dobra_elton_mobile.webp')] 
      md:bg-[url('/images/v2/primeira_dobra_elton_desktop.webp')] 
      bg-cover 
      bg-center
      `}
        >
            {/* overlay escuro */}
            <div className="absolute inset-0 bg-black/10 z-0" />

            {/* conteúdo */}
            <div className="relative z-10 w-full max-w-[1200px] px-6 flex flex-col items-center">

                {/* LOGO */}
                <div className="pt-10">
                    <Image
                        src="/images/v2/logotipo_ponto_cego.png"
                        width={120}
                        height={40}
                        alt="logo"
                    />
                </div>

                {/* BLOCO TEXTO + BOTÃO */}
                <div
                    className="
          flex flex-col
          items-center
          text-center
          max-w-[913px]
          mt-[300px] md:mt-[280px]
          gap-[21px]
          "
                >

                    {/* TITULO */}
                    <h1
                        className="
            font-raleway
            font-bold
            text-[24px]
            md:text-[32px]
            leading-[115%]
            text-[#F4F0E1]
            "
                    >
                        Veja por que famosos e <br />
                        <span className="text-[#C9B06A]">
                            milionários pedem conselhos para
                        </span> <br />
                        esse cara que quebrou 17 vezes
                    </h1>

                    {/* DESCRIÇÃO */}
                    <p
                        className="
            font-raleway
            text-[14px]
            md:text-[16px]
            text-[#F4F0E1]
            opacity-80
            max-w-[760px]
            "
                    >
                        Através do Diagnóstico de Dependência Emocional, <br />
                        ele vai revelar respostas que cursos, imersões e até <br />
                        mesmo anos de terapia nunca te mostraram
                    </p>

                    {/* BOTÃO */}
                    <button
                        className="
            w-[250px]
            h-[44px]
            flex
            items-center
            justify-center
            font-raleway
            font-bold
            text-[14px]
            text-[#03210F]
            rounded-[9px]
            border-l
            border-r
            border-[#46E96F]
            transition-all
            hover:brightness-110
            "
                        style={{
                            background:
                                "radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
                            boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
                        }}
                    >
                        Quero fazer meu diagnóstico
                    </button>

                    {/* TEXTO PEQUENO */}
                    <div className="flex items-center gap-3 mt-3">

                        <Image
                            src="/images/v2/icones.png"
                            width={90}
                            height={30}
                            alt="avatares"
                        />

                        <p className="text-[12px] text-white text-left max-w-[320px]">
                            e dezenas de outros famosos tiveram <br />
                            acesso ao mesmo método que está <br />
                            disponível para você.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}