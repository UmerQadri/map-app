import { takeLatest, put, call } from "redux-saga/effects";
import { ADD_TASK } from "../actions/ActionTypes";

import { addTaskSucess, addTaskFailure } from "../actions/taskActions";

function getRequest(url, payload) {}

function postRequest(url, payload) {}

function* addTask(action) {
  try {
    const { payload, api, callback } = action;
    const response = yield call(postRequest, api, payload);
    if (response) {
      yield put(addTaskSucess(response.data));
      if (callback) {
        callback();
      }
    } else {
      console.log("error", response);
    }
  } catch (err) {
    yield put(addTaskFailure(err.msg || err.message));
    console.log("error", err.msg || err.message);
  }
}

export default function* root() {
  yield takeLatest(ADD_TASK, addTask); // signup request
}
