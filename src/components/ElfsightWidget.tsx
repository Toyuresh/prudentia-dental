'use client';
import { useEffect } from 'react';

export default function ElfsightWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-8a7bc898-3e9c-4985-828f-b59a62d9b27f"
      data-elfsight-app-lazy
    />
  );
}