import Header from '@/components/layout/Header';
import '@/style/globals.css';
import home from '@/style/home.module.scss';

import { Metadata } from 'next';
import { Bellefair, Barlow_Condensed } from 'next/font/google';

const bellefair = Bellefair({ weight: '400', subsets: ['latin'] });
const barlowCondensed = Barlow_Condensed({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Space Tourism Website',
  description: 'Space Tourism',
};

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.className} ${home.homeBg}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};
