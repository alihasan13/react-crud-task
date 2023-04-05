import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      setPosts(storedPosts);
    } else {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        setPosts(response.data);
        localStorage.setItem("posts", JSON.stringify(response.data));
      });
    }
  }, []);

  function handleDelete(post) {
    const updatedPosts = posts.filter((p) => p.id !== post.id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  }

  function handleCreate(post) {
    const newPost = { ...post, id: Date.now() };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  }

  function handleUpdate(post) {
    const updatedPosts = posts.map((p) => {
      if (p.id === post.id) {
        return post;
      } else {
        return p;
      }
    });
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  }

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <button onClick={() => handleDelete(post)}>Delete</button>
              <button onClick={() => handleUpdate({ ...post, title: "Updated Title" })}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostList;
