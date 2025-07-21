import type { Metadata } from "next";
import "./globals.css";
import Header from "./articles/Header";
import Footer from "./articles/Footer";
import { Suspense } from "react";
import Loading from "./loading";

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
      <body className="bg-slate-600 text-slate-50 w-full md:w-4/5 m-auto">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow"> {/** 余白があればmainが引き延ばされる */}
            {/* Suspenseでラップして子コンポーネントを読みこむまでローディング画面を表示する */}
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
