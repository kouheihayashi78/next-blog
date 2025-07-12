import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center border-b border-slate-60 py-4 px-10'>
        <h1 className="text-2xl font-extrabold">
            <Link href="/">Next blog</Link>
        </h1>
        <nav className='text-sm font-medium'>
            <Link 
                href="/articles/new"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                記事を書く
                </Link>
        </nav>
    </header>
  )
}

export default Header
