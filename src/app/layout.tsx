import './globals.css';
import { Metadata } from 'next';
import { NextLayout, NextProvider } from './providers';

export const metadata: Metadata = {
  title: 'Lifin',
  description: '일상에 핀을 더해보자 라이핀📌',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
