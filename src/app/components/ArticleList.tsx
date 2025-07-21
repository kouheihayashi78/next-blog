import { Article } from "@/types";
import React from "react";
import ArticleCard from "./ArticleCard";

// プロパティに対する型定義（reactコンポーネントはpropsとして受け取る型を定義する必要がある）
type ArticleList = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleList) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
