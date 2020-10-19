import api from "../api";
import _ from "lodash";

export const fetchAll = () => async (dispatch, getState) => {
  // console.log("hii", getState());
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();

  // let users = getState().posts.map((post) => post.userId);
  // users = _.uniq(users);

  // console.log("user--", users);
  // let res = users.forEach((id) => fetchUsers(id, []));
  // // Promise.all(users.map((id) => fetchUsers(id, res)));
  // console.log("res", res);
  // dispatch({
  //   type: "FETCH_USERS",
  //   payload: res
  // });
};

export const fetchPosts = () => async (dispatch) => {
  let res = await api.get("/posts");
  console.log(res.data.length);
  dispatch({
    type: "FETCH_POSTS",
    payload: {
      data: res.data,
      total: res.data.length,
      limit: 10,
      currentPage: 1
    }
  });
};

export const changeLimit = (val) => {
  return {
    type: "CHANGE_LIMIT",
    payload: {
      val,
      currentPage: 1
    }
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await api.get(`/users/${id}`);
  // console.log(id, response.data);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUsers = async (id, res) => {
//   let response = await api.get(`/users/${id}`);
//   res.push({ name: response.data.name, uid: id });
//   return res;
// };
