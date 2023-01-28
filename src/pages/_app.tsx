import '@tremor/react/dist/esm/tremor.css';
import '@dashy/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
