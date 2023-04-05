import React, { useState } from "react";
import axios from "axios";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      body: body,
      userId: 1,
    }).then((response) => {
      console.log(response.data);
      setTitle("");
      setBody("");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea id="body" value={body} onChange={(event) => setBody(event.target.value)} />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default NewPostForm;
