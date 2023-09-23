import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import AppProvider from '@/components/AppProvider';
import { DEVELOPER_NAME } from '@/utils/constants';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: DEVELOPER_NAME,
  description: `Developer Portfolio of ${DEVELOPER_NAME}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={dmSans.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
