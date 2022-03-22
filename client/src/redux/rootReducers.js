import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const rootReducers = combineReducers({
    sayac: counterSlice,
});

export default rootReducers;