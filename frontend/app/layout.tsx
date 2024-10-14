import React from 'react';
import { Providers } from './providers';
import '../src/global.module.css';
import type { Metadata } from 'next';
import { keywords } from '@/constants/keywords';

export const metadata: Metadata = {
  title: 'STOKVEL',
  applicationName: 'STOKVEL',
  authors: [
    {
      name: 'Sibongiseni',
      url: 'https://sibongiseni.xyz'
    },
    {
      name: 'Mindsgn Studio',
      url: 'https://mindsgn.studio'
    }
  ],
  description:
    'Welcome to Stokvel, where seamless connections and smart investments meet.',
  keywords,
  twitter: {
    site: 'https://https://stokfella.vercel.app/',
    title: 'STOKVEL'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
