import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import LoginReducer from "./reducer_login";

const rootReducer = combineReducers({
  login: LoginReducer,
  form: formReducer
});

export default rootReducer;
