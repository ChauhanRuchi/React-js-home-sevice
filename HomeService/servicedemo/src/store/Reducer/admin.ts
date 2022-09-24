let initstate = {};

const admin = (state = initstate, action: any) => {
  switch (action.type) {
    case "GET_CURRENT_ADMIN":
      return { ...state, data: action.payload, login: true };
    case "CURRENT_CHANGEPASSWORD":
    return { ...state, datapassword: action.payload ,changepassword:true};
    case "CLEAR_PASSWORD":
      return { ...state, datapassword: action.payload ,changepassword:false};
    case "LOGOUT_ADMIN":
      return { ...state, data: action.payload, login: false };

    default:
      return state;
  }
};
export default admin;
