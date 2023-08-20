import { Inter } from 'next/font/google'
import Head from 'next/head'
import Dashboard from '@/pages/dashboard'
import SideMenu from '@/components/SideMenu/SideMenu'
import Header from '@/components/Header/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale-1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Header/>
        <SideMenu/>
        <Dashboard />
      </main>
    </>
  )
}
