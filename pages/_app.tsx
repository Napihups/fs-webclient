import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PageTransition } from "@common/PageTransition";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";
import "@fontsource/mulish/900.css";
import React from "react";
import { AppThemeProvider } from "@common/AppTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppThemeProvider>
        <div className="fixed z-50">
          <PageTransition />
        </div>
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  );
}

export default MyApp;
