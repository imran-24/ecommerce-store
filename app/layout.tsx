import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer'
import ModalProvider from '@/provider/modal-provider'
import ToastProvider from '@/provider/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  )
}
