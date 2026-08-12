import Image from "next/image";
import Link from "next/link";

export default function PermissionConceptSection() {
	return (
		<div
			className={`
				relative
				w-full
				min-h-[2036px]
				bg-[#000C14]
				bg-[url('/images/v2/segunda_dobra_mobile_nova.png')]
				bg-cover
				bg-center
				bg-no-repeat
				md:min-h-[1470px]
				md:bg-[url('/images/v2/segunda_dobra_desktop_nova.png')]
			`}
		>
			<div className="absolute left-1/2 -top-[30px] z-10 flex -translate-x-1/2 justify-center md:hidden">
				<Image
					src="/images/v2/Group 482459.png"
					alt="Permita-se poder ter"
					width={350}
					height={40}
					className="h-auto w-[350px] max-w-[calc(100vw-24px)]"
				/>
			</div>

			<div
				className="
					absolute left-[37px] right-[37px] top-[135px] flex flex-col gap-[18px]
					md:left-[830px] md:right-auto md:top-[70px] md:w-[360px] md:gap-[32px]
				"
			>
				<div className="font-raleway text-[18px] font-extrabold leading-[26px] md:text-[32px] md:leading-[40px]">
					<div className="md:hidden">
						<span className="block text-[#010D15]">
							Não é sobre TER mais dinheiro,
						</span>
						<span className="block">
							<span className="text-[#D2A534]">
								é sobre ter Permissão
							</span>{" "}
							<span className="text-[#010D15]">para</span>
						</span>
						<span className="block text-[#010D15]">
							PODER TER mais dinheiro.
						</span>
					</div>

					<div className="hidden text-[#010D15] md:block">
						<span className="block">Não é sobre TER mais</span>
						<span className="block">dinheiro, é sobre ter</span>
						<span className="block">
							<span className="text-[#D2A534]">Permissão</span> para PODER
						</span>
						<span className="block">TER mais dinheiro.</span>
					</div>
				</div>

				<div className="font-raleway text-[16px] font-medium leading-[24px] text-[#010D15]">
					<div className="space-y-[14px] md:hidden">
						<p>
							Você acha que se eu transferisse
							<br />
							400 mil reais agora para sua conta os
							<br />
							seus problemas financeiros estariam
							<br />
							resolvidos?
						</p>

						<p>
							Talvez você ache que sim... mas a
							<br />
							verdade é que não –{" "}
							<span className="font-bold">E EU VOU TE</span>
							<br />
							<span className="font-bold">
								PROVAR AGORA porque isso é real.
							</span>
						</p>

						<p>
							Você já se perguntou por que
							<br />
							sempre que você ganha ou está
							<br />
							prestes a ganhar mais dinheiro, algo
							<br />
							de ruim acontece?
						</p>

						<p>
							Do nada você perde tudo, uma batida
							<br />
							de carro, uma compra mal planejada,
							<br />
							um familiar no hospital...
						</p>
					</div>

					<div className="hidden md:block">
						Você acha que se eu transferisse 400 mil
						<br />
						reais agora para sua conta os seus problemas
						<br />
						financeiros estariam resolvidos?
						<br />
						<br />
						Talvez você ache que sim… mas a verdade
						<br />é que não –{" "}
						<span className="font-bold">E EU VOU TE PROVAR AGORA</span>
						<br />
						porque isso é real.
						<br />
						<br />
						Você já se perguntou por que sempre que
						<br />
						você ganha ou está prestes a ganhar mais
						<br />
						dinheiro, algo de ruim acontece?
						<br />
						<br />
						Do nada você perde tudo, uma batida de
						<br />
						carro, uma compra mal planejada, um familiar
						<br />
						no hospital…
					</div>
				</div>
			</div>

			<div
				className="
					absolute left-[37px] right-[37px] top-[1040px]
					md:left-[230px] md:right-auto md:top-[750px] md:w-auto
				"
			>
				<div className="flex w-full flex-col gap-[28px] md:w-[520px] md:gap-[32px]">
					<div className="font-raleway font-extrabold">
						<div className="text-[18px] leading-[26px] md:hidden">
							<span className="block">
								<span className="text-white">É como se </span>
								<span className="text-[#D2A534]">alguma coisa</span>
							</span>
							<span className="block">
								<span className="text-[#D2A534]">
									estivesse acontecendo
								</span>{" "}
								<span className="text-white">enquanto</span>
							</span>
							<span className="block text-white">tudo acontece.</span>
						</div>

						<div className="hidden text-[32px] leading-[40px] md:block">
							<span className="text-white">É como se</span>{" "}
							<span className="text-[#D2A534]">alguma coisa</span>
							<br />
							<span className="text-[#D2A534]">
								estivesse acontecendo
							</span>
							<br />
							<span className="text-white">enquanto tudo acontece.</span>
						</div>
					</div>

					<div className="font-raleway text-white">
						<div className="space-y-5 text-[16px] font-medium leading-[24px] md:hidden">
							<p>
								Depois de anos de pesquisa, investigações e atendimentos, eu
								cheguei a resposta. Esse "azar" aparente se chama{" "}
								<span className="font-extrabold">Momento Pré-Queda:</span> um
								sintoma clássico de Falta de Permissão.
							</p>

							<p>Resultado?</p>

							<p>
								Depois de ter quebrado 17 vezes, chorado e quase desistido…
								apenas 3 anos após essa descoberta, eu fiquei milionário.
							</p>

							<p>
								Aconteceu comigo, com diversas pessoas e pode acontecer com
								você também{" "}
								<span className="font-extrabold">
									— se estiver presente n&apos;O Ponto Cego.
								</span>
							</p>
						</div>

						<div className="hidden text-[16px] font-medium leading-[24px] md:block">
							Depois de anos de pesquisa, investigações e
							<br />
							atendimentos, eu cheguei a resposta. Esse "azar"
							<br />
							aparente se chama{" "}
							<span className="font-extrabold">Momento Pré-Queda:</span> um sintoma
							<br />
							clássico de Falta de Permissão.
							<br />
							<br />
							Resultado?
							<br />
							<br />
							Depois de ter quebrado 17 vezes, chorado e quase
							<br />
							desistido… apenas 3 anos após essa descoberta, eu
							<br />
							fiquei milionário.
							<br />
							<br />
							Aconteceu comigo, com diversas pessoas e pode
							<br />
							acontecer com você também{" "}
							<span className="font-extrabold">— se estiver presente</span>
							<br />
							<span className="font-extrabold">n&apos;O Ponto Cego.</span>
						</div>
					</div>
				</div>

				<Link
					href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
					className="
						mt-[40px] flex h-[48px] w-full items-center justify-center
						rounded-[50px] border border-[#46E96F] p-[10px]
						font-raleway text-[16px] font-bold text-white transition-all
						hover:brightness-110 md:mt-[30px] md:h-[44px] md:w-[250px]
					"
					style={{
						background:
							"radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
						boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
					}}
				>
					LIBERAR ACESSO
				</Link>
			</div>
		</div>
	);
}