import type { Metadata } from 'next';
import { DM_Sans, Big_Shoulders_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const bigShouldersDisplay = Big_Shoulders_Display({
  variable: '--font-big-shoulders-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Noah Rodgers',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bigShouldersDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <div className="max-w-full lg:max-w-[80%] xl:max-w-[1000px] mx-auto px-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
