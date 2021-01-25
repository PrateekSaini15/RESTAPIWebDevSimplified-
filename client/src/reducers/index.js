// This is the root reducer

import { combineReducers } from "redux";
import subscriberReducer from "./subscriberReducer";

export default combineReducers({
  subscriber: subscriberReducer,
});
