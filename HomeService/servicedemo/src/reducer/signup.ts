let initstate = {};

const signup = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, data: action.payload };
    case "GET_CURRENT_USER":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default signup;
