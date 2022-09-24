import signup from "./user";
import signin from "./user";
import service from "./service";
import admin from "./admin";
import booking from "./booking";

import { combineReducers } from "redux";

export default combineReducers({ signup, signin, service, admin,booking });
