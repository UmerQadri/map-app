import { takeLatest, put, call } from "redux-saga/effects";
import { ADD_TASK } from "../actions/ActionTypes";

import { BASE_URL } from "../constants";

import { addTaskSucess, addTaskFailure } from "../actions/taskActions";

function getRequest(payload) {}

function postRequest(payload) {
  return fetch(BASE_URL, {
    body: payload,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

function* addTask(action) {
  try {
    const { payload, api, callback } = action;
    const response = yield call(postRequest, payload);
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
