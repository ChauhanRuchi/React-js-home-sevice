let initstate = {};

const service = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_SERVICE":
      return { ...state, subservicedata: action.payload };
    case "GET_CURRENT_SERVICE":
      return { ...state, subservicedata: action.payload };
    case "GET_CURRENT_MAINSERVICE":
      return { ...state, mainservicedata: action.payload };
    case "SET_CURRENT_MAINSERVICE":
      return { ...state, mainservicedata: action.payload };
    case "GET_CURRENT_SUBSERVICE":
      return { ...state, subservicedataall: action.payload };
      case "EDIT_CURRENT_SERVICE":
        return { ...state, editmainservice: action.payload };
        case "DELETE_CURRENT_SERVICE":
          return { ...state, deletemainservice: action.payload };
    default:
      return state;
  }
};
export default service;
