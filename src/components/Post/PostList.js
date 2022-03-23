import React, { Component } from "react";
import PostData from "../data/drinks.json";

class PostList extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        {PostData.map((postDetail, index) => {
          return (
            <>
              <h1>{postDetail.name}</h1>
              <h1>{postDetail.rating}</h1>
              <p>{postDetail.price}</p>
              <img>{postDetail.src}</img>
              <h2>{postDetail.title}</h2>
            </>
          );
        })}
      </div>
    );
  }
}

export default PostList;
