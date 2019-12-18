import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
//import tempReducer from "../reduxStore/reducers/temp";

const appReducer = combineReducers({
  router: routerReducer
  //tempReducer
});

const rootReducer = (_state, action) => {
  let state = _state;
  // here we will reset the whole redux state when the user will logout
  // if (action.type === LOGOUT) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

//export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
