let initstate = {};

const user = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, data: action.payload ,login:true};
    case "GET_CURRENT_USER":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default user;
