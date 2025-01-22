"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Iceberg, Nova_Round } from 'next/font/google'

const iceberg = Iceberg({ subsets: ['latin'], weight: "400" })

const novaRound = Nova_Round({ subsets: ['latin'], weight: "400" })

const Blogs: React.FC = () => {
  const [blogPaths, setBlogPaths] = useState<string[]>(['editors', 'dsfsdf'])

  useEffect(() => {
    const getBlogNames = async () => {
      const res = await fetch(`/api/getBlogNames`)
      const _blogPaths = await res.json();
      setBlogPaths(_blogPaths)
    }
    getBlogNames()
  }, []);
  return (
    <div className="text-center mt-8 flex flex-col items-center">
      <h2 className={`text-2xl font-bold mb-4 text-gray-900 ${iceberg.className}`}>Blogs</h2>
      <ul className='text-left w-full text-xl p-5'>
        {blogPaths.map((path) => {
          return (
            <li key={path}>
              <Link href={`blog/${path}`} className={`text-gray-100 hover:underline ${novaRound.className}`} >{`${path.charAt(0).toUpperCase()}${path.replaceAll('-', ' ').slice(1)}`}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Blogs;
