"use client";

import SplashScreenOdp from "@/app/components/SplashScreenOdp";
import Formv4 from "@/app/opc/[version]/v4";
import Formv5 from "@/app/opc/[version]/v5";
import { useParams } from "next/navigation";

export default function Home() {
	const params = useParams();
	const version = Array.isArray(params.version)
		? params.version[0]
		: params.version;

	const Form = version === "v5" ? Formv5 : Formv4;

	return (
		<SplashScreenOdp>
			<Form />
		</SplashScreenOdp>
	);
}