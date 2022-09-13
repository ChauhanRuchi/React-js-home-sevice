import signup from "./user";
import signin from "./user";
import service from "../Reducer/service";
import admin from "../Reducer/admin";
import booking from "../Reducer/booking";

import { combineReducers } from "redux";

export default combineReducers({ signup, signin, service, admin,booking });
