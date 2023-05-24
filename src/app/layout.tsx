import { Metadata } from 'next';
import { Bellefair, Barlow_Condensed } from 'next/font/google';

import '@/style/globals.css';
import home from '@/style/home.module.scss';

import Providers from '@/redux/provider';
import Header from '@/components/layout/Header';

const bellefair = Bellefair({ weight: '400', subsets: ['latin'], variable: '--font-bellefair' });
const barlowCondensed = Barlow_Condensed({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Space Tourism Website',
  description: 'Space Tourism',
};

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${bellefair.variable} ${barlowCondensed.className} ${home.homeBg}`}>
          <Header />
          <main className={home.flexGrow}>
            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
};
