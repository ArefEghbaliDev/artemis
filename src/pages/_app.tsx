import type { AppProps } from 'next/app';

import 'assets/styles/tailwind.scss';
import 'assets/styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
