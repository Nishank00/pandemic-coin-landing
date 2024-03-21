import { Archivo } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Footer from "./components/common/footer";
import MainNav from "./components/common/main-nav";
import "aos/dist/aos.css";
import Head from "next/head";
import {AppContextProvider} from '../context/appContext/appContextProvider'
import 'react-toastify/dist/ReactToastify.css';
import PrivateSaleContextProvider from '../context/privateSaleContext/PrivateSaleContextProvider'
import Web3ModalWrapper from '../app/components/web3ModalWrapper'
import ClientLayoutWrapper from './components/common/ClientLayoutWrapper'

const arc = Archivo({ subsets: ["latin"] });

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <Head>
        <title>Pandemic Coin</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body className={`${arc.className} flex flex-col min-h-screen`} >
        <ClientLayoutWrapper>
       <AppContextProvider>
        <Web3ModalWrapper>
        <PrivateSaleContextProvider>
          
        <MainNav />
            {children}
          <Footer />
          </PrivateSaleContextProvider>
       </Web3ModalWrapper>
       </AppContextProvider>
       </ClientLayoutWrapper>
       
      
      </body>
    </html>
  );
}
