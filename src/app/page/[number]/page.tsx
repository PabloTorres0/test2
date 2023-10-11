import React from 'react'
import type { Metadata } from 'next'
import PostList from '@/components/PostList'   
import PostPagination from '@/components/PostPagination'
import { notFound } from 'next/navigation'
import { allPosts, Post } from 'contentlayer/generated'
import { getPagination } from '@/utils/Pagination'


const posts : Post[] = allPosts.sort((a,b)=>b.date.localeCompare(a.date))

interface Props {
  params: {number: string;}
}

export const generateStaticParams = ()=>{ 

 return Array.from({length: posts.length}).map((_, index) => ({
  number:`${index+1}`,
 }))
 }


const LayoutPages = ({params}:Props) => {

  

  let arrayCurrentPost
  let totalPagesNumber


  try {
     const {currentPost,totalPages}=getPagination(posts,2, params.number)
    arrayCurrentPost = currentPost
    totalPagesNumber = totalPages
  } catch (error) {
    
    notFound();
  }


  

  return (
    <div>
    <div className="grid gap-4">
      <PostList posts={arrayCurrentPost}/>
      {totalPagesNumber > 1 &&  <PostPagination totalPages={totalPagesNumber} currentPage={parseInt(params.number)}/>} 
    </div>
  </div>
  )
}

export default LayoutPages