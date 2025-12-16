'use client';

import { useEffect } from 'react';

type GoogleAdsenseProps = {
  slot: string;
  client?: string;
  format?: string;
  responsive?: string;
  style?: React.CSSProperties;
};

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAdsense = ({
  slot,
  client = "ca-pub-2875879574828967",
  format = "auto",
  responsive = "true",
  style = { display: "block" }
}: GoogleAdsenseProps) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div style={{ margin: '2rem auto', textAlign: 'center', maxWidth: '100%', overflow: 'hidden' }}>
      <p style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Advertisement</p>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default GoogleAdsense;
