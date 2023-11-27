import '../styles/global.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { GlobalStyles } from 'twin.macro';
// eslint-disable-next-line sort-imports
import SEO from '../../next-seo.config';

/** アプリケーション ルート コンポーネント */
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <DefaultSeo {...SEO} />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);
App.displayName = 'App';

export default App;
