"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const buttonStyle = {
	background: "radial-gradient(83.8% 393.52% at 45.2% 7.95%, #46E96F 0%, #09A530 100%)",
	boxShadow: "0px -4px 56px 0px rgba(70,233,111,0.45)",
};

const symptoms = [
	{
		title: "Resultado Bloqueado",
		paragraphs: [
			"Quando uma trava te prende aonde você está e te impede de avançar o mínimo sequer na vida.",
			"Por mais que você tente e se esforce, às vezes até mais do que outras pessoas ao seu redor, o resultado simplesmente não vem.",
		],
	},
	{
		title: "Resultado Atrasado",
		paragraphs: [
			"Quando você tem capacidade, energia e é reconhecido, mas um salto financeiro tem demorado muito mais do que o normal para acontecer.",
		],
	},
	{
		title: "Resultado Diminuído",
		paragraphs: [
			"Quando seus resultados não estão compatíveis com o esforço que você faz para obtê-los. Mesmo se esforçando, o resultado vem em doses pequenas e frustrantes.",
		],
	},
];

function SymptomCard({ title, paragraphs }: (typeof symptoms)[number]) {
	return (
		<article className="h-[367px] w-[296px] shrink-0 rounded-[10px] border border-white/10 bg-[linear-gradient(163.44deg,rgba(0,12,20,0.85)_-1.53%,rgba(0,26,43,0.85)_100%)] px-[37px] pt-[34px] text-white backdrop-blur-[25px] md:w-[340px] md:px-[40px] md:pt-[47px]">
			<div className="h-[30px] w-[31px] rounded-full border-[5px] border-[#FF0000]" />

			<h3 className="mt-[12px] font-raleway text-[20px] font-bold leading-[28px]">
				{title}
			</h3>

			<div className="mt-[11px] space-y-[24px] font-raleway text-[16px] font-medium leading-[24px]">
				{paragraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</article>
	);
}

function SymptomsCarousel() {
	const [activeCard, setActiveCard] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveCard((current) => (current + 1) % symptoms.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="md:hidden">
			<div className="w-[296px] overflow-hidden rounded-[10px]">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${activeCard * 100}%)` }}
				>
					{symptoms.map((symptom) => (
						<SymptomCard key={symptom.title} {...symptom} />
					))}
				</div>
			</div>

			<div className="mt-[18px] flex items-center justify-center gap-[8px]">
				{symptoms.map((symptom, index) => (
					<button
						key={symptom.title}
						type="button"
						onClick={() => setActiveCard(index)}
						aria-label={`Mostrar ${symptom.title}`}
						className={`h-[8px] rounded-full transition-all ${
							activeCard === index
								? "w-[22px] bg-[#EBBA3D]"
								: "w-[8px] bg-[#26333B]/40"
						}`}
					/>
				))}
			</div>
		</div>
	);
}

export default function PermissionJourneySection() {
	return (
		<section
			aria-label="Jornada da Permissão"
			className="relative min-h-[2720px] w-full overflow-hidden bg-[#FDF8ED] bg-[url('/images/v2/quarta_dobra_nova_mobile.png')] bg-[length:100%_2670px] bg-top bg-no-repeat md:min-h-[2463px] md:bg-[#000C14] md:bg-[url('/images/v2/quarta_dobra_nova_desktop.png')] md:bg-cover"
		>
			<div className="relative z-10 mx-auto min-h-[2720px] w-full max-w-[1060px] px-8 pt-[32px] md:min-h-[2463px] md:px-0 md:pt-[80px]">
				<Image
					src="/images/v2/Group 482464.png"
					alt=""
					width={296}
					height={46}
					className="mx-auto block h-[46px] w-[296px] object-contain md:hidden"
				/>

				<Image
					src="/images/v2/Group 50.png"
					alt=""
					width={1060}
					height={44}
					className="hidden h-[44px] w-[1060px] object-contain md:block"
				/>

				<div className="absolute left-1/2 top-[600px] w-[296px] -translate-x-1/2 font-raleway text-[16px] font-medium leading-[24px] text-white md:hidden">
					<div className="space-y-[32px]">
						<p>
							Com que frequência você se pega
							<br />
							dizendo -{" "}
							<span className="font-extrabold">
								"tenho que fazer isso pelo..."
							</span>
						</p>

						<p>
							Esse <span className="font-extrabold">"tenho que"</span>{" "}
							associado
							<br />
							ao plano dos outros esconde uma
							<br />
							responsabilidade oculta, um débito
							<br />
							emocional que você tem com outra
							<br />
							pessoa, seja ela viva ou morta.
						</p>

						<p>
							Por isso que,{" "}
							<span className="font-extrabold">
								sempre que você ganha
								<br />
								dinheiro, o seu inconsciente dá um
								<br />
								jeito de se desfazer do dinheiro...
							</span>
						</p>

						<p>
							Seja dando esse dinheiro para outras
							<br />
							pessoas resolverem os problemas
							<br />
							delas, seja fazendo novas dívidas ou
							<br />
							pagando por "imprevistos" que sempre
							<br />
							acontecem quando você está com
							<br />
							<span className="font-bold">dinheiro sobrando.</span>
						</p>

						<p>
							Ao enxergar o seu Ponto Cego,{" "}
							<span className="font-extrabold">
								você
								<br />
								terá a oportunidade de sair
							</span>{" "}
							desse
							<br />
							ciclo sem fim de dívidas, boletos e de
							<br />
							falta de resultado.
						</p>
					</div>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="mt-[40px] flex h-[44px] w-[296px] items-center justify-center gap-[10px] rounded-[50px] border-x border-[#46E96F] p-[10px] font-raleway text-[16px] font-bold uppercase text-white transition-all hover:brightness-110"
						style={buttonStyle}
					>
						Liberar acesso
					</Link>
				</div>

				<div className="absolute right-0 top-[334px] hidden w-[454px] font-raleway text-[16px] font-medium leading-[24px] text-white md:block">
					<div className="space-y-[18px]">
						<p>
							Com que frequência você se pega dizendo -{" "}
							<span className="font-extrabold">
								"tenho que
								<br />
								fazer isso pelo..."
							</span>
						</p>

						<p>
							Esse <span className="font-extrabold">"tenho que"</span>{" "}
							associado ao plano dos outros
							<br />
							esconde uma responsabilidade oculta, um débito
							<br />
							emocional que você tem com outra pessoa, seja
							<br />
							ela viva ou morta.
						</p>

						<p>
							Por isso que,{" "}
							<span className="font-extrabold">
								sempre que você ganha dinheiro, o seu
								<br />
								inconsciente dá um jeito de se desfazer do dinheiro...
							</span>
						</p>

						<p>
							Seja dando esse dinheiro para outras pessoas
							<br />
							resolverem os problemas delas, seja fazendo novas
							<br />
							dívidas ou pagando por "imprevistos" que sempre
							<br />
							acontecem quando você está com{" "}
							<span className="font-bold">dinheiro sobrando.</span>
						</p>

						<p>
							Ao enxergar o seu Ponto Cego,{" "}
							<span className="font-extrabold">
								você terá a
								<br />
								oportunidade de sair
							</span>{" "}
							desse ciclo sem fim de dívidas,
							<br />
							boletos e de falta de resultado.
						</p>
					</div>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="mt-[40px] flex h-[44px] w-[250px] items-center justify-center gap-[10px] rounded-[50px] border-x border-[#46E96F] p-[10px] font-raleway text-[16px] font-bold uppercase text-white transition-all hover:brightness-110"
						style={buttonStyle}
					>
						Liberar acesso
					</Link>
				</div>

				<div className="absolute left-1/2 top-[1380px] w-[298px] -translate-x-1/2 font-raleway text-[#000C14] md:hidden">
					<h2 className="text-[18px] font-extrabold leading-[26px]">
						<span className="text-[#EBBA3D]">A falta de Permissão</span>{" "}
						faz você
						<br />
						se sentir incapaz, acabando com
						<br />a sua disposição.
					</h2>

					<div className="mt-[30px] space-y-[24px] text-[16px] font-normal leading-[24px]">
						<p className="font-extrabold">
							Além de gerar os sentimentos de
							<br />
							medo, culpa e insegurança.
						</p>

						<p>
							E o que causa a falta de Permissão?
							<br />A dependência emocional originada
							<br />
							pela bagunça do seu núcleo interno
							<br />e externo.
						</p>

						<p>
							É difícil avançar na vida quando
							<br />
							você tem os sonhos, problemas e as
							<br />
							expectativas de um monte de pessoas
							<br />
							que não deveriam estar no seu núcleo
							<br />
							emocional,{" "}
							<span className="font-extrabold">nas suas costas.</span>
						</p>

						<p>
							Muito tem se falado, ultimamente, de
							<br />
							merecimento, mas o fato é que as
							<br />
							pessoas não têm{" "}
							<span className="font-extrabold">PERMISSÃO</span> para
							<br />
							prosperar e avançar na vida.
						</p>
					</div>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="mt-[32px] flex h-[44px] w-[296px] items-center justify-center gap-[10px] rounded-[50px] border-x border-[#46E96F] p-[10px] font-raleway text-[16px] font-bold uppercase text-white transition-all hover:brightness-110"
						style={buttonStyle}
					>
						Liberar acesso
					</Link>
				</div>

				<div className="absolute left-1/2 top-[1115px] hidden w-[520px] -translate-x-1/2 font-raleway text-[#000C14] md:block">
					<h2 className="text-[32px] font-extrabold leading-[40px]">
						<span className="text-[#EBBA3D]">A falta de Permissão</span>{" "}
						faz você
						<br />
						se sentir incapaz, acabando com
						<br />a sua disposição.
					</h2>

					<div className="mt-[30px] space-y-[18px] text-[16px] font-normal leading-[24px]">
						<p className="font-medium">
							Além de gerar os sentimentos de medo, culpa e insegurança.
						</p>

						<p>
							E o que causa a falta de Permissão?
							<br />A dependência emocional originada pela bagunça do seu
							núcleo interno
							<br />e externo.
						</p>

						<p>
							É difícil avançar na vida quando
							<br />
							você tem os sonhos, problemas e as expectativas de um monte de
							pessoas
							<br />
							que não deveriam estar no seu núcleo emocional,{" "}
							<span className="font-extrabold">nas suas costas.</span>
						</p>

						<p>
							Muito tem se falado, ultimamente, de merecimento, mas o fato é
							que
							<br />
							as pessoas não têm{" "}
							<span className="font-extrabold">PERMISSÃO</span> para
							prosperar e avançar na vida.
						</p>
					</div>

					<Link
						href="https://pay.hotmart.com/T101582944K?checkoutMode=10"
						className="mt-[32px] flex h-[44px] w-[250px] items-center justify-center gap-[10px] rounded-[50px] border-x border-[#46E96F] p-[10px] font-raleway text-[16px] font-bold uppercase text-white transition-all hover:brightness-110"
						style={buttonStyle}
					>
						Liberar acesso
					</Link>
				</div>

				<div className="absolute left-1/2 top-[2100px] w-[296px] -translate-x-1/2 md:hidden">
					<h2 className="mx-auto w-[244px] text-center font-raleway text-[18px] font-bold leading-[26px] text-[#26333B]">
						Os 3 sintomas de quem
						<br />
						<span className="text-[#EBBA3D]">ainda não tem</span> Permissão
						<br />
						para ter sucesso, riqueza e
						<br />
						poder pessoal:
					</h2>

					<div className="mt-[60px]">
						<SymptomsCarousel />
					</div>
				</div>

				<div className="absolute left-1/2 top-[1857px] hidden w-[1060px] -translate-x-1/2 md:block">
					<h2 className="mx-auto w-[762px] text-center font-raleway text-[32px] font-bold leading-[40px] text-[#26333B]">
						Os 3 sintomas de quem{" "}
						<span className="text-[#EBBA3D]">ainda não tem</span> Permissão
						<br />
						para ter sucesso, riqueza e poder pessoal:
					</h2>

					<div className="mt-[47px] flex gap-[10px]">
						{symptoms.map((symptom) => (
							<SymptomCard key={symptom.title} {...symptom} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}