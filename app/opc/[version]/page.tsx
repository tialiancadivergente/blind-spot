"use client";

import SplashScreenOdp from "@/app/components/SplashScreenOdp";
import { useParams } from "next/navigation";
import Formv1 from "./v1";

export default function Home() {
  const params = useParams() as { version?: string | string[] };

  const rawVersionParam = Array.isArray(params?.version)
    ? params.version[0]
    : params?.version;

  const [versaoUrl, precoUrlRaw] = (rawVersionParam ?? "").split("-");
  const precoUrl = precoUrlRaw ? Number(precoUrlRaw.replace(",", ".")) : null;

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
