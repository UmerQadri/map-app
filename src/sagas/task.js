import { takeLatest, put, call } from "redux-saga/effects";
import { ADD_TASK, GET_TASKS } from "../actions/ActionTypes";

import { BASE_URL, TOKEN } from "../constants";

import {
  addTaskSucess,
  addTaskFailure,
  getTasksSucess,
  getTasksFailure,
} from "../actions/taskActions";

function getHeader() {
  return {
    Authorization: `Token ${TOKEN}`,
    "Content-Type": "application/json",
  };
}

function getRequest() {
  return fetch(BASE_URL, {
    method: "GET",
    headers: getHeader(),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

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
      yield put(addTaskSucess());
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

function* getTasks(action) {
  try {
    const { callback } = action;
    const response = yield call(getRequest);
    // console.log(response, "this is response");
    if (response.length !== 0) {
      yield put(getTasksSucess(response));
      if (callback) {
        callback();
      }
    } else {
      console.log("error", response);
    }
  } catch (err) {
    yield put(getTasksFailure(err.msg || err.message));
    console.log("error", err.msg || err.message);
  }
}

export default function* root() {
  yield takeLatest(ADD_TASK, addTask); // add task request request
  yield takeLatest(GET_TASKS, getTasks); // get tasks request
}
