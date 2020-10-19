import React, { Component } from "react";
import Item from "./item";
import { connect } from "react-redux";
import { fetchAll } from "../actions";

class Lists extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }
  render() {
    // console.log(this.props);
    return (
      <div className="ui middle aligned selection celled list ">
        {this.props.posts.map((post) => {
          return <Item post={post} key={post.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("POSTS", state);
  // let totalPages = state.totalRecords;
  let last = state.limit * state.currentPage;
  let first = last - state.limit;

  return { posts: state.posts.slice(first, last) };
};

export default connect(mapStateToProps, { fetchAll })(Lists);
