import React from "react";
import faker from "faker";
import UserHeader from "./userHeader";

const Item = ({ post }) => {
  // console.log(user, post);
  return (
    <div className="item" key={post.id}>
      <img
        alt="avatar"
        className="ui avatar image"
        src={faker.image.avatar()}
      />
      {/* <i class="user circle  icon"></i> */}
      <div className="content">
        <p className="header">{post.title}</p>
        <p className="meta">
          - written by
          <b>
            <UserHeader id={post.userId} />
          </b>
        </p>
        {/* <div className="description">{post.body}</div> */}
      </div>
    </div>
  );
};

export default Item;
