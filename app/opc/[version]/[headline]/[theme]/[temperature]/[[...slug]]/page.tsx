"use client";

import SplashScreenOdp from "@/app/components/SplashScreenOdp";
import Formv4 from "@/app/opc/[version]/v4";
import Formv5 from "@/app/opc/[version]/v5";
import Formv6 from "@/app/opc/[version]/v6";
import Formv7 from "@/app/opc/[version]/v7";
import Formv8 from "@/app/opc/[version]/v8";
import Formv9 from "@/app/opc/[version]/v9";
import { useParams } from "next/navigation";

export default function Home() {
	const { version } = useParams();

		if (version === "v9") {
		return (
			<SplashScreenOdp>
				<Formv9 />
			</SplashScreenOdp>
		);
	}

		if (version === "v8") {
		return (
			<SplashScreenOdp>
				<Formv8 />
			</SplashScreenOdp>
		);
	}

	if (version === "v7") {
		return (
			<SplashScreenOdp>
				<Formv7 />
			</SplashScreenOdp>
		);
	}

	if (version === "v6") {
		return (
			<SplashScreenOdp>
				<Formv6 />
			</SplashScreenOdp>
		);
	}

	if (version === "v5") {
		return (
			<SplashScreenOdp>
				<Formv5 />
			</SplashScreenOdp>
		);
	}

	return (
		<SplashScreenOdp>
			<Formv4 />
		</SplashScreenOdp>
	);
}