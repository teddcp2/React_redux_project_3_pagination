import { combineReducers } from "redux";

const TotalRecordReducer = (total = 0, action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload.total;
  }
  return total;
};

const limitReducer = (limit = 10, action) => {
  if (action.type === "CHANGE_LIMIT") return action.payload.val;
  return limit;
};

const CurrentPageReducer = (current = 1, action) => {
  if (action.type === "PAGE_CHANGE") {
    return action.payload.pageNum;
  }
  if (action.type === "PAGINATION") {
    return action.payload.value;
  }
  if (action.type === "CHANGE_LIMIT") return action.payload.currentPage;
  return current;
};

const postsReducer = (posts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload.data;
  }
  return posts;
};

const usersReducer = (users = [], action) => {
  // console.log("payload..", users === action.payload, action.payload);
  if (action.type === "FETCH_USER") {
    let newRes = [...users, action.payload];
    // console.log(newRes);
    return newRes;
  }
  return users;
};

// const pageReducer = (pageDetails = {}, action) => {
//   if (action.type === "PAGINATION") {
//     return action.payload;
//   }

//   return pageDetails;
// };

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  totalRecords: TotalRecordReducer,
  currentPage: CurrentPageReducer,
  limit: limitReducer
  // page: pageReducer
});
