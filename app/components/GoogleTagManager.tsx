"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import TagManager from "react-gtm-module";

const GoogleTagManager = () => {
  const params = useParams<{
    version?: string | string[];
    temperature?: string | string[];
  }>();

  useEffect(() => {
    const version = Array.isArray(params.version)
      ? params.version[0]
      : params.version;

    const temperature = Array.isArray(params.temperature)
      ? params.temperature[0]
      : params.temperature;

    const validVersion = version === "v5" || version === "v11" || version === "v12";
    const validTemperature = ["f", "q", "m", "t", "i"].includes(temperature ?? "");

    const gtmId = validVersion && validTemperature ? "GTM-MHC745NZ" : "";

    if (!gtmId) return;

    TagManager.initialize({ gtmId });
  }, [params.version, params.temperature]);

  return null;
};

export default GoogleTagManager;