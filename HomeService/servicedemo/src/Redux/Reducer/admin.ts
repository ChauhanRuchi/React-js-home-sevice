let initstate = {};

const admin = (state = initstate, action: any) => {
  switch (action.type) {
    case "GET_CURRENT_ADMIN":
      return { ...state, data: action.payload };
  
    default:
      return state;
  }
};
export default admin;
