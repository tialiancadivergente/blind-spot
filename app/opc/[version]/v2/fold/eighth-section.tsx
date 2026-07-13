"use client";

import { useEffect, useState } from "react";

const guaranteeTexts = [
	"Se em até 120 dias após passar o Ponto Cego não acontecer nada de inesperado na sua vida como…",
	'Receber um dinheiro que você não estava esperando, conseguir destravar sua vida financeira, vender um imóvel, desbloquear um dinheiro que estava preso no banco… dentre outras coisas que podem "de repente" acontecer com você…',
	"Nós devolveremos seu dinheiro de volta.",
	"Temos tanta certeza que após você aumentar sua permissão no Ponto Cego coisas boas vão acontecer na sua vida…",
	"Que não temos medo de oferecer essa garantia que ninguém no mundo foi capaz de fazer até hoje.",
];

const newsletterTexts = [
	"Tem certos assuntos que não consigo tocar em redes sociais como Instagram, YouTube, Tik Tok…",
	"As pessoas não estão ali querendo esse tipo de conversa, elas querem conteúdos mais rápidos…",
	"Mas dentro das Cartas de Euler eu escreverei para você tudo aquilo que eu gostaria de ter escutado antes de quebrar 17 vezes e passar muitos perrengues na minha vida por conta da falta de Permissão.",
	"E, garantindo agora seu ingresso no Ponto Cego, seja ele qual for, você receberá acesso às minhas cartas todas as semanas no seu e-mail.",
];

const guaranteeImages = ["image (2).png", "image (5).png", "Frame 482183.png"];

const messageImages = [
	"WhatsApp Image 2024-09-04 at 14.10.27 (1).svg",
	"WhatsApp Image 2024-09-04 at 14.10.27 (2).svg",
	"WhatsApp Image 2024-09-04 at 14.10.27 (3).svg",
	"WhatsApp Image 2024-09-04 at 14.10.27 (4).svg",
	"WhatsApp Image 2024-09-04 at 14.10.27.svg",
];

const famousImages = ["Group 482560.png", "Group 482566.png", "Group 482567.png", "Group 482565.png", "Group 482558.png"];

export default function EighthSection() {
	const [guaranteeSlide, setGuaranteeSlide] = useState(0);
	const [messageSlide, setMessageSlide] = useState(0);
	const [famousSlide, setFamousSlide] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setGuaranteeSlide((current) => (current + 1) % guaranteeImages.length);
			setMessageSlide((current) => (current + 1) % messageImages.length);
			setFamousSlide((current) => (current + 1) % famousImages.length);
		}, 4500);

		return () => window.clearInterval(interval);
	}, []);

	return (
		<section className="relative flex min-h-[4414px] w-full justify-center overflow-hidden bg-[#0D111D] bg-[url('/images/v2/eighth_mobile.png')] bg-[length:auto_4414px] bg-top bg-center bg-no-repeat md:min-h-[3589px] md:bg-[url('/images/v2/eighth_desktop.png')] md:bg-[length:auto_3589px]">
			<div className="relative min-h-[4414px] w-full max-w-[1200px] md:min-h-[3589px]">
				<div className="md:hidden">
					<img src="/images/v2/Group 482509.svg" alt="" className="absolute left-1/2 top-[50px] h-[44px] w-[296px] -translate-x-1/2 object-contain" />

					<div className="absolute left-[32px] top-[459px] w-[289px] text-white">
						<h2 className="w-[255px] font-raleway text-[24px] font-extrabold uppercase leading-[26px]">
							<span className="text-[#FEB33A]">Garantia</span> &quot;De<br />Repente&quot; 120 dias
						</h2>

						<p className="mt-[20px] w-[279px] font-raleway text-[20px] font-bold leading-[28px]">
							será gratuito se não cair<br />um dinheiro inesperado<br />na sua conta.
						</p>
					</div>

					<div className="absolute left-[32px] top-[640px] w-[289px] space-y-[18px] font-raleway text-[16px] font-medium leading-[24px] text-white">
						{guaranteeTexts.map((text) => <p key={text}>{text}</p>)}
					</div>

					<p className="absolute left-[32px] top-[1210px] w-[289px] font-raleway text-[24px] font-medium leading-[32px] text-white">
						Nós temos 100% de certeza que vai dar certo para você, assim como deu certo o &quot;de repente&quot; na vida dessas pessoas:
					</p>

					<div className="absolute left-[32px] right-0 top-[1405px] h-[484px] overflow-hidden">
						<div className="flex items-start gap-[17px] transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${guaranteeSlide * 267}px)` }}>
							{guaranteeImages.map((image) => <img key={image} src={`/images/v2/${image}`} alt="Relato de participante do Ponto Cego" className="h-auto w-[250px] shrink-0 object-contain object-top" />)}
						</div>
					</div>

					<h3 className="absolute left-1/2 top-[1990px] w-[295px] -translate-x-1/2 text-center font-raleway text-[22px] font-extrabold leading-[28px] text-[#000C14]">
						Comprando hoje<br /><span className="text-[#EBBA3D]">você ganhará a inscrição</span><br />na lista pessoal de cartas<br />do Elton
					</h3>

					<div className="absolute left-[35px] top-[2602px] w-[296px] text-white">
						<h3 className="font-raleway text-[22px] font-extrabold leading-[26px] text-[#EBBA3D]">As Cartas de Euler</h3>

						<p className="mt-[20px] w-[296px] font-raleway text-[20px] font-medium leading-[26px]">
							Minha Newsletter pessoal<br />que servirá para você como<br />um guia em momentos de crise e crescimento pessoal.
						</p>

						<div className="mt-[32px] w-[281px] space-y-[24px] font-raleway text-[16px] font-medium leading-[24px]">
							{newsletterTexts.map((text) => <p key={text}>{text}</p>)}
						</div>
					</div>

					<button type="button" className="absolute left-1/2 top-[3280px] flex h-[44px] w-[250px] -translate-x-1/2 items-center justify-center rounded-[50px] border-x border-[#25D366] px-[10px] font-raleway text-[16px] font-bold leading-[24px] text-white shadow-[0_-0.14px_1.92px_#25D36626,0_-0.35px_4.86px_#25D36636,0_-0.71px_9.92px_#25D36644,0_-1.46px_20.44px_#25D36654,0_-4px_56px_#25D3667A]" style={{ background: "radial-gradient(83.8% 393.52% at 45.2% 7.95%, #25D366 0%, rgba(37,211,102,0) 100%), linear-gradient(0deg,#015E53,#015E53)" }}>
						Garantir bônus extra
					</button>

					<img src="/images/v2/Group 47.svg" alt="" className="absolute left-[32px] top-[3372px] h-[25px] w-[296px] object-contain" />

					<h3 className="absolute left-1/2 top-[3479px] w-[351px] -translate-x-1/2 text-center font-raleway text-[18px] font-extrabold leading-[26px] text-white">
						Participar do Ponto Cego<br /><span className="text-[#EBBA3D]">será a porta de entrada para<br />um Lugar de Recomeços,</span> seja<br />ele na vida financeira, carreira,<br />saúde ou relacionamento.
					</h3>

					<p className="absolute left-1/2 top-[3628px] w-[360px] -translate-x-1/2 text-center font-raleway text-[16px] font-medium leading-[24px] text-white">
						Assim como aconteceu com eles…
					</p>

					<div className="absolute left-[32px] right-0 top-[3685px] h-[160px] overflow-hidden">
						<div className="flex items-start gap-[16px] transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${messageSlide * 336}px)` }}>
							{messageImages.map((image) => <img key={image} src={`/images/v2/${image}`} alt="Depoimento de participante" className="h-auto w-[320px] shrink-0 object-contain object-top" />)}
						</div>
					</div>

					<p className="absolute left-1/2 top-[3854px] w-[287px] -translate-x-1/2 text-center font-raleway text-[16px] font-medium leading-[24px] text-white">
						E diversos outros famosos que o Elton já ajudou, como:
					</p>

					<div className="absolute left-[32px] right-0 top-[3938px] h-[400px] overflow-hidden">
						<div className="flex items-start gap-[16px] transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${famousSlide * 246}px)` }}>
							{famousImages.map((image) => <img key={image} src={`/images/v2/${image}`} alt="Pessoa ajudada por Elton Euler" className="h-[390px] w-[230px] shrink-0 rounded-[24px] object-contain object-top" />)}
						</div>
					</div>
				</div>

				<div className="hidden md:block">
					<h2 className="absolute left-1/2 top-[8px] w-[593px] -translate-x-1/2 text-center font-raleway text-[32px] font-extrabold leading-[36px] text-white">
						Garantia <span className="text-[#EBBA3D]">&quot;De Repente&quot;</span> 120 dias
					</h2>

					<p className="absolute left-1/2 top-[50px] w-[593px] -translate-x-1/2 text-center font-raleway text-[20px] font-bold leading-[28px] text-white">
						Será gratuito se não cair um dinheiro inesperado na sua conta.
					</p>

					<div className="absolute left-[630px] top-[150px] w-[520px] space-y-[24px] font-raleway text-[16px] font-medium leading-[24px] text-white">
						{guaranteeTexts.map((text) => <p key={text}>{text}</p>)}
					</div>

					<p className="absolute left-[630px] top-[530px] w-[520px] font-raleway text-[30px] font-medium leading-[40px] text-white">
						Nós temos 100% de certeza que vai dar certo para você, assim como deu certo o &quot;de repente&quot; na vida dessas pessoas:
					</p>

					<h3 className="absolute left-1/2 top-[1370px] w-[781px] -translate-x-1/2 text-center font-raleway text-[32px] font-extrabold leading-[36px] text-[#000C14]">
						Comprando hoje <span className="text-[#EBBA3D]">você ganhará a inscrição</span><br />na lista pessoal de cartas do Elton
					</h3>

					<div className="absolute left-[610px] top-[1638px] w-[465px] text-white">
						<h3 className="font-raleway text-[32px] font-extrabold leading-[36px] text-[#EBBA3D]">As Cartas de Euler</h3>

						<p className="mt-[20px] w-[465px] font-raleway text-[24px] font-medium leading-[32px]">
							Minha Newsletter pessoal que servirá para você como um guia em momentos de crise e crescimento pessoal.
						</p>

						<div className="mt-[32px] w-[430px] space-y-[24px] font-raleway text-[16px] font-medium leading-[24px]">
							{newsletterTexts.map((text) => <p key={text}>{text}</p>)}
						</div>

						<button type="button" className="mt-[40px] flex h-[44px] w-[250px] items-center justify-center rounded-[50px] border-x border-[#25D366] px-[10px] font-raleway text-[16px] font-bold leading-[24px] text-white shadow-[0_-0.14px_1.92px_#25D36626,0_-0.35px_4.86px_#25D36636,0_-0.71px_9.92px_#25D36644,0_-1.46px_20.44px_#25D36654,0_-4px_56px_#25D3667A]" style={{ background: "radial-gradient(83.8% 393.52% at 45.2% 7.95%, #25D366 0%, rgba(37,211,102,0) 100%), linear-gradient(0deg,#015E53,#015E53)" }}>
							Garantir bônus extra
						</button>
					</div>

					<img src="/images/v2/Group 481232.png" alt="" className="absolute left-[70px] top-[2371px] h-[44px] w-[1060px] object-contain" />

					<h3 className="absolute left-1/2 top-[2500px] w-[899px] -translate-x-1/2 text-center font-raleway text-[32px] font-extrabold leading-[36px] text-white">
						Participar do Ponto Cego <span className="text-[#EBBA3D]">será a porta de entrada<br />para um Lugar de Recomeços,</span> seja ele na vida financeira,<br />carreira, saúde ou relacionamento.
					</h3>

					<p className="absolute left-1/2 top-[2640px] w-[723px] -translate-x-1/2 text-center font-raleway text-[16px] font-medium leading-[24px] text-white">
						Assim como aconteceu com eles…
					</p>

					<p className="absolute left-1/2 top-[3000px] w-[723px] -translate-x-1/2 text-center font-raleway text-[16px] font-medium leading-[24px] text-white">
						E diversos outros famosos que o Elton já ajudou, como:
					</p>

					<div className="group absolute left-[70px] top-[3079px] h-[425px] w-[1600px]">
						<img src="/images/v2/Frame 482624.png" alt="Pessoas ajudadas por Elton Euler" className="h-[424px] w-[1600px] max-w-none object-contain object-left transition-transform duration-700 ease-in-out group-hover:-translate-x-[270px]" />
					</div>
				</div>
			</div>
		</section>
	);
}