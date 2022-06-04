import React from 'react';
import type { AppProps } from 'next/app';

import 'assets/styles/tailwind.scss';
import 'assets/styles/main.scss';
import NotificationProvider from 'services/context/NotificationContext/NotificationProvider';

import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/react-query/queryClient';
import { Provider } from 'react-redux';
import { store } from 'services/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <NotificationProvider>
                        <Component {...pageProps} />
                    </NotificationProvider>
                </QueryClientProvider>
            </Provider>
        </React.StrictMode>
    );
}

export default MyApp;
