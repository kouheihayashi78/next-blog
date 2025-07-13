import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
    const res = await fetch(`http://localhost:3001/posts`, {cache: "force-cache"}); // SSR
    // {cache: "force-cache"} → SSG
    // {next: {revalidate: 10}} → ISR

    const articles = await res.json(); // json形式にシリアライズ(文字列化)
    return articles;
};