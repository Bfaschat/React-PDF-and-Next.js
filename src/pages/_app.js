import "@/styles/globals.css";
import { StrictMode, useEffect } from 'react';
import { useRouter } from "next/router";

export const applyPromisePolyfill = () => {
  if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== "undefined") {
      window.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    } else if (typeof global !== "undefined") {
      global.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    }
  }
};


export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Apply the polyfill on the client-side only
    if (typeof Promise.withResolvers === "undefined") {
      applyPromisePolyfill();
    }
  }, []); 
  return <Component {...pageProps} />;
}
