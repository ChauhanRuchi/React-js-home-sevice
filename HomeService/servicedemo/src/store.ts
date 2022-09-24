import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import rootreducer from "./store/Reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
