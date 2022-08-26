import signup from "../Reducer/signup";
import signin from "../Reducer/signup";
import service from "../Reducer/service";
import admin from "../Reducer/admin";

import { combineReducers } from "redux";

export default combineReducers({ signup, signin, service, admin });
