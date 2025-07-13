import type { Metadata } from "next";
import "./globals.css";
import Header from "./articles/Header";
import Footer from "./articles/Footer";

export const metadata: Metadata = {
  title: "nextBlog",
  description: "Next.jsで作成したブログです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className='bg-slate-600 text-slate-50 w-full md:w-4/5 m-auto'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
