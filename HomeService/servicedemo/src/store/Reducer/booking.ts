let initstate = {};

const booking = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_START_BOOKING":
      return { ...state,setbooking: action.payload ,createsucess:false};
    case "SET_BOOKING":
      return { ...state,setbooking: action.payload ,createsucess:true};
      case "SET_ERROR_BOOKING":
      return { ...state, setbooking: action.payload ,createfail:false};
    case 'GET_BOOINGDATA':
      return { ...state, getbooking: action.payload };
    case "GET_CITY_NAME":
      return { ...state, getcityname: action.payload };
    case "GET_AVAILABLE_TIME":
    return { ...state, gettime: action.payload };
    case "STATUS_UPDATE":
      return { ...state, statusupdate: action.payload ,status:true};
     case "STATUS_UPDATE_ERROR":
        return { ...state, statusupdate: action.payload ,status:true};
     case "GET_BOOKINGDATA_BYID":
          return { ...state, getbookingdatabyid: action.payload };
    case "CLEAR_SET_BOOKING":
      return { ...state,setbooking: action.payload ,createsucess:false};
    case "SET_CITY":
      return { ...state,setcity: action.payload ,createsucess:true};

    default:
      return state;
  }
};
export default booking;