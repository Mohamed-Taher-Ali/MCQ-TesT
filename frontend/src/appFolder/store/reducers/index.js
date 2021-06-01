import {combineReducers} from "redux";

import question from "./question";
import user from "./user";


export default combineReducers({
    question,
    user
});