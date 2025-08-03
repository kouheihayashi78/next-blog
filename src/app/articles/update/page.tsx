"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const Update = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [updateId, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // URLパラメータからデータを取得
  useEffect(() => {
    if (!searchParams) return;

    const urlId = searchParams.get("id");
    const urlTitle = searchParams.get("title");
    const urlContent = searchParams.get("content");

    if (urlId) setId(urlId);
    if (urlTitle) setTitle(urlTitle);
    if (urlContent) setContent(urlContent);
  }, [searchParams]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページのリロード防ぐ
    setLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${API_URL}/api/${updateId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updateId, title, content }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "更新に失敗しました");
      }

      alert("更新は成功しました。");
      router.push("/");
    } catch (error) {
      console.error("更新エラー:", error);
      const errorMessage =
        error instanceof Error ? error.message : "更新に失敗しました";
      alert(`更新に失敗しました: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4 mt-1">ブログ更新</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleUpdate}
      >
        <div className="mb-4">
          <label className="text-sm text-black text-bold mb-2">URL</label>
          <input
            type="text"
            value={updateId}
            onChange={(e) => setId(e.target.value)}
            readOnly
            className="shadow border rounded w-full py-2 px-3 text-gray-500 bg-gray-100 leading-tight focus:outline-none cursor-not-allowed"
          />
          <p className="text-xs text-gray-500 mt-1">※URLは変更できません</p>
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

export default Update;
