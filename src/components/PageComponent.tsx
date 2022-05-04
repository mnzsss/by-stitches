import { Theme } from '@/core/interfaces/Theme';
import { ThemeProvider, ThemeState } from '@/core/theme/ThemeProvider';
import NextHead from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';

export type PageComponentProps = {
  $CONFIG?: any;
  theme: Theme[];
  themeState: ThemeState;
};

function PageComponent({
  theme,
  themeState,
  children,
  $CONFIG,
}: PageComponentProps & { children: ReactNode }) {
  return (
    <>
      <NextHead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </NextHead>
      <ThemeProvider
        theme={theme}
        fontsContainer={NextHead}
        themeState={themeState}
      >
        {children}

        {$CONFIG?.footer?.hide ? null : <Footer {...$CONFIG?.footer} />}
      </ThemeProvider>
    </>
  );
}

export default PageComponent;
