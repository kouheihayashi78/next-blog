import { Article } from "@/types";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
    article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
    return (
    <article className="shadow my-4 flex flex-col" key={article.id}>
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        {/* <Image
                alt=""
                src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
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
        <Link href={`articles/${article.id}`} className="text-slate-800 pb-6">
          {article.content.length >= 70
            ? article.content.substring(0, 70) + "..."
            : article.content}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="uppercase text-pink-800 hover:text-black"
        >
          続きを読む <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
