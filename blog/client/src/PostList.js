// @ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const queryURL = window.window.REACT_APP_QUERY_SERVICE_URL;

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get(`${queryURL}/posts`);
    console.log(`data is : ${res.data}`);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = posts && Object.keys(posts).length > 0
    ? Object.values(posts).map((post) => (
        <div
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
          key={post.id}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments || []} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      ))
    : <p>Loading posts...</p>;

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
