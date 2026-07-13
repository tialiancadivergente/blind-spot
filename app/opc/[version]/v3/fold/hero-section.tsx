import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section
			id="primeira-dobra"
			aria-labelledby="primeira-dobra-titulo"
			className="relative h-[788px] w-full overflow-hidden bg-[#020D14] md:h-[600px]"
		>
			<div className="absolute inset-0">
				<Image
					src="/images/v2/primeira_dobra_mobile.png"
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-top md:hidden"
				/>

				<Image
					src="/images/v2/primeira_dobra_desktop.png"
					alt=""
					fill
					priority
					sizes="100vw"
					className="hidden object-cover object-top md:block"
				/>
			</div>

			<div className="relative z-10 h-full w-full md:mx-auto md:max-w-[1200px]">
				<Image
					src="/images/v2/logo_primeira_dobra.svg"
					alt="Ponto Cego"
					width={142}
					height={58}
					priority
					className="absolute left-[32px] top-[315px] h-auto w-[141px] md:hidden"
				/>

				<Image
					src="/images/v2/logo_primeira_dobra.svg"
					alt="Ponto Cego"
					width={100}
					height={41}
					priority
					className="absolute left-[70px] top-[34px] hidden h-auto w-[100px] md:block"
				/>

				<div className="absolute left-[32px] top-[430px] flex w-[296px] flex-col items-start md:left-[70px] md:top-[115px] md:w-[550px]">
					<h1
						id="primeira-dobra-titulo"
						className="w-full font-raleway text-[22px] font-extrabold leading-[28px] tracking-normal text-white md:text-[36px] md:leading-[45px]"
					>
						Em apenas 1 dia,{" "}
						<span className="text-[#F0CB6D]">
							descubra como ganhar mais
						</span>
						, crescer na carreira e melhorar a sua vida financeira.
					</h1>

					<p className="mt-[16px] w-full font-raleway text-[15px] font-medium leading-[22px] tracking-normal text-white md:mt-[20px] md:max-w-[540px] md:text-[19px] md:leading-[29px]">
						Sem trocar de profissão, sem mais cursos, sem continuar
						repetindo os mesmos resultados
					</p>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="mt-[26px] flex h-[44px] w-[296px] items-center justify-center rounded-[50px] border-x border-y-0 border-solid border-[#25D366] px-[10px] font-raleway text-[14px] font-bold leading-none text-white transition duration-300 hover:brightness-110 active:scale-[0.98] md:mt-[32px] md:h-[46px] md:w-[270px] md:text-[15px]"
						style={{
							background:
								"radial-gradient(83.8% 393.52% at 45.2% 7.95%, #25D366 0%, rgba(37, 211, 102, 0) 100%), linear-gradient(0deg, #015E53, #015E53)",
							boxShadow:
								"0px -0.14px 1.92px #25D36626, 0px -0.35px 4.86px #25D36636, 0px -0.71px 9.92px #25D36644, 0px -1.46px 20.44px #25D36654, 0px -4px 56px #25D3667A",
						}}
					>
						Quero fazer meu diagnóstico
					</Link>
				</div>
			</div>
		</section>
	);
}