import React from 'react'

const createBlogPage = () => {
  return (
    // 100vh
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4 mt-1'>ブログ新規作成</h2>
      <form className='bg-slate-200 p-6 rounded shadow-lg'>
        <div className='mb-4'>
            <label className="text-sm text-black text-bold mb-2">URL</label>
            <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none" />
        </div>
        <div className='mb-4'>
            <label className="text-sm text-black text-bold mb-2">タイトル</label>
            <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none" />
        </div>
        <div className='mb-4'>
            <label className="text-sm text-black text-bold mb-2">本文</label>
            <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none" />
        </div>

        <button type='submit' className='py-2 px-4 border rounded-md bg-blue-300 text-center'>投稿</button>
      </form>
    </div>
  )
}

export default createBlogPage
