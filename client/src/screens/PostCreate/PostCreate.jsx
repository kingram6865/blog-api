import React, { useState } from 'react'
import './PostCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    imgURL: '',
    : ''
  })
}
