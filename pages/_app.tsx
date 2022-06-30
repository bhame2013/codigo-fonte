import Head from "next/head";
import { AppProps } from "next/app";

import { QueryClientProvider, QueryClient } from "react-query";

import { CartProvider } from "src/contexts/CartContext";
import { AuthProvider } from "src/contexts/Auth/authContext";
import { ProfileProvider } from "src/contexts/Profile";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "../styles/reset.css";
import "../styles/fonts.css";

import { GlobalStyle } from "../styles/global";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const queryCliente = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ProfileProvider>
      <AuthProvider>
        <QueryClientProvider client={queryCliente}>
          <CartProvider>
            <Head>
              <title>Master of Miniatures</title>
              <link
                rel="canonical"
                href="https://master-of-miniatures.vercel.app"
              />
              <link rel="icon" href="/favicon.ico" />

              <meta
                httpEquiv="Content-Type"
                content="text/html; charset=utf-8"
              />
              <meta
                name="description"
                content="Master of Miniatures description."
              />
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="robots" content="index, follow" />
              <meta name="referrer" content="origin" />
              <meta name="mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="author" content="Codie" />
              <meta name="rating" content="general" />
              <meta name="keyboard-shortcuts-preference" content="all"></meta>
            </Head>

            <GlobalStyle />

            <Component {...pageProps} />
          </CartProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ProfileProvider>
  );
};

export default App;
