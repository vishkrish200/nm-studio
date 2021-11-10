import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";
import { createContext } from "react";
import { fetchAPI } from "@/lib/api";
import App from "next/app";
import Head from "next/head";

export const GlobalContext = createContext({});

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    scrollbar-width: none;
    overflow-x:none;
    scroll-behavior: smooth;
  }
  strong, b {
    font-weight: bold;
}
 h2, h3, h4, h5, h6 {
  font-weight: normal;
  color:white;
}
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: "Gotham",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* font-family:'Gothic',sans-serif; */

  }`;

const MyApp = ({ Component, pageProps }) => {
  const { categories } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Gotham/GothamMedium.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="shortcut icon" href="/NM_Studio_Logo(OnBlack) (1).svg" />
        <title>NM Studio - Design is Everything</title>
      </Head>
      <GlobalContext.Provider value={categories}>
        <GlobalStyles />
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const categories = await fetchAPI("/categories");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { categories } };
};

export default MyApp;
