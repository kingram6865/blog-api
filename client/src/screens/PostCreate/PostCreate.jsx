import React, { useState } from "react";
import "./PostCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    content: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="title"
          value={post.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="author"
          value={post.author}
          name="author"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-content"
          placeholder="content"
          value={post.content}
          name="content"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={post.imgURL}
          name="imgURL"
          required
          autoFocus
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
  );
};

export default PostCreate
