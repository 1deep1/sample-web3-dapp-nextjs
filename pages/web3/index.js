import Head from 'next/head'
import VanillaConnectionComponent from './VanillaConnectionComponent';
import Web3ReactConnectionComponent from './Web3ReactConnectionComponent';

export default function Web3() {
  return (
    <>
      <Head>
        <title>Web3 Connections</title>
      </Head>
      <Web3ReactConnectionComponent />
      <VanillaConnectionComponent />
    </>
  )
}
