'use client'
import { MDXRemote } from 'next-mdx-remote';
import React, { useEffect, useState } from 'react';
import { ArrowLeftCircle } from 'react-feather';
import 'github-markdown-css/github-markdown.css';  // Import GitHub Markdown 
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';

const Blog: React.FC = () => {
  const [mdxSource, setMdxSource] = useState<any>();
  const path = usePathname()

  useEffect(() => {
    const getBlog = async () => {
      const res = await fetch(`/api/${path}`.replace('blog', 'getBlog'))
      const data = await res.json();
      setMdxSource(data.mdxSource);
    }
    getBlog()
  }, [path]);

  return (
    <>
      {mdxSource && path &&
        <div className="markdown-body lg:p-20 p-5 min-h-screen">
          <Link className='markdown ' style={{ backgroundColor: '#0d1117' }} href={'/'}><ArrowLeftCircle style={{ fontSize: 20 }} /></Link>
          <MDXRemote {...mdxSource} />
        </div>
      }
    </>
  )
};

export default Blog;
