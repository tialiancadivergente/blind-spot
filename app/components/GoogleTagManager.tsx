"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import TagManager from "react-gtm-module";

const GoogleTagManager = () => {
  const params = useParams<{ 
    version?: string | string[],
    temperature?: string | string[],
  }>();

  useEffect(() => {
    const version = Array.isArray(params.version)
      ? params.version[0]
      : params.version;

    const temperature = Array.isArray(params.temperature)
      ? params.temperature[0]
      : params.temperature;

      console.log('temperature', temperature)

    const normalizeTemperature = temperature === "org" || temperature === "o"

    const gtmId = version === "v5" && !normalizeTemperature ? "GTM-MHC745NZ" : "";

    console.log('gtmId', gtmId)

    if (!gtmId) return;

    console.log('gtmId', gtmId)

    TagManager.initialize({ gtmId });
  }, [params.version]);

  return null;
};

export default GoogleTagManager;
