import React, { Component } from "react";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    alert("Error: " + error);
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>

        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;

/*
App.js

import Posts from "./Posts";

function App() {
  return <Posts />;
}

export default App;

Commands:

npx create-react-app blogapp
cd blogapp
npm start
*/
