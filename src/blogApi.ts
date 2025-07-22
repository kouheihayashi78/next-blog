import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {
    cache: "no-cache", // SSR
  });
  // {cache: "force-cache"} → SSG
  // {next: {revalidate: 10}} → ISR

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }
  const articles = await res.json(); // json形式にシリアライズ(文字列化)
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 600 }, // ISR(10分おきに再生成)
  });

  if (res.status === 404) {
    // notfoundページに遷移する
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  const article = await res.json();
  return article;
};

export const createArticle = async (id: string, title: string, content: string) => {
    // 現在日時取得
    const currentDateTime = new Date().toISOString();

    const res = await fetch(`http://localhost:3001/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, title, content, createdAt: currentDateTime})
    });

    if(!res.ok){
        throw new Error("登録中にエラーが発生しました。")
    }

    const newArticle = await res.json();
    return newArticle;
}
