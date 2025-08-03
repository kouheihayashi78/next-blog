"use client";
import { useRouter } from "next/navigation";
import React from "react";

type updateContent = {
  id: string;
  title: string;
  content: string;
};

const UpdateButton = ({ id, title, content }: updateContent) => {
  const router = useRouter();

  const handleUpdate = () => {
    // URLパラメータとしてデータを渡す
    const params = new URLSearchParams({
      id: id,
      title: title,
      content: content,
    });

    router.push(`/articles/update?${params.toString()}`);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-5 cursor-pointer transition"
      onClick={handleUpdate}
    >
      更新
    </button>
  );
};

export default UpdateButton;
