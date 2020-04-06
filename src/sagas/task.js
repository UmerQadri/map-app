import { takeLatest, put, call } from "redux-saga/effects";
import { ADD_TASK } from "../actions/ActionTypes";

import { BASE_URL, TOKEN } from "../constants";

import { addTaskSucess, addTaskFailure } from "../actions/taskActions";

function getHeader() {
  return {
    Authorization: `Token ${TOKEN}`,
    "Content-Type": "application/json",
  };
}

function getRequest(payload) {}

function postRequest(payload) {
  console.log(payload, "======paylaod");
  return fetch(BASE_URL, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

function* addTask(action) {
  try {
    const { payload, api, callback } = action;
    const response = yield call(postRequest, payload);
    console.log(response, "this is response");
    if (response.id !== "") {
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
