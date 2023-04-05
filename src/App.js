import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NewPostForm from "./components/NewPostForm";
import PostList from "./components/PostList";

function App() {
  const [loader, setLoader] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PostList />} />
          <Route path="/createPost" element={<NewPostForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
