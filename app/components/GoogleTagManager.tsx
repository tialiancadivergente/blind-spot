"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import TagManager from "react-gtm-module";

const GoogleTagManager = () => {
  const params = useParams<{ version?: string | string[] }>();

  useEffect(() => {
    const version = Array.isArray(params.version)
      ? params.version[0]
      : params.version;
    const gtmId = version === "v5" ? "GTM-MHC745NZ" : "";

    if (!gtmId) return;
    
    TagManager.initialize({ gtmId });
  }, [params.version]);

  return null;
};

export default GoogleTagManager;
