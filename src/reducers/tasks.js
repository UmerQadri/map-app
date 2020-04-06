import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
} from "../actions/ActionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  isLoadingList: false,
  isFailure: false,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        isLoading: true,
        isFailure: false,
        error: "",
      };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isFailure: true,
        error: action.error,
      };

    case GET_TASKS:
      return {
        ...state,
        isLoadingList: true,
        isFailure: false,
        error: "",
      };

    case GET_TASKS_SUCCESS:
      return {
        ...state,
        isLoadingList: false,
        tasks: action.data,
      };

    case GET_TASKS_FAILURE:
      return {
        ...state,
        isLoadingList: false,
        isFailure: true,
        error: action.error,
      };

    default:
      return state;
  }
}
