import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "@common/AppTheme";
import { PageTransition } from "@common/PageTransition";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";
import "@fontsource/mulish/900.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <PageTransition />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}

export default MyApp;
