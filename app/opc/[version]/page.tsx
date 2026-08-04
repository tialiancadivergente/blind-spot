"use client";

import SplashScreenOdp from "@/app/components/SplashScreenOdp";
import { useParams } from "next/navigation";
import Formv1 from "./v1";
import Formv2 from "./v2";
import Formv3 from "./v3";

interface RouteParams {
	version?: string | string[];
	headline?: string | string[];
}

function getParamValue(param?: string | string[]) {
	return Array.isArray(param) ? param[0] : param;
}

export default function Home() {
	const params = useParams() as RouteParams;
	const rawVersionParam = getParamValue(params.version);
	const headlineId = getParamValue(params.headline);
	const [versaoUrl, precoUrlRaw] = (rawVersionParam ?? "").split("-");
	const precoUrl = precoUrlRaw ? Number(precoUrlRaw.replace(",", ".")) : null;

	if (versaoUrl === "v2") {
		return (
			<SplashScreenOdp>
				<Formv2 headlineId={headlineId} />
			</SplashScreenOdp>
		);
	}

	if (versaoUrl === "v3") {
		return (
			<SplashScreenOdp>
				<Formv3 />
			</SplashScreenOdp>
		);
	}

	return (
		<SplashScreenOdp>
			<Formv1
				versaoUrl={versaoUrl || null}
				precoUrl={Number.isFinite(precoUrl) ? precoUrl : null}
				versionParamRaw={rawVersionParam ?? null}
			/>
		</SplashScreenOdp>
	);
}