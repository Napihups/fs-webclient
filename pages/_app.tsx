import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Apptheme } from "@common/AppTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Apptheme>
      <Component {...pageProps} />
    </Apptheme>
  );
}

export default MyApp;
