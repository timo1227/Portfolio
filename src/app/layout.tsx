import { cn } from '@/lib/utils';

import '@/styles/globals.css';

import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'software engineer',
    'computer science',
    'software',
    'engineer',
    'website',
    'Next.js',
    'React',
  ],
  authors: [
    {
      name: 'Timothy Estrada',
    },
  ],
  creator: 'timo1227',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.className
        )}
      >
        <div className='relative flex min-h-screen flex-col bg-background'>
          <SiteHeader />
          <main className='flex-1'>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
