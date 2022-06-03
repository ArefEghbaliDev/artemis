import type { AppProps } from 'next/app';

import 'assets/styles/tailwind.scss';
import 'assets/styles/main.scss';
import NotificationProvider from 'services/context/NotificationContext/NotificationProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NotificationProvider>
            <Component {...pageProps} />
        </NotificationProvider>
    );
}

export default MyApp;
