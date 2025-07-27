import { getDetailArticle } from "@/blogApi";
import Image from "next/image";
import React from "react";
import DeleteButton from "@/app/components/DeleteButton";

const Article = async ({ params }: { params: { id: string } }) => {
  const res = await getDetailArticle(params.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        alt=""
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${res.id}`}
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mx-10 ">{res.title}</h1>
      {/* line-height:1.625を与える */}
      <div className="text-lg leading-relaxed text-justify">
        <p>{res.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={res.id} />
      </div>
    </div>
  );
};

export default Article;
