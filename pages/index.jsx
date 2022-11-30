import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

Home.title = 'Home';

export default function Home() {
  return (
    <main>
      <h1 className='text-4xl font-white'>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p>
        Get started!
        <Link href='/web3' className='text-4xl'>Web3</Link>
      </p>
    </main>
  )
}
