import TYPE from "../types/home";
const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE.RES_HOME_PAGE_DATA:
      return resData(state, action);
    case TYPE.FAIL_DATA:
      return resData(state, action);
    case TYPE.EMPTY_HOME_DATA:
      return resData(state, action);

    default:
      return state;
  }
}

function resData(state, action) {
  const { data } = action;
  return data;
}
