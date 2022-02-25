import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const theme = extendTheme({
  colors: {
    brand: {
      100: "#81B29A",
      200: "#FFD82B",
      300: "#FFEE2E",
      400: "#D0C557"
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
            <ChakraProvider theme={theme}>
                    <Head>
                        <title>InLight App</title>
                        <meta
                            name="description"
                            content="Generated by InLight App"
                        />
                        <link rel="icon" href="/favicon.ico" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet" />
                    </Head>
                    <Nav />
                    <Component {...pageProps} />
                    <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </ChakraProvider>
    );
}

export default MyApp;
