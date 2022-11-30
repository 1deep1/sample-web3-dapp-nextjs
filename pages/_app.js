import Head from 'next/head'
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import '../assets/styles/global.css'

function MyApp({ Component, pageProps }) {
  const getLibrary = (provider) => {
		const library = new Web3Provider(provider, 'any');
		library.pollingInterval = 15000;
		return library;
	};

  return (
    <>
    <Head>
      <title>{Component.title} - NFT Project</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="description" content="NFT description" />
      <meta name="keywords" content="nft, opensea, web3, blockchain, ether, 0xNFT, bitcoin" />
    </Head>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
    </>
  );
}

export default MyApp;
