import React, { useState, useEffect } from 'react'
import './Posts.css'

import Post from '../../components/Post/Post'
import Layout from '../../components/shared/Layout/Layout'

const Posts = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts)
    }
  }, [])

  const postsJSX = queriedPosts.map((post, index) =>
    <Post _id={post.id} name={post.name} imgURL={post.imgURL} />)

  return (
    <div className='posts'>
      <h3>placeholder text</h3>
    </div>
  )
}

export default Posts 