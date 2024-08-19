import "@/styles/globals.css";
import { polyfillPromiseWithResolvers } from "@/utils/polyfilsResolver";

import 'core-js/full/promise/with-resolvers.js';


polyfillPromiseWithResolvers();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
