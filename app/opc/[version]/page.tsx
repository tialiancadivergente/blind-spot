"use client";

import SplashScreenOdp from "@/app/components/SplashScreenOdp";
import { useParams } from "next/navigation";
import Formv1 from "./v1";
import Formv2 from "./v2";
import Formv3 from "./v3";

export default function Home() {
  const params = useParams() as { version?: string | string[] };

  const rawVersionParam = Array.isArray(params?.version)
    ? params.version[0]
    : params?.version;

  const [versaoUrl, precoUrlRaw] = (rawVersionParam ?? "").split("-");
  const precoUrl = precoUrlRaw ? Number(precoUrlRaw.replace(",", ".")) : null;

  if (versaoUrl === "v2") {
    return (
      <SplashScreenOdp>
        <Formv2 />
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