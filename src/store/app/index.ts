import { combineReducers } from "@reduxjs/toolkit";

import navigation from "./navigationSlice";

const appReducers = combineReducers({
  navigation,
});

export default appReducers;
