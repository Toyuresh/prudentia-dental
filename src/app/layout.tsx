import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google"
import './globals.css'
import ClientLayout from './client-layout'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Prudentia Micro Dental Care',
    template: '%s | Prudentia Dental'
  },
  description: 'Premium dental care with advanced micro-dentistry techniques',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Prudentia Micro Dental Care',
    description: 'Your trusted dental care provider',
    url: 'https://www.prudentiamicrodental.in/',
    siteName: 'Prudentia Dental',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prudentia Micro Dental Care',
    description: 'Your trusted dental care provider',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning >
      
      <body>
        <GoogleTagManager gtmId="GTM-5W447RDS" />
        <GoogleAnalytics gaId="G-ZJ4L6STY2Y" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}