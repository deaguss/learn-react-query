"use client"

import './globals.css'
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <div className="">
                <ul className='grid w-full grid-flow-col bg-black justify-end gap-10 py-2 px-5'>
                    <li><button onClick={() => router.push('/')}>users</button></li>
                    <li><button onClick={() => router.push('/login')}>login</button></li>
                    <li><button onClick={() => router.push('/dashboard')}>dashboard</button></li>
                    <li><button onClick={() => router.push('/search')}>search</button></li>
                </ul>
            </div>
            {children}
        </Providers>
      </body>
    </html>
  )
}
