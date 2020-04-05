import { fork } from "redux-saga/effects";

import task from "./task";

export default function* root() {
  yield fork(task);
}
