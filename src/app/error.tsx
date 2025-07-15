"use client";
import React from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
}
// resetはnextが用意している関数でえらバウンダリーの状態をクリア、エラー発生したコンポーネントを再レンダリング
const Error = ({ error, reset }: ErrorProps) => {
  return (
    <>
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 p-3 rounded shadow--md max-w-md mx-auto">
        <h3 className="font-bold mb-2">エラーが発生しました</h3>
        <p>{error.message}</p>
      </div>
      <button 
        onClick={() => reset()} 
        className="border border-blue-300 bg-blue-500 hover:bg-blue-700 transition duration-200 mt-4 p-3 rounded shadow--md max-w-md mx-auto block">
          もう一度試す
      </button>
    </>
  );
};

export default Error;
