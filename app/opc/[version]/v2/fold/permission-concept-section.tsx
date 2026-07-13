import Image from "next/image";

export default function PermissionConceptSection() {
	return (
		<div
			className={`
				w-full
				bg-[#000C14]
				bg-no-repeat
				bg-cover
				bg-[url('/images/v2/segunda_dobra_elton_mobile_teste.webp')]
				bg-[position:center]
				min-h-[1957px]
				md:bg-[url('/images/v2/segunda_dobra_elton_desktop.webp')]
				md:bg-center
				md:min-h-[1551px]
			`}
		>
			<div className="flex justify-center pt-[30px]">
				<Image
					src="/images/v2/pemita_se_poder_ter_mobile.png"
					alt="Logo"
					width={350}
					height={40}
					className="md:hidden"
				/>

				<Image
					src="/images/v2/pemita_se_poder_ter_desktop.png"
					alt="Logo"
					width={1000}
					height={44}
					className="hidden md:block"
				/>
			</div>

			<div
				className="
					mt-[100px] mx-auto px-6 max-w-[380px]
					flex flex-col gap-[18px]
					md:mt-[80px] md:ml-[830px] md:px-0 md:max-w-[360px] md:gap-[32px]
				"
			>
				<div className="font-raleway font-extrabold text-[18px] leading-[26px] md:text-[32px] md:leading-[40px]">
					<div className="md:hidden">
						<span className="block text-[#010D15]">
							Não é sobre TER mais dinheiro,
						</span>

						<span className="block whitespace-nowrap">
							<span className="text-[#D2A534]">é sobre ter Permissão</span>{" "}
							<span className="text-[#010D15]">para PODER</span>
						</span>

						<span className="block text-[#010D15]">
							TER mais dinheiro.
						</span>
					</div>

					<div className="hidden md:block text-[#010D15]">
						<span className="block">Não é sobre TER mais</span>
						<span className="block">dinheiro, é sobre ter</span>
						<span className="block">
							<span className="text-[#D2A534]">Permissão</span> para PODER
						</span>
						<span className="block">TER mais dinheiro.</span>
					</div>
				</div>

				<div className="font-raleway font-medium text-[16px] leading-[24px] text-[#010D15]">
					<div className="md:hidden">
						Você acha que se eu transferisse
						<br />
						400 mil reais agora para sua conta os seus
						<br />
						problemas financeiros estariam resolvidos?
						<br />
						<br />
						Talvez você ache que sim… mas a verdade é que não –{" "}
						<span className="font-bold">E EU VOU TE PROVAR AGORA</span>{" "}
						porque isso é real.
						<br />
						<br />
						Você já se perguntou por que sempre que você ganha ou está
						prestes a ganhar mais dinheiro, algo de ruim acontece?
						<br />
						<br />
						Do nada você perde tudo, uma batida de carro, uma compra mal
						planejada, um familiar no hospital…
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
					mt-[420px] ml-[37px] w-[348px] px-0
					md:mt-[140px] md:ml-[230px] md:px-0 md:max-w-none
				"
			>
				<div className="w-full md:w-[520px] flex flex-col gap-[24px] md:gap-[32px]">
					<div className="font-raleway font-extrabold md:text-[32px] md:leading-[40px]">
						<div className="md:hidden text-[18px] leading-[26px]">
							<span className="text-white">É como se </span>
							<span className="text-[#D2A534]">alguma coisa </span>
							<span className="text-white">
								estivesse acontecendo enquanto tudo acontece.
							</span>
						</div>

						<div className="hidden md:block text-[32px] leading-[40px]">
							<span className="text-[#FFFFFF]">É como se</span>{" "}
							<span className="text-[#D2A534]">alguma coisa</span>
							<br />
							<span className="text-[#D2A534]">
								estivesse acontecendo
							</span>
							<br />
							<span className="text-[#FFFFFF]">
								enquanto tudo acontece.
							</span>
						</div>
					</div>

					<div className="font-raleway text-white md:text-[16px] md:leading-[24px]">
						<div className="md:hidden font-medium text-[16px] leading-[24px] space-y-5">
							<p>
								Depois de anos de pesquisa, investigações e atendimentos, eu
								cheguei a resposta. Esse "azar" aparente se chama{" "}
								<span className="font-extrabold">
									Momento Pré-Queda:
								</span>{" "}
								um sintoma clássico de Falta de Permissão.
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

						<div className="hidden md:block font-medium text-[16px] leading-[24px]">
							Depois de anos de pesquisa, investigações e
							<br />
							atendimentos, eu cheguei a resposta. Esse "azar"
							<br />
							aparente se chama{" "}
							<span className="font-extrabold">Momento Pré-Queda:</span> um
							sintoma
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
							<span className="font-extrabold">
								n&apos;O Ponto Cego.
							</span>
						</div>
					</div>
				</div>

				<button
					className="
						mt-[28px]
						w-[250px]
						h-[44px]
						flex
						items-center
						justify-center
						font-raleway
						font-bold
						text-[16px]
						text-[#FFFFFF]
						rounded-[50px]
						border-l
						border-r
						border-[1px]
						border-[#46E96F]
						p-[10px]
						transition-all
						hover:brightness-110
						mx-auto
						md:mt-[30px]
						md:w-[250px]
						md:h-[44px]
						md:mx-0
					"
					style={{
						background:
							"radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
						boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
					}}
				>
					LIBERAR ACESSO
				</button>
			</div>
		</div>
	);
}