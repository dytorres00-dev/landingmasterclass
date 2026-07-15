import Script from "next/script";

/**
 * Meta Píxel (lado cliente). Carga la librería fbevents, inicializa el píxel
 * y dispara PageView. El evento "Lead" se dispara desde RegisterForm al
 * completar el registro (con el mismo event_id que usa la Conversions API).
 *
 * Solo se renderiza si NEXT_PUBLIC_META_PIXEL_ID está configurado.
 */
// Pixel ID de Dylan Torres. Es un valor público (aparece en el HTML del
// cliente); la variable de entorno lo puede sobrescribir si algún día cambia.
const DEFAULT_PIXEL_ID = "939339841402645";

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || DEFAULT_PIXEL_ID;
  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
