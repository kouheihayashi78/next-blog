"use client";
import { deleteArticle } from "@/blogApi";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await deleteArticle(id);

    if (res.ok) {
      alert("削除は成功しました。");
      router.push("/");
      router.refresh();
    } else {
      alert("削除は失敗しました。");
    }
  };
  return (
    <button
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 cursor-pointer transition"
      onClick={handleDelete}
    >
      削除
    </button>
  );
};

export default DeleteButton;
