import '../styles/global.css';

import ThemeProvider from '@modules/theme/context/theme-context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const interFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `Home | Chat App`,
    template: `%s | Chat App`,
  },
  description: 'Simple Chat App',
  authors: [
    {
      name: 'Faustino Zanetto',
      url: 'https://www.faustinozanetto.com',
    },
  ],
  creator: 'Faustino Zanetto',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFont.variable} suppressHydrationWarning>
      <body className="bg-background-50 dark:bg-background-900 overflow-x-hidden font-sans antialiased scroll-smooth">
        <ThemeProvider attribute="class" defaultTheme="system" enableColorScheme enableSystem>
          <main className="flex min-h-screen flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
