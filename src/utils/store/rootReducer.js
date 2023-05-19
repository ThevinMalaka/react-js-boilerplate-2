import { combineReducers } from "redux";

import * as homeReducers from "../../views/home/reducer";

const rootReducer = combineReducers({
  homeReducers: homeReducers.homeReducers,
});

export default rootReducer;
