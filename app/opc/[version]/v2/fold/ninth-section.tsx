"use client";

const buttonClass = "flex h-[44px] items-center justify-center rounded-[50px] border-x border-y-0 border-solid border-[#25D366] px-[10px] font-raleway text-[16px] font-bold leading-[24px] text-white shadow-[0_-0.14px_1.92px_#25D36626,0_-0.35px_4.86px_#25D36636,0_-0.71px_9.92px_#25D36644,0_-1.46px_20.44px_#25D36654,0_-4px_56px_#25D3667A]";

function AccessButton({ className }: { className: string }) {
	return (
		<button type="button" className={`${buttonClass} ${className}`} style={{ background: "radial-gradient(83.8% 393.52% at 45.2% 7.95%, #25D366 0%, rgba(37,211,102,0) 100%), linear-gradient(0deg,#015E53,#015E53)" }}>
			LIBERAR ACESSO
		</button>
	);
}

export default function NinthSection() {
	return (
		<section className="relative -mt-px flex min-h-[2524px] w-full justify-center overflow-hidden bg-[#0E121E] md:mt-0 md:min-h-[1936px]">
			<img src="/images/v2/nona_dobra_mobile.png" alt="" aria-hidden="true" className="pointer-events-none absolute -left-[2px] top-0 h-[2524px] w-[calc(100%+4px)] max-w-none object-fill md:hidden" />
			<img src="/images/v2/nona_dobra_desktop.png" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-[1936px] w-full max-w-none object-cover object-top md:block" />

			<div className="relative z-10 min-h-[2524px] w-full max-w-[1200px] md:min-h-[1936px]">
				<div className="md:hidden">
					<div className="absolute left-1/2 top-[28px] w-[296px] -translate-x-1/2 text-center font-raleway text-[#000C14]">
						<h2 className="text-[18px] font-extrabold leading-[26px]">Eu não sei você, mas eu…</h2>

						<div className="mt-[24px] space-y-[24px] text-[16px] font-medium leading-[24px]">
							<p>Estava cansado dessa falta crônica de resultados. Eu quebrei 17 vezes e não desejo isso a ninguém.</p>
							<p>Eu sei que é confortável receber elogios, consolo e reconhecimento de pessoas próximas quando se está no fundo do poço…</p>
						</div>

						<p className="mt-[20px] text-[24px] font-medium leading-[32px]">&quot;Pelo menos você se esforça…&quot;</p>

						<p className="mt-[20px] text-[16px] font-medium leading-[24px]">Escutar frases como essa parece gostoso, mas é um cárcere emocional de luxo em que você vive preso sem ter resultados expressivos na vida.</p>

						<p className="mt-[22px] text-[24px] font-bold leading-[32px]">Talvez a sua desconfiança sobre você mesmo nesse momento seja tão grande que decidir acreditar neste evento parece pesado demais…</p>

						<div className="mt-[22px] space-y-[24px] text-[16px] font-medium leading-[24px]">
							<p>Mas deixa eu te dizer uma coisa: não precisa acreditar em você agora, porque eu ACREDITO em você.</p>
							<p>Aproveite a garantia &quot;De Repente&quot; de 120 dias que estou te dando e garanta seu ingresso tocando no botão abaixo. Eu assumo o risco por você.</p>
						</div>

						<AccessButton className="mx-auto mt-[26px] w-[296px]" />
					</div>

					<div className="absolute left-[32px] top-[1460px] w-[296px] font-raleway text-[#000C14]">
						<h3 className="text-[18px] font-extrabold leading-[26px]">Você corre um sério risco de OU deixar de participar do Ponto Cego e viver o restante da sua vida frustrado OU…</h3>

						<div className="mt-[34px] space-y-[24px] text-[16px] font-medium leading-[24px]">
							<p>Decidir participar, mudar de vida e começar a ser feliz.</p>
							<p>Não é isso que você deseja?</p>
							<p>Poder ganhar mais dinheiro, ter um relacionamento melhor, sentir mais disposição, melhorar sua saúde, destravar seus resultados e ter uma vida memorável?</p>
							<p>E, é justamente nisso que acreditamos, num mundo onde as mulheres são valorizadas, os homens são desafiados e as crianças são protegidas.</p>
						</div>

						<p className="mt-[34px] text-[24px] font-medium leading-[32px]">
							Você está diante de uma grande decisão, que pode mudar a sua vida, com uma garantia de 120 dias de que você receberá um dinheiro inesperado…{" "}
							<strong className="font-bold">Por qual motivo você ainda não tocou no botão e garantiu seu ingresso?</strong>
						</p>

						<div className="mt-[34px] space-y-[24px] text-[16px] font-medium leading-[24px]">
							<p>Faça isso agora mesmo!!</p>
							<p>Vamos destravar seu ponto cego e você terá liberdade emocional para prosperar sem reservas.</p>
						</div>

						<AccessButton className="mt-[36px] w-[296px]" />
					</div>
				</div>

				<div className="hidden md:block">
					<div className="absolute left-1/2 top-[84px] w-[662px] -translate-x-1/2 text-center font-raleway text-[#000C14]">
						<h2 className="text-[32px] font-extrabold leading-[36px]">Eu não sei você, mas eu…</h2>

						<div className="mx-auto mt-[48px] w-[430px] space-y-[28px] text-[16px] font-medium leading-[24px]">
							<p>Estava cansado dessa falta crônica de resultados. Eu quebrei 17 vezes e não desejo isso a ninguém.</p>
							<p>Eu sei que é confortável receber elogios, consolo e reconhecimento de pessoas próximas quando se está no fundo do poço…</p>
						</div>

						<p className="mx-auto mt-[24px] w-[430px] text-[24px] font-medium leading-[32px]">&quot;Pelo menos você se esforça…&quot;</p>

						<p className="mx-auto mt-[20px] w-[430px] text-[16px] font-medium leading-[24px]">Escutar frases como essa parece gostoso, mas é um cárcere emocional de luxo em que você vive preso sem ter resultados expressivos na vida.</p>

						<p className="mx-auto mt-[20px] w-[430px] text-[24px] font-bold leading-[32px]">Talvez a sua desconfiança sobre você mesmo nesse momento seja tão grande que decidir acreditar neste evento parece pesado demais…</p>

						<div className="mx-auto mt-[20px] w-[430px] space-y-[24px] text-[16px] font-medium leading-[24px]">
							<p>Mas deixa eu te dizer uma coisa: não precisa acreditar em você agora, porque eu ACREDITO em você.</p>
							<p>Aproveite a garantia &quot;De Repente&quot; de 120 dias que estou te dando e garanta seu ingresso tocando no botão abaixo. Eu assumo o risco por você.</p>
						</div>

						<AccessButton className="mx-auto mt-[32px] w-[250px]" />
					</div>

					<h3 className="absolute left-1/2 top-[940px] w-[740px] -translate-x-1/2 text-center font-raleway text-[32px] font-extrabold leading-[36px] text-[#000C14]">
						Você corre um sério risco de OU deixar<br />de participar do Ponto Cego e viver o restante<br />da sua vida frustrado OU…
					</h3>

					<div className="absolute left-[680px] top-[1115px] w-[430px] font-raleway text-[#000C14]">
						<div className="space-y-[24px] text-[16px] font-medium leading-[24px]">
							<p>Decidir participar, mudar de vida e começar a ser feliz.</p>
							<p>Não é isso que você deseja?</p>
							<p>Poder ganhar mais dinheiro, ter um relacionamento melhor, sentir mais disposição, melhorar sua saúde, destravar seus resultados e ter uma vida memorável?</p>
							<p>E, é justamente nisso que acreditamos, num mundo onde as mulheres são valorizadas, os homens são desafiados e as crianças são protegidas.</p>
						</div>

						<p className="mt-[36px] text-[24px] font-medium leading-[32px]">
							Você está diante de uma grande decisão, que pode mudar a sua vida, com uma garantia de 120 dias de que você receberá um dinheiro inesperado…{" "}
							<strong className="font-bold">Por qual motivo você ainda não tocou no botão e garantiu seu ingresso?</strong>
						</p>

						<div className="mt-[36px] space-y-[24px] text-[16px] font-medium leading-[24px]">
							<p>Faça isso agora mesmo!!</p>
							<p>Vamos destravar seu ponto cego e você terá liberdade emocional para prosperar sem reservas.</p>
						</div>

						<AccessButton className="mt-[36px] w-[250px]" />
					</div>
				</div>
			</div>
		</section>
	);
}