'use client';

import { useTheme } from 'next-themes';

export default function BurgerMenuIcon() {
  const { systemTheme } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={systemTheme === 'dark' ? '#FFFFFF' : '#808080'}
        strokeLinecap="round"
        strokeWidth={2}
        d="M4 18h16M4 12h16M4 6h16"
      />
    </svg>
  );
}
