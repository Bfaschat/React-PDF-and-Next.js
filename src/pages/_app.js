// pages/_app.js
import { useEffect } from 'react';
import { applyPromisePolyfill } from '@/utils/polyfills'; // Adjust the path as needed
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    applyPromisePolyfill();
  }, []);
  
  return <Component {...pageProps} />;
}
