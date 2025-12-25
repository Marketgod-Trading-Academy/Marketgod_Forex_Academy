import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// In Vite, environment variables must start with VITE_
const PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    if (!PIXEL_ID) {
      console.warn("Facebook Pixel ID is not set. Make sure VITE_FACEBOOK_PIXEL_ID is in your .env file.");
      return;
    }

    // Initialize Facebook Pixel if not already initialized
    if (!(window as any).fbq) {
      const f = window as any;
      if (f.fbq) return;
      const n: any = (f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      const t = document.createElement('script');
      t.async = true;
      t.src = 'https://connect.facebook.net/en_US/fbevents.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode?.insertBefore(t, s);

      n('init', PIXEL_ID);
    }

    // Track PageView on route change
    (window as any).fbq('track', 'PageView');
  }, [location]);

  return null;
};

export default FacebookPixel;
