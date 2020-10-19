import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  if (!props.user) return <div></div>;

  return <div>{props.user.name}</div>;
};

const mapStateToProps = (state, ownprops) => {
  let nm = state.users.find((user) => user.id === ownprops.id);
  return { user: nm };
};

export default connect(mapStateToProps)(UserHeader);
