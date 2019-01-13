import { combineReducers } from "redux";
import * as apiReducers from "./apiReducers";
const reducers = {
  api: combineReducers(apiReducers)
};

export default reducers;
