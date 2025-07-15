import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// プロパティに対する型定義（reactコンポーネントはpropsとして受け取る型を定義する必要がある）
type ArticleList = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleList) => {
  return (
    <div>
      {articles.map((article) => (
        <article className="shadow my-4 flex flex-col" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            {/* <Image
                alt=""
                src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                width={1280}
                height={300}
            /> */}
          </Link>

          <div className="bg-white flex flex-col justify-start p-6">
            <Link
              href={`articles/${article.id}`}
              className="text-blue-700 text-sm font-bold uppercase pb-4"
            >
              Technology
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-800 text-3xl font-bold hover:text-gray-700 pb-4"
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3">Published on {article.createdAt}</p>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-800 pb-6"
            >
              {article.content}
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="uppercase text-pink-800 hover:text-black"
            >
              続きを読む <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
