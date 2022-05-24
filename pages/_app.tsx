import type { AppProps } from 'next/app';

import 'styles/tailwind.scss';
import 'styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
