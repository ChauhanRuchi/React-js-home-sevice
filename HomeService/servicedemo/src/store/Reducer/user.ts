let initstate = {};

const user = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, data: action.payload, signup: true };
    case "SET_CURRENT_USER_ERROR":
      return { ...state, data: action.payload, signup: false };
    case "GET_CURRENT_USER":
      return { ...state, data: action.payload, login: true };
      case "GET_USER_DATA":
        return { ...state, getuserdata: action.payload};
    case "LOGOUT_USER":
      return { ...state, data: action.payload, login: false };
    default:
      return state;
  }
};
export default user;
