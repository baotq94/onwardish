import { appWithTranslation } from "next-i18next";
import siteMetadata from "data/siteMetadata";
import "katex/dist/katex.css";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Analytics from "src/components/analytics";
import seo from "src/seo.config";
import "src/styles/globals.css";
import "src/styles/prism.css";
import LayoutWrapper from "../components/LayoutWrapper";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { ConfigProvider } from "antd";
import theme from "../lib/themeConfig";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="theme-first"
        themes={["theme-first", "theme-second"]}
      >
        <LayoutWrapper>
          <DefaultSeo {...seo} />
          <ConfigProvider theme={theme}>
            <Component {...pageProps} />
          </ConfigProvider>
          <Analytics />
          <SocialProfileJsonLd
            type="Person"
            name={siteMetadata.author}
            url={siteMetadata.siteUrl}
            sameAs={[siteMetadata.linkedin]}
          />
        </LayoutWrapper>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
