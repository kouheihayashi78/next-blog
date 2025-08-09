// import { getDetailArticle } from "@/blogApi";
import Image from "next/image";
import React from "react";
import DeleteButton from "@/app/components/DeleteButton";
import UpdateButton from "@/app/components/UpdateButton";
import { notFound } from "next/navigation";

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  // const res = await getDetailArticle(params.id);

  // next15からparamsが非同期になったため、awaitが必須でそこからidを取り出す
  const { id } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${API_URL}/api/blog/${id}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("記事の取得に失敗しました");
  }

  const data = await response.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        alt=""
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${data.id}`}
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mx-10 ">{data.title}</h1>
      {/* line-height:1.625を与える */}
      <div className="text-lg leading-relaxed text-justify">
        <p>{data.content}</p>
      </div>
      <div className="text-right mt-3">
        <UpdateButton id={data.id} title={data.title} content={data.content} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default Article;
