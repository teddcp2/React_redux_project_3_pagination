import React from "react";
import { connect } from "react-redux";
import { changeLimit } from "../actions";
const Dropdown = (props) => {
  return (
    <select
      className="ui dropdown"
      onChange={(e) => props.changeLimit(e.target.value)}
      value={props.limit}
    >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">40</option>
      {/* <option value="30">40</option> */}
      <option value="50">50</option>
    </select>
  );
};

const mapStateToProps = (state) => {
  // console.log("LISTS", state);
  // let totalPages = state.totalRecords;
  // let last = state.limit * state.currentPage;
  // let first = last - state.limit;
  // console.log(first, last);
  return { limit: state.limit };
};

export default connect(mapStateToProps, { changeLimit })(Dropdown);
