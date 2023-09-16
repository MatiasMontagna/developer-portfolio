import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import AppProvider from '@/components/AppProvider';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
