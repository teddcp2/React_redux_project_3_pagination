import React from "react";
import { connect } from "react-redux";
import { getDetails } from "../actions/buttonAction";

const Pagination = (props) => {
  let num = Math.ceil(props.totalPages / props.limit);
  // console.log(num);
  let values = [];
  if (!num) values = [0];
  else values = [...Array(num).keys()];
  // console.log(values);

  let checkLeft = props.currentPage === 1 ? "disabled" : "";
  let checkRight =
    props.currentPage === values[values.length - 1] + 1 ? "disabled" : "";

  return (
    <div className="ui buttons">
      <button
        className={`ui button ${checkLeft}`}
        onClick={() => props.getDetails(1)}
      >
        &lt;&lt;
      </button>
      <button
        className={`ui button ${checkLeft}`}
        onClick={() => props.getDetails(props.currentPage - 1)}
      >
        &lt;
      </button>
      {values
        .slice(props.currentPage - 1, props.currentPage + 3)
        .map((button) => {
          let classes = props.currentPage === button + 1 ? "active" : "";

          return (
            <button
              className={`ui button ${classes}`}
              key={button + 1}
              onClick={() => props.getDetails(button + 1)}
            >
              {button + 1}
            </button>
          );
        })}
      <button
        className={`ui button ${checkRight}`}
        onClick={() => props.getDetails(props.currentPage + 1)}
      >
        &gt;
      </button>
      <button
        className={`ui button ${checkRight}`}
        onClick={() => props.getDetails(values[values.length - 1] + 1)}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("Pginatio", state);
  return {
    currentPage: state.currentPage,
    totalPages: state.totalRecords,
    limit: state.limit
  };
};
export default connect(mapStateToProps, { getDetails })(Pagination);
