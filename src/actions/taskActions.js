import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
} from "./ActionTypes";

export const addTask = (payload, callback) => {
  return {
    type: ADD_TASK,
    payload,
    callback,
  };
};

export const addTaskSucess = () => {
  return {
    type: ADD_TASK_SUCCESS,
  };
};

export const addTaskFailure = (error) => {
  return {
    type: ADD_TASK_FAILURE,
    error,
  };
};

export const getTasks = () => {
  return {
    type: GET_TASKS,
  };
};

export const getTasksSucess = (tasks) => {
  return {
    type: GET_TASKS_SUCCESS,
    data: tasks,
  };
};

export const getTasksFailure = (error) => {
  return {
    type: GET_TASKS_FAILURE,
    error,
  };
};
