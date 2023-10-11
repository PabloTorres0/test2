import { Post } from 'contentlayer/generated';

import React from 'react'
import PostItem from './PostItem';
interface Props {
    posts: Post[];
}

const PostList = ({posts}:Props) => {
  return (
    <>
         {
          posts.map((post) =>
          <div key={post.title}>
            <PostItem post={post}/>
          </div>)
        }
    </>
  )
}

export default PostList