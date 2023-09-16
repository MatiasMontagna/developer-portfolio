'use client';

import { ThemeProvider } from 'next-themes';

export default function AppProvider({ children }:{
  children: React.ReactNode
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
