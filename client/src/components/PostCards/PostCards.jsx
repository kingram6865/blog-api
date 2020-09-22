import React, { Component } from 'react';
import './PostCards.css';
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

class PostCards extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await getPost()
    this.setState({posts})
  }

  render() {

    const CARDS = this.state.posts.reverse().map((post, index) =>
      index ? <PostCard _id={post._id} title={post.title} imgURL={post.imgURL} key={index} /> : null
    )

    return (
      <dvi className="post-cards">
        <div className="latest">LATEST</div>
        <div className="cards">
          {CARDS}
        </div>
      </dvi>
    )
  }
}

export default PostCards