let initstate = {};

const service = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_SERVICE":
      return { ...state, data: action.payload };
    case "GET_CURRENT_SERVICE":
      return { ...state, data: action.payload };
      case "GET_CURRENT_MAINSERVICE":
        return { ...state, data: action.payload };
        case "SET_CURRENT_MAINSERVICE":
          return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default service;
