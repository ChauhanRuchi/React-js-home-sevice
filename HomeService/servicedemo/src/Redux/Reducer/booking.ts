let initstate = {};

const booking = (state = initstate, action: any) => {
  switch (action.type) {
    case "SET_BOOKING":
      return { ...state, setbooking: action.payload };
    case 'GET_BOOINGDATA':
      return { ...state, getbooking: action.payload };
    case "GET_CITY_NAME":
      return { ...state, getcityname: action.payload };
    case "GET_AVAILABLE_TIME":
    return { ...state, gettime: action.payload };
    
    default:
      return state;
  }
};
export default booking;