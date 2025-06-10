import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ClerkProvider,
} from '@clerk/nextjs'


export const metadata = {
  title: "BNR Holdings",
  description: "글로벌 유통 및 물류 기업 비앤알홀딩스 공식 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
