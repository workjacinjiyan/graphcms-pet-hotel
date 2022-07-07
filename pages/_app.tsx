import 'antd/dist/antd.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react';
import AppLayout from '../components/AppLayout/AppLayout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SessionProvider>
  );
}

export default MyApp;
