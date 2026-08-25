"use client";

import SplashScreenOdp from "@/app/components/SplashScreenOdp";
import Formv4 from "@/app/opc/[version]/v4";

export default function Home() {

  return (
    <SplashScreenOdp>
      <Formv4 />
    </SplashScreenOdp>
  );
}
