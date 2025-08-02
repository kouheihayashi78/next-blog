"use client";
// import { createArticle } from "@/blogApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページのリロード防ぐ
    setLoading(true);

    if (id.length === 0 || title.length === 0 || content.length === 0) {
      alert("入力してください");
      setLoading(false);
      return;
    }
    // const res = await createArticle(id, title, content);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(`${API_URL}/api/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, content }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "記事の作成に失敗しました");
      }

      const data = await response.json();
      console.log("記事作成成功:", data);
      alert("記事が正常に作成されました！");
      router.push("/"); // 一覧ページにリダイレクト
    } catch (error) {
      console.error("記事作成エラー:", error);
      const errorMessage =
        error instanceof Error ? error.message : "記事の作成に失敗しました";
      alert(`記事の作成に失敗しました: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    // 100vh
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4 mt-1">ブログ新規作成</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-sm text-black text-bold mb-2">URL</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm text-black text-bold mb-2">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm text-black text-bold mb-2">本文</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className={`py-2 px-4 border rounded-md text-center transition 
            ${
              loading
                ? "bg-gray-100 cursor-not-arrowed w-16 h-16 border-t-4 rounded-full animate-spin"
                : "bg-blue-400 hover:bg-blue-500"
            }
          `}
          disabled={loading}
        >
          {`${loading ? "" : "投稿"}`}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
