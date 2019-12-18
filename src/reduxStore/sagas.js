import { fork, all } from "redux-saga/effects";
//import tempSaga from "../reduxStore/sagas/temp";

export default function* rootSaga() {
  yield all([
    //fork(tempSaga),
  ]);
}
