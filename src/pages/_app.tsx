import type { AppProps } from 'next/app';

import 'assets/styles/tailwind.scss';
import 'assets/styles/main.scss';
import NotificationProvider from 'components/Shared/Notifications/NotificationProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NotificationProvider>
            <Component {...pageProps} />
        </NotificationProvider>
    );
}

export default MyApp;
