import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    }
  }, []);
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      {loading ?
        <Loading />
        : <Component {...pageProps} />
      }
      <Analytics />
    </ChakraProvider>
  );
}
