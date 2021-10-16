import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { DataProvider } from '../context/auth';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <DataProvider>
                <Component {...pageProps} />
                <GlobalStyle />
            </DataProvider>
        </ThemeProvider>
    );
};

export default MyApp;
