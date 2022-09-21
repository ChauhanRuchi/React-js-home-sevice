let initstate = {};

const service = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_SERVICE":
      return { ...state, subservicedata: action.payload };
    case "GET_SEARCHBYID":
      return { ...state, getsearchbyid: action.payload };
    case "GET_CURRENT_SERVICE":
      return { ...state, subservicedata: action.payload };
    case "GET_CURRENT_MAINSERVICE":
      return { ...state, mainservicedata: action.payload };
    case "SET_CURRENT_MAINSERVICE":
      return { ...state, createsucess: true };
    case "SET_ERROR_MAINSERVICE":
      return { ...state, createsucess: false };
    case "GET_CURRENT_SUBSERVICE":
      return { ...state, subservicedataall: action.payload };
    case "EDIT_CURRENT_SERVICE":
      return { ...state, editmainservice: action.payload ,editsucess:true};
      case "EDIT_SUB_SERVICE":
        return { ...state, editsubservice: action.payload ,editsucess:true};
      case "EDIT_ERROR_SERVICE":
        return { ...state, editsubservice: action.payload };
    case "DELETE_CURRENT_SERVICE":
      return { ...state, deletemainservice: action.payload };
    case "DELETE_SUB_SERVICE":
      return { ...state, deletesubervice: action.payload };

      case "GET_SUBSERVICE_BYID":
        return { ...state, getsubservicebyid: action.payload };
    default:
      return state;
  }
};
export default service;
