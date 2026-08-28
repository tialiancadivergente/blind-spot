import Script from "next/script";

interface BuzzleadFormScriptsProps {
  campaignId?: string;
}

const initBuzzleadWidget = () => {
    const buzzleadWindow = window as Window & {
      __wcBuzzleadInitialized?: boolean;
      inicializeWidget?: () => void;
      setEventsToOpenModal?: () => void;
      loadModalPlugin?: () => void;
    };

    if (buzzleadWindow.__wcBuzzleadInitialized) {
      return;
    }

    if (typeof buzzleadWindow.inicializeWidget === "function") {
      buzzleadWindow.inicializeWidget();
    }
    if (typeof buzzleadWindow.setEventsToOpenModal === "function") {
      buzzleadWindow.setEventsToOpenModal();
    }
    if (typeof buzzleadWindow.loadModalPlugin === "function") {
      buzzleadWindow.loadModalPlugin();
    }

    buzzleadWindow.__wcBuzzleadInitialized = true;
  };

export default function BuzzleadFormScripts({
  campaignId = "PXN0",
}: BuzzleadFormScriptsProps) {
  return (
    <>
      <Script id="buzzlead-campaign-id" strategy="afterInteractive">
        {`window.campaignId = '${campaignId}';`}
      </Script>
      <Script
        id="buzzlead-form-widget"
        src="https://static.buzzlead.com.br/widget.js"
        strategy="afterInteractive"
        onLoad={initBuzzleadWidget}
      />
    </>
  );
}
